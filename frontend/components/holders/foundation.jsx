import React from 'react';
import Framework from '../youtube/framework';

class Foundation extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      channels: ["news", "poker", "warcraft", "golf", "finance", "soccer"],
      selected: 1,
      channel: "",
      frameworks: [],
    };
    this._renderTitles = this._renderTitles.bind(this);
    this._renderChannels = this._renderChannels.bind(this);
    // this.channels = ["news", "poker", "warcraft", "golf", "finance", "soccer"];
    this.handleClick = this.handleClick.bind(this);
  }

  // handleX(e, i){
  //   e.preventDefault();
  // }

  componentDidMount(){
    this.setState({channel: this.state.channels[this.state.selected] });

    // this.search(this.state.channels[this.state.selected]);
  }


  handleClick(i){
    // debugger
    this.setState({selected: i});
    console.log("this.state");
    console.log(this.state);
    // debugger
  }

  _renderTitles(){
   let channels = this.state.channels.slice(0, 4);

   let titles = channels.map((c, i) => {
     let active = (this.state.selected === i ? 'active' : '');
     return (
         <li className={`tab-label ${active}`}
             onClick={this.handleClick.bind(this, i)}
             key={i}>
           <span>{c}</span>
           <button className="channel-x">
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
    let frameworks = this.state.frameworks;

    this.frameworks = this.state.channels.map(c => {
      return (
        <Framework channel={c} />
      );
    });
    return (
      this.frameworks[this.state.selected]
    );
  }

  render(){

    console.log("foundationrender");
    console.log(this.state.channel);
    if(this.state.channels.length > 0){
      return (
        <div className="foundation">
          {this._renderTitles()}
          {this._renderChannels()}
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }

  }
}

export default Foundation;

// debugger
// let channel = this.channels[this.state.selected];
// let channel2 = this.channels[1];
// let channel3 = this.channels[2];
// let channel4 = this.channels[3];
