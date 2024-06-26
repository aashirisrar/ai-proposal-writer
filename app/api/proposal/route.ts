import { NextResponse } from "next/server";
import { openai } from "@/lib/openai";

// code to instruct for specific response
const instructionMessage = {
  role: "system",
  content:
    "You are a proposal writer for upwork. Write the best proposal that will generate leads from clients.",
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { messages } = body;

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [instructionMessage, ...messages],
    });

    return NextResponse.json(response.choices[0].message);
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
