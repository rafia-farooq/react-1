import { Component } from "react";

export default class Form extends Component{
    constructor(props){
        super(props);
        this.state={
            username: '',
            age: ''
        }
    }

    changeUser=(event)=>{
        this.setState({
            username: event.target.value
        })
    }

    age = (event)=>{
        this.setState({
            age: event.target.value
        })
    }

    submitBtn=(event)=>{
        alert ('Submitted '+ this.state.username)
        event.preventDefault()
    }


    render(){
        let output = ''
        if(this.state.username){
            output = <span> Hi, {this.state.username}. Your age is: {this.state.age}</span>
        }

        else {
           output= ''
        }

        return(
            <form onSubmit={this.submitBtn}>
                <input type={"text"} onChange={this.changeUser}/>
                <input type={"number"} onChange={this.age}/>
                <p>{output}</p>
                <p>Here:{this.state.age}</p>
                <button onClick={this.clicked}>Enter</button>
            </form>
        )
    }
}