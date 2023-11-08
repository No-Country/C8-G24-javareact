import React from 'react'
import ProfileTable from '../ProfileTable/ProfileTable'

const SessionProfile = ({auth}) => {
  return (
    <div className='flex gap-4 mt-4'>
        <ProfileTable title={"Registro de usuario"} firstData={auth.metadata.creationTime}/>
        <ProfileTable title={"Ultimo inicio de sesión"} firstData={auth.metadata.lastSignInTime
}/>
    </div>
  )
}

export default SessionProfile