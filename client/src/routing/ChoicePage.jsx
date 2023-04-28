import { Link } from 'react-router-dom'

export default function ChoicePage() {
  return (
    <div className="w-screen h-screen flex bg-dark bg-no-repeat justify-center items-center font-brains">
      <div className="w-[1201px] flex justify-around">
        <Link to='/account' className="w-[500px] h-[545px] flex items-end bg-rain bg-cent bg-no-repeat bg-fir shadow-fir p-[30px] hover:scale-105 transition duration-200 ease-in-out  ">
          <div className="">
            <div className="text-[30px] text-white text-center mb-[24px]">СПОРТСМЕН</div>
            <div className="text-[15px] font-normal text-white">
              Становись участником и найди команду. Объединяйтесь с самыми талантливыми специалистами и создавайте свои команды
            </div>
          </div>
        </Link>
        <Link to='/accountv2' className="w-[500px] h-[545px] flex items-end bg-second bg-no-repeat bg-cent bg-sec shadow-sec p-[30px] hover:scale-105 transition duration-200 ease-in-out">
          <div className="">
            <div className="text-[30px] text-white text-center mb-[24px]">ПАРТНЁР</div>
            <div className="text-[15px] font-normal text-white">
              Создавайте свои мероприятия и получайте прекрасную возможность ознакомиться с последними технологическими трендами в области программирования
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}