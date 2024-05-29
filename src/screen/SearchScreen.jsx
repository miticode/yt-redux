import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getVideosBySearch } from '../redux/actions/video.action'
import { Container } from 'react-bootstrap'
import VideoHorizontal from '../component/videoHorizonatal/VideoHorizonatal'

const SearchScreen = () => {
    const dispatch = useDispatch();
    const { query } = useParams();
  
    useEffect(() => {
      dispatch(getVideosBySearch(query));
    }, [query, dispatch]);
  
    const { videos, loading } = useSelector((state) => state.searchedVideos);
  
    return (
      <Container>
        {!loading ? (
          videos?.map((video) => (
            <VideoHorizontal video={video} key={video.id.videoId} searchScreen />
          ))
        ) : (
          <h1>Loading.............</h1>
        )}
      </Container>
    );
  };
  
  export default SearchScreen;