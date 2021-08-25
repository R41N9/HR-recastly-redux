import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {

  //TODO:  Write an asynchronous action to handle a video search!
  return {
  searchYouTube({YOUTUBE_API_KEY, q, 5}, applyMiddleware(thunkMiddleware))
  }
};

export default handleVideoSearch;
