import React from 'react'
import { HiCheckBadge } from 'react-icons/hi2'
import { IoMdCloseCircle } from 'react-icons/io'

const Card = ({ title, textButton, price }) => {
  return (
    <div className='hover:shadow-lg w-full border-blue-400 border hover:scale-105 transition-all duration-300 shadow-blue-600 flex flex-col gap-5 rounded-lg p-4 md:p-6'>
      <h3 className='text-center text-lg font-semibold text-blue-500'>{title}</h3>
      <hr />
      <div className='flex flex-col gap-2 font-medium'>
        <p className='text-sm flex items-center gap-3'>
          <HiCheckBadge className='text-blue-500 text-base' /> Mencatat Barang Masuk
        </p>
        <p className='text-sm flex items-center gap-3'>
          <HiCheckBadge className='text-blue-500 text-base' /> Mencatat Barang Keluar
        </p>
        <p className='text-sm flex items-center gap-3'>
          <HiCheckBadge className='text-blue-500 text-base' /> Mencatat Hasil Keuntungan
        </p>
        <p className='text-sm flex items-center gap-3'>
          {title == 'ENTREPRENEUR' || title == 'BUSINESS' ? (
            <HiCheckBadge className='text-blue-500 text-base' />
          ) : (
            <IoMdCloseCircle className='text-red-500 text-base' />
          )}{' '}
          Menganalisa hasil penjualan
        </p>
        <p className='text-sm flex items-center gap-3'>
          {title == 'ENTREPRENEUR' || title == 'BUSINESS' ? (
            <HiCheckBadge className='text-blue-500 text-base' />
          ) : (
            <IoMdCloseCircle className='text-red-500 text-base' />
          )}{' '}
          Support 7x24 Jam
        </p>
        <p className='text-sm flex items-center gap-3'>
          {title == 'ENTREPRENEUR' ? (
            <HiCheckBadge className='text-blue-500 text-base' />
          ) : (
            <IoMdCloseCircle className='text-red-500 text-base' />
          )}{' '}
          Export data ke Excel
        </p>
        <p className='text-sm flex items-center gap-3'>
          {title == 'ENTREPRENEUR' ? (
            <HiCheckBadge className='text-blue-500 text-base' />
          ) : (
            <IoMdCloseCircle className='text-red-500 text-base' />
          )}{' '}
          AI Prediksi penghasilan
        </p>
      </div>
      <div className='flex flex-col gap-1 mt-2'>
        <button
          className={`border rounded-lg py-3 transition-all duration-300 hover:opacity-80 ${
            title == 'ENTREPRENEUR' ? 'bg-blue-500 text-white' : 'border-blue-500 text-blue-500'
          } font-bold`}
        >
          {textButton}
        </button>
        <p className='text-gray-400 text-xs text-center'>Rp {price}/month*</p>
      </div>
    </div>
  )
}

export default Card
