import './styles.css';
import { Route, Routes } from 'react-router-dom';
import {Landing, Home, NotFound} from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
