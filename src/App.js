import './styles.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import {Archive, Label, Landing, Login, Notes, NotFound, Profile, Signup, Trash} from "./pages";
import { Navbar, RestrictAuth, RequireAuth, WithSidebar } from './components';
import {useScrollToTop} from "./hooks";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const {pathname} = useLocation();
  useScrollToTop();

  return (
    <div className="App">
      {pathname!=="/" && <Navbar/>}
        <ToastContainer theme="light" autoClose={1000} position="top-right"/>
        <Routes>
          <Route path='/' element={<Landing/>} />
          <Route element={<RequireAuth/>}>
            <Route element={<WithSidebar/>}>
              <Route path='/home' element={<Notes/>} />
              <Route path='/label' element={<Label/>} />
              <Route path='/archive' element={<Archive/>} />
              <Route path='/trash' element={<Trash/>} />
              <Route path='/profile' element={<Profile/>} />
            </Route>
          </Route>
          <Route element={<RestrictAuth/>}>
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<Signup/>} />
          </Route>
          <Route path='*' element={<NotFound/>} />
        </Routes>
    </div>
  );
}

export default App;
