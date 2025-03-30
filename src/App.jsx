import './App.css'
import { Routes,Route } from 'react-router-dom'
import PageLayout from './PageLayout'
import StudyCenter from './StudyCenter'

function App() {

  return (
      <Routes>
        <Route path='/' element={<PageLayout/>}>
          <Route path='StudyCenter' element={<StudyCenter/>}/>
        </Route>
        <Route path='*' element={<p>404 Not Found!</p>}/>
      </Routes>
  )
}
export default App
