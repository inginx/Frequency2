import React from 'react';
import SmallVideo from '../youtube/small_video';

class MiniGallery extends React.Component {
  constructor(props){
    super(props);
  }

  maximizeVideo(video){
    this.props.maximizeVideo(video);
  }

  replaceVideo(i){
    this.props.replaceVideo(i);
  }

  render(){
    if(this.props.videos){

      let target = this.props.videos;
      let minis = target.map((m, i) => {
        return (
          <SmallVideo video={m}
                      key={m.id.videoId}
                      index={i}
                      maximizeVideo={(m) => this.maximizeVideo(m)}
                      replaceVideo={(i) => this.replaceVideo(i)}/>
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
