"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { Heading, useDisclosure } from '@chakra-ui/react'
import {useSelector,useDispatch} from "react-redux"
import { useState,ChangeEvent, useEffect, useRef } from 'react'
import { addTask, deleteTask, getTasks } from './redux/actions/task.actions'
import { Task } from './Types/types'
import AllTasks from './components/AllTasks'
import DataNotFound from './components/NotFound'
import { CalendarIcon } from '@chakra-ui/icons'


export default function Home() {

  const modalWork = useDisclosure();
  const initialRef = useRef(null)
  const finalRef = useRef(null)
  


  const tasksList = useSelector((state: any) => state.tasksList);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getTasks());
  },[dispatch])

  console.log(tasksList)
  // console.log(task)

  return (
    <div>
      <Heading width="full" m="10px auto" textAlign="center" color="black.200"  textDecoration="underline" textDecorationColor="orange.400">Task Management App <CalendarIcon/></Heading>
      
       
       
       <div>
        {
          tasksList?.length>0?<AllTasks modalWork={modalWork} initialRef={initialRef} finalRef={finalRef}/>:<DataNotFound modalWork={modalWork} initialRef={initialRef} finalRef={finalRef}/>
        }
       </div>
    </div>
  )
}
