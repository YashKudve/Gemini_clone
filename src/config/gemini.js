import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai";
  
  const apiKey = import.meta.env.VITE_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run(prompt) {
    const chatSession = model.startChat({
      generationConfig,
      history: [
      ],
    });
  
    const result = await chatSession.sendMessage(prompt);
    console.log(result.response.text());
    return result.response.text()
  }

//   async function run(prompt) {
//     const chatSession = model.startChat({
//         generationConfig,
//         history: [],
//     });

//     try {
//         const result = await chatSession.sendMessage(prompt);

//         if (result && result.response && typeof result.response.text === 'function') {
//             console.log(await result.response.text());
//         } else if (result && result.response && result.response.text) {
//             console.log(result.response.text);
//         } else {
//             console.log('Unexpected response structure:', result);
//         }
//     } catch (error) {
//         console.error('Error in run function:', error);
//     }
// }

  
  export default run;