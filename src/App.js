import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { useState } from "react";
import Popup from "./components/Popup";
function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Add tests to homepage" },
    { id: 2, title: "Fix styling in about section" },
    { id: 3, title: "Learn how to center a div" },
  ]);
  const [inputfieldType, setinputfieldType] = useState("");
  const addTask = (title, second) => {
    setTasks((tasks) => [
      ...tasks,
      { id: tasks.length + 1, title, second: second },
    ]);
  };
  const [openPopup, setopenPopup] = useState(false);

  
  return (
    <>
      <Popup
        openPopup={openPopup}
        setopenPopup={setopenPopup}
        addTask={addTask}
        inputfieldType={inputfieldType}
        setinputfieldType={setinputfieldType}
      />
      <div className="container mx-auto  w-2/3 bg-[#EAECEF]">
        <Header
          setopenPopup={setopenPopup}
          inputfieldType={inputfieldType}
          setinputfieldType={setinputfieldType}
        />

        <Main tasks={tasks} setTasks={setTasks} addTask={addTask} />
        {/* <CustomKanban/> */}
      </div>
    </>
  );
}

export default App;
