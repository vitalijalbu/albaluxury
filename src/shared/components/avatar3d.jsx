import React, { useState } from "react";
import dayjs from 'dayjs';
import { Button, Col, Row, Space, Modal, message, Divider } from "antd";
const { confirm } = Modal;
import { IconPhone, IconPhoneCall, IconPrinter } from "@tabler/icons-react";
import { editorState } from '@/store/index'; // Update the path
import { useRecoilState } from "recoil";

const Avatar3D = () => {

    

  return (
    <div className="sketchfab-embed-wrapper">
    {" "}
    <iframe
      title="Man in a suit"
      frameBorder={0}
      allowFullScreen=""
      mozallowfullscreen="true"
      webkitallowfullscreen="true"
      allow="autoplay; fullscreen; xr-spatial-tracking"
      xr-spatial-tracking=""
      execution-while-out-of-viewport=""
      execution-while-not-rendered=""
      web-share=""
      width="100%"
      height="600px"
      src="https://sketchfab.com/models/88b4ab00b38a44aab8fa2700985d98f1/embed?autostart=1&camera=0"
    >
      {" "}
    </iframe>{" "}
    <p
      style={{ fontSize: 13, fontWeight: "normal", margin: 5, color: "#4A4A4A" }}
    >
      {" "}
      <a
        href="https://sketchfab.com/3d-models/man-in-a-suit-88b4ab00b38a44aab8fa2700985d98f1?utm_medium=embed&utm_campaign=share-popup&utm_content=88b4ab00b38a44aab8fa2700985d98f1"
        target="_blank"
        rel="nofollow"
        style={{ fontWeight: "bold", color: "#1CAAD9" }}
      >
        {" "}
        Man in a suit{" "}
      </a>{" "}
      by{" "}
      <a
        href="https://sketchfab.com/tomy97?utm_medium=embed&utm_campaign=share-popup&utm_content=88b4ab00b38a44aab8fa2700985d98f1"
        target="_blank"
        rel="nofollow"
        style={{ fontWeight: "bold", color: "#1CAAD9" }}
      >
        {" "}
        tomy97{" "}
      </a>{" "}
      on{" "}
      <a
        href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=88b4ab00b38a44aab8fa2700985d98f1"
        target="_blank"
        rel="nofollow"
        style={{ fontWeight: "bold", color: "#1CAAD9" }}
      >
        Sketchfab
      </a>
    </p>
  </div>
  
  );
};

export default Avatar3D;
