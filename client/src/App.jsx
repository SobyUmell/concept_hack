
import { Route, Routes } from 'react-router-dom'
import AuthPage from './routing/AuthPage';
import NotFound from './routing/NotFound'
import SignUpPage from './routing/SignUpPage';



function App() {
  return (
    <Routes >
      <Route path='/' element={<div>Homepage template</div>} />
      <Route path='/auth' element={<AuthPage />} />
      <Route path='/signup' element={<SignUpPage />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App;