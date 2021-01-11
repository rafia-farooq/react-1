import { Component } from 'react';
import { ThemeContext } from './App';
import app from './App.module.css';

export default class Counter extends Component {
    constructor(props){
        super(props);
        this.state={
            count: props.initialCount
        }
    }

    render(){
        return(
        <ThemeContext.Consumer>
            { bgColor => (
                <div className={app.col} style={bgColor}>
                    <button  onClick={()=>this.changeCount(1)}>+</button>
                    <span>{this.state.count}</span>
                    <button onClick={()=>this.changeCount(-1)}>-</button>
                </div> 
             )            
            }
                       
        </ThemeContext.Consumer>  
        )
    }

        
    changeCount(number){
            this.setState(
                {count: this.state.count + number}
            )
        }
}