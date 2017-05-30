import React from 'react'

const VideoListItem = ({video}) => {
  const videoUrl = video.snippet.thumbnails.default.url

  return (
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img alt="" className="media-object" src={videoUrl} />
        </div>

        <div className="media-body">
          <div className="media-heading">{ video.snippet.title }</div>
        </div>
      </div>
    </li>
  )
}

export default VideoListItem