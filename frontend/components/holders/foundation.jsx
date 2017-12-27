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

    this.initiate();
    
    this._renderTitles = this._renderTitles.bind(this);
    this._renderChannels = this._renderChannels.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.initiate = this.initiate.bind(this);
    this.helper = this.helper.bind(this);
  }

  initiate(){
    let frameworks = this.state.channels.map(c => {
      return (
        <Framework channel={c} />
      );
    });
    this.frameworks = frameworks;
  }

  componentDidMount(){
    this.setState({channel: this.state.channels[this.state.selected] });
  }

  helper(i){
    let frameworks = this.state.channels.map(c => {
      return (
        <Framework channel={c} />
      );
    });
    this.frameworks = frameworks;
    this.setState({selected: i});
  }

  handleClick(i, e){
    e.preventDefault();
    this.helper(i);
  }

  _renderTitles(){
   let channels = this.state.channels.slice(0, 4);

   let titles = channels.map((c, i) => {
     let active = (this.state.selected === i ? 'active' : '');
     return (
         <li className={`tab-label ${active}`}
             key={i}
             onClick={this.handleClick.bind(this, i)}>
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
    console.log(this.state.channels);
    this.frameworks = this.state.channels.map((c, i) => {
      return (
        <Framework channel={c}
                   key={i} />
      );
    });

    return (
      this.frameworks[this.state.selected]
    );
  }

  render(){
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
