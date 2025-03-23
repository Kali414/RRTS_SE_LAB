import React from 'react';
import './LogoutModal.css';

const LogoutModal = ({ isOpen, onClose, onLogout }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target.className === 'modal-overlay') {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button 
          className="modal-close-button" 
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>
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