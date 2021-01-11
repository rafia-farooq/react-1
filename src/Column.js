import { Component } from "react";
import app from './App.module.css';

export default class Column extends Component{
    render(){
        return(
            
                <div className={app.col}>
                    <h2 className={app.heading}>{this.props.heading}</h2>
                    <p className={app.para}>{this.props.paraOne}</p>
                    <p className={app.para}>{this.props.paraTwo}
                        <a href={"https://www.w3schools.com/react"} target={"_blank"} className={app.link}> {this.props.link}</a>
                    </p>
                </div>               
        
        )
    }
}