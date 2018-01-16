import React from 'react';
import Framework from '../youtube/framework';
import Tabs from './tabs';

class Foundation extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      channels: ["space","news", "new york", "bitcoin", "fashion",
      "poker", "lions", "VR", "ski", "hockey", "kung fu", "basketball",
      "dogs", "cartoons", "funny", "business", "shopping",
      "france", "warcraft", "golf", "soccer", "stories", "weather",
      "painting", "fishing", "aliens" ],
      selected: 0,
      channel: "",
      frameworks: [],
    };

    this.initiate();

    this._renderTitles = this._renderTitles.bind(this);
    this._renderChannels = this._renderChannels.bind(this);
    this.handleX = this.handleX.bind(this);
    this.initiate = this.initiate.bind(this);
    this.helper = this.helper.bind(this);
    this.shuffle = this.shuffle.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

  handleClick(i){
    this.helper(i);
  }

  shuffle(){
    let channels = this.state.channels;
    let shuffledChannels = [];
    let prevSelected = this.state.selected;

    while(channels.length > 0){
      let rand = Math.floor(Math.random() * channels.length);
      shuffledChannels.push(channels[rand]);
      channels = (channels.slice(0, rand)).concat(channels.slice(rand + 1, channels.length));
    }

    let frameworks = shuffledChannels.map(c => {
      return (
        <Framework channel={c} />
      );
    });

    this.setState({channels: shuffledChannels}, () => {
      this.setState({frameworks: frameworks}, () => {
        this.setState({selected: prevSelected + 1}, () => {
          this.setState({selected: prevSelected});
        });
      });
    });
  }

  handleX(i){
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

    } else if(i === this.state.selected - 1) {
      this.setState({channels: channels}, function(){
        this.setState({selected: i});
      });

    } else if (i === this.state.selected - 2){
      this.setState({channels: channels}, function(){
        this.setState({selected: i + 1});

      });
      //
      // this shouldn't force rerender when channel doesn't change
      //
    } else if (i === this.state.selected - 3){
      this.setState({channels: channels}, function(){
        this.setState({selected: i + 2});
      });
    }
  }

  _renderTitles(){
   let channels = this.state.channels.slice(0, 4);

   return (
     <Tabs channels={channels}
           handleClick={this.handleClick}
           handleX={this.handleX}
           selected={this.state.selected}
           shuffle={this.shuffle}/>
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
