import React from 'react';
import Framework from '../youtube/framework';

class Foundation extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      channels: [],
      selected: 0,
    };
    this._renderTitles = this._renderTitles.bind(this);
    this.channels = ["news", "poker", "warcraft", "golf", "finance", "soccer"];
  }

  handleX(e, i){
    e.preventDefault();

  }

  handleClick(i, e){
    this.setState({selected: i});
  }

  _renderTitles(){
   let channels = this.channels.slice(0, 4);

   let titles = channels.map((c, i) => {
     let active = (this.state.selected === i ? 'active' : '');
     return (
         <li className={`tab-label ${active}`}
             onClick={this.handleClick.bind(this, i)}
             key={i}>
           <span>{c}</span>
           <button className="channel-x"
                   onClick={this.handleX.bind(this)}>
             X
           </button>
         </li>
     );
   });

   return (
     <ul className="tab-labels">
       {titles}
     </ul>
   );
  }

  _renderChannels(){
    let channel = this.channels[this.state.selected];
    console.log("renderchannels");
    console.log(channel);
    return (
      <Framework channel={channel} />
    );
  }

  render(){
    return (
      <div className="foundation">
        {this._renderTitles()}
        {this._renderChannels()}
      </div>
    );
  }
}

export default Foundation;

// <Framework channel={channel} />
// <ul className="tab-labels">
//   <li className="tab-label"><span>Channel 1</span></li>
//   <li className="tab-label"><span>Channel 2</span></li>
//   <li className="tab-label"><span>Channel 3</span></li>
//   <li className="tab-label"><span>Channel 4</span></li>
// </ul>

// debugger
// let channel = this.channels[this.state.selected];
// let channel2 = this.channels[1];
// let channel3 = this.channels[2];
// let channel4 = this.channels[3];
