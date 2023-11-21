import { Button } from 'flowbite-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { error404 } from '../../../assets/helpers/Images'

const Error404 = () => {
    const navigate = useNavigate()
  return (
    <div className='flex flex-col justify-center items-center py-10'>
        <div>
            <p className='text-3xl font-black font-fontGotu'>Error404</p>
        </div>
        <img src={error404}></img>
        <p className='text-lg pb-10'>No se ha encontrado ninguna pagina aquí!</p>
        <Button onClick={()=> {navigate("/")}}>Volver a pagina principal</Button>
    </div>
    
  )
}

export default Error404