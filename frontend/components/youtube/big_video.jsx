import React from 'react';
import YouTube from 'react-youtube';
// import searchYouTube from 'youtube-api-search';
import SmallVideo from './small_video';
var OAUTH2_CLIENT_ID = '354326523042-u61bpukc81n6ljhg12o7hi75p3gg94sr.apps.googleusercontent.com';
const API_KEY = 'AIzaSyBpulm8TtbJfyVQqUlpu4wAtrswEek2gB8';


class BigVideo extends React.Component {
  constructor(props){
    super(props);
    
  }


  render(){
    const opts = {
     method: 'get',
     height: '390',
     width: '640',
     host: 'http://www.youtube.com',
     playerVars: { // https://developers.google.com/youtube/player_parameters
       autoplay: 1,
       origin: 'http://www.youtube.com'
     }
    };

    console.log("big vid id");
    console.log(this.props.videoId);
    return (
      <button>
        <YouTube videoId={this.props.videoId}
          opts={opts}
          onReady={this.onReady}/>
      </button>
    );




  }
}

export default BigVideo;
