import './App.css'
import Header from './components/Header/Header'
import TasksList from './components/TasksList/TasksList'
import TitleSection from './components/TitleSection/TitleSection'
import { useState, useEffect } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function App() {
  const [tasksListData , setTasksListData] = useState([])
  const fetchTasks = async () => {
    try{
      const queryToGetTasks = await getDocs(collection(db, "tasks"));
      const tasksData = queryToGetTasks.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      
      setTasksListData(tasksData)
    } catch (error){
      console.log(error.message)
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <Header />
      <TitleSection />
      <TasksList tasksListData={tasksListData} />
    </div>
  )
}

export default App
