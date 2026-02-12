import { NextResponse } from "next/server";

export function errorHandler(error: unknown): NextResponse<HandledError> {
  console.error(error); 

  return NextResponse.json(
    {
      message: "An unexpected error occurred.",
      status: 500,
    },
    { status: 500 }
  );
}
