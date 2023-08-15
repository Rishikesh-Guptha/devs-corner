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
      <p className='main-container-title'>Arrays</p>
      <div className="area-container">
        <div className="drop-display-area">
          <div className="display-area">
            <p className='display-area-title'>Display area</p>
            <div className="display-area-content"></div>
          </div>
          <div className="drop-area">
            <p className="drop-area-title">Drop Area</p>
            <div className="drop-area-content"></div>
          </div>
        </div>
        <div className="list-area">
          <p className="list-area-title">List Area</p>
          <div className="list-area-content"></div>
        </div>
      </div>
      
      
    </div>
  )
}


export default Array
