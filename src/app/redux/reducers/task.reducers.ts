import { Task } from "@/app/Types/types";
import { ADD_TASKS, DELETE_TASKS, EDIT_TASKS, GET_TASKS } from "../types/task.types";

export interface TaskState {
    tasksList: Task[];
  }
  
  const initialState: TaskState = {
    tasksList: [],
  };

  export const todoReducer=(state=initialState,{type,payload}:{type:string,payload:Task[]})=>{

    switch(type) {
        case GET_TASKS:{
            return {
                tasksList:[...payload]
            }
        }
        case ADD_TASKS:{
            return {
                tasksList:[...payload]
            }
        }
        case DELETE_TASKS:{
            return {
                tasksList:[...payload]
            }
        }
        case EDIT_TASKS:{
            return {
                tasksList:[...payload]
            }
        }
        default:
        return state;
    }
    
  }