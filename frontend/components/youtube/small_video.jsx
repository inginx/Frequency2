import React from 'react';
import YouTube from 'react-youtube';


class SmallVideo extends React.Component {
  constructor(props){
    super(props);
    this.maximizeVideo = this.maximizeVideo.bind(this);
  }

  maximizeVideo(){
    let id = Object.keys(this.refs)[0];
    this.props.maximizeVideo(id);
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
        controls: "0"
      }
    };

    return (
      <div className="small-video-holder">

        <YouTube videoId={this.props.video.id.videoId}
          ref={this.props.video.id.videoId}
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