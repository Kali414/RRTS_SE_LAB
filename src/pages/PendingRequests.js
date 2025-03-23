import React, { useState, useEffect } from 'react';
import { getAllRequests, updateRequestStatus } from '../data/requestsData';
import '../styles/PendingRequests.css';

const PendingRequests = () => {
  const [requests, setRequests] = useState([]);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);
  const [isAssignWorkVisible, setIsAssignWorkVisible] = useState(false);
  const [assignWorkData, setAssignWorkData] = useState({
    materials: {
      asphalt: '',
      concrete: '',
      gravel: '',
      sand: ''
    },
    equipment: {
      roadRoller: '',
      excavator: '',
      paver: '',
      dumpTrucks: ''
    },
    workers: '',
    startDate: '',
    estimatedDuration: '',
    notes: ''
  });

  useEffect(() => {
    const allRequests = getAllRequests();
    const pendingRequests = allRequests.filter(request => request.status === 'Pending');
      setRequests(pendingRequests);
  }, []);

  const handleAssignWork = () => {
    if (selectedRequest) {
      // Create assignment details object from form data
      const assignmentDetails = {
        materials: assignWorkData.materials,
        equipment: assignWorkData.equipment,
        workers: assignWorkData.workers,
        startDate: assignWorkData.startDate,
        estimatedDuration: assignWorkData.estimatedDuration,
        notes: assignWorkData.notes
      };

      // Update the request status to "In Progress"
      updateRequestStatus(selectedRequest.id, 'In Progress', assignmentDetails);

      // Update local state to reflect the change
      const updatedRequests = requests.filter(req => req.id !== selectedRequest.id);
      setRequests(updatedRequests);

      // Close the modal and reset form
      setIsAssignWorkVisible(false);
      setSelectedRequest(null);
      setAssignWorkData({
        materials: {
          asphalt: '',
          concrete: '',
          gravel: '',
          sand: ''
        },
        equipment: {
          roadRoller: '',
          excavator: '',
          paver: '',
          dumpTrucks: ''
        },
        workers: '',
        startDate: '',
        estimatedDuration: '',
        notes: ''
      });

      // Show success message
      alert('Work has been successfully assigned and moved to In Progress');
    }
  };

  const handleViewDetails = (request) => {
    setSelectedRequest(request);
    setIsDetailsVisible(true);
  };

  return (
    <div className="completed-requests-container">
      <h2 className="completed-requests-title">Pending Road Repairs</h2>
      
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
              <th>Assign Work</th>
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
                    <span className="status-tag pending">
                      Pending
                    </span>
                  </td>
                  <td>
                    <button 
                      className="assign-button"
                      onClick={() => {
                        setSelectedRequest(request);
                        setIsAssignWorkVisible(true);
                      }}
                    >
                      Assign Work
                    </button>
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
              </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>

      {/* Assign Work Modal */}
      {isAssignWorkVisible && selectedRequest && (
        <div className="details-modal">
          <div className="details-modal-content">
            <div className="details-header">
              <h3>Assign Work - Request ID: {selectedRequest.id}</h3>
              <button 
                className="close-button"
                onClick={() => setIsAssignWorkVisible(false)}
              >
                ×
              </button>
            </div>
            
            <div className="assign-work-content">
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
                <div className="materials-grid">
                  <div className="input-group">
                    <label>Asphalt (tons)</label>
                    <input 
                      type="number" 
                      defaultValue="2.5"
                      onChange={(e) => setAssignWorkData({
                        ...assignWorkData,
                        materials: { ...assignWorkData.materials, asphalt: e.target.value }
                      })}
                    />
                  </div>
                  <div className="input-group">
                    <label>Concrete (cu.m)</label>
                    <input 
                      type="number"
                      defaultValue="3.0"
                      onChange={(e) => setAssignWorkData({
                        ...assignWorkData,
                        materials: { ...assignWorkData.materials, concrete: e.target.value }
                      })}
                    />
                  </div>
                  <div className="input-group">
                    <label>Gravel (tons)</label>
                    <input 
                      type="number"
                      defaultValue="1.5"
                      onChange={(e) => setAssignWorkData({
                        ...assignWorkData,
                        materials: { ...assignWorkData.materials, gravel: e.target.value }
                      })}
                    />
                  </div>
                  <div className="input-group">
                    <label>Sand (tons)</label>
                    <input 
                      type="number"
                      defaultValue="1.0"
                      onChange={(e) => setAssignWorkData({
                        ...assignWorkData,
                        materials: { ...assignWorkData.materials, sand: e.target.value }
                      })}
                    />
                  </div>
                </div>

                <p><strong>Equipment Required:</strong></p>
                <div className="equipment-grid">
                  <div className="input-group">
                    <label>Road Roller</label>
                    <input 
                      type="number"
                      defaultValue="1"
                      onChange={(e) => setAssignWorkData({
                        ...assignWorkData,
                        equipment: { ...assignWorkData.equipment, roadRoller: e.target.value }
                      })}
                    />
                  </div>
                  <div className="input-group">
                    <label>Excavator</label>
                    <input 
                      type="number"
                      defaultValue="1"
                      onChange={(e) => setAssignWorkData({
                        ...assignWorkData,
                        equipment: { ...assignWorkData.equipment, excavator: e.target.value }
                      })}
                    />
                  </div>
                  <div className="input-group">
                    <label>Paver</label>
                    <input 
                      type="number"
                      defaultValue="1"
                      onChange={(e) => setAssignWorkData({
                        ...assignWorkData,
                        equipment: { ...assignWorkData.equipment, paver: e.target.value }
                      })}
                    />
                  </div>
                  <div className="input-group">
                    <label>Dump Trucks</label>
                    <input 
                      type="number"
                      defaultValue="2"
                      onChange={(e) => setAssignWorkData({
                        ...assignWorkData,
                        equipment: { ...assignWorkData.equipment, dumpTrucks: e.target.value }
                      })}
                    />
                  </div>
                </div>
              </div>

              <div className="details-section">
                <h4>Work Planning</h4>
                <div className="schedule-grid">
                  <div className="input-group">
                    <label>Number of Workers</label>
                    <input 
                      type="number"
                      defaultValue="12"
                      onChange={(e) => setAssignWorkData({
                        ...assignWorkData,
                        workers: e.target.value
                      })}
                    />
                  </div>
                  <div className="input-group">
                    <label>Start Date</label>
                    <input 
                      type="date"
                      onChange={(e) => setAssignWorkData({
                        ...assignWorkData,
                        startDate: e.target.value
                      })}
                    />
                  </div>
                  <div className="input-group">
                    <label>Estimated Duration (days)</label>
                    <input 
                      type="number"
                      defaultValue={selectedRequest.priority === 'High' ? '7' : selectedRequest.priority === 'Medium' ? '5' : '3'}
                      onChange={(e) => setAssignWorkData({
                        ...assignWorkData,
                        estimatedDuration: e.target.value
                      })}
                    />
                  </div>
                </div>
              </div>

              <div className="details-section">
                <h4>Additional Notes</h4>
                <textarea 
                  className="notes-textarea"
                  placeholder="Add any additional notes or instructions..."
                  rows="3"
                  onChange={(e) => setAssignWorkData({
                    ...assignWorkData,
                    notes: e.target.value
                  })}
                />
              </div>

              <div className="button-group">
                <button 
                  className="cancel-button"
                  onClick={() => setIsAssignWorkVisible(false)}
                >
                  Cancel
                </button>
                <button 
                  className="assign-work-button"
                  onClick={handleAssignWork}
                >
                  Assign Work
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* View Details Modal */}
      {isDetailsVisible && selectedRequest && (
        <div className="details-modal">
          <div className="details-modal-content">
            <div className="details-header">
              <h3>Request Details - {selectedRequest.id}</h3>
              <button 
                className="close-button" 
                onClick={() => setIsDetailsVisible(false)}
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
                <h4>Work Requirements</h4>
                <p><strong>Description:</strong> {selectedRequest.description}</p>
                <p><strong>Issue Type:</strong> {selectedRequest.description.toLowerCase().includes('pothole') ? 'Pothole Repair' : 'Road Maintenance'}</p>
                <p><strong>Damage Level:</strong> {selectedRequest.priority === 'High' ? 'Severe' : selectedRequest.priority === 'Medium' ? 'Moderate' : 'Minor'}</p>
                <p><strong>Road Type:</strong> Two-lane concrete road</p>
                <p><strong>Affected Area Size:</strong> 100 square meters</p>
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
                <h4>Work Planning</h4>
                <p><strong>Estimated Duration:</strong> {selectedRequest.priority === 'High' ? '7' : selectedRequest.priority === 'Medium' ? '5' : '3'} working days</p>
                <p><strong>Estimated Start Date:</strong> {selectedRequest.date}</p>
                <p><strong>Expected Completion:</strong> Within {selectedRequest.priority === 'High' ? '7' : selectedRequest.priority === 'Medium' ? '5' : '3'} days from start</p>
                <p><strong>Estimated Cost:</strong> ₹4,50,000</p>
              </div>

              <div className="details-section">
                <h4>Safety Measures</h4>
                <p><strong>Traffic Management Plan:</strong> Traffic diversion and signage required</p>
                <p><strong>Safety Equipment:</strong> PPE for all workers, barricades, warning lights</p>
                <p><strong>Emergency Contact:</strong> Site Supervisor (24x7)</p>
                <p><strong>Special Considerations:</strong> School zone safety protocols to be followed</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PendingRequests;