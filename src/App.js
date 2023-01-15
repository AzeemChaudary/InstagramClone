import {BrowserRouter,Route,Routes} from "react-router-dom";
import './App.css';
import HomePage from "./Components/HomePage";
import Messeges from "./Components/Messeges";
import OnetoOneMesseges from "./Components/OnetoOneMesseges";
import Profile from "./Components/Profile";
function App() {
  return (
    <>
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<HomePage/>} /> 
        <Route path="/HomePage" element={<HomePage/>} /> 
         {/* <Route path="/HomePage/Messeges" element={<Messeges/>} /> */}
         {/* <Route path="/Profile/:UserId" element={<Profile/>}/> */}
        {/* <Route path="/ListTodo" element={<ListTodo/>}  />
        <Route path="/ListTodo/:_id" element={<EditTodo/>} />  */}
        
        <Route path="/Profile/:UserId" element={<Profile/>} />
       
        <Route path="/Messeges/:userID/:Receiver" element={<Messeges/>}/>
        <Route path="/OnetoOneMesseges/:userID/:UserName/:MessageID" element={<OnetoOneMesseges/>} />
       </Routes>

       </BrowserRouter>
    </>
  );
}

export default App;
