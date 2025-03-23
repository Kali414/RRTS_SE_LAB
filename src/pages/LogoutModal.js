import React from 'react';
import '../styles/LogoutModal.css';

const LogoutModal = ({ isOpen, onClose, onLogout }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p className='modal-close-button' onClick={onClose}>X</p>
        <h2 className="modal-title">Logout Confirmation</h2>
        <p className="modal-message">Are you sure you want to logout?</p>
        <div className="modal-buttons">
          <button 
            className="modal-button cancel-button" 
            onClick={onClose}
          >
            No
          </button>
          <button 
            className="modal-button confirm-button" 
            onClick={onLogout}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;