import { Button, FormControl, FormLabel, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, useToast } from '@chakra-ui/react';
import "../styles/notFound.css";
import * as image from "../../../public/no-data-img.png"

import Image from 'next/image';
import { ModalWork, Task } from '../Types/types';
import { ChangeEvent, MutableRefObject, useState } from 'react';
import {useDispatch} from "react-redux"
import { addTask } from '../redux/actions/task.actions';
export interface INotFound{
    modalWork:ModalWork;
    initialRef: MutableRefObject<null>;
    finalRef: MutableRefObject<null>
}


const DataNotFound = ({modalWork,initialRef,finalRef}:INotFound) => {

    const toast = useToast();
    const dispatch = useDispatch();

   const[task,setTask]=useState({
   id:Math.random()+Date.now().toString(),
   title:"",
   description:"",
   status:"To Do"
 })

 console.log(task);

 const handleChange=(event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>)=>{
     setTask({...task,[event.target.name]:event.target.value})
  }

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


  return (
    <div className="notFound">
      
      <Heading as="h2" color={"#ff5697"}>Oops ! No Task found 🤒</Heading>
      <Image src={image} alt="not found pics" width={150} height={150}/>
      <button onClick={modalWork.onOpen}>Add Task</button>
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
    </div>
  )
}

export default DataNotFound;