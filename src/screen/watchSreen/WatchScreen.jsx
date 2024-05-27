import React from "react";
import "./watchSreen.scss";
import { Col, Row } from "react-bootstrap";
import VideoMetaData from "../../component/videoMetaData/VideoMetaData";
import VideoHorizonatal from "../../component/videoHorizonatal/VideoHorizonatal";
import Comments from "../../component/comment/Comments";
const WatchScreen = () => {
  return (
    <Row>
      <Col lg={8}>
        <div className="watchScreen__player">
          <iframe
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
            frameborder="0"
            title="MY VIDEO"
            allowFullScreen
            width="100%"
            height="100%"
          ></iframe>
        </div>
        <VideoMetaData />
        <Comments/>
      </Col>
      <Col lg={4}>
        {[...Array(10)].map(() => (
          <VideoHorizonatal />
        ))}
      </Col>
    </Row>
  );
};

export default WatchScreen;
