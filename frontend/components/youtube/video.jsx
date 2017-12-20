import React from 'react';
import YouTube from 'react-youtube';
import searchYouTube from 'youtube-api-search';
var OAUTH2_CLIENT_ID = '354326523042-u61bpukc81n6ljhg12o7hi75p3gg94sr.apps.googleusercontent.com';
const API_KEY = 'AIzaSyBpulm8TtbJfyVQqUlpu4wAtrswEek2gB8';


class Video extends React.Component {
  constructor(props){
    super(props);
    this.videosList = [];
    this.keepSearching();
    this.testSearch("hockey");
  }

  testSearch(term) {
    fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&eventType=live&maxResults=20&order=viewCount&q=' + term + '&type=video&key=AIzaSyBpulm8TtbJfyVQqUlpu4wAtrswEek2gB8').
    then((response) => response.json()).
    then((findResponse) => {
      console.log(findResponse);
    });
  }

  // componentDidMount(){
  //   fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&eventType=live&maxResults=20&order=viewCount&q=soccer&type=video&key=AIzaSyBpulm8TtbJfyVQqUlpu4wAtrswEek2gB8').
  //   then((response) => response.json()).
  //   then((findResponse) => {
  //     console.log(findResponse);
  //   });
  // }

  search(){
    if (this.videosList.length == 0) {
      this.keepSearching();
    }
  }

  keepSearching(){
    console.log("here");
    searchYouTube({ key: API_KEY, term: "football", maxResults: 1}, (videos) => {
      videos.forEach(vid => {
        this.videosList.push(vid);
      });
    });
    console.log(this.videosList);
  }

  render(){
    const opts = {
     method: 'get',
     height: '390',
     width: '640',
     host: 'https://www.youtube.com',
     playerVars: { // https://developers.google.com/youtube/player_parameters
       autoplay: 1
    }
  };

    return (
      <div>
        <YouTube videoId="2g811Eo7K8U"
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
