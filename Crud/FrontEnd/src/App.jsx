import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Student from './Student'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

export default function App() {
  return (
    <div className='App'>
         <BrowserRouter>
        <Routes>
          <Route path='/' element={<Student/>}>asdf</Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
