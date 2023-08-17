import React,{ useState } from 'react';
import './Array.css';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

const Array = () => {

  // drag state
  // const [dragActive, setDragActive] = React.useState(false);
  // // ref
  // const inputRef = React.useRef(null);
  
  // // handle drag events
  // const handleDrag = function(e) {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   if (e.type === "dragenter" || e.type === "dragover") {
  //     setDragActive(true);
  //   } else if (e.type === "dragleave") {
  //     setDragActive(false);
  //   }
  // };

  // // triggers when file is dropped
  // const handleDrop = function(e) {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   setDragActive(false);
  //   if (e.dataTransfer.files && e.dataTransfer.files[0]) {
  //     // handleFiles(e.dataTransfer.files);
  //   }
  // };
  
  // // triggers when file is selected with click
  // const handleChange = function(e) {
  //   e.preventDefault();
  //   if (e.target.files && e.target.files[0]) {
  //     // handleFiles(e.target.files);
  //   }
  // };

  // // triggers the input when the button is clicked
  // const onButtonClick = () => {
  //   inputRef.current.click();
  // };

  const [isDragging, setIsDragging] = useState(false);

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    // Process the dropped files here
    console.log(files);
  };
  
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
            <div className="drop-area-content">
            {/* <form id="form-file-upload" onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
      <input ref={inputRef} type="file" id="input-file-upload" multiple={true} onChange={handleChange} />
      <label id="label-file-upload" htmlFor="input-file-upload" className={dragActive ? "drag-active" : "" }>
        <div>
          <p>Drag and drop your file here or</p>
          <button className="upload-button" onClick={onButtonClick}>Upload a file</button>
        </div> 
      </label>
      { dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div> }
    </form> */}
              <div
      className={`file-drop-area ${isDragging ? 'dragging' : ''}`}
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {isDragging ? 'Drop the files here' : 'Drag and drop files here'}
      </div>
            </div>
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
