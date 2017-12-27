import React from 'react';
import YouTube from 'react-youtube';
var OAUTH2_CLIENT_ID = '354326523042-u61bpukc81n6ljhg12o7hi75p3gg94sr.apps.googleusercontent.com';
const API_KEY = 'AIzaSyBpulm8TtbJfyVQqUlpu4wAtrswEek2gB8';

class BigVideo extends React.Component {
  constructor(props){
    super(props);
    console.log("bigvideo.this.props");
    console.log(this.props.video);

  }

  render(){
    const opts = {
     method: 'get',
     height: '505',
     width: '830',
     host: 'http://www.youtube.com',
     playerVars: { // https://developers.google.com/youtube/player_parameters
       autoplay: 1,
       origin: 'http://www.youtube.com'
     }
    };

    let live = "";
    if(this.props.video.snippet.liveBroadcastContent === "live"){
      live = "LIVE";
    }

    let title = this.props.video.snippet.title;
    if(title.length > 64){
      title = title.slice(0, 61) + "...";
    }

    return (
      <div className="big-video-parent">
        <YouTube videoId={this.props.video.id.videoId}
          opts={opts}
          onReady={this.onReady} />

        <section className="big-video-description">

          <div className="big-video-top">
            <div className="big-video-title">
              {title}
            </div>
            <div className="big-video-live">
              {live}
            </div>
          </div>

          <div className="big-video-channel">
            {this.props.video.snippet.channelTitle}
          </div>
        </section>
      </div>
    );
  }
}

export default BigVideo;
