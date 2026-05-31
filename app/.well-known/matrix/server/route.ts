export const dynamic = "force-static";

export function GET() {
  return Response.json({
    "m.server": "msg.404oops.com:443",
  });
}