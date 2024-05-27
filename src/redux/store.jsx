import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { homeVideosReducer } from "./reducers/video.reducer";

const rootReducer =combineReducers({
   homeVideos: homeVideosReducer,
})

const store = createStore(
rootReducer,
{},
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;