import React,{ useState } from 'react';
import './Array.css';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

const Array = () => {

  function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }
  
  return (
    <div className='main-container'>
      <p>Arrays</p>
      
      <div className="movables">
        <div className="drop-area" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
        <p id="text1" draggable="true" ondragstart="drag(event)">text1</p>
        <p id="text2">text2</p>
      </div>
      
    </div>
  )
}


export default Array
