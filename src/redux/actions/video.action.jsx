import request from '../../api';
import { HOME_VIDEOS_FAIL, HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS, SEARCHED_VIDEO_FAIL, SEARCHED_VIDEO_REQUEST, SEARCHED_VIDEO_SUCCESS, SELECTED_VIDEO_FAIL, SELECTED_VIDEO_REQUEST, SELECTED_VIDEO_SUCCESS } from "../actionType";

// Hằng số
const API_URL = '/videos';
const SEARCH_API_URL = '/search';
const SNIPPET_PART = 'snippet';
const MAX_RESULTS = 25;

export const getPopularVideos = () => async (dispatch, getState) => {
  try {
    dispatch({ type: HOME_VIDEOS_REQUEST });

    const { data } = await request(API_URL, {
      params: {
        part: `${SNIPPET_PART},contentDetails,statistics`,
        chart: 'mostPopular',
        regionCode: 'VN',
        maxResults: MAX_RESULTS,
        pageToken: getState().homeVideos.nextPageToken,
      },
    });

    dispatch({
      type: HOME_VIDEOS_SUCCESS,
      payload: {
        videos: data.items,
        nextPageToken: data.nextPageToken,
        category: 'All',
      },
    });
  } catch (error) {
    console.error("Error fetching popular videos:", error);
    dispatch({
      type: HOME_VIDEOS_FAIL,
      payload: error.message,
    });
  }
};

export const getVideosByCategory = (keyword) => async (dispatch, getState) => {
  try {
    dispatch({ type: HOME_VIDEOS_REQUEST });

    const { data } = await request(SEARCH_API_URL, {
      params: {
        part: SNIPPET_PART,
        maxResults: MAX_RESULTS,
        pageToken: getState().homeVideos.nextPageToken,
        q: keyword,
        type: 'video',
      },
    });

    dispatch({
      type: HOME_VIDEOS_SUCCESS,
      payload: {
        videos: data.items,
        nextPageToken: data.nextPageToken,
        category: keyword,
      },
    });
  } catch (error) {
    console.error("Error fetching videos by category:", error);
    dispatch({
      type: HOME_VIDEOS_FAIL,
      payload: error.message,
    });
  }
};

export const getVideoById = (id) => async (dispatch) => {
  try {
    dispatch({ type: SELECTED_VIDEO_REQUEST });

    const { data } = await request(API_URL, {
      params: {
        part: `${SNIPPET_PART},statistics`,
        id: id,
      },
    });

    dispatch({
      type: SELECTED_VIDEO_SUCCESS,
      payload: data.items[0],
    });
  } catch (error) {
    console.error("Error fetching video by ID:", error);
    dispatch({
      type: SELECTED_VIDEO_FAIL,
      payload: error.message,
    });
  }
};

export const getVideosBySearch = (keyword) => async (dispatch) => {
  try {
    dispatch({ type: SEARCHED_VIDEO_REQUEST });

    const { data } = await request(SEARCH_API_URL, {
      params: {
        part: SNIPPET_PART,
        maxResults: MAX_RESULTS,
        q: keyword,
        type: 'video,channel',
      },
    });

    dispatch({
      type: SEARCHED_VIDEO_SUCCESS,
      payload: data.items,
    });
  } catch (error) {
    console.error("Error fetching videos by search:", error);
    dispatch({
      type: SEARCHED_VIDEO_FAIL,
      payload: error.message,
    });
  }
};