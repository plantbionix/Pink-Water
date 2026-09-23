const WEB3FORMS_ACCESS_KEY = process.env.WEB3FORMS_ACCESS_KEY;
const validSegments = new Set(["diaspora", "wellness", "horeca", "other"]);
const segmentLabel: Record<string, string> = {
  diaspora: "Misses this from home",
  wellness: "Curious, never tried it",
  horeca: "Runs a café, resort or restaurant",
  other: "Something else",
};

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export async function POST(request: Request) {
  const { name, email, mobile, address, landmark, city, pincode, segment } =
    await request.json();

  if (!isNonEmptyString(name)) {
    return Response.json({ error: "Name is required" }, { status: 400 });
  }
  if (typeof email !== "string" || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return Response.json({ error: "Invalid email" }, { status: 400 });
  }
  if (typeof mobile !== "string" || !/^[0-9+ ]{10,15}$/.test(mobile)) {
    return Response.json({ error: "Invalid mobile number" }, { status: 400 });
  }
  if (!isNonEmptyString(address)) {
    return Response.json({ error: "Address is required" }, { status: 400 });
  }
  if (!isNonEmptyString(city)) {
    return Response.json({ error: "City is required" }, { status: 400 });
  }
  if (typeof pincode !== "string" || !/^[0-9]{6}$/.test(pincode)) {
    return Response.json({ error: "Invalid pincode" }, { status: 400 });
  }

  if (!WEB3FORMS_ACCESS_KEY) {
    return Response.json({ error: "Waitlist not configured" }, { status: 503 });
  }

  const upstream = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `Plant Bionix waitlist — ${name}`,
      from_name: "Plant Bionix waitlist",
      replyto: email,
      Name: name,
      Email: email,
      Mobile: mobile,
      Address: address,
      Landmark: isNonEmptyString(landmark) ? landmark : "—",
      City: city,
      Pincode: pincode,
      "Reason for joining": validSegments.has(segment)
        ? segmentLabel[segment]
        : "—",
    }),
  });

  if (!upstream.ok) {
    return Response.json({ error: "Upstream rejected" }, { status: 502 });
  }

  const result = await upstream.json();
  if (!result.success) {
    return Response.json({ error: "Send failed" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
