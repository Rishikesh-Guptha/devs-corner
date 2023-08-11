import React,{ useState } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

const Array = () => {
  
  const [droppedItems, setDroppedItems] = useState([]);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();

    const data = e.dataTransfer.getData('text/plain');
    const newItem = { type: 'link', content: data };

    setDroppedItems([...droppedItems, newItem]);
  };
  return (
    <div className='main-container'>
      <DragDropContext onDragEnd={result => console.log(result)}>
      <div className="drag-drop-area" onDragOver={handleDragOver} onDrop={handleDrop}>
      <h2>Drag and Drop Area</h2>
      <div className="dropped-items-container">
        {droppedItems.map((item, index) => (
          <div key={index} className="dropped-item">
            {item.type === 'link' ? (
              <a href={item.content} target="_blank" rel="noopener noreferrer">
                {item.content}
              </a>
            ) : (
              <div className="other-content">{item.content}</div>
            )}
          </div>
        ))}
      </div>
    </div>
      </DragDropContext>
      
    </div>
  )
}


export default Array
