import dotenv from "dotenv";
import Groq from "groq-sdk";

dotenv.config({ path: "./.env" });

console.log("API KEY:", process.env.GROQ_API_KEY); // debug

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export const getChatResponse = async (message) => {
  const completion = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
      {
        role: "system",
        content: "You are a DSA Interview Coach",
      },
      {
        role: "user",
        content: message,
      },
    ],
  });

  return completion.choices[0].message.content;
};