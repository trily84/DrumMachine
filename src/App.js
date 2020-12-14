import React, { Component } from 'react';
import './App.css';
import soundbank from './soundbank'

class App extends React.Component {
  state = {
  };

  render() {  
    // Listen to key press
    // then play sound url in the object with the same key in soundbank.js
    document.addEventListener('keydown', logKey);
    function logKey(e) {
      const soundobject = soundbank.find( ({ keyCode }) => keyCode == e.keyCode )
      const soundURL =  soundobject.url
      var a = new Audio(soundURL);
      a.play(); 

    // Change display for name of the drum pad
    // Change background color of drum pad
    // Wait .2 second to go back to default background color of drum pad
      document.getElementById("display").innerHTML = soundobject.id
      document.getElementById(soundobject.key).style.backgroundColor = "darkgray"  
      setTimeout(function () {
        document.getElementById("display").innerHTML = "input"
        document.getElementById(soundobject.key).style.backgroundColor = "steelblue" 
      }, 200);    
    }

    // Listen to id of the clicked drum pad
    // then play sound url in the object with the same key in soundbank.js
    function playsound(e) {
      const soundobject = soundbank.find( ({ key }) => key === e.target.id )
      const soundURL =  soundobject.url
      var a = new Audio(soundURL);
      a.play();

    // Change display for name of the drum pad
    // Change background color of drum pad
    // Wait .2 second to go back to default background color of drum pad
      document.getElementById("display").innerHTML = soundobject.id
      document.getElementById(soundobject.key).style.backgroundColor = "darkgray"  
      setTimeout(function () {
        document.getElementById("display").innerHTML = "input"
        document.getElementById(soundobject.key).style.backgroundColor = "steelblue" 
      }, 200);    
    }

    return (
    <div id = "drum-machine" className = "container">
      <div id = "title">Drum Machine</div>
      <div className = "pad-area">
        <div className = "drum-pad" id = "Q" onClick = {playsound}>Q</div>
        <div className = "drum-pad" id = "W" onClick = {playsound}>W</div>
        <div className = "drum-pad" id = "E" onClick = {playsound}>E</div>
        <div className = "drum-pad" id = "A" onClick = {playsound}>A</div>
        <div className = "drum-pad" id = "S" onClick = {playsound}>S</div>
        <div className = "drum-pad" id = "D" onClick = {playsound}>D</div>
        <div className = "drum-pad" id = "Z" onClick = {playsound}>Z</div>
        <div className = "drum-pad" id = "X" onClick = {playsound}>X</div>
        <div className = "drum-pad" id = "C" onClick = {playsound}>C</div>
      </div> 
      <div id = "display">Display</div>
    </div>
    );
  }
}

export default App;
