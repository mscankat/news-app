import { NextResponse } from "next/server";
import Model from "@/models/model";
import connectMongo from "@/utils/connectMongo";

export async function GET(
  request: Request,
  {
    params,
  }: { params: { skip: string; category: string; desiredAmount: string } }
) {
  const skip = parseInt(params.skip);
  const category = params.category;
  const desiredAmount = params.desiredAmount;
  console.log(request.url);
  let response;
  try {
    await connectMongo();
    const data = await Model.aggregate([
      {
        $match: { category: category },
      },
    ])
      .sort({ date: -1 })
      .skip(skip)
      .limit(parseInt(desiredAmount));
    response = NextResponse.json(data, {
      status: 200,
      headers: { "Access-Control-Allow-Origin": "*" },
    });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
  return response;
}
