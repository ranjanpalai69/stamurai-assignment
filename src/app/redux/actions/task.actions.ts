import { Task } from "@/app/Types/types";
import { Dispatch } from "redux";
import { ADD_TASKS, DELETE_TASKS, GET_TASKS } from "../types/task.types";



export const getTasks=()=>(dispatch:Dispatch)=>{
    const storedTasks = localStorage.getItem("tasks");
    let res: Task[] | [] = storedTasks ? JSON.parse(storedTasks) as Task[] : [];

    dispatch({type:GET_TASKS,payload:res});
}

export const addTask=(task:Task)=>(dispatch:Dispatch<any>)=>{

    const storedTasks = localStorage.getItem("tasks");
    let res: Task[] | [] = storedTasks ? JSON.parse(storedTasks) as Task[] : [];
    
    res.push(task);
    localStorage.setItem("tasks", JSON.stringify(res));

    dispatch({ type:ADD_TASKS,payload:res})
}


export const deleteTask=(id:string)=>(dispatch:Dispatch<any>)=>{

    const storedTasks = localStorage.getItem("tasks");
    let res: Task[] | [] = storedTasks ? JSON.parse(storedTasks) as Task[] : [];
    
    let filteredTasks = res.filter((task) =>id!==task.id);
    
    localStorage.setItem("tasks", JSON.stringify(filteredTasks));

    dispatch({ type:DELETE_TASKS,payload:filteredTasks})
}



