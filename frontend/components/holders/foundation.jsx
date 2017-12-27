import React from 'react';
import Framework from '../youtube/framework';

class Foundation extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      channels: ["news", "poker", "warcraft", "golf", "finance", "soccer"],
      selected: 0,
      channel: ""
    };
    this._renderTitles = this._renderTitles.bind(this);
    // this.channels = ["news", "poker", "warcraft", "golf", "finance", "soccer"];
    this.handleClick = this.handleClick.bind(this);
    this.clickUpdate = this.clickUpdate.bind(this);
  }

  handleX(e, i){
    e.preventDefault();
  }

  componentDidMount(){
    this.setState({channel: this.state.channels[this.state.selected] });
  }

  clickUpdate(i){
    // debugger
    // console.log(this.state);
    // console.log(this.channels);
    this.setState({selected: i});
    console.log(this.state.channels[i]);
    this.setState({channel: this.state.channels[i]});
    // debugger
  }

  handleClick(i){
    // debugger
    this.clickUpdate(i);
    console.log("this.state.channel");
    console.log(this.state.channel);
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

  _renderChannel(){
    return (
      <Framework channel={this.state.channel} />
    );
  }

  render(){
    // channel = this.channels[this.state.selected];

    console.log("foundationrender");
    console.log(this.state.channel);
    return (
      <div className="foundation">
        {this._renderTitles()}
        {this._renderChannel()}
      </div>
    );

  }
}

export default Foundation;

// debugger
// let channel = this.channels[this.state.selected];
// let channel2 = this.channels[1];
// let channel3 = this.channels[2];
// let channel4 = this.channels[3];
