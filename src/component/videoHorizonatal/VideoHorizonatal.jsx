import React, { useEffect, useState } from "react";
import "./VideoHorizonatal.scss";

import { AiFillEye } from "react-icons/ai";
import request from "../../api";
import moment from "moment";
import numeral from "numeral";
import { Col, Row } from "react-bootstrap";

const VideoHorizonatal = ({ video }) => {
  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      description,
      title,
      publishedAt,
      thumbnails:{medium},
    },
  } = video;
  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelIcon, setChannelIcon] = useState(null);

  useEffect(() => {
    const get_video_details = async () => {
      const {
        data: { items },
      } = await request("/videos", {
        params: {
          part: "contentDetails,statistics",
          id: id.videoId,
        },
      });
      setDuration(items[0].contentDetails.duration);
      setViews(items[0].statistics.viewCount);
    };
    get_video_details();
  }, [id]);

  useEffect(() => {
    const get_channel_icon = async () => {
      const {
        data: { items },
      } = await request("/channels", {
        params: {
          part: "snippet",
          id: channelId,
        },
      });
      setChannelIcon(items[0].snippet.thumbnails.default);
    };
    get_channel_icon();
  }, [channelId]);

  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");
  return (
    <Row className="videoHorizontal m-1 py-2 align-items-center">
      <Col xs={6} md={4} className="videoHorizontal__left">
        <img
          src={medium.url}
          alt=""
          effect='blur'
          className="videoHorizontal__thumbnail"
          wrapperClassName="videoHorizontal__thumbnail-wrapper"
        />
       <span className='videoHorizontal__duration'>{_duration}</span>
      </Col>
      <Col xs={6} md={8} className="videoHorizontal__right p-0">
        <p className="videoHorizontal__title mb-1">
          {title}
        </p>
        <div className="videoHorizontal__details">
          <AiFillEye /> {numeral(views).format("0.a")} views •
          {moment(publishedAt).fromNow()}
        </div>
        <div className="videoHorizontal__channel d-flex align-items-center my-1">
          {/* <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fcc363d8-dbb8-4004-999f-28a92a7de8d0/depg1h0-28e48d84-7090-4d88-825c-1a0f8055d085.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ZjYzM2M2Q4LWRiYjgtNDAwNC05OTlmLTI4YTkyYTdkZThkMFwvZGVwZzFoMC0yOGU0OGQ4NC03MDkwLTRkODgtODI1Yy0xYTBmODA1NWQwODUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.u3ODB7kmv6AAgrGBIeZaxRDOcq1Uyw2gEEOKMOxBpQA"
          alt=""
         
        /> */}
          <p>{channelTitle}</p>
        </div>
      </Col>
    </Row>
  );
};

export default VideoHorizonatal;
