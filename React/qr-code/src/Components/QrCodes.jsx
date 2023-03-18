import React from 'react'

import QrCode from './qr-code/QrCode'
import qrCodeImg from '../images/image-qr-code.png'


const data = [{
    id:1,
    image:qrCodeImg,
    title:'Improve your Front-end skills by building projects',
    description:'Scan the QR-Code to visit Front-end Mentor and take your coding skills to the next level'
}]

const QrCodes = () => {
  return (
    <div className='qrCode-space'>
        {data.map(qrCode =><QrCode key={qrCode.id} qrCode ={qrCode}/>)}
    </div>
  )
}

export default QrCodes