import React from 'react';
import YouTube from 'react-youtube';
import $ from 'jquery';

class SmallVideo extends React.Component {
  constructor(props){
    super(props);
    this.maximizeVideo = this.maximizeVideo.bind(this);
    this.replaceVideo = this.replaceVideo.bind(this);
    //circle back to .title-layer problem
  }

  maximizeVideo(){
    let video = this.props.video;
    this.props.maximizeVideo(video);
  }

  replaceVideo(){
    let index = this.props.index;
    this.props.replaceVideo(index);
  }

  render(){
    const opts = {
      method: 'get',
      height: '113',
      width: '189',
      host: 'http://www.youtube.com',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        mute: "1",
        controls: "0",
        iv_load_policy:'3'
      }
    };

    let title = this.props.video.snippet.title;

    if(this.props.video){
      return (
        <div className="small-video-holder">

          <YouTube videoId={this.props.video.id.videoId}
            ref={this.props.video}
            opts={opts}
            onReady={this.onReady}
            className="youtube-embed"/>

          <button className="video-button-layer"
            id={`title-activate${this.props.video.id.videoId}`}
            onClick={() => this.maximizeVideo()}>
            {title}
          </button>
          <button className="video-x"
            onClick={() => this.replaceVideo()}>
            X
          </button>
        </div>
      );
    } else {
      return (
        <div className="placeholder">
          placeholder
        </div>
      );
    }


  }

}

export default SmallVideo;
