import { Toaster } from 'react-hot-toast'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import CreateTask from './components/CreateTask'
import Header from './components/Header'
import Home from './pages/Home'
import './styles/app.scss'
import UpdateTask from './components/UpdateTask'

function App() {
  return <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/createTask' element={<CreateTask/>}/>
      <Route path='/updateTask/:id' element={<UpdateTask/>} />
    </Routes>
    <Toaster/>
  </Router>
}

export default App
