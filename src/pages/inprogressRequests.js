import React, { useState, useEffect } from 'react';
import { getInProgressRequests, updateRequestProgress } from '../data/requestsData';
import '../styles/InProgress.css';

function InProgress() {
  const [requests, setRequests] = useState([]);
  const [viewingDetails, setViewingDetails] = useState(null);
  const [isViewDetailsVisible, setIsViewDetailsVisible] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [progressValue, setProgressValue] = useState(45);
  const [statusNotes, setStatusNotes] = useState('');

  useEffect(() => {
    loadInProgressRequests();
  }, []);

  const loadInProgressRequests = () => {
    const inProgressRequests = getInProgressRequests();
    setRequests(inProgressRequests);
  };

  const handleCloseDetails = () => {
    setIsViewDetailsVisible(false);
    setSelectedRequest(null);
  };

  const handleUpdateProgress = (request) => {
    // Update the request progress
    updateRequestProgress(request.id, progressValue, statusNotes);

    // If progress is 100%, show completion message
    if (progressValue === 100) {
      alert('Work completed! Request moved to Completed Requests.');
    }

    // Refresh the in-progress requests list
    loadInProgressRequests();
    
    // Reset form and close details
    setViewingDetails(null);
    setProgressValue(45);
    setStatusNotes('');
  };

  const formatDate = (date) => {
    if (!date) return '';
    return new Date(date).toLocaleDateString();
  };

  return (
    <div className="completed-requests-container">
      <h2 className="completed-requests-title">In Progress Road Repairs</h2>
      {requests.length > 0 ? (
        <div className="table-container">
          <table className="completed-requests-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Location</th>
                <th>Description</th>
                <th>Priority</th>
                <th>Start Date</th>
                <th>Progress</th>
                <th>Action</th>
                <th>View Details</th>
              </tr>
            </thead>
            <tbody>
              {requests.map(request => (
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
                      <div className="progress-bar-container">
                        <div 
                          className="progress-bar"
                          style={{ width: `${50}%` }}
                        ></div>
                      </div>
                      <span className="progress-text">{request.progress || 50}% Complete</span>
                    </td>
                    <td>
                      <button 
                        className="update-status-button"
                        onClick={() => setViewingDetails(request.id)}
                      >
                        Update Status
                      </button>
                    </td>
                    <td>
                      <button 
                        className="view-details-button"
                        onClick={() => {
                          setSelectedRequest(request);
                          setIsViewDetailsVisible(true);
                        }}
                      >
                        View Details
                      </button>
                    </td>
                  </tr>

                  {viewingDetails === request.id && (
                    <tr>
                      <td colSpan="8" className="details-row">
                        <div className="details-grid">
                          <div className="details-column">
                            <h3 className="details-subtitle">Work Progress Details</h3>
                            <div className="details-content">
                              <div className="details-section">
                                <p className="section-title">Materials Used</p>
                                <div className="resources-grid">
                                  <div className="resource-item">
                                    <p className="resource-label">Asphalt</p>
                                    <p className="resource-value">2.5 tons</p>
                                  </div>
                                  <div className="resource-item">
                                    <p className="resource-label">Concrete</p>
                                    <p className="resource-value">1.2 cu.m</p>
                                  </div>
                                  <div className="resource-item">
                                    <p className="resource-label">Gravel</p>
                                    <p className="resource-value">0.8 tons</p>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="details-section">
                                <p className="section-title">Equipment in Use</p>
                                <div className="resources-grid">
                                  <div className="resource-item">
                                    <p className="resource-label">Road Roller</p>
                                    <p className="resource-value">1 unit</p>
                                  </div>
                                  <div className="resource-item">
                                    <p className="resource-label">Paver</p>
                                    <p className="resource-value">1 unit</p>
                                  </div>
                                  <div className="resource-item">
                                    <p className="resource-label">Excavator</p>
                                    <p className="resource-value">1 unit</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="details-column">
                            <h3 className="details-subtitle">Update Progress</h3>
                            <div className="details-content">
                              <div className="details-section">
                                <label className="input-label">
                                  Completion Percentage
                                </label>
                                <input 
                                  type="range" 
                                  min="0" 
                                  max="100" 
                                  value={progressValue}
                                  onChange={(e) => setProgressValue(parseInt(e.target.value))}
                                  className="progress-slider"
                                />
                                <span className="progress-value">{progressValue}%</span>
                              </div>
                              
                              <div className="details-section">
                                <label className="input-label">
                                  Status Notes
                                </label>
                                <textarea 
                                  className="status-textarea"
                                  rows="3"
                                  value={statusNotes}
                                  onChange={(e) => setStatusNotes(e.target.value)}
                                  placeholder="Add completion notes..."
                                ></textarea>
                              </div>
                              
                              <div className="button-group">
                                <button 
                                  className="cancel-button"
                                  onClick={() => {
                                    setViewingDetails(null);
                                    setProgressValue(45);
                                    setStatusNotes('');
                                  }}
                                >
                                  Cancel
                                </button>
                                <button 
                                  className="update-button"
                                  onClick={() => handleUpdateProgress(request)}
                                >
                                  Update Progress
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="no-data-message">No repairs currently in progress</p>
      )}

      {/* View Details Modal */}
      {isViewDetailsVisible && selectedRequest && (
        <div className="details-modal">
          <div className="details-modal-content">
            <div className="details-header">
              <h3>Work Progress Details - {selectedRequest.id}</h3>
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
                <h4>Work Progress</h4>
                <p><strong>Current Progress:</strong> {selectedRequest.progress || 0}% Complete</p>
                <p><strong>Start Date:</strong> {formatDate(selectedRequest.assignmentDetails?.startDate)}</p>
                <p><strong>Estimated Duration:</strong> {selectedRequest.assignmentDetails?.estimatedDuration} days</p>
                <p><strong>Expected Completion:</strong> {formatDate(selectedRequest.assignmentDetails?.startDate + (selectedRequest.assignmentDetails?.estimatedDuration * 86400000))}</p>
              </div>

              <div className="details-section">
                <h4>Labor Status</h4>
                <p><strong>Workers Assigned:</strong> 15</p>
                <p><strong>Shift Schedule:</strong> 8:00 AM - 5:00 PM</p>
                <p><strong>Current Workers Present:</strong> 13</p>
                <p><strong>Work Hours Today:</strong> 6.5 hours</p>
                <p><strong>Total Work Hours:</strong> 156 hours</p>
                <p><strong>Safety Incidents:</strong> 0</p>
              </div>

              <div className="details-section">
                <h4>Equipment Deployed</h4>
                <div className="resources-list">
                  {Object.entries({
                    roadRoller: { units: 2, hoursUsed: 45, status: 'Active', operator: 'Rajesh Kumar' },
                    excavator: { units: 1, hoursUsed: 32, status: 'Maintenance', operator: 'Sunil Patil' },
                    paver: { units: 2, hoursUsed: 38, status: 'Active', operator: 'Amit Shah' },
                    dumpTruck: { units: 3, hoursUsed: 52, status: 'Active', operator: 'Multiple' },
                    compactor: { units: 1, hoursUsed: 28, status: 'Active', operator: 'Prakash Jha' }
                  }).map(([equipment, details]) => (
                    <div key={equipment} className="resource-status">
                      <p><strong>{equipment.charAt(0).toUpperCase() + equipment.slice(1)}:</strong></p>
                      <p>Units Deployed: {details.units}</p>
                      <p>Hours Used: {details.hoursUsed}</p>
                      <p>Status: <span className={`status-${details.status.toLowerCase()}`}>{details.status}</span></p>
                      <p>Operator: {details.operator}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="details-section">
                <h4>Materials Status</h4>
                <div className="resources-list">
                  {Object.entries({
                    asphalt: { total: 25.5, used: 12.8, remaining: 12.7, quality: 'Grade A' },
                    concrete: { total: 15.2, used: 8.5, remaining: 6.7, quality: 'Grade A' },
                    gravel: { total: 18.0, used: 10.2, remaining: 7.8, quality: 'Grade B' },
                    sand: { total: 12.5, used: 7.3, remaining: 5.2, quality: 'Grade A' },
                    steel: { total: 5.0, used: 2.8, remaining: 2.2, quality: 'Grade A' }
                  }).map(([material, details]) => (
                    <div key={material} className="resource-status">
                      <p><strong>{material.charAt(0).toUpperCase() + material.slice(1)}:</strong></p>
                      <p>Total Required: {details.total} tons</p>
                      <p>Used: {details.used} tons</p>
                      <p>Remaining: {details.remaining} tons</p>
                      <p>Quality Check: {details.quality}</p>
                    </div>
                  ))}
                </div>
              </div>

              {selectedRequest.assignmentDetails?.notes && (
                <div className="details-section">
                  <h4>Work Notes</h4>
                  <p>{selectedRequest.assignmentDetails.notes}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default InProgress;