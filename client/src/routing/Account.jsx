import logo from '../assets/img/avatar.svg'
import icon1 from '../assets/img/icon1.svg'
import icon2 from '../assets/img/icon2.svg'
import icon3 from '../assets/img/icon3.svg'
import icon4 from '../assets/img/icon4.svg'
import yak from '../assets/img/yak.png'
import preview from '../assets/img/preview.png'




function Main() {
  return (
    <>
    <div className='flex items-center justify-between py-[40px]'>
      <img className='w-[170px]' src={logo} alt="" />
      <div>
        <h1 className='font-medium text-[24px] mb-[34px]'>Надолинский Кирилл Александрович</h1>
        <div className='flex gap-[26px] '>
          <div className='flex space-x-[10px]'>
            <img src={icon1} alt="" />
            <span>06.01.2005</span>
          </div>
          <div className='flex space-x-[10px]'>
            <img src={icon2} alt="" />
            <span>Якутия</span>
          </div>
          <div className='flex space-x-[10px]'>
            <img src={icon3} alt="" />
            <span>+7(938)1241170</span>
          </div>
          <div className='flex space-x-[10px]'>
            <img src={icon4} alt="" />
            <span>spandiger444</span>
          </div>
        </div>
        
      </div>
      <div className='flex flex-col'>
          <img src={yak} alt="" className='w-[200px]'/>
          <span className='text-center'>Якутия</span>
        </div>
    </div>
    <div>

    </div>
    </>
  )
}

function Sportsman() {
  return (
    <>
    <div className='flex gap-[20px] text-dark font-brains mb-[30px]'>
      <div className='w-[25%] h-[555px] flex flex-col gap-[14px] justify-between'>
        <div className='p-[10px] h-1/3 bg-white flex flex-col rounded-2xl gap-[20px]'>
          <h4 className='text-center text-[20px]'>Достижения</h4>
          <div className='text-[14px]'>Здесь будут отмечаться ваши успехи в соревнованиях и заработанные отчивки</div>
        </div>
        <div className='p-[10px] h-1/3 bg-white flex flex-col rounded-2xl gap-[20px]'>
          <h4 className='text-center text-[20px]'>Обо мне</h4>
          <div className='text-[14px]'>
            Расскажите, где и кем работали, — так пользователи узнают, в каких сферах вы разбираетесь.
          </div>
        </div>
        <div className='p-[10px] h-1/3 bg-white flex flex-col rounded-2xl gap-[20px]'>
          <h4 className='text-center text-[20px]'>Навыки</h4>
          <div className='text-[16px] flex gap-[5px] flex-wrap overflow-y-scroll'>
            <span className='text-dark bg-cloud p-1'>Backend</span>
            <span className='text-dark bg-cloud p-1'>Node.JS</span>
            <span className='text-dark bg-cloud p-1'>Golang</span>
            
          </div>
        </div>
      </div>
      <div className='w-[75%] h-[555px] bg-white rounded-2xl p-[10px] flex flex-col'>
        <h1 className='text-dark text-[20px] text-center'>Активности</h1>
        <div className='self-start flex gap-[10px] items-center'>
          <div className='p-[3px] bg-dark text-white rounded-md text-center'>Текущие</div>
          <div className='hover:bg-dark hover:text-white p-[3px] rounded-md transition '>Прошедшие</div>
        </div>
        <div className="w-full gap-[15px] flex flex-wrap overflow-y-scroll">
          <div className='w-[300px]'>
            <img src={preview} alt="" />
            <h1 className='font-bold text-[20px]'>Хакатон в рамках Всероссийских соревнований по спортивному программированию</h1>
            <div className='flex gap-[7px]'>
              <span className='text-[13px] text-cloud'>Дата проведения</span>
              <span className='text-[13px]'>27.04.2023, 14:00:00</span>
            </div>
            <div className='flex gap-[7px] mb-[10px]'>
              <span className='text-[14px] text-cloud'>Команда</span>
              <span className='text-[13px]'>от 3 до 5 участников</span>
            </div>
            <button className="w-[200px] mb-[140px] bg-dark text-white h-[35px] rounded-[14px] hover:bg-pinky hover:border-pinky hover:text-dark transition duration-200 text-lg">Подробнее</button>
          </div>
          <div className='w-[300px]'>
            <img src={preview} alt="" />
            <h1 className='font-bold text-[20px]'>Хакатон в рамках Всероссийских соревнований по спортивному программированию</h1>
            <div className='flex gap-[7px]'>
              <span className='text-[13px] text-cloud'>Дата проведения</span>
              <span className='text-[13px]'>27.04.2023, 14:00:00</span>
            </div>
            <div className='flex gap-[7px] mb-[10px]'>
              <span className='text-[14px] text-cloud'>Команда</span>
              <span className='text-[13px]'>от 3 до 5 участников</span>
            </div>
            <button className="w-[200px] mb-[140px] bg-dark text-white h-[35px] rounded-[14px] hover:bg-pinky hover:border-pinky hover:text-dark transition duration-200 text-lg">Подробнее</button>
          </div>
          <div className='w-[300px]'>
            <img src={preview} alt="" />
            <h1 className='font-bold text-[20px]'>Хакатон в рамках Всероссийских соревнований по спортивному программированию</h1>
            <div className='flex gap-[7px]'>
              <span className='text-[13px] text-cloud'>Дата проведения</span>
              <span className='text-[13px]'>27.04.2023, 14:00:00</span>
            </div>
            <div className='flex gap-[7px] mb-[10px]'>
              <span className='text-[14px] text-cloud'>Команда</span>
              <span className='text-[13px]'>от 3 до 5 участников</span>
            </div>
            <button className="w-[200px] mb-[140px] bg-dark text-white h-[35px] rounded-[14px] hover:bg-pinky hover:border-pinky hover:text-dark transition duration-200 text-lg">Подробнее</button>
          </div>
        </div>
      </div>

    </div>
    <div>
      <h3 className='text-[30px] my-[60px]'>Команда</h3>
      <div className='pb-[100px]'>
        <div className='flex gap-[30px] text-center'>
          <div>
            <img src={logo} alt="" />
            <h5 className='mt-[20px]'>Надолинский Кирилл (CAP)</h5>
          </div>
          <div>
            <img src={logo} alt="" />
            <h5 className='mt-[20px]'>Умханов Собар-Али</h5>
          </div>
          <div>
            <img src={logo} alt="" />
            <h5 className='mt-[20px]'>Малышев Ярослав</h5>
          </div>
          <div>
            <img src={logo} alt="" />
            <h5 className='mt-[20px]'>Лагоуу Глэб</h5>
          </div>
        </div>

      </div>
    </div>

    </>
  )
}

export default function Account() {
  return (
    <div className='bg-dark text-white'>
      <div className="max-w-[1100px] mx-auto">
        <Main />
        <Sportsman />
      </div>
      
    </div>
  )
}
