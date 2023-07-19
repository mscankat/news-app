import { NextResponse } from "next/server";

export async function GET(request: Request) {
  let response = NextResponse.json({ hello: "hello" }, { status: 200 });
  response.cookies.set("show-banner", "false");
  return response;
}

export async function HEAD(request: Request) {}

export async function POST(request: Request) {}

export async function PUT(request: Request) {}

export async function DELETE(request: Request) {}

export async function PATCH(request: Request) {}

// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
