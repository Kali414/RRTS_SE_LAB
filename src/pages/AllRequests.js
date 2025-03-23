import React, { useEffect, useState } from "react";
import { getAllRequests } from "../data/requestsData";
import "../styles/AllRequests.css";

const AllRequests = () => {
  const [requests, setRequests] = useState([]);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);

  useEffect(() => {
    try {
      const allRequests = getAllRequests();
      const formattedData = allRequests.map(request => ({
        ...request,
        date: formatDate(request.date)
      }));
      setRequests(formattedData);
    } catch (err) {
      console.error('Error loading requests:', err);
    }
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
    <div className="all-requests-container">
      <h2 className="all-requests-title">All Road Repair Requests</h2>
      <div className="table-container">
        <table className="all-requests-table">
          <thead>
            <tr className="header-row">
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
              <React.Fragment key={request.id}>
                <tr>
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
                    <span className={`status-tag ${request.status.toLowerCase().replace(' ', '-')}`}>
                      {request.status}
                    </span>
                  </td>
                  <td>
                    <button 
                      className="view-button"
                      onClick={() => handleViewDetails(request)}
                      disabled={request.status === 'Completed'}
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      {/* Details Modal */}
      {isDetailsVisible && selectedRequest && (
        <div className="details-modal">
          <div className="details-modal-content">
            <div className="details-header">
              <h3>Request Details - {selectedRequest.id}</h3>
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
                <p><strong>Complete Address:</strong> Near Shivaji International School, Sector 5, Kopar Khairane</p>
                <p><strong>Location:</strong> {selectedRequest.location}</p>
                <p><strong>Traffic Density:</strong> High</p>
                <p><strong>Area Type:</strong> Educational Zone</p>
              </div>

              <div className="details-section">
                <h4>Work Description</h4>
                <p><strong>Description:</strong> {selectedRequest.description}</p>
                <p><strong>Issue Type:</strong> {selectedRequest.description.toLowerCase().includes('pothole') ? 'Pothole Repair' : 'Road Maintenance'}</p>
                <p><strong>Damage Level:</strong> {selectedRequest.priority === 'High' ? 'Severe' : selectedRequest.priority === 'Medium' ? 'Moderate' : 'Minor'}</p>
                <p><strong>Road Type:</strong> Two-lane concrete road</p>
                <p><strong>Affected Area Size:</strong> 100 square meters</p>
                <p><strong>Estimated Duration:</strong> {selectedRequest.priority === 'High' ? '7' : selectedRequest.priority === 'Medium' ? '5' : '3'} working days</p>
              </div>

              <div className="details-section">
                <h4>Required Resources</h4>
                <p><strong>Materials Required:</strong></p>
                <ul className="resources-list">
                  <li>Asphalt: 2.5 tons</li>
                  <li>Concrete: 3.0 cubic meters</li>
                  <li>Gravel: 1.5 tons</li>
                  <li>Sand: 1.0 tons</li>
                </ul>
                <p><strong>Equipment Required:</strong></p>
                <ul className="resources-list">
                  <li>Road Roller: 1 unit</li>
                  <li>Excavator: 1 unit</li>
                  <li>Paver: 1 unit</li>
                  <li>Dump Trucks: 2 units</li>
                </ul>
                <p><strong>Required Workers:</strong> 12 workers</p>
              </div>

              <div className="details-section">
                <h4>Request Information</h4>
                <p><strong>Request Date:</strong> {selectedRequest.date}</p>
                <p><strong>Priority Level:</strong> {selectedRequest.priority}</p>
                <p><strong>Current Status:</strong> {selectedRequest.status}</p>
                <p><strong>Estimated Cost:</strong> ₹4,50,000</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllRequests;