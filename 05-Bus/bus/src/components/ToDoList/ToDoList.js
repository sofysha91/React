import { useState } from "react";
import ListElement from "./ListElement";

const ToDoList = () =>{

    const [toDo, setToDo ] = useState();
    const [toDoList, setToDoList ] = useState([]);
     
    const changeToDo = (event) => {setToDo(event.target.value)}

    const handleSubmit = (event) => {
        event.preventDefault();
        if(toDo){
            let updatedToDoList = [...toDoList, {task: toDo, status: "New"}];
            setToDoList(updatedToDoList);
            setToDo("");
        } 
    }  

    function deleteTask(taskIndex){
        let updatedToDoList = [...toDoList];
        updatedToDoList[taskIndex].status = "Deleted";
        setToDoList(updatedToDoList);
    }
    
    const deleteAllTask = (event) =>{
        event.preventDefault();
        let updatedToDoList = [...toDoList];
        updatedToDoList.map(task =>{
            task.status = "Deleted"
        });
        setToDoList(updatedToDoList);
    } 

    return(
        <div className="container">
            <h1>ToDo List</h1>
            <div className="my-5">
                <form className="form-group" onSubmit={handleSubmit}>
                    <input className="form-control" type="text" id="inputToDo" value={toDo} onChange={changeToDo}></input>
                    <button type="submit" className="btn btn-primary mt-2">Save</button>
                </form>
            </div>
            <div className="row">
                <ul className="list-group">
                {toDoList.map((toDo, index) => {
                    return (
                        <ListElement task={toDo.task} status={toDo.status} index={index} deleteTask={deleteTask} />
                    );                                            
                })} 
                </ul>
            </div>
            <div className="mt-5" >
                <button className="btn btn-danger" onClick={deleteAllTask}>Delete All</button>
            </div>
        </div>
    );
}

export default ToDoList;