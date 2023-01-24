import React from 'react'
import "../styles/modal.css"
export default function Modal({ isOpen, onClose, children }) {
  return (
    <div className='modalContainer' style={{ display: isOpen ? "grid" : "none" }} >
      <div className="modalBody">
        {children}
      </div>
    </div>
  )
}
