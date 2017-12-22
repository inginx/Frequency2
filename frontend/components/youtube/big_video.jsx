import React from 'react';
import YouTube from 'react-youtube';
var OAUTH2_CLIENT_ID = '354326523042-u61bpukc81n6ljhg12o7hi75p3gg94sr.apps.googleusercontent.com';
const API_KEY = 'AIzaSyBpulm8TtbJfyVQqUlpu4wAtrswEek2gB8';


class BigVideo extends React.Component {
  constructor(props){
    super(props);

  }


  render(){
    const opts = {
     method: 'get',
     height: '468',
     width: '768',
     host: 'http://www.youtube.com',
     playerVars: { // https://developers.google.com/youtube/player_parameters
       autoplay: 1,
       origin: 'http://www.youtube.com'
     }
    };

    return (
      <button>
        <YouTube videoId={this.props.videoId}
          opts={opts}
          onReady={this.onReady}
          className="big-video-parent"/>
      </button>
    );




  }
}

export default BigVideo;
