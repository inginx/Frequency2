import React from 'react';
import SmallVideo from '../youtube/small_video';

class MiniGallery extends React.Component {
  constructor(props){
    super(props);
  }

  maximizeVideo(){
    let thisId = this.props.videoId;
    let id = this.refs.thisId.getDOMNode().value;
    debugger
    this.props.maximizeVideo(id);
  }

  render(){
    if(this.props.videos){
      let minis = this.props.videos.slice(0, 4).map((m) => {
        return (
          <SmallVideo videoId={m.id.videoId}
                      key={m.id.videoId}
                      maximizeVideo={this.maximizeVideo}/>
        );
      });

      return (
        <div className="left-pane">
          {minis}
        </div>
      );

    } else {
      return (
        <div></div>
      );
    }
  }
}

export default MiniGallery;
