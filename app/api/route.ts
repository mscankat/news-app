import { NextResponse } from "next/server";
import Model from "@/models/model";
import connectMongo from "@/utils/connectMongo";
export async function GET(request: Request) {
  await connectMongo();
  const data = await Model.aggregate([
    {
      $match: { category: "breaking" },
    },
  ])
    .sort({ date: -1 })
    .skip(0)
    .limit(parseInt("50"));
  let response = NextResponse.json(data, { status: 200 });
  //   response.cookies.set("show-banner", "false");

  return response;
}

export async function HEAD(request: Request) {}

export async function POST(request: Request) {}

export async function PUT(request: Request) {}

export async function DELETE(request: Request) {}

export async function PATCH(request: Request) {}

// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
