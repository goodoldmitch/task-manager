import './App.css'
import Header from './components/Header/Header'
import TasksList from './components/TasksList/TasksList'
import TitleSection from './components/TitleSection/TitleSection'
import { useEffect } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function App() {
  
  useEffect(() => {
    const fetchTasks = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      const tasksData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(tasksData)
    };

    fetchTasks();
  }, []);

  return (
    <div>
      <Header />
      <TitleSection />
      <TasksList />
    </div>
  )
}

export default App
