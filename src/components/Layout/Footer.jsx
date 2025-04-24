import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"; import React from 'react'
import { Link } from 'react-router-dom'
import taxi from '../../assets/taxi1.png'

export default function Footer() {
  return (


    <div className="bg-yellow-300 font-serif w-full shadow-md text-black">
      <div className="max-w-[1200px] mx-auto py-10 px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Link to="main">
            <img src={taxi} alt="NurKadam Logo" className="w-[100px] h-auto mb-2" />
          </Link>
          <p className="text-sm">
            NurKadam — официальный партнёр Яндекс.Такси в Кыргызстане. Мы предлагаем выгодные условия водителям по всей стране.
          </p>
        </div>
        <div className="ml-10">
          <h4 className="text-lg mb-4">Навигация</h4>
          <ul className="space-y-6 text-sm flex grid-cols-2 gap-10 ">
            <div className="space-y-3">
              <li><Link to="main" className="hover:underline hover:text-white">Главная</Link></li>
              <li><Link to="conditions" className="hover:underline hover:text-white">Условия</Link></li>
              <li><Link to="connection" className="hover:underline hover:text-white">Подключение</Link></li>
            </div>
            <div className="space-y-3">
              <li><Link to="reviews" className="hover:underline hover:text-white">Отзывы</Link></li>
              <li><Link to="contacts" className="hover:underline hover:text-white">Контакты</Link></li>
            </div>
          </ul>
        </div>
        <div>
  <h4 className="text-lg mb-4">Связаться с нами</h4>
  <div className="space-y-4 text-sm">
    <div className="flex items-start gap-2">
      <FaPhoneAlt className="mt-3" />
      <div className="flex flex-col">
        <a href="tel:+79771679056" className=" hover:text-white">+7 977 167 90 56</a>
        <a href="tel:+79775997133" className=" hover:text-white">+7 977 599 71 33</a>
      </div>
    </div>
    <div className="flex items-center gap-2 hover:text-white">
      <FaEnvelope />
      <a href="mailto:info@nurkadam.kg">info@nurkadam.kg</a>
    </div>
    <div className="flex items-center gap-2 hover:text-white">
      <FaMapMarkerAlt />
      <span>г. Бишкек, ул. Примерная, 12</span>
    </div>
  </div>
</div>


      </div>
      <div className="border-t border-white text-center text-sm py-4">
        © {new Date().getFullYear()} NurKadam. Все права защищены.
      </div>
    </div>

  )
}
