import React from 'react'
import taxi1 from '../../assets/taxi5.jpg'
export default function Section2() {
  return (
    <div>
            <section
  className="relative bg-cover bg-center py-44"
  style={{ backgroundImage: `url(${taxi1})` }}
>
  <div className="absolute bg-black inset-0 opacity-90 z-0" />
  <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-white">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
      Преимущества работы с <span className="text-yellow-400">NurKadam</span>
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-lg">
      <div className="flex items-start gap-4">
        <span className="text-3xl">💰</span>
        <p>Доход от 3000 сом в день</p>
      </div>
      <div className="flex items-start gap-4">
        <span className="text-3xl">🕒</span>
        <p>Вывод денег 24/7</p>
      </div>
      <div className="flex items-start gap-4">
        <span className="text-3xl">🎧</span>
        <p>Поддержка на кыргызском и русском</p>
      </div>
      <div className="flex items-start gap-4">
        <span className="text-3xl">📄</span>
        <p>Бесплатная регистрация</p>
      </div>
      <div className="flex items-start gap-4">
        <span className="text-3xl">🚗</span>
        <p>Работаешь сам на себя</p>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}
