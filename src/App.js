import './styles.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import {Archive, Label, Landing, Login, Notes, NotFound, Profile, Signup, Trash} from "./pages";
import { Navbar, NavigateFromAuth, RequireAuth, Sidebar } from './components';
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
          <Route path='/home' element={<RequireAuth> <Notes/> </RequireAuth>} />
          <Route path='/label' element={<RequireAuth> <Label/> </RequireAuth>} />
          <Route path='/archive' element={<RequireAuth> <Archive/> </RequireAuth>} />
          <Route path='/trash' element={<RequireAuth> <Trash/> </RequireAuth>} />
          <Route path='/profile' element={<RequireAuth> <Profile/> </RequireAuth>} />
          <Route path='/login' element={<NavigateFromAuth> <Login/> </NavigateFromAuth>} />
          <Route path='/signup' element={<NavigateFromAuth> <Signup/> </NavigateFromAuth>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
