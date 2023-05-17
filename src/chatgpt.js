// import config from "config";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  // apiKey: process.env.OPENAI_API_KEY,
  // apiKey: config.get('OPENAI_KEY'),
  apiKey: '',
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



export const adviceAI = async (request) => {
  return await askAI(request)
}

