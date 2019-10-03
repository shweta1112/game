import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
constructor(props) {
super(props);
    this.state = {
      numQuestions: 0,
      numCorrect: 0,
      resultValue: 192,
      proposedAnswer: 190,
      question: [77, 71, 44]
    };
  }
  
  numberOfQuestions=()=> {
  	this.setState((prevState) => ({
	   	numQuestions: prevState.numQuestions + 1
    }));
  }
  resultForTrueValue=()=> {
    if(this.state.resultValue === this.state.proposedAnswer) {
        this.setState({numCorrect: this.state.numCorrect + 1})
    } 
  }
   resultForfalseValue=()=> {
    	if(this.state.resultValue !== this.state.proposedAnswer) {
        	this.setState({numCorrect: this.state.numCorrect + 1})
		}
   }
  
  getnerateNewQuestion=()=> {
    this.setState({ 
      question: [
      	Math.floor(Math.random() * 100),
      	Math.floor(Math.random() * 100),
      	Math.floor(Math.random() * 100),
      ],
      resultValue: this.state.question[0] + this.state.question[1] + this.state.question[2],
      proposedAnswer: Math.floor(Math.random() * 3) + this.state.resultValue
 	 });
  }
  
 updateTrueResult=()=>{
   this.resultForTrueValue();
   this.numberOfQuestions();
   this.getnerateNewQuestion();
 }
   updateFalseResult=()=>{
   this.resultForfalseValue();
   this.numberOfQuestions();
   this.getnerateNewQuestion();
 }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.state.question[0]} + ${this.state.question[1]} + ${this.state.question[2]} = ${this.state.proposedAnswer}`}</p>
          </div>
          <button onClick={this.updateTrueResult}>True</button>
          <button onClick={this.updateFalseResult}>False</button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
