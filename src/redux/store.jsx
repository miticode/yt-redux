import { createStore, applyMiddleware, combineReducers } from "redux";
import  {thunk}  from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { homeVideosReducer, searchedVideosReducer} from "./reducers/video.reducer";
import { selectedVideoReducer } from "./reducers/video.reducer";
import {channelDetailsReducer} from'./reducers/channel.reducer'

const rootReducer =combineReducers({
   homeVideos: homeVideosReducer,
   selectedVideo: selectedVideoReducer,
   channelDetails:channelDetailsReducer,
   searchedVideos:searchedVideosReducer
   
})

const store = createStore(
rootReducer,
{},
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;