import React from "react";
import "./VideoMetaData.scss";
import numeral from "numeral";
import moment from "moment";
import { MdThumbUp, MdThumbDown } from "react-icons/md";
import ShowMoreText from "react-show-more-text";
const VideoMetaData = () => {
  return (
    <div className="videoMetaData py-2">
      <div className="videoMetaData__top">
        <h5>video title</h5>
        <div className="d-flex justify-content-between align-items-center py-1">
          <span>
            {numeral(10000).format("0.a")} views •
            {moment("2020-06-6").fromNow()}
          </span>

          <div>
            <span className="mr-3">
              <MdThumbUp size={26} />
              {numeral(10000).format("0.a")}
            </span>
            <span className="mr-3">
              <MdThumbDown size={26} />
              {numeral(10000).format("0.a")}
            </span>
          </div>
        </div>
      </div>
      <div className="videoMetaData__channel d-flex justify-content-between align-items-center my-2 py-3">
        <div className="d-flex">
          <img
            src="https://avatarfiles.alphacoders.com/221/221856.jpg"
            alt=""
            className="rounder-circle mr-3"
          />
          <div className="d-flex flex-column">
            <span>MixiGaming</span>
            <span> {numeral(10000).format("0.a")} Subscribers</span>
          </div>
        </div>
        <button className="btn border-0 p-2 m-2">Subsribe</button>
      </div>
      <div className="videoMetaData__description">
        <ShowMoreText
          lines={3}
          more="SHOW MORE"
          less="SHOW LESS"
          anchorClass="showMoreText"
          expanded={false}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          doloribus recusandae consequuntur exercitationem dolore eaque nemo? At
          voluptate laudantium autem deleniti beatae, saepe necessitatibus quo
          doloribus excepturi sint possimus dolores enim quis eaque nam quasi,
          reiciendis commodi quos aliquid perferendis nesciunt eius repellendus.
          Ipsum provident omnis, odit magnam porro reprehenderit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          doloribus recusandae consequuntur exercitationem dolore eaque nemo? At
          voluptate laudantium autem deleniti beatae, saepe necessitatibus quo
          doloribus excepturi sint possimus dolores enim quis eaque nam quasi,
          reiciendis commodi quos aliquid perferendis nesciunt eius repellendus.
          Ipsum provident omnis, odit magnam porro reprehenderit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          doloribus recusandae consequuntur exercitationem dolore eaque nemo? At
          voluptate laudantium autem deleniti beatae, saepe necessitatibus quo
          doloribus excepturi sint possimus dolores enim quis eaque nam quasi,
          reiciendis commodi quos aliquid perferendis nesciunt eius repellendus.
          Ipsum provident omnis, odit magnam porro reprehenderit.
        </ShowMoreText>
      </div>
    </div>
  );
};

export default VideoMetaData;
