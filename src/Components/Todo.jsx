import { useState } from "react"
import "../App.css"
import Todoitem from "./Todoitem";
export default function Todo() {
    const [todo, setTodo] = useState({ name: '', done: false, upStatus: false });
    const [todos, setTodos] = useState([]);
    const [up, setUp] = useState(false);

    function submitHandler(e) {
        e.preventDefault();
        if (up){
            let arr1 = todos.map(tod => tod.upStatus ? { ...tod, name: todo.name,upStatus:false} : tod)
            setTodos(arr1)
            setUp(false);
        }
        else{
            todo.name ? setTodos([...todos, todo]) : alert("Enter Some value")
        }
        setTodo({ ...todo, name: "" })
        console.log(todos)
    }

    return (
        <>
            <form className="todoForm" onSubmit={submitHandler}>
                <input type="text" onChange={(e) => setTodo({ ...todo, name: e.target.value })} value={todo.name} />
                <button className="btn">{up?"Update":"ADD"}</button>
            </form>
            {todos.map((data, ind) => {
                return (
                    <Todoitem key={ind} data={data} todo={todo} setTodo={setTodo} todos={todos} setTodos={setTodos} up={up} setUp={setUp} />
                )
            })}
        </>
    )
}


