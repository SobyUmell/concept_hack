export default function NotFound() {
  return (
    <div className="w-screen h-screen bg-dark flex justify-center items-center text-cloud font-brains">
      <div className="w-[500px] h-[500px] flex flex-col flex-initial space-y-[20px] overflow-hidden">
        <div className="text-[60px] text-pinky text-center">404</div>
        <div className='text-red-900'>Page not found</div>
        <div className='self-end'>The error</div>
        <div className='self-end'>Упс! Страница не найдена</div>
        <div className='text-red-500 rotate-[30deg] self-center'>Page not found</div>
        <div className='text-red-500 rotate-[-7deg] text-[34px]'>Page not found</div> 
        <div className='self-end text-[20px]'>Желаю найти свой путь! (＠＾◡＾)</div>
        <div className='text-red-200 text-[20px]'>Page not found</div>
        <div className='text-red-700'>Page not found</div>
        <div className='text-red-600'>Page not found</div>
      </div>
    </div>
  )
}