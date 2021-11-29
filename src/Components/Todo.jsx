import { useState } from "react";
import postData from "../Services/postData";


const Todo = ({
    status,
    text,
    i,
    setTodoList,
    todoList,
    isEditMode,
    user
}) => {

    const[editText,setEditText] = useState(text);
    const[errorTextVisibility,setErrorTextVisibility] = useState(false)
    const [duplicateError,setDuplicateError] = useState(false);
    return (
        <>
        <div
            className="todo-item"
            >
            <div
            className={`status-circle ${status? "status-circle--active": ""}`}
            onClick={
                ()=>{
                    postData("/todos",{
                        user,
                        todos: [
                        ...todoList.map(({text,status},index)=>{
                            if(i === index){
                                return{
                                    text,
                                    status: !status
                                }
                            }
                            return{
                                text,
                                status
                            }
                        })
                        ]
                    });
                    setTodoList(
                        prev=>{
                            let newTodoList = [...prev];
                            let newTodo = {...newTodoList[i]};
                            newTodo.status = !newTodo.status;
                            newTodoList[i] = newTodo;
                            return newTodoList
                        }
                    )
                }
            }
            />
            {isEditMode?
            <>
            <div className="todo-edit-text-container">
                <input
                type="text"
                className="todo-edit-text-field"
                value={editText}
                onChange={(e)=>{
                    setEditText(e.target.value);
                }}
                />
                <div
                className="todo-edit-cancel-button"
                onClick={
                    ()=>{

                        setTodoList(
                            prev=>{
                                let newTodoList = [...prev];
                                let newTodo = {...newTodoList[i]};
                                newTodo.isEditMode = false;
                                newTodoList[i] = newTodo;
                                return newTodoList
                            }
                        )
                        setEditText(text);
                    }
                }
                />
                {errorTextVisibility && <div className="todo-error-text">
                    Please Enter something here!
                </div>}
                {duplicateError && <div className="todo-error-text">
                    Already Exists!
                </div>}
            </div>
            <div
            className="todo-edit-save-button"
            onClick={
                ()=>{
                    if(!editText){
                        setErrorTextVisibility(true);
                        setTimeout(()=>{
                            setErrorTextVisibility(false);
                        },1500)
                        return
                    }
                    if(text !== editText && todoList.filter(({text})=>text.toLowerCase() ===editText.toLowerCase()).length){
                        setDuplicateError(true)
                        setTimeout(()=>{
                            setDuplicateError(false)
                        },1500);
                        return;
                    }
                    postData("/todos",{
                        user,
                        todos: [
                        ...todoList.map(({text,status},index)=>{
                            if(i === index){
                                return{
                                    text: editText,
                                    status
                                }
                            }
                            return{
                                text,
                                status
                            }
                        })
                        ]
                    });
                    setTodoList(
                        prev=>{
                            let newTodoList = [...prev];
                            let newTodo = {...newTodoList[i]};
                            newTodo.isEditMode = false;
                            newTodo.text = editText;
                            newTodoList[i] = newTodo;
                            return newTodoList
                        }
                    )
                }
            }
            />
            </>
            :
            <>
            <div className="todo-text">
            {text}
            </div>
            <div
            className="todo-edit-button"
            onClick={
                ()=>{
                    if(todoList.filter(({isEditMode})=>isEditMode).length) return;
                    setTodoList(
                        prev=>{
                            let newTodoList = [...prev];
                            let newTodo = {...newTodoList[i]};
                            newTodo.isEditMode = true;
                            newTodoList[i] = newTodo;
                            return newTodoList
                        }
                    )
                }
            }
            />
            </>}
            <div
            onClick={()=>{
                postData("/todos",{
                    user,
                    todos: todoList.filter((_value,index)=> i !== index)
                });
                setTodoList(todoList.filter(
                    (_value,index)=> i !== index
                ))
            }}
            className="todo-close-button"
            />
        </div>
        </>
    )
}

export default Todo
