import React from 'react';
import YouTube from 'react-youtube';


class SmallVideo extends React.Component {
  constructor(props){
    super(props);

  }


  render(){
    const opts = {
      method: 'get',
      height: '100',
      width: '165',
      host: 'http://www.youtube.com',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        // origin: 'http://www.youtube.com'
      }
    };

    console.log("small vid id");
    console.log(this.props.videoId);
    return (
      <button>
        <YouTube videoId={this.props.videoId}
          opts={opts}
          onReady={this.onReady} />
      </button>
    );


  }

}

export default SmallVideo;
