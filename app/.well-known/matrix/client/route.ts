export const dynamic = "force-static";

export function GET() {
  return Response.json({
    "m.homeserver": {
      base_url: "https://msg.404oops.com",
    },
  });
}