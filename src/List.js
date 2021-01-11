import { Component } from 'react';
import app from './App.module.css';

export default class List extends Component{
    render(){
        return(
            <div className={app.col}>
                <ul>
                    <li>{this.props.item1}</li>
                    <li>{this.props.item2}</li>
                    <li>{this.props.item3}</li>
                </ul>
            </div>
            
        )}
}