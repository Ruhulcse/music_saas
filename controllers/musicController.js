const axios = require("axios");
const asyncHandler = require("express-async-handler"); // Assuming you are using express-async-handler for error handling

module.exports.musicList = asyncHandler(async (req, res) => {
  try {
    console.log("API called");
    const { prompt } = req.body;
    const API_KEY = process.env.APIKEY; // Ensure your API key is stored in environment variables

    // console.log("API key", API_KEY);

    // // Set up the request body and headers
    // const body = {
    //   title: "generated music",
    //   tags: "test",
    //   prompt,
    // };
    // const headers = {
    //   "Content-Type": "application/json",
    //   "api-key": API_KEY, // Adjusted to match the correct header parameter name
    // };

    // // Make the initial API call
    // const songResponse = await axios.post(
    //   "https://api.sunoaiapi.com/api/v1/gateway/generate/music",
    //   body,
    //   { headers }
    // );

    // console.log("Song response");
    // console.log(songResponse.data.data);

    // const songList = songResponse.data.data;

    // // Function to get detailed song information using song_id
    // const getSongDetails = async (songId) => {
    //   try {
    //     const songDetailResponse = await axios.get(
    //       `https://api.sunoaiapi.com/api/v1/gateway/query?ids=${songId}`,
    //       { headers }
    //     );
    //     // console.log("song details ", songDetailResponse.data);
    //     return songDetailResponse.data;
    //   } catch (error) {
    //     console.error(
    //       `Failed to get details for song_id: ${songId}`,
    //       error.message
    //     );
    //     return null;
    //   }
    // };

    // // Function to poll song details until status is not 'queued'
    // let time = 1;
    // const pollSongDetails = async (song) => {
    //   while (true) {
    //     const details = await getSongDetails(song.song_id);
    //     console.log("details is ", details);
    //     if (details && details[0].status === "complete") {
    //       return { details: details[0] };
    //     }
    //     console.log(
    //       `Status for song_id ${song.song_id} is ${
    //         details[0].status
    //       }. ${time++} time Retrying in 20 seconds...`
    //     );
    //     await new Promise((resolve) => setTimeout(resolve, 20000)); // Wait for 40 seconds
    //   }
    // };

    // // Poll each song in parallel and stop when any song is ready
    // const detailedSongList = await Promise.all(
    //   songList.map((song) => pollSongDetails(song))
    // );
    // console.log("detailssonglist ", detailedSongList);
    // const finalsong = [];

    // detailedSongList.map((item) => {
    //   finalsong.push({
    //     ...item.details,
    //   });
    // });
    // const readySong = detailedSongList.find(
    //   (song) => song.details.status === "complete"
    // );
    // if (readySong) {
    //   console.log("ready song ", readySong);
    //   console.log("final song", finalsong);
    //   res.json({
    //     error: false,
    //     message: "Successfully retrieved music",
    //     data: finalsong,
    //   });
    // } else {
    //   res.status(500).json({
    //     error: true,
    //     message: "No songs are ready yet!",
    //     data: null,
    //   });
    // }
    res.json({
      error: false,
      message: "Successfully retrieved music",
      data: [
        {
          id: "f91f5f00-4ca4-4654-ae3c-4a15d8d1f030",
          video_url:
            "https://cdn1.suno.ai/f91f5f00-4ca4-4654-ae3c-4a15d8d1f030.mp4",
          audio_url:
            "https://cdn1.suno.ai/f91f5f00-4ca4-4654-ae3c-4a15d8d1f030.mp3",
          image_url:
            "https://cdn1.suno.ai/image_f91f5f00-4ca4-4654-ae3c-4a15d8d1f030.png",
          image_large_url:
            "https://cdn1.suno.ai/image_large_f91f5f00-4ca4-4654-ae3c-4a15d8d1f030.png",
          is_video_pending: true,
          major_model_version: "v3",
          model_name: "chirp-v3",
          is_liked: false,
          user_id: "4f6f3d81-825d-4c6e-8ef1-ca05d57b9033",
          display_name: "VigorousHarmonicas510",
          handle: "vigorousharmonicas510",
          is_handle_updated: false,
          is_trashed: false,
          reaction: null,
          created_at: "2024-05-17T21:58:31.978Z",
          status: "complete",
          title: "generated music",
          play_count: 0,
          upvote_count: 0,
          is_public: false,
          meta_data: {
            tags: "test",
            prompt: "love music",
            gpt_description_prompt: null,
            audio_prompt_id: null,
            history: null,
            concat_history: null,
            type: "gen",
            duration: 52.28,
            refund_credits: false,
            stream: true,
            error_type: null,
            error_message: null,
          },
        },
        {
          id: "443ba458-e5cd-4706-86fb-28bdb5765ed7",
          video_url:
            "https://cdn1.suno.ai/443ba458-e5cd-4706-86fb-28bdb5765ed7.mp4",
          audio_url:
            "https://cdn1.suno.ai/443ba458-e5cd-4706-86fb-28bdb5765ed7.mp3",
          image_url:
            "https://cdn1.suno.ai/image_443ba458-e5cd-4706-86fb-28bdb5765ed7.png",
          image_large_url:
            "https://cdn1.suno.ai/image_large_443ba458-e5cd-4706-86fb-28bdb5765ed7.png",
          is_video_pending: true,
          major_model_version: "v3",
          model_name: "chirp-v3",
          is_liked: false,
          user_id: "4f6f3d81-825d-4c6e-8ef1-ca05d57b9033",
          display_name: "VigorousHarmonicas510",
          handle: "vigorousharmonicas510",
          is_handle_updated: false,
          is_trashed: false,
          reaction: null,
          created_at: "2024-05-17T21:58:31.978Z",
          status: "complete",
          title: "generated music",
          play_count: 0,
          upvote_count: 0,
          is_public: false,
          meta_data: {
            tags: "test",
            prompt: "love music",
            gpt_description_prompt: null,
            audio_prompt_id: null,
            history: null,
            concat_history: null,
            type: "gen",
            duration: 81.96,
            refund_credits: false,
            stream: true,
            error_type: null,
            error_message: null,
          },
        },
      ],
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
// module.exports.musicList = asyncHandler(async (req, res) => {
//   try {
//     console.log("api called ");
//     const { prompt } = req.body;
//     const API_KEY = process.env.APIKEY; // Ensure your API key is stored in environment variables

//     // Set up the request body and headers
//     const body = {
//       gpt_description_prompt: prompt,
//       make_instrumental: true,
//       prompt,
//     };
//     const headers = {
//       "Content-Type": "application/json",
//       "api-key": API_KEY, // Adjusted to match the correct header parameter name
//     };

//     // Make the API call
//     const songResponse = await axios.post(
//       "https://api.sunoaiapi.com/api/v1/gateway/generate/chatgpt",
//       body,
//       { headers }
//     );
//     const songList = songResponse.data.data;
//     res.json({
//       error: false,
//       message: "Successfully retrieved music",
//       data: songList,
//     });
//   } catch (error) {
//     console.error("API call failed:", error.message);
//     res.status(500).json({
//       error: true,
//       message: "Something went wrong!!",
//       data: null,
//     });
//   }
// });

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
