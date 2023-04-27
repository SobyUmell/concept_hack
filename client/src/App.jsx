
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<div className=''>home</div>} />
        <Route path='/roads' element={<div>something else</div>} />
        <Route path='/tasks' element={<div>something else x2</div>} />
      </Routes>
    </>
  )
}

export default App;