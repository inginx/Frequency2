import React from 'react';
import YouTube from 'react-youtube';
var OAUTH2_CLIENT_ID = '354326523042-u61bpukc81n6ljhg12o7hi75p3gg94sr.apps.googleusercontent.com';
const API_KEY = 'AIzaSyBpulm8TtbJfyVQqUlpu4wAtrswEek2gB8';

class BigVideo extends React.Component {
  constructor(props){
    super(props);
    console.log(this.props);
  }

  render(){
    const opts = {
     method: 'get',
     height: '496',
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

    return (
      <div>
        <YouTube videoId={this.props.video.id.videoId}
          opts={opts}
          onReady={this.onReady}
          className="big-video-parent"/>

        <section className="big-video-description">
          <div className="big-video-title">
            {this.props.video.snippet.title}
          </div>
          <div className="big-video-live">
            {live}
          </div>
        </section>
      </div>
    );




  }
}

export default BigVideo;
