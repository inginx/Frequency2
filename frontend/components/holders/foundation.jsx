import React from 'react';
import Framework from '../youtube/framework';

class Foundation extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      channels: ["space",  "news", "new york", "bitcoin", "fashion", "poker", "shopping",
                "basketball", "cartoons", "funny", "aliens","business", "soccer", "technology",
                "france", "warcraft", "golf", "stories", "weather", "painting", "fishing" ],
      selected: 0,
      channel: "",
      frameworks: [],
    };

    this.initiate();

    this._renderTitles = this._renderTitles.bind(this);
    this._renderChannels = this._renderChannels.bind(this);
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

  handleX(i, e){
    e.preventDefault();
    let frameworks = this.frameworks;
    let channels = this.state.channels;

    frameworks.splice(i, 1);
    this.frameworks = frameworks;

    channels.splice(i, 1);

    if(i === this.state.selected){
      this.setState({channels: channels}, function(){
        this.setState({channel: this.state.channels[this.state.selected]}, function(){
          this.setState({selected: i + 1}, function(){
            this.setState({selected: i});
          });
        });
      });
    } else if (i > this.state.selected){
      this.setState({channels: channels});
    } else {
      //figure out how to not rerender content here
      //fix when selected - i = 2 || 3
      this.setState({selected: i}, function(){
        this.setState({channels: channels});
      });
    }
  }

  _renderTitles(){
   let channels = this.state.channels.slice(0, 4);

   let titles = channels.map((c, i) => {
     let active = (this.state.selected === i ? 'active' : '');
     return (
         <li className={`tab-label ${active}`}
             key={i}>

           <span onClick={this.handleClick.bind(this, i)}>
             {c}
           </span>

           <button className="channel-x"
                   onClick={this.handleX.bind(this, i)}>
             X
           </button>
         </li>
     );
   });

   return (
     <div className="title-header">
       <ul className="tab-labels">
         {titles}
       </ul>

     </div>
   );
  }

  _renderChannels(){
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
