import React from 'react';
import YouTube from 'react-youtube';
import searchYouTube from 'youtube-api-search';
var OAUTH2_CLIENT_ID = '354326523042-u61bpukc81n6ljhg12o7hi75p3gg94sr.apps.googleusercontent.com';
const API_KEY = 'AIzaSyBpulm8TtbJfyVQqUlpu4wAtrswEek2gB8';


class BigVideo extends React.Component {
  constructor(props){
    super(props);
    this.videosList = [];
    // this.keepSearching();
    this.state = {
      videoId:'UxEJ3Xg01jE'
    };
  }

  testSearch(term) {
    let id;
    let url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&eventType=live&maxResults=30&order=viewCount&q=' + term + '&relevanceLanguage=en&type=video&videoEmbeddable=true&key=AIzaSyBpulm8TtbJfyVQqUlpu4wAtrswEek2gB8';
    console.log(url);

    fetch(url).then((response) => response.json()).
    then((findResponse) => {
      id = findResponse.items[0].id.videoId;
      console.log(findResponse);
      console.log(id);
      this.setState({videoId: id});
    });
  }

  componentDidMount(){
    this.testSearch("soccer");
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

export default BigVideo;
