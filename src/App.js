import './styles.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import {Archive, Label, Landing, Notes, NotFound, Profile, Trash} from "./pages";
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
          <Route path='/label' element={<Label/>} />
          <Route path='/archive' element={<Archive/>} />
          <Route path='/trash' element={<Trash/>} />
          <Route path='/profile' element={<Profile/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
