import { useEffect, useState } from "react";
import request from "../../api";
import moment from "moment";
import { Col, Row } from "react-bootstrap";
import { AiFillEye } from "react-icons/ai";
import numeral from "numeral";
import { useNavigate } from "react-router-dom";

const VideoHorizontal = ({ video = {}, searchScreen }) => {
  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      description,
      title,
      publishedAt,
      thumbnails,
    } = {},
  } = video;

  const isVideo = id && id.kind === "youtube#video";

  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelIcon, setChannelIcon] = useState(null);

  useEffect(() => {
    const getVideoDetails = async () => {
      if (id?.videoId) {
        try {
          const {
            data: { items },
          } = await request("/videos", {
            params: {
              part: "contentDetails,statistics",
              id: id.videoId,
            },
          });
          if (items && items.length > 0) {
            setDuration(items[0].contentDetails.duration);
            setViews(items[0].statistics.viewCount);
          }
        } catch (error) {
          console.error("Error fetching video details:", error);
        }
      }
    };
    getVideoDetails();
  }, [id?.videoId]);

  useEffect(() => {
    const getChannelIcon = async () => {
      if (channelId) {
        try {
          const {
            data: { items },
          } = await request("/channels", {
            params: {
              part: "snippet",
              id: channelId,
            },
          });
          if (items && items.length > 0) {
            setChannelIcon(items[0].snippet.thumbnails.default.url);
          }
        } catch (error) {
          console.error("Error fetching channel icon:", error);
        }
      }
    };
    getChannelIcon();
  }, [channelId]);

  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

  const history = useNavigate();
  const handleClick = () => {
    isVideo
      ? history(`/watch/${id.videoId}`)
      : history(`/channel/${id.channelId}`);
  };

  if (!thumbnails?.medium) {
    return null;
  }

  const thumbnail = !isVideo && "videoHorizontal__thumbnail-channel";

  return (
    <Row
      className="videoHorizontal m-1 py-2 align-items-center"
      onClick={handleClick}
    >
      <Col xs={6} md={searchScreen ? 4 : 6} className="videoHorizontal__left">
        <div className="videoHorizontal__thumbnail-wrapper">
          <img
            src={thumbnails.medium.url}
            alt=""
            className={`videoHorizontal__thumbnail ${thumbnail}`}
            wrapperClassName="videoHorizontal__thumbnail-wrapper"
          />
          {isVideo && (
            <span className="videoHorizontal__duration">{_duration}</span>
          )}
        </div>
      </Col>
      <Col
        xs={6}
        md={searchScreen ? 8 : 6}
        className="videoHorizontal__right p-0"
      >
        <p className="videoHorizontal__title mb-1">{title}</p>

        {isVideo && (
          <div className="videoHorizontal__details">
            <AiFillEye /> {views ? numeral(views).format("0.a") : "N/A"} views •{" "}
            {moment(publishedAt).fromNow()}
          </div>
        )}

        {isVideo && <p className="mt-1">{description}</p>}

        <div className="videoHorizontal__channel d-flex align-items-center my-1">
          {isVideo && <img src={channelIcon?.url} />}
          <p className="mb-0">{channelTitle}</p>
        </div>
      </Col>
    </Row>
  );
};

export default VideoHorizontal;
