import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Todo from "./components/pages/Todo";
import Calendar from "./components/pages/Calendar";
import About from "./components/pages/About";
import Line from "./components/pages/Line";
import Pyramid from "./components/pages/Pyramid";
import Column from "./components/pages/Column";
import Pie from "./components/pages/Pie";
import More from "./components/pages/More";
import Support from "./components/pages/Support";
import PDFViewer from "./components/pages/PDFViewer";
import TextEditor from "./components/pages/TextEditor";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/pdfviewer" element={<PDFViewer />} />
        <Route path="/text-editor" element={<TextEditor />} />
        <Route path="/about" element={<About />} />
        <Route path="/line" element={<Line />} />
        <Route path="/column" element={<Column />} />
        <Route path="/pyramid" element={<Pyramid />} />
        <Route path="/pie" element={<Pie />} />
        <Route path="/see-more" element={<More />} />
        <Route path="/project/see-more" element={<More />} />
        <Route path="/support-us" element={<Support />} />
        <Route path="/project/support-us" element={<Support />} />
      </Routes>
    </>
  );
}

export default App;
