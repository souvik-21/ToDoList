import React, { useState } from 'react';
import ToDoLists from './ToDoLists';
 const App=()=>{
     const [inputList, setInputList]=useState('');
     const [items,setItems]=useState([]);
     const itemEvent=(event)=>{
         setInputList(event.target.value);   
     };
     const listOfItem=()=>{
         setItems((olditems)=>{
             return[...olditems,inputList]
         });
        setInputList("");
     };
     const deleteItems=(id)=>{
         setItems((olditems)=>{
             return olditems.filter((arrElem,index)=>{
                 return index!==id;
             })
         })
     };
     return(
         <>
         <div className='main_div'>
             <div className="center_div">
                 <br/>
                 <h1>ToDo List</h1>
                 <br/>
                 <input 
                 type="text" 
                 placeholder='Add a Items'
                 value={inputList}
                 onChange={itemEvent}/>
                 <button onClick={listOfItem}> + </button>
                 <ol>
                     {items.map((itemval,index)=>{
                         return <ToDoLists 
                         key={index} 
                         id={index}
                         text={itemval}
                         onSelect={deleteItems}/>
                     })}
                 </ol>
             </div>
         </div>
         </>
     );
 };
 export default App;
