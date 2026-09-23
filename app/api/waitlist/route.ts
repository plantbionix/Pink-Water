const endpoint = process.env.WAITLIST_ENDPOINT;
const validSegments = new Set(["diaspora", "wellness", "horeca", "other"]);

export async function POST(request: Request) {
  const { email, segment } = await request.json();

  if (typeof email !== "string" || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return Response.json({ error: "Invalid email" }, { status: 400 });
  }

  if (!endpoint) {
    return Response.json({ error: "Waitlist not configured" }, { status: 503 });
  }

  const upstream = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      email,
      segment: validSegments.has(segment) ? segment : undefined,
      source: "plantbionix.com",
    }),
  });

  if (!upstream.ok) {
    return Response.json({ error: "Upstream rejected" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
