import React from 'react';
import YouTube from 'react-youtube';


class SmallVideo extends React.Component {
  constructor(props){
    super(props);
    this.maximizeVideo = this.maximizeVideo.bind(this);
  }

  maximizeVideo(){
    let video = this.props.video;
    this.props.maximizeVideo(video);
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

    return (
      <div className="small-video-holder">

        <YouTube videoId={this.props.video.id.videoId}
          ref={this.props.video}
          opts={opts}
          onReady={this.onReady}
          className="youtube-embed"/>

        <button
                className="video-button-layer"
                onClick={() => this.maximizeVideo()}/>
      </div>
    );


  }

}

export default SmallVideo;
