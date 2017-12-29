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
      bigVideo: {},
      miniQueue: [],
      miniArray: [],
      title: this.props.channel
    };
    this.maximizeVideo = this.maximizeVideo.bind(this);
    this.replaceVideo = this.replaceVideo.bind(this);
    this.search(this.props.channel);
  }

  search(term) {
    let url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&eventType=live&maxResults=30&order=viewCount&q=' + term + '&relevanceLanguage=en&type=video&videoEmbeddable=true&key=AIzaSyBpulm8TtbJfyVQqUlpu4wAtrswEek2gB8';
    fetch(url).then((response) => response.json()).
    then((findResponse) => {
      let bigVideo = findResponse.items[0];
      this.setState({bigVideo: bigVideo});
      this.setState({miniQueue: findResponse.items});
      this.setState({miniArray: this.state.miniQueue.slice(0, 4)});
    }).catch((error) => {
      console.error(error);
      console.log("error here");
    });
  }

  maximizeVideo(video){
    this.setState({bigVideo: video});
  }

  replaceVideo(i){
    let newState = this.state.miniQueue;
    newState.splice(i, 1);
    this.setState({miniQueue: newState });
    this.setState({miniArray: this.state.miniQueue.slice(0, 4)});
  }

  render(){
    if(this.state.bigVideo.id){
      return (
        <div className="grandparent">

          <MiniGallery videos={this.state.miniArray}
            maximizeVideo={this.maximizeVideo}
            replaceVideo={this.replaceVideo}
            />

          <div className="center-pane">
            <BigVideo video={this.state.bigVideo} />
          </div>

        </div>
      );
    } else {
      return (
        <div></div>
      );
    }


  }
}

export default Framework;
