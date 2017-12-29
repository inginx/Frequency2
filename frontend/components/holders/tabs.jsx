import React from 'react';


class Tabs extends React.Component {
  constructor(props){
    super(props);
  }

  handleClick(i, e){
    // debugger
    e.preventDefault();
    this.props.handleClick(i);
  }

  handleX(i, e){
    e.preventDefault();
    debugger
    this.props.handleX(i);
  }

  shuffle(){
    this.props.shuffle();
  }

  render(){

    let tabs = this.props.channels.map((c, i) => {
      let active = (this.props.selected === i ? 'active' : '');
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
          {tabs}
          <section className="fa fa-random shuffle"
                   onClick={() => this.shuffle()}>
          </section>
        </ul>
      </div>
    );
  }
}

export default Tabs;

// onClick={() => this.shuffle()}>
