import React from 'react';
import Framework from '../youtube/framework';

class Foundation extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      channels: []
    };
  }

  render(){


    return (
      <div className="foundation">
        <Framework />
      </div>
    );
  }
}

export default Foundation;
