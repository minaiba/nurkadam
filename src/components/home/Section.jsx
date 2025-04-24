import React from 'react'
import './section.scss'
export default function Section() {
  return (
<div
  className="relative w-full bg-cover bg-center text-white animate-moveBg"
>
  <div className="absolute inset-0 bg-neutral-600 z-0" />
  <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-32 flex flex-col md:flex-row items-center justify-between">
    <div className="mb-10 md:mb-0 md:mr-10">
      <div className="speed">
        <div className="speed__wheel">
          <div className="speed__tick">
            {Array.from({ length: 20 }).map((_, i) => (
              <div className="tick" value={i * 10} key={i}></div>
            ))}
          </div>
          <div className="pointer"></div>
          <div className="endpoint"></div>
        </div>
      </div>
    </div>
    <div className="text-center md:text-left">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Работай с <span className="text-yellow-400">NurKadam</span> —<br />
        официальным партнёром Яндекс.Такси в Кыргызстане!
      </h1>
      <div className="space-y-2 text-lg mb-8">
        <p>💸 Высокий доход</p>
        <p>🟡 Комиссия 2%</p>
        <p>🕓 Поддержка 24/7</p>
        <p>⚡ Быстрый старт</p>
      </div>
      <div className="flex justify-center md:justify-start gap-4 flex-wrap">
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-2xl shadow-lg transition">
          Подключиться сейчас
        </button>
        <button className="bg-white hover:bg-gray-200 text-black font-medium px-6 py-3 rounded-2xl shadow">
          Узнать подробнее
        </button>
      </div>
    </div>
  </div>
</div>

  );
};

