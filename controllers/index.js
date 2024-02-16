const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require("dotenv");

dotenv.config();

// GoogleGenerativeAI required config
const configuration = new GoogleGenerativeAI(process.env.API_KEY);

// Model initialization
const modelId = "gemini-pro";
const generationConfig = {
  stopSequences: ["red"],
  maxOutputTokens: 500,
  temperature: 0.9,
  topP: 0.1,
  topK: 16,
};

const model = configuration.getGenerativeModel({
  model: modelId,
  generationConfig,
});

const history = [];

const generateResponse = async (req, res) => {
  try {
    const { prompt } = req.body;

    const result = await model.generateContent(prompt);
    const response = await result.response.text();
    //   console.log(response);

    history.push(response);
    //   console.log(history);

    res.send({ response });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  generateResponse,
  history,
};
