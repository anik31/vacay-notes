import './styles.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import {Archive, Label, Landing, Login, Notes, NotFound, Profile, Signup, Trash} from "./pages";
import { Navbar, RestrictAuth, RequireAuth, Sidebar } from './components';
import {useScrollToTop} from "./hooks";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const {pathname} = useLocation();
  useScrollToTop();

  return (
    <div className="App">
      {pathname!=="/" && <Navbar/>}
        <ToastContainer theme="light" autoClose={2000} position="top-right"/>

      <div className={(pathname!=="/" && pathname!=="/login" 
      && pathname!=="/signup" && "sidebar-container") || ""}>
        {pathname!=="/" && pathname!=="/login" && pathname!=="/signup" && <Sidebar/>}
        <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path='*' element={<NotFound/>} />
          <Route element={<RequireAuth/>}>
            <Route path='/home' element={<Notes/>} />
            <Route path='/label' element={<Label/>} />
            <Route path='/archive' element={<Archive/>} />
            <Route path='/trash' element={<Trash/>} />
            <Route path='/profile' element={<Profile/>} />
          </Route>
          <Route element={<RestrictAuth/>}>
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<Signup/>} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
