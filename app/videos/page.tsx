import React from 'react'
import Video from 'next-video'
export default function VideoPage() {
  return (
    <div className="p-20 bg-red-100/50">
      <Video
        src={`/video.mp4`} // 비디오 파일 경로
        autoPlay
        loop
      ></Video>
    </div>
  )
}
