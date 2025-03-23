import React, { useState, useEffect } from 'react';
import { getAllRequests } from '../data/requestsData';
import '../styles/CompletedRequests.css';

const CompletedRequests = () => {
  const [requests, setRequests] = useState([]);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);

  useEffect(() => {
    const allRequests = getAllRequests();
    // Filter only completed requests and format dates
    const completedRequests = allRequests
      .filter(request => request.status === 'Completed')
      .map(request => ({
        ...request,
        date: formatDate(request.date)
      }));
    setRequests(completedRequests);
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = '2025';
    return `${day}/${month}/${year}`;
  };

  const handleViewDetails = (request) => {
    setSelectedRequest(request);
    setIsDetailsVisible(true);
  };

  const handleCloseDetails = () => {
    setSelectedRequest(null);
    setIsDetailsVisible(false);
  };

  return (
    <div className="completed-requests-container">
      <h2 className="completed-requests-title">Completed Road Repairs</h2>
      <div className="table-container">
        <table className="completed-requests-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Location</th>
              <th>Description</th>
              <th>Priority</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request) => (
              <tr key={request.id}>
                <td>{request.id}</td>
                <td>{request.location}</td>
                <td>{request.description}</td>
                <td>
                  <span className={`priority-tag ${request.priority.toLowerCase()}`}>
                    {request.priority}
                  </span>
                </td>
                <td>{request.date}</td>
                <td>
                  <span className="status-tag completed">
                    Completed
                  </span>
                </td>
                <td>
                  <button 
                    className="view-button"
                    onClick={() => handleViewDetails(request)}
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Details Modal */}
      {isDetailsVisible && selectedRequest && (
        <div className="details-modal">
          <div className="details-modal-content">
            <div className="details-header">
              <h3>Completion Details - {selectedRequest.id}</h3>
              <button 
                className="close-button" 
                onClick={handleCloseDetails}
              >
                ×
              </button>
            </div>
            
            <div className="details-content">
              <div className="details-section">
                <h4>Location Details</h4>
                <p><strong>Complete Address:</strong> {selectedRequest.address}</p>
                <p><strong>Location:</strong> {selectedRequest.location}</p>
                <p><strong>Traffic Density:</strong> High</p>
                <p><strong>Area Type:</strong> Educational Zone</p>
              </div>

              <div className="details-section">
                <h4>Work Completion Summary</h4>
                <p><strong>Start Date:</strong> {selectedRequest.startDate || '15/01/2025'}</p>
                <p><strong>Completion Date:</strong> {selectedRequest.completionDate || '22/01/2025'}</p>
                <p><strong>Total Duration:</strong> 7 days</p>
                <p><strong>Final Cost:</strong> ₹4,50,000</p>
              </div>

              <div className="details-section">
                <h4>Resources Used</h4>
                <p><strong>Materials Used:</strong></p>
                <ul className="resources-list">
                  <li>Asphalt: 2.5 tons</li>
                  <li>Concrete: 3.0 cubic meters</li>
                  <li>Gravel: 1.5 tons</li>
                  <li>Sand: 1.0 tons</li>
                </ul>
                <p><strong>Equipment Used:</strong></p>
                <ul className="resources-list">
                  <li>Road Roller: 1 unit</li>
                  <li>Excavator: 1 unit</li>
                  <li>Paver: 1 unit</li>
                  <li>Dump Trucks: 2 units</li>
                </ul>
                <p><strong>Total Workers:</strong> 12 workers</p>
              </div>

              <div className="details-section">
                <h4>Quality Assurance</h4>
                <p><strong>Inspection Date:</strong> 23/01/2025</p>
                <p><strong>Inspector:</strong> Mr. Suresh Patel</p>
                <p><strong>Quality Rating:</strong> Excellent</p>
                <p><strong>Warranty Period:</strong> 2 years</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompletedRequests;