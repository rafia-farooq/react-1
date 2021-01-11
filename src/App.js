import './App.css'
import css from './App.module.css'
import Column from './Column';
import Counter from './Counter';
import CounterHooks from './CounterHooks';
import React from "react";
import {useState} from "react";
import List from './List';

export const ThemeContext = React.createContext()

function App() {
  const[theme, setTheme]= useState('grey')
  const[color, setColor]= useState('black')

  const abc = {
    fontSize:"20px", 
    color:"dodgerblue"
  };

  const hr = {
    borderColor: "grey"
  };

  const space ={
    marginTop: "20px"
  }

  const heading={
    fontStyle: "italic",
    color: "lightgrey",
    fontSize: "1.25rem"
  }
 
  return (
    <ThemeContext.Provider value={{backgroundColor: theme, color: color}}>
      <center>
        <h1 style={{color:"blue", fontVariant:"small-caps"}}>Using React to create webpages</h1>
        <p style={abc} className={css.h}>First react webpage</p>
        <p style={abc} className={css.h}>Styling using css</p>
        <h5 style={heading}>React is {5 + 5} times better with JSX</h5>
        <br/> <br/>

        <button onClick={() => {
          setTheme(
            prevTheme=>{
              return prevTheme === 'grey' ? 'black' : 'grey'
            }
          );

          setColor(
            prevColor=>{
              return prevColor === 'black' ? 'white' : 'black'
            }
          )

        }}>
          Change Theme</button>
      </center>

      <hr style={hr}/>
      <div className={css.flex}>
        <div className={css.col}>
          <ol>
            <li className={css.h}>index.html</li>
            <li className={css.h}>App.js</li>
            <li className={css.h}>index.js</li>
          </ol>
        </div>
    
        <List
        item1={"Components"}
        item2={"Functions/ Hooks"}
        item3={"Context"}></List>


        <div className={css.col}>
           <input type={"text"} placeholder={"Enter Text....."} style={space}/>
        </div>
      </div>

      
      <hr/>
      <h4 style={{color: "green", textDecoration: "underline"}}>Counter Using Class</h4>
      <div className={css.flex}>
        <Counter initialCount={1}></Counter>
        <Counter initialCount={10}></Counter>
        <Counter initialCount={100}></Counter>
      </div>
      <hr/>

      <h4 style={{color: "green", textDecoration: "underline"}}>Counter Using Hooks/ Function</h4>
    
    <div className={css.flex}>
      <CounterHooks initialCount={5} increase={5} decrease={5}></CounterHooks>
      <CounterHooks initialCount={0} increase={10} decrease={10}></CounterHooks>
      <CounterHooks initialCount={200} increase={2} decrease={5}></CounterHooks>
    </div>

    <hr/>


    <div className={css.flex}>
      <Column
      color={css.blue} 
      heading={"Declarative"} 
      paraOne={"React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes."} 
      paraTwo={"Declarative views make your code more predictable and easier to debug."}></Column>
      
      <Column 
       color={css.grey} 
      heading={"Component-Based"}
      paraOne={"Build encapsulated components that manage their own state, then compose them to make complex UIs."} 
      paraTwo={"Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM."}></Column>
      
      <Column heading={"Learn Once, Write Anywhere"} 
      paraOne={"We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code."} 
      paraTwo={"React can also render on the server using Node and power mobile apps using"}
      link={"React Native."}></Column>
    </div>
    
    </ThemeContext.Provider>
  );
}

export default App;
