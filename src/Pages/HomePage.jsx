import { Search } from 'lucide-react'
import React from 'react'

const HomePage = () => {
  return (
    <div className='bg-[#faf9fb] p-10 flex-1'>
      <div className="max-w-screen-lg mx-auto">
        <form>
          <label htmlFor="" className="input shadow-md flex items-center gap-2">
            <Search size={"24"}/>
            <input type="text" className='text-sm md:text-md grow' placeholder='Que quieres buscar?'/>
          </label>
        </form>
        <h1 className="font-bold text-3xl md:text-5xl mt-4">Recomendado</h1>
        <p className='text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight'>Popular</p>

        <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"></div>
      </div>

    </div>

  )
}

export default HomePage