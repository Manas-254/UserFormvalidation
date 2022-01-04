
import './App.css';
import UserForm from './components/UserForm';
import UserTable from './components/UserTable';
import { useState } from 'react';

function App() {
  const [userFormData, setuserFormData] = useState([])
  let getUserData=(userData)=>{
    const userFormDataCopy=[...userFormData]
    userFormDataCopy.push(userData)
    setuserFormData(userFormDataCopy)
  }
  return (
    <div className="App">
      <UserForm getUserData={getUserData}/>
      <UserTable userFormData={userFormData}/>
    </div>
  );
  
}

export default App;
