
import { useState, createContext ,useContext } from 'react'
import Component1 from './components/Component1';
import './App.css'


export const UserContext = createContext();
function App() {
  
  const [user, setUser] = useState("Mou Mandal");

  return (
    <>
      <UserContext.Provider value={user}>
        <h1>
          {`Hello ! ${user}`}
        </h1>
        <Component1></Component1>
      </UserContext.Provider>

    </>
  )
}

export default App
