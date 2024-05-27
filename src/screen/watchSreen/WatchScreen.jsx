import React, { useEffect } from "react";
import "./watchSreen.scss";
import { Col, Row } from "react-bootstrap";
import VideoMetaData from "../../component/videoMetaData/VideoMetaData";
import VideoHorizonatal from "../../component/videoHorizonatal/VideoHorizonatal";
import Comments from "../../component/comment/Comments";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getRelatedVideos,
  getVideoById,
} from "../../redux/actions/video.action";
const WatchScreen = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideoById(id));

    dispatch(getRelatedVideos(id));
  }, [dispatch, id]);

  const {videos,loading:relatedVideosLoading} = useSelector(state => state.relatedVideos)
   


  const { video, loading } = useSelector(state => state.selectedVideo)
  return (
    <Row>
      <Col lg={8}>
        <div className="watchScreen__player">
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            frameborder="0"
            title={video?.snippet?.title}
            allowFullScreen
            width="100%"
            height="100%"
          ></iframe>
        </div>
        {!loading ? (
          <VideoMetaData video={video} videoId={id} />
        ) : (
          <h6>Loading...</h6> 
        )}

        <Comments />
      </Col>
      <Col lg={4}>
        {!loading &&
          videos
            ?.filter(video => video.snippet)
            .map((video) => (
              <VideoHorizonatal video={video} key={video.id.videoId} />
            ))}
      </Col>
    </Row>
  );
};

export default WatchScreen;
