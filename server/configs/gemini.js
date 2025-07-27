import { GoogleGenerativeAI } from "@google/generative-ai";

const ai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function main(userPrompt) {
  const model = ai.getGenerativeModel({ model: "gemini-2.5-flash" }); // Or "gemini-1.5-pro"

  const result = await model.generateContent(
    userPrompt + ' Generate a blog content for this topic in simple text format'
  );

  const response = await result.response;
  return response.text(); // Don't forget to call .text()
}

export default main;
