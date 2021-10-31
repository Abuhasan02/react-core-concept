import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <Users></Users> 
    </div>
  );
}

function Counter(props){
  const [count,setCount] = useState(10);
  return (
    <div>
      <h1>Counter: {count} </h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increse</button>
    </div>
  );
}
function Users(){
  const [users,setUsers]= useState([]);
  useEffect(()=>{
   fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => setUsers(data))
  },[]);
  return (
    <div>
      <h3>Fetch Data</h3>
      <ul>
      {
        users.map(user => 
          <li>Name: {user.name} Email: {user.email}</li>
        )
      }
      </ul>
    </div>
  );
}

export default App;
