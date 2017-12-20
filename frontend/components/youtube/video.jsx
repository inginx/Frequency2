import React from 'react';
import YouTube from 'react-youtube';
import searchYouTube from 'youtube-api-search';
var OAUTH2_CLIENT_ID = '354326523042-u61bpukc81n6ljhg12o7hi75p3gg94sr.apps.googleusercontent.com';
const API_KEY = 'AIzaSyBpulm8TtbJfyVQqUlpu4wAtrswEek2gB8';


class Video extends React.Component {
  constructor(props){
    super(props);
    this.videosList = [];
    // this.keepSearching();
    this.state = {
      videoId:'UxEJ3Xg01jE'
    };
    // this.testSearch("sports").bind(this);
  }

  testSearch(term) {
    let id;
    let url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&eventType=live&maxResults=20&order=viewCount&q=' + term + '&type=video&key=AIzaSyBpulm8TtbJfyVQqUlpu4wAtrswEek2gB8';
    // debugger
    fetch(url).then((response) => response.json()).
    then((findResponse) => {
      id = findResponse.items[0].id.videoId;
      console.log(findResponse);
      console.log(id);
      this.setState({videoId: id});
    });
  }

  componentDidMount(){
    debugger
    this.testSearch("sports");
  }


  render(){
    const opts = {
     method: 'get',
     height: '390',
     width: '640',
     host: 'http://www.youtube.com',
     playerVars: { // https://developers.google.com/youtube/player_parameters
       autoplay: 1
     }
    };

    console.log("this.videoID");
    console.log(this.state.videoId);
    // let placeholder = 'UxEJ3Xg01jE';


    return (
      <div>
        <YouTube videoId={this.state.videoId}
          opts={opts}
          onReady={this.onReady}/>
        <button className="start-button"  >
          Click me
        </button>
      </div>
    );


  }
}

export default Video;
