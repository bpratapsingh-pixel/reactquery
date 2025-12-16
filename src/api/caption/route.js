import OpenAI from "openai";

export async function POST(req) {
  const { id } = await req.json();

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const prompt = `Write a short, realistic Instagram-style caption for photo number ${id}.`;

  const response = await openai.responses.create({
    model: "gpt-4o-mini",
    input: prompt,
  });

  return Response.json({
    caption: response.output_text,
  });
}
