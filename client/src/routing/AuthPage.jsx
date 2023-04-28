import { Link } from "react-router-dom"
import logo from '../assets/img/logo.svg'

function AuthForm() {
  return (
    <form className="shadow-base bg-viol w-[345px] h-[281px] rounded-[20px] p-5 flex-col items-center space-y-4">
      <div className="w-full">
        <label for="first-name" className="block text-sm font-medium leading-6 ">Логин</label>
        <div className="mt-2">
          <input type="text" name="first-name" id="first-name" autocomplete="given-name" className="bg-dark text-cloud block w-full rounded-md py-1.5 px-1.5 ring-0 placeholder:text-gray-400  outline-0 border border-cloud focus:border-pinky shadow-non-dark shadow-md " />
        </div>
      </div>
      <div className="w-full">
        <label for="first-name" className="block text-sm font-medium leading-6 ">Пароль</label>
        <div className="mt-2">
          <input type="password" name="first-name" id="first-name" autocomplete="given-name" className="bg-dark text-cloud block w-full rounded-md py-1.5 px-1.5 ring-0 placeholder:text-gray-400 outline-0 border border-cloud focus:border-pinky shadow-non-dark shadow-md" />
        </div>
      </div>

      <div className="w-full pt-[20px] flex flex-col space-y-[10px]">
        <Link to='/choice' className="bg-dark text-cloud h-[35px] rounded-[14px] hover:bg-pinky hover:border-pinky hover:text-dark transition duration-200 text-lg shadow-non-dark shadow-md flex justify-center items-center">
          Войти
        </Link>
      </div>
    </form>
  )
}

export default function AuthPage() {
  return (
    <div className="w-screen h-screen bg-dark flex justify-center items-center text-cloud font-brains">
      <div className="flex flex-col flex-initial space-y-[20px]">
        <img className="w-[150px] self-center" src={logo} alt="" />
        <div className="text-pinky text-[60px] text-center font-comfort font-bold">
          Geek Up
        </div>
        <AuthForm />
        <div className="text-center">Нет аккаунта? <Link to='/signup' className="text-[17px] font-bold text-pinky hover:underline">Зарегистрироваться</Link></div>
        
      </div>
    </div>
  )
}