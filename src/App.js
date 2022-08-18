import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Todo from "./components/pages/Todo";
import Calendar from "./components/pages/Calendar";
import About from './components/pages/About';
import Line from './components/pages/Line';
import Pyramid from './components/pages/Pyramid';
import Column from './components/pages/Column';

function App() {
  return <>
    <Routes>
      <Route path='/' element={Home()} />
      <Route path='/todo' element={Todo()} />
      <Route path='/calendar' element={Calendar()} />
      <Route path='/about' element={About()} />
      <Route path='/line' element={Line()} />
      <Route path='/column' element={Column()} />
      <Route path='/pyramid' element={Pyramid()} />
    </Routes>
  </>;
}

export default App;
