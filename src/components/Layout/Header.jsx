import React from 'react'
import taxi from '../../assets/taxi1.png'
import { Link } from 'react-router-dom'
import { FaInstagram, FaTelegramPlane } from 'react-icons/fa'

export default function Header() {
  return (
<div className="bg-yellow-300 font-serif fixed w-full top-0 left-0 z-50 shadow-md">
  <div className="max-w-[1200px] mx-auto flex items-center justify-between py-3 px-6">
    <div className="flex items-center gap-4">
      <Link to='main'><img src={taxi} alt="NurKadam Logo" className="w-[70px] h-[50px]" /></Link>
    </div>
    <div className="flex gap-10 text-black">
      <Link to='main'><h3 className="cursor-pointer hover:underline hover:text-white">Главная</h3></Link>
      <Link to='conditions'><h3 className="cursor-pointer hover:underline hover:text-white">Условия</h3></Link>
      <Link to='connection'><h3 className="cursor-pointer hover:underline hover:text-white">Подключение</h3></Link>
      <Link to='reviews'><h3 className="cursor-pointer hover:underline hover:text-white">Отзывы</h3></Link>
      <Link to='contacts'><h3 className="cursor-pointer hover:underline hover:text-white">Контакты</h3></Link>
    </div>
      <div className="flex gap-4 text-xl">
              <a href="https://www.instagram.com/nurkadam_taxi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer"><FaInstagram className="hover:text-white" /></a>
              <a href="https://t.me" target="_blank" rel="noopener noreferrer"><FaTelegramPlane className="hover:text-white" /></a>
            </div>    
    <select className="bg-transparent focus:outline-none cursor-pointer text-black">
      <option>Rus</option>
      <option>Krg</option>
    </select>
  </div>
</div>

  )
}
