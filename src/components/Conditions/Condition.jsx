import React, { useState } from 'react'

export default function Condition() {
  const [passportNumber, setPassportNumber] = useState('');
  const [passportIssueDate, setPassportIssueDate] = useState('');
  const [passportIssuedBy, setPassportIssuedBy] = useState('');
  const [passportValidUntil, setPassportValidUntil] = useState('');
  
  const [driversLicenseNumber, setDriversLicenseNumber] = useState('');
  const [driversLicenseCategory, setDriversLicenseCategory] = useState('');
  const [driversLicenseIssueDate, setDriversLicenseIssueDate] = useState('');
  const [driversLicenseValidUntil, setDriversLicenseValidUntil] = useState('');
  
  const [phoneNumber, setPhoneNumber] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [carDetails, setCarDetails] = useState('');

  // Функция для отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      passport: {
        number: passportNumber,
        issueDate: passportIssueDate,
        issuedBy: passportIssuedBy,
        validUntil: passportValidUntil,
      },
      driversLicense: {
        number: driversLicenseNumber,
        category: driversLicenseCategory,
        issueDate: driversLicenseIssueDate,
        validUntil: driversLicenseValidUntil,
      },
      phoneNumber,
      birthDate,
      carDetails
    };
    console.log('Saved data:', formData);
    // Здесь можно добавить сохранение данных в базу данных или localStorage
  };

  return (
    <div className="w-[1200px] m-auto min-h-screen mt-15 flex justify-center items-center p-8">
      <div className="bg-white p-8 w-[1100px] max-w-4xl">
        <h1 className="text-3xl text-center text-blue-900 mb-9">Форма регистрации</h1>
        <form onSubmit={handleSubmit}>
          {/* Пасспорт */}
          <div className="mb-6 shadow-2xl border-gray-400 border p-7">
            <h2 className="text-2xl text-blue-900 mb-4">Паспорт</h2>
            <label htmlFor="passportNumber" className="block text-xl text-gray-700 mb-2">Номер паспорта</label>
            <input
              id="passportNumber"
              type="text"
              placeholder="Введите номер паспорта"
              value={passportNumber}
              onChange={(e) => setPassportNumber(e.target.value)}
              className="w-full p-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <label htmlFor="passportIssueDate" className="block text-xl text-gray-700 mt-4 mb-2">Дата выдачи паспорта</label>
            <input
              id="passportIssueDate"
              type="date"
              value={passportIssueDate}
              onChange={(e) => setPassportIssueDate(e.target.value)}
              className="w-full p-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <label htmlFor="passportIssuedBy" className="block text-xl text-gray-700 mt-4 mb-2">Кем выдан</label>
            <input
              id="passportIssuedBy"
              type="text"
              placeholder="Кем выдан паспорт"
              value={passportIssuedBy}
              onChange={(e) => setPassportIssuedBy(e.target.value)}
              className="w-full p-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <label htmlFor="passportValidUntil" className="block text-xl text-gray-700 mt-4 mb-2">Срок действия</label>
            <input
              id="passportValidUntil"
              type="date"
              value={passportValidUntil}
              onChange={(e) => setPassportValidUntil(e.target.value)}
              className="w-full p-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Водительские права */}
          <div className="mb-6 shadow-2xl border-gray-400 border p-7">
            <h2 className="text-2xl text-blue-900 mb-4">Водительские права</h2>
            <label htmlFor="driversLicenseNumber" className="block text-xl text-gray-700 mb-2">Номер водительских прав</label>
            <input
              id="driversLicenseNumber"
              type="text"
              placeholder="Введите номер водительских прав"
              value={driversLicenseNumber}
              onChange={(e) => setDriversLicenseNumber(e.target.value)}
              className="w-full p-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <label htmlFor="driversLicenseCategory" className="block text-xl text-gray-700 mt-4 mb-2">Категория прав</label>
            <input
              id="driversLicenseCategory"
              type="text"
              placeholder="Категория прав (A, B, C и т.д.)"
              value={driversLicenseCategory}
              onChange={(e) => setDriversLicenseCategory(e.target.value)}
              className="w-full p-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <label htmlFor="driversLicenseIssueDate" className="block text-xl text-gray-700 mt-4 mb-2">Дата выдачи прав</label>
            <input
              id="driversLicenseIssueDate"
              type="date"
              value={driversLicenseIssueDate}
              onChange={(e) => setDriversLicenseIssueDate(e.target.value)}
              className="w-full p-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <label htmlFor="driversLicenseValidUntil" className="block text-xl text-gray-700 mt-4 mb-2">Срок действия прав</label>
            <input
              id="driversLicenseValidUntil"
              type="date"
              value={driversLicenseValidUntil}
              onChange={(e) => setDriversLicenseValidUntil(e.target.value)}
              className="w-full p-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Телефон и дата рождения */}
          <div className="mb-6 shadow-2xl border-gray-400 border p-7">
            <label htmlFor="phoneNumber" className="block text-xl text-gray-700 mb-2">Номер телефона</label>
            <input
              id="phoneNumber"
              type="tel"
              placeholder="Введите номер телефона"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full p-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <label htmlFor="birthDate" className="block text-xl text-gray-700 mt-4 mb-2">Дата рождения</label>
            <input
              id="birthDate"
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              className="w-full p-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Данные автомобиля */}
          <div className="mb-6 shadow-2xl border-gray-400 border p-7">
            <label htmlFor="carDetails" className="block text-xl text-gray-700 mb-2">Данные автомобиля</label>
            <input
              id="carDetails"
              type="text"
              placeholder="Введите марку и модель автомобиля"
              value={carDetails}
              onChange={(e) => setCarDetails(e.target.value)}
              className="w-full p-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Кнопка отправки */}
          <button
            type="submit"
            className="w-full py-4 text-lg text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Сохранить данные
          </button>
        </form>

        <div className="mt-8 p-6 bg-gray-50 rounded-lg shadow-md text-center">
          <h2 className="text-2xl text-blue-900">Бонус:</h2>
          <p className="text-xl text-blue-600 font-semibold mt-2">Нет штрафов, нет скрытых комиссий!</p>
        </div>
      </div>
    </div>
  )
}
