import React from "react";
import ReactPlayer from "react-player";

export default function DisplayVideo() {
  const params = new URLSearchParams(window.location.search);
  const link = params.get("id");
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh"}}>
      <ReactPlayer url={"https://www.youtube.com/watch?v=" + link} />
    </div>
  );
}