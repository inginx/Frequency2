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
      bigVideoId: 'WD53AsuSXmQ',
      miniArray: []
    };
  }

  testSearch(term) {
    let id, id2;
    let url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&eventType=live&maxResults=30&order=viewCount&q=' + term + '&relevanceLanguage=en&type=video&videoEmbeddable=true&key=AIzaSyBpulm8TtbJfyVQqUlpu4wAtrswEek2gB8';

    fetch(url).then((response) => response.json()).
    then((findResponse) => {
      id = findResponse.items[0].id.videoId;
      this.setState({bigVideoId: id});

      this.setState({miniArray: findResponse.items});
    });
  }

  componentDidMount(){
    this.testSearch("warcraft");
  }

  maximizeVideo(id){
    debugger
    this.setState({bigVideoId: id});
  }

  render(){

    return (
      <div className="grandparent">
        <MiniGallery videos={this.state.miniArray}
                     maximizeVideo={this.maximizeVideo}/>

        <div className="center-pane">
          <BigVideo videoId={this.state.bigVideoId} />
        </div>

      </div>
    );


  }
}

export default Framework;
