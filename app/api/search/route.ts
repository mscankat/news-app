import { NextResponse } from "next/server";
import Model from "@/models/model";
import connectMongo from "@/utils/connectMongo";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q");
  let response;
  try {
    await connectMongo();
    if (query) {
      const data = await Model.aggregate([
        {
          $search: {
            index: "turkish",
            autocomplete: {
              query: query,
              path: "description",
            },
          },
        },
      ]);
      response = NextResponse.json(data, { status: 200 });
    }
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
  return response;
}
