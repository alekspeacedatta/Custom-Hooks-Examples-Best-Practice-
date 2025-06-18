import { useState, useEffect } from 'react'
import { useCounter } from './hooks/useCounter'
import { useToggle } from './hooks/useToggle'
import StatusBar from './components/StatusBar'
import SaveButton from './components/SaveButton'
import OfflineWarning from './components/OfflineWarning'
import UserList from './components/UserList'
import ProductList from './components/ProductList'
import ToggleExample from './components/ToggleExample'
import './App.css'
const Counter1 = () => {
  const {count, increment} = useCounter(0);
  return <button onClick={increment}>Counter 1 Clicked {count} times </button>
}
const Counter2 = () => {
  const { count, increment } = useCounter(100);
  return <button onClick={increment}>Counter 2 Clicked {count} times</button>
}
function App() {
  const {value: isVisible, toggle} = useToggle();
  const body = document.body;
  if(body){
    body.style.backgroundColor = isVisible ? 'black' : 'white';
    body.style.color = isVisible ? 'white' : 'black';
  }
  return (
    <div>
      <div>
        <ToggleExample/>
      </div>
      <br />
      <div>
        <button onClick={toggle}>change theme color</button>
      </div>
      <br />
      <div>
        <Counter1/>
        <br />
        <br />
        <Counter2/>      
      </div>
      <div>
        <StatusBar/>
      </div>
      <br/>
      <div>
        <SaveButton/>
      </div>
      <br/>
      <div>
        <OfflineWarning/>
      </div>
      <br/>
      <div>
        <UserList/>
      </div>
      <br />
      <br />
      <div>
        <ProductList/>
      </div>
      <br />
      <br />
    </div>
  )
}

export default App
