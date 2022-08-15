import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Todo from "./components/pages/Todo";

function App() {
  return <>
    <Routes>
      <Route path='/' element={Home()} />
      <Route path='/todo' element={Todo()} />
      <Route path='/calendar' element='Calendar' />
      <Route path='/about' element='About' />
    </Routes>
  </>;
}

export default App;
