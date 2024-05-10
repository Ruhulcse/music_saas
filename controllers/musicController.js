const asyncHandler = require("express-async-handler");
const axios = require("axios");
const Replicate = require("replicate");

module.exports.musicList = asyncHandler(async (req, res) => {
  try {
    const { prompt } = req.body;
    const replicate = new Replicate({
      auth: process.env.REPLICATE_API_TOKEN,
    });

    const output = await replicate.run(
      "meta/musicgen:671ac645ce5e552cc63a54a2bbff63fcf798043055d2dac5fc9e36a837eedcfb",
      {
        input: {
          top_k: 250,
          top_p: 0,
          prompt: prompt,
          duration: 33,
          temperature: 1,
          continuation: false,
          model_version: "stereo-large",
          output_format: "mp3",
          continuation_start: 0,
          multi_band_diffusion: false,
          normalization_strategy: "peak",
          classifier_free_guidance: 3,
        },
      }
    );
    console.log(output);
    res.json({
      error: false,
      message: "Successfully retrieved music",
      data: output,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: true,
      message: "Something went wrong!!",
      data: null,
    });
  }
});
