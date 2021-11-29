import { useState,useEffect } from "react"
import Todo from "./Components/Todo";
import postData from "./Services/postData";

const Learn = ({history}) => {
    const user = localStorage.getItem("userName");
    const [todoList,setTodoList] = useState([]);
    const [todo,setTodo] = useState("");
    const [duplicateError, setDuplicateError] = useState(false);

    useEffect(() => {
        fetch(`http://192.168.1.42:8086/todos/${user}`)
        .then((result)=>result.json())
        .then((value)=>{
            if(!value.length){
                localStorage.removeItem("userName");
                history.push("/learn");
                return;
            }
            setTodoList(value[0].todos.map(({text,status})=>{
                return{
                    text,
                    status,
                    isEditMode: false
                }
            }));
        })
    }, [history,user]);

    if(!localStorage.getItem("userName")){
        history.push("/learn");
    }
    
    return (
        <div className="container">
            <h1>Todo ({user})</h1>
            <div className="logout-section">
                <button onClick={()=>{
                    localStorage.removeItem("userName");
                    history.push("/learn/login");
                }}>Logout</button>
            </div>
            <div className="input-section">
                <input type="text" value={todo} onChange={(e)=>{
                    setTodo(e.target.value);                    
                    setDuplicateError(false);
                }}/>
                <button className="todo-button"
                onClick={()=>{
                    if(!todo)return;
                    if(todoList.filter(({text}) => todo.toLowerCase() === text.toLowerCase()).length){
                        setDuplicateError(true);
                        return
                    }
                    postData("/todos",{
                            user,
                            todos: [
                            ...todoList.map(({text,status})=>{
                                return{
                                    text,
                                    status
                                }
                            }),
                              {
                                text: todo,
                                status: false
                              }
                            ]
                    });
                    setTodoList(prev=>[...prev,{
                        text:todo,
                        status:false,
                        isEditMode: false
                    }]);
                    setTodo("")
                }}
                >ADD
                
                </button>
            {duplicateError && <div className ="duplicate-error">
            Already exists!    
            </div>}
            </div>
            {todoList.map((data,i)=>
            <Todo
            {...data}
            key={i}
            i={i}
            setTodoList={setTodoList}
            todoList={todoList}
            user={user}
            />)}
            
        </div>
    )
}

export default Learn
