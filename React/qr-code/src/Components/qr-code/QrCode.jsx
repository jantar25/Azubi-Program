import React from 'react'

const QrCode = ({qrCode}) => {
  return (
    <div className='qr-container'>
        <img src={qrCode.image} alt='QR-codeImage' />
        <div className='text-container'>
            <h3>{qrCode.title}</h3>
            <p>{qrCode.description}</p>
        </div>
    </div>
  )
}

export default QrCode