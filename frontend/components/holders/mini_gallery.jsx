import React from 'react';
import SmallVideo from '../youtube/small_video';

class MiniGallery extends React.Component {
  constructor(props){
    super(props);
    console.log("minigall");
    console.log(this.props.videos);
  }

  render(){
    if(this.props.videos){
      let minis = this.props.videos.map((m) => {
        return (
          <SmallVideo videoId={m.id.videoId}/>
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
