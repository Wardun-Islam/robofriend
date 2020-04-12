import React,{Component} from 'react';
import './App.css';
import 'tachyons';
import Header from '../../components/header/Header';
import Input from '../../components/input/Input';
import CardList from '../../components/cardlist/CardList';
import Scroll from '../../components/scroll/Scroll';
import ErrorBoundary from '../../components/errorboundary/ErrorBoundary';
//import {Robots} from '../../contents/Contents';

class App extends Component{
  constructor(){
    super();
    this.state = {
      inputText: '',
      robots: []
    }
  }

  componentDidMount(){
      //setTimeout(() => {this.setState({robots:Robots});}, 3000);
      fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => this.setState({robots:data}))
    }

    render(){
      let {robots, inputText} = this.state;
      const onTextChange = (event) => {
        if(event.keyCode === 13){
            // onButtonClick();
        }
        this.setState({inputText: event.target.value});
      }

      const onButtonClick = () => {
        if(this.state.inputText.length>0){
        let found = false;
        for(let robot of robots){
            found = robot.name.toLowerCase()===(inputText.toLowerCase());
        };
        if(!found){ 
            const newRobotList = robots.concat(
              [{"id": robots.length+1,
                "name": inputText,
                "email": "Noemail@nodomain.com"}]);
            this.setState({robots: newRobotList});
          }
        }
      }

      let filterRobots = robots.filter((robot, i) =>{
        return robot.name.toLowerCase().includes(inputText.toLowerCase());
      });

      return (!robots.length) ?
        <h1 style={{textAlign:'center', fontWeight:'600%'}}>Loading...</h1> :
            (<div className="body">
                <Header/>
                <Input  onTextChange={onTextChange} onButtonClick={onButtonClick}/>
                <Scroll>
                    <div className="App">
                      <ErrorBoundary>
                         <CardList Robots={filterRobots}/>
                       </ErrorBoundary>
                    </div>
                </Scroll>
            </div>);
    }
}

export default App;
