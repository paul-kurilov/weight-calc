// require('dotenv').config();
import { Configuration, OpenAIApi } from "openai";
// import { OPENAI_API_KEY } from "process.env"

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
  // apiKey: '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',
});
const openai = new OpenAIApi(configuration); 
 
export const askAI = async (question) => {
  try {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: question }],
    });
    return response.data.choices[0].message.content;  // Response will be at: response.data.choices[0].message
  } catch (error) {
    console.error("Error when requesting OpenAI API:", error);
    throw error;
  }
}


