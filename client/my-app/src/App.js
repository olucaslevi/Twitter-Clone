import React,{useState} from 'react';
import './App.css';
import Axios from 'axios';

function App() {
  const [data,setData] = useState({
    name:"",
    email:"",
    password:"",
  });

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;
  
    setData((prevalue) => {
      return {
        ...prevalue,   // Spread Operator               
        [name]: value
      }
    })
  }


  const handleSubmit = () => {
    Axios.post('http://localhost:9090/users/create',data).then((response)=>{
      console.log(response);
    });
  }
  return (
    <div className="App">
      <header className="App-header">
        <h3>React App: My-app </h3>
        <form>
          <label> Name: </label><br/>
          <input onChange={handleChange} type="text" name="name" className='nameInput' /><br/>
          <label> Email: </label><br/>
          <input onChange={handleChange} type="email" name="email" className='emailInput' /><br/>
          <label> Password: </label><br/>
          <input onChange={handleChange} type="password" name="password" className='passwordInput' /><br/>
          <button onClick={handleSubmit}> Submit </button>
          <label value={data}></label>
        </form>
      </header>
    </div>
  );
}

export default App;
