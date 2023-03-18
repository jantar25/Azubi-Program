import React from 'react'

import QrCode from './qr-code/QrCode'
import { data } from '../dummyData'

const QrCodes = () => {
  return (
    <div className='qrCode-space'>
        {data.map(qrCode =><QrCode key={qrCode.id} qrCode ={qrCode}/>)}
    </div>
  )
}

export default QrCodes