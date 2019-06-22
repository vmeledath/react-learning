import React from 'react';

// let Hello = ( props ) => {  
//   return <h1>{props.message} - {props.age}</h1>
// }

class Hello extends React.Component {
  
  constructor() {
    console.log('constructor');
    this.state = { message: '' };
  }

  render() {   
     console.log('render');
    return <p>{this.state.message}</p>
  }

  componentDidMount() {
    console.log('componentDidMount');
    setTimeout(()=> this.setState({message:'hello123'}), 10000);
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

}

export default Hello;