import { useState } from "react";

export default function Todoitem({ data,todo,setTodo,todos,setTodos,up,setUp}) {
    function dltHandler(e){
        let val = e.target.name;
        console.log(todos)
        let arr = todos.filter((todo)=> todo.name!=val)
        console.log(arr);
        setTodos(arr)
        console.log(todos)
    }
    function handleUpdate(e){
        setTodo({...todo,name:e.target.name});
        let arr1 = todos.map((todo)=>todo.name===data.name?{...todo,upStatus:!todo.upStatus}:todo)
        setTodos(arr1)
        setUp(true)
        console.log("done")
    }
    function clickHandler(){
        let arr = todos.map((todo)=>todo.name===data.name?{...todo,done:!todo.done}:todo)
        setTodos(arr)
    }
    const styles = data.done?"clicked":"";
    const itemStyle = data.upStatus?"updating":"";

    return (
        <>
            <div className={`todoItem ${itemStyle}`}>
                <h2 onClick={(e)=>clickHandler(e)} className={styles}>{data.name}</h2>
                <div className="btn-box">
                    <button className="dlt" name={data.name} onClick={dltHandler}><i className="fa-solid fa-trash-can"></i></button>
                    <button className="update" name={data.name} onClick={handleUpdate}><i className="fa-solid fa-pen"></i></button>
                </div>
            </div>
        </>
    )
}