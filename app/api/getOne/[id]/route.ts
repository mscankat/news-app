import { NextResponse } from "next/server";
import Model from "@/models/model";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  let response;
  try {
    const data = await Model.findById(id);
    response = NextResponse.json(data, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
  return response;
}
