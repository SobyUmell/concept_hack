
import logo from '../assets/img/avatar.svg'
import { Link } from 'react-router-dom'


export default function SignUpPage() {

  return (
    <div className='font-brains bg-dark w-full text-cloud flex flex-col items-center relative'>
      <Link to='/auth' className='fixed top-[20px] left-[20px]'>Назад</Link>
      <div className=' w-[170px] my-[40px]'>
        <img src={logo} alt="" className='w-[170px] shadow-base rounded-full'/>
        <h3 className='text-center text-cloud mt-[10px] text-[18px]'>Добавить фото</h3>
      </div>
      <h1 className='text-center text-cloud text-[20px] mb-[40px]'>Заполните поля ввода</h1>
      <div className='flex gap-[20px] mb-[40px]'>
        <div className="w-[220px]">
          <label for="first-name" className="shadow- block text-sm font-medium leading-6 ">Email</label>
          <div className="mt-2">
            <input type="email" name="first-name" id="first-name" autocomplete="given-name" className="bg-dark text-cloud block w-full rounded-md py-1.5 px-1.5 ring-0 placeholder:text-gray-400 outline-0 border border-cloud focus:border-pinky shadow-gray-900 shadow-md" />
          </div>
        </div>
        <div className="w-[220px] ">
          <label for="first-name" className="block text-sm font-medium leading-6 ">Дата рождения</label>
          <div className="mt-2">
            <input type="date" name="first-name" id="first-name" autocomplete="given-name" className=" bg-dark text-cloud block w-full rounded-md py-1.5 px-1.5 ring-0 placeholder:text-gray-400 outline-0 border border-cloud focus:border-pinky shadow-gray-900 shadow-md" />
          </div>
        </div>
      </div>
      <div className='flex gap-[20px] mb-[40px]'>
        <div className="w-[220px]">
          <label for="first-name" className="block text-sm font-medium leading-6 ">Пароль</label>
          <div className="mt-2">
            <input type="password" name="first-name" id="first-name" autocomplete="given-name" className=" bg-dark text-cloud block w-full rounded-md py-1.5 px-1.5 ring-0 placeholder:text-gray-400 outline-0 border border-cloud focus:border-pinky shadow-gray-900 shadow-md" />
          </div>
        </div>
        <div className="w-[220px]">
          <label for="first-name" className="block text-sm font-medium leading-6 ">Серия и номер паспорта</label>
          <div className="mt-2">
            <input type="text" name="first-name" id="first-name" autocomplete="given-name" className=" bg-dark text-cloud block w-full rounded-md py-1.5 px-1.5 ring-0 placeholder:text-gray-400 outline-0 border border-cloud focus:border-pinky shadow-gray-900 shadow-md" />
          </div>
        </div>
      </div>
      <div className='flex gap-[20px] mb-[40px]'>
        <div className="w-[220px]">
          <label for="first-name" className="block text-sm font-medium leading-6 ">ФИО</label>
          <div className="mt-2">
            <input type="text" name="first-name" id="first-name" autocomplete="given-name" className=" bg-dark text-cloud block w-full rounded-md py-1.5 px-1.5 ring-0 placeholder:text-gray-400 outline-0 border border-cloud focus:border-pinky shadow-gray-900 shadow-md" />
          </div>
        </div>
        <div className='w-[220px]'>
          <label for="country" class="block text-sm font-medium leading-6">Регион</label>
          <div class="mt-2">
            <select id="country" name="country" autocomplete="country-name" class= " bg-dark text-cloud block w-full rounded-md py-1.5 px-1.5 ring-0 placeholder:text-gray-400 outline-0 border border-cloud focus:border-pinky shadow-gray-900 shadow-md">
              <option>Якутия</option>
              <option>Москва</option>
            </select>
          </div>
        </div>
      </div>
      <h1 className='text-center text-cloud text-[20px] my-[40px]'>Выберете специализация и навыки</h1>
      <div className='w-[500px] mb-[40px]'>
        <select id="country" name="country" autocomplete="country-name" class=" bg-dark text-cloud block w-full rounded-md py-1.5 px-1.5 ring-0 placeholder:text-gray-400 outline-0 border border-cloud focus:border-pinky shadow-gray-900 shadow-md">
          <option>Frontend-Разработка</option>
          <option>Backend-Разработка</option>
          <option>UI/UX Design</option>
          <option>Data Scientist</option>
          <option>Machine Learning</option>
          <option>IT security specialist</option>
          <option>Network engineer</option>
          <option>Database administrator</option>
        </select>
      </div>
      <Link to='/choice' className="w-[200px] mb-[140px] border border-cloud bg-dark text-cloud h-[35px] rounded-[14px] hover:bg-pinky hover:border-pinky hover:text-dark transition duration-200 text-lg shadow-gray-900 shadow-md flex justify-center items-center">Сохранить</Link>
    </div>
  )
}