import React from 'react'

const QrCode = ({qrCode}) => {
  return (
    <div>
        <div>
            <img src={qrCode.image} alt='QR-codeImage' />
        </div>
        <div>
            <h3>{qrCode.title}</h3>
            <p>{qrCode.description}</p>
        </div>
    </div>
  )
}

export default QrCode