import { Task } from "@/app/Types/types";
import { Dispatch } from "redux";
import { ADD_TASKS, DELETE_TASKS, GET_TASKS } from "../types/task.types";



export const getTasks=()=>{
    const storedTasks = localStorage.getItem("tasks");
    let res: Task[] | [] = storedTasks ? JSON.parse(storedTasks) as Task[] : [];

    return {type:GET_TASKS,payload:res};
}

export const addTask=(task:Task)=>{

    const storedTasks = localStorage.getItem("tasks");
    let res: Task[] | [] = storedTasks ? JSON.parse(storedTasks) as Task[] : [];
    
    res.push(task);
    localStorage.setItem("tasks", JSON.stringify(res));

    return { type:ADD_TASKS,payload:res}
}


export const deleteTask=(id:string)=>{

    const storedTasks = localStorage.getItem("tasks");
    let res: Task[] | [] = storedTasks ? JSON.parse(storedTasks) as Task[] : [];
    
    let filteredTasks = res.filter((task) =>id!==task.id);
    
    localStorage.setItem("tasks", JSON.stringify(filteredTasks));

    return { type:DELETE_TASKS,payload:filteredTasks}
}



