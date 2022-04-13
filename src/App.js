import './styles.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import {Landing, Notes, NotFound} from "./pages";
import { Navbar, Sidebar } from './components';

function App() {
  const {pathname} = useLocation();

  return (
    <div className="App">
      {pathname!=="/" && <Navbar/>}

      <div className={(pathname!=="/" && pathname!=="/login" 
      && pathname!=="/signup" && "sidebar-container") || ""}>

        {pathname!=="/" && pathname!=="/login" && pathname!=="/signup" && <Sidebar/>}
        <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path='*' element={<NotFound/>} />
          <Route path='/home' element={<Notes/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
