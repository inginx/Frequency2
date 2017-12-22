import React from 'react';
import YouTube from 'react-youtube';
var OAUTH2_CLIENT_ID = '354326523042-u61bpukc81n6ljhg12o7hi75p3gg94sr.apps.googleusercontent.com';
const API_KEY = 'AIzaSyBpulm8TtbJfyVQqUlpu4wAtrswEek2gB8';
import BigVideo from './big_video';
import MiniGallery from '../holders/mini_gallery';

class Framework extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      bigVideoId: 'UxEJ3Xg01jE',
      miniArray: []
      // queued: false
      // smallVideoId: 'UxEJ3Xg01jE'
    };
    this.miniArray = [];
  }

  testSearch(term) {
    let id, id2;
    let url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&eventType=live&maxResults=30&order=viewCount&q=' + term + '&relevanceLanguage=en&type=video&videoEmbeddable=true&key=AIzaSyBpulm8TtbJfyVQqUlpu4wAtrswEek2gB8';

    fetch(url).then((response) => response.json()).
    then((findResponse) => {
      // console.log(findResponse);
      // findResponse.items.forEach(r => {
      //   this.miniArray.push(r);
      // });
      // console.log(this.miniArray);
      id = findResponse.items[0].id.videoId;
      // id2 = findResponse.items[1].id.videoId;
      // this.setState({smallVideoId: id2});
      this.setState({bigVideoId: id});

      this.setState({miniArray: findResponse.items});
    });
  }

  componentDidMount(){
    this.testSearch("warcraft");
  }

  render(){

    return (
      <div className="grandparent">
        <div className="left-pane">
          <MiniGallery videos={this.state.miniArray} />
        </div>

        <div className="center-pane">
          <BigVideo videoId={this.state.bigVideoId} />
        </div>

      </div>
    );


  }
}

export default Framework;
