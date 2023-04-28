
import { Route, Routes } from 'react-router-dom'
import Account from './routing/Account';
import AuthPage from './routing/AuthPage';
import ChoicePage from './routing/ChoicePage';
import NotFound from './routing/NotFound'
import SignUpPage from './routing/SignUpPage';
import AccountV2 from './routing/AccountV2'



function App() {
  return (
    <Routes >
      <Route path='/' element={<AuthPage />} />
      <Route path='/signup' element={<SignUpPage />} />
      <Route path='/choice' element={<ChoicePage />} />
      <Route path='/account' element={<Account />} />
      <Route path='/accountv2' element={<AccountV2 />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App;