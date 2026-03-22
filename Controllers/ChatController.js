import { getChatResponse } from "../services/groqService.js";

export const chatHandler = async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }
    const reply = await getChatResponse(message);
    res.json({ reply });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "Something went wrong" });
  }
};