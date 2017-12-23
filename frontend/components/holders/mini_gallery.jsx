import React from 'react';
import SmallVideo from '../youtube/small_video';

class MiniGallery extends React.Component {
  constructor(props){
    super(props);
  }

  maximizeVideo(id){
    // console.log(this.props);
    // let thisId = this.props.videoId;
    // let id = this.refs.thisId.getDOMNode().value;
    this.props.maximizeVideo(id);
    // debugger
  }

  render(){
    if(this.props.videos){
      let minis = this.props.videos.slice(0, 2).map((m) => {
        return (
          <SmallVideo videoId={m.id.videoId}
                      key={m.id.videoId}
                      maximizeVideo={(id) => this.maximizeVideo(id)}/>
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
