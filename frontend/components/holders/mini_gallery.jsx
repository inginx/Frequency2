import React from 'react';
import SmallVideo from '../youtube/small_video';

class MiniGallery extends React.Component {
  constructor(props){
    super(props);
    this.queue = [];
  }

  maximizeVideo(id){
    this.props.maximizeVideo(id);
  }

  render(){
    if(this.props.videos){
      let target = this.props.videos;
      let enqueues = target.slice(4, target.length);
      this.queue.push(...enqueues);

      let minis = target.slice(0, 4).map((m) => {
        return (
          <SmallVideo video={m}
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
