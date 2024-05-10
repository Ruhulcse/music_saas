const axios = require("axios");
const asyncHandler = require("express-async-handler"); // Assuming you are using express-async-handler for error handling

module.exports.musicList = asyncHandler(async (req, res) => {
  try {
    const { prompt } = req.body;
    const API_KEY = process.env.APIKEY; // Ensure your API key is stored in environment variables

    // Set up the request body and headers
    const body = {
      gpt_description_prompt: prompt,
      make_instrumental: true,
      prompt,
    };
    const headers = {
      "Content-Type": "application/json",
      "api-key": API_KEY, // Adjusted to match the correct header parameter name
    };

    // Make the API call
    const songResponse = await axios.post(
      "https://api.sunoaiapi.com/api/v1/gateway/generate/chatgpt",
      body,
      { headers }
    );
    const songList = songResponse.data.data;
    res.json({
      error: false,
      message: "Successfully retrieved music",
      data: songList,
    });
  } catch (error) {
    console.error("API call failed:", error.message);
    res.status(500).json({
      error: true,
      message: "Something went wrong!!",
      data: null,
    });
  }
});

module.exports.generateMusic = asyncHandler(async (req, res) => {
  console.log("api called ");
  try {
    const { songId } = req.body;
    const API_KEY = process.env.APIKEY; // Ensure your API key is stored in environment variables

    const headers = {
      "Content-Type": "application/json",
      "api-key": API_KEY, // Adjusted to match the correct header parameter name
    };

    const response = await axios.get(
      `https://api.sunoaiapi.com/api/v1/gateway/feed/${songId}`,
      { headers }
    );
    console.log("response data ", response.data);
    // Process the API response
    if (response.data && response.data.code === 0) {
      res.json({
        error: false,
        message: "Successfully retrieved music",
        data: response.data.data,
      });
    } else {
      throw new Error("Failed to generate music");
    }
  } catch (error) {
    console.error("API call failed:", error.message);
    res.status(500).json({
      error: true,
      message: "Something went wrong!!",
      data: null,
    });
  }
});
