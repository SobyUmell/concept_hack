
import { Route, Routes } from 'react-router-dom'
import AuthPage from './routing/AuthPage';

function App() {
  return (
    <Routes>
      <Route path='/auth' element={<AuthPage />} />
      <Route path='/some' element={<div>something else</div>} />
      <Route path='/somex2' element={<div>something else x2</div>} />
    </Routes>
  )
}

export default App;