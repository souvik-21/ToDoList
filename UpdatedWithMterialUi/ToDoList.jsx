import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ListCom from './ListCom';
const ToDoList=()=>{
    const[itemList,setItemList]=useState('');
    const[newItem,setNewItem]=useState([]);
    const itemEvent=(ev)=>{
        setItemList(ev.target.value);
    };
    const listOfItems=()=>{
        setNewItem((previous)=>{
            return [...previous,itemList]
        });
        setItemList('');
    }
    return(
        <>
            <div className='main_div'>
                <div className='center_div'>
                    <br/>
                    <h1>ToDo List</h1>
                    <br/>
                    <input 
                    type="text"
                    placeholder='Add An Item'
                    onChange={itemEvent}
                    value={itemList}
                    />
                    <Button className='newBtn' onClick={listOfItems}>
                        <AddIcon/>
                    </Button>
                    <ol>
                        {
                            newItem.map((val,index)=>{
                                return <ListCom key={index} 
                                id={index} 
                                text={val}/>;
                            })
                        }
                    </ol>
                    <br/>
                </div>
            </div>
        </>
    );
}
export default ToDoList;