import React from "react";
import "./VideoHorizonatal.scss";

import { AiFillEye } from "react-icons/ai";
import request from "../../api";
import moment from "moment";
import numeral from "numeral";
import { Col, Row } from "react-bootstrap";

const VideoHorizonatal = () => {
  const seconds = moment.duration("100").asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");
  return (
    <Row className="videoHorizontal m-1 py-2 align-items-center">
      <Col xs={6} md={4} className="videoHorizontal__left">
        <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fcc363d8-dbb8-4004-999f-28a92a7de8d0/depg1h0-28e48d84-7090-4d88-825c-1a0f8055d085.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ZjYzM2M2Q4LWRiYjgtNDAwNC05OTlmLTI4YTkyYTdkZThkMFwvZGVwZzFoMC0yOGU0OGQ4NC03MDkwLTRkODgtODI1Yy0xYTBmODA1NWQwODUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.u3ODB7kmv6AAgrGBIeZaxRDOcq1Uyw2gEEOKMOxBpQA"
          alt=""
          className="videoHorizontal__thumbnail"
          wrapperClassName="videoHorizontal__thumbnail-wrapper"
        />
        <span className="video__top__duration">{_duration}</span>
      </Col>
      <Col xs={6} md={8} className="videoHorizontal__right p-0">
        <p className="videoHorizontal__title mb-1">
          Be a full stack developer in 1 month
        </p>
        <div className="videoHorizontal__details">
        
          <AiFillEye /> {numeral(10000000).format("0.a")} views •
        
        {moment('2020-06-09').fromNow()}

        </div>
        <div className="videoHorizontal__channel d-flex align-items-center my-1">
        {/* <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fcc363d8-dbb8-4004-999f-28a92a7de8d0/depg1h0-28e48d84-7090-4d88-825c-1a0f8055d085.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ZjYzM2M2Q4LWRiYjgtNDAwNC05OTlmLTI4YTkyYTdkZThkMFwvZGVwZzFoMC0yOGU0OGQ4NC03MDkwLTRkODgtODI1Yy0xYTBmODA1NWQwODUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.u3ODB7kmv6AAgrGBIeZaxRDOcq1Uyw2gEEOKMOxBpQA"
          alt=""
         
        /> */}
        <p>TRIS</p>
        </div>
      </Col>
    </Row>
  );
};

export default VideoHorizonatal;
