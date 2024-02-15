import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Layouts from './Layouts';
import Name from './pages/Name';
import Email from './pages/Email';
import ApiData from './pages/ApiData';

function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Layouts/>}>
                  <Route path='/name' element={<Name/>}/>
                  <Route path='/email' element={<Email/>}/>
                  <Route path='/apidata' element={<ApiData/>}/>
              </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
