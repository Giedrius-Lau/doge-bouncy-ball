import React, { Component } from 'react';
const styles = {


};

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: ['1'],
      itemNumber: 1,
      color: 'white',
      bg: 255,
      bgr: 20,
      color: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({color: event.target.value});
  }

  handleSubmit(event) {
     var textColor = this.state.value;
     event.preventDefault();
   }

  onAddItem() {
    this.setState({
      itemNumber: this.state.itemNumber + 1,
      items: this.state.items.concat([(this.state.itemNumber + 1)]),
      bg: this.state.bg - 15,
      bgr: this.state.bgr + 20,
    });
  }

  render() {
    return (
      <div>


          <ul>
            {this.state.items.map((item, i) => {
              return(
                <li key={item} style={{...styles, color: this.state.color, backgroundColor: 'rgb(' +this.state.bgr +',' + this.state.bg +', 230)',}} className="circle">{item}</li>
              );
            })}
          </ul>
          <button onClick={this.onAddItem.bind(this)}>Add Item</button>

            <form onSubmit={this.handleSubmit}>
            <label>
              <input type="text" placeholder="Enter text color :)" value={this.state.value} onChange={this.handleChange} />
            </label>
          </form>
      </div>
    );
  }
}
