import { useState } from 'react'
import { useCounter } from './hooks/useCounter'
import StatusBar from './components/StatusBar'
import SaveButton from './components/SaveButton'
import OfflineWarning from './components/OfflineWarning'
import UserList from './components/UserList'
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
  return (
    <>
      <Counter1/>
      <br />
      <br />
      <Counter2/>      
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
    </>
  )
}

export default App
