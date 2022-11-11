import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import Dashboard from './Components/Super/Dashboard';
import Category from './Components/Super/Category';


function App() {

  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signin />} />
      <Route path='/Signup' element={<Signup />} />
      <Route path="/Superdash" element={<Dashboard />} />
      <Route path="/Category" element={<Category />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
