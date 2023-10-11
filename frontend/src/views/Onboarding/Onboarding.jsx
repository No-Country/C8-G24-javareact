import React from 'react'

export const Onboarding = () => {
    
  return (
    <div className="bg-onboarding-background h-screen flex justify-end items-center">
        <div className="w-9/12 bg-[#F8CF32] rounded-l-3xl p-11 h-fit flex flex-row-reverse max-md:w-10/12 max-sm:w-11/12 items-center">
            <div>
                <p className='font-logoFont text-5xl mb-3 text-white max-sm:text-2xl'>Te damos la bienvenida</p>
                <p className='font-fontFuzzy text-3xl max-sm:text-md'>Para una mejor experiencia recuerda brindar tu ubicación</p>
            </div>
            <div className='flex flex-col items-center w-80 mr-10 max-lg:mr-1'>
                <div className='flex flex-col justify-end font-logoFont gap-2 mb-3 text-white '>
                    <p className='text-4xl max-sm:text-3xl'>KAI</p>
                    <p className='text-4xl max-sm:text-3xl'>PET</p>
                </div>
                <p className='font-fontGaldeano text-md'>En donde comparar precios esta bueno!</p>
            </div>
        </div>
    </div>
  )
}
