import { Badge, Button, FormControl, FormLabel, IconButton, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Text, useToast } from '@chakra-ui/react';
import {AddIcon,DeleteIcon,EditIcon} from "@chakra-ui/icons";
import {useDispatch,useSelector} from "react-redux"
import React, { ChangeEvent, useState } from 'react';
import "../styles/allTasks.css";
import { Task } from '../Types/types';
import { INotFound } from './NotFound';
import { addTask, deleteTask } from '../redux/actions/task.actions';

const AllTasks = ({modalWork,initialRef,finalRef}:INotFound) => {

    const tasksList = useSelector((state: any) => state.tasksList);
    const toast = useToast();
    const dispatch = useDispatch();

   const[task,setTask]=useState({
   id:Math.random()+Date.now().toString(),
   title:"",
   description:"",
   status:"To Do"
 });

 const handleChange=(event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>)=>{
    setTask({...task,[event.target.name]:event.target.value})
 }

//  dispatching addtask action 

 const handleAddTask=(task:Task)=>{
     if(task.title==="" || task.description==="" ){
       return toast({
           title: 'Error Occured',
           description: "Please Fill All Fields",
           status: 'error',
           duration: 2000,
           isClosable: true,
         })
     }

    dispatch(addTask(task));
    
    modalWork.onClose();

    return toast({
       title: 'Success',
       description: "Task Added..",
       status: 'success',
       duration: 2000,
       isClosable: true,
     })
     
 }

//  dispatching delete action 

 const handleDeleteTask = (id:string)=>{
    dispatch(deleteTask(id))
    return toast({
        title: 'Deleted',
        description: "Task Deleted From List",
        status: 'success',
        duration: 2000,
        isClosable: true,
      })
}

  return (
    <div className='allTasks'>
          <Button className='add-task-btn' rightIcon={<AddIcon />} colorScheme='teal' variant='outline' onClick={modalWork.onOpen}>
    Add task to list
    </Button>

    {/* modal pop-up  */}
    <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={modalWork.isOpen}
                onClose={modalWork.onClose}
                isCentered={true}
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Enter Your Details</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody pb={6}>
                    <FormControl isRequired >
                      <FormLabel>Title</FormLabel>
                      <Input name="title" value={task.title} 
                        
                        ref={initialRef}
                        
                        placeholder="Enter Title"
                        onChange={handleChange}
                       
                      />
                    </FormControl>

                    <FormControl mt={4} isRequired >
                      <FormLabel>description</FormLabel>
                      <Input 
                        name="description" value={task.description}
                        
                        placeholder="Enter description"
                        onChange={handleChange}
                        
                      />
                    </FormControl>
                    <FormControl mt={4}>
                      <FormLabel>Choose an option:</FormLabel>
                      <Select
                        
                       name='status' value={task.status}
                        placeholder="select status of task"
                        onChange={handleChange}
                      >
                        <option value="To Do">To Do</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                      </Select>
                    </FormControl>
                  </ModalBody>

                  <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={()=>handleAddTask(task)} >
                      Save
                    </Button>
                    <Button onClick={modalWork.onClose}>Cancel</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>


    {/* task container  */}

   <div className='task-container'>
     {
      tasksList?.map((task:Task)=>{
        return <div key={task.id} className='singleTask'>
                  <Text className="task-title" fontWeight='bold'>
                 {task.title} &nbsp;
                  {
                    task.status === "To Do" ? <Badge ml='1' colorScheme='cyan'>
                    {task.status}
                  </Badge> : task.status === "In Progress" ?<Badge ml='1' colorScheme='orange'>
        {task.status}
      </Badge> : <Badge ml='1' colorScheme='green'>
        {task.status}
      </Badge>
                  }
                    </Text>
                  <p className='task-desc'>{task.description}</p>
                  <div className='func-btn'>

                  <IconButton
                   variant='outline'
                    colorScheme='cyan'
                    aria-label='Edit task'
                   icon={<EditIcon />}
/>
                  <IconButton
                     variant='outline'
                     colorScheme='red'
                    aria-label='Delete task'
                    icon={<DeleteIcon />}
                    onClick={()=>handleDeleteTask(task.id)}
                            />
                  </div>
            </div>
      })
     }
   </div>
    </div>
  )
}

export default AllTasks