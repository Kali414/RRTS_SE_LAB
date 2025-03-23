// import React, { useState } from 'react';


// export function SupervisorDashboard() {
//   // State declarations
//   const [activeTab, setActiveTab] = useState('assessments');
//   const [activeSidebarItem, setActiveSidebarItem] = useState('allRequests');
//   const [pendingAssessments, setPendingAssessments] = useState([
//     { 
//       id: 'REQ-2025-001', 
//       location: 'Main Street & 5th Avenue', 
//       reportDate: '2025-03-15', 
//       status: 'Pending Assessment',
//       district: 'Central District',
//       reportedBy: 'John Smith',
//       priority: 'High'
//     },
//     { 
//       id: 'REQ-2025-002', 
//       location: 'Westfield Road, Block 3', 
//       reportDate: '2025-03-16', 
//       status: 'Pending Assessment',
//       district: 'Western Zone',
//       reportedBy: 'Sarah Johnson',
//       priority: 'Medium'
//     },
//     { 
//       id: 'REQ-2025-003', 
//       location: 'Eastside Highway, Mile 27', 
//       reportDate: '2025-03-17', 
//       status: 'Pending Assessment',
//       district: 'Eastern District',
//       reportedBy: 'Mike Brown',
//       priority: 'High'
//     },
//     { 
//       id: 'REQ-2025-004', 
//       location: 'North Park Avenue & 3rd Street', 
//       reportDate: '2025-03-17', 
//       status: 'Pending Assessment',
//       district: 'Northern Zone',
//       reportedBy: 'Emily Davis',
//       priority: 'Low'
//     },
//     { 
//       id: 'REQ-2025-005', 
//       location: 'South Market Square', 
//       reportDate: '2025-03-18', 
//       status: 'Pending Assessment',
//       district: 'Southern District',
//       reportedBy: 'Robert Wilson',
//       priority: 'Medium'
//     },
//     { 
//       id: 'REQ-2025-006', 
//       location: 'Industrial Area, Sector 4', 
//       reportDate: '2025-03-18', 
//       status: 'Pending Assessment',
//       district: 'Industrial Zone',
//       reportedBy: 'Lisa Anderson',
//       priority: 'High'
//     },
//     { 
//       id: 'REQ-2025-007', 
//       location: 'Commercial Hub, Block B', 
//       reportDate: '2025-03-19', 
//       status: 'Pending Assessment',
//       district: 'Business District',
//       reportedBy: 'David Thompson',
//       priority: 'Medium'
//     },
//     { 
//       id: 'REQ-2025-008', 
//       location: 'School Zone, Education Street', 
//       reportDate: '2025-03-19', 
//       status: 'Pending Assessment',
//       district: 'Educational Zone',
//       reportedBy: 'Karen White',
//       priority: 'High'
//     },
//     { 
//       id: 'REQ-2025-009', 
//       location: 'Hospital Road Junction', 
//       reportDate: '2025-03-20', 
//       status: 'Pending Assessment',
//       district: 'Healthcare Zone',
//       reportedBy: 'James Miller',
//       priority: 'High'
//     },
//     { 
//       id: 'REQ-2025-010', 
//       location: 'Residential Colony, Block 7', 
//       reportDate: '2025-03-20', 
//       status: 'Pending Assessment',
//       district: 'Residential Zone',
//       reportedBy: 'Patricia Clark',
//       priority: 'Medium'
//     },
//     { 
//       id: 'REQ-2025-011', 
//       location: 'Metro Station Road, Exit 2', 
//       reportDate: '2025-03-21', 
//       status: 'Pending Assessment',
//       district: 'Transit Zone',
//       reportedBy: 'Thomas Lee',
//       priority: 'High'
//     },
//     { 
//       id: 'REQ-2025-012', 
//       location: 'Sports Complex Avenue', 
//       reportDate: '2025-03-21', 
//       status: 'Pending Assessment',
//       district: 'Recreation Zone',
//       reportedBy: 'Nancy Martinez',
//       priority: 'Low'
//     },
//     { 
//       id: 'REQ-2025-013', 
//       location: 'Shopping Mall Entrance, Block D', 
//       reportDate: '2025-03-22', 
//       status: 'Pending Assessment',
//       district: 'Commercial Zone',
//       reportedBy: 'George Wilson',
//       priority: 'High'
//     },
//     { 
//       id: 'REQ-2025-014', 
//       location: 'Tech Park Road, Sector 7', 
//       reportDate: '2025-03-22', 
//       status: 'Pending Assessment',
//       district: 'IT Park Zone',
//       reportedBy: 'Alice Cooper',
//       priority: 'Medium'
//     },
//     { 
//       id: 'REQ-2025-015', 
//       location: 'Airport Link Road', 
//       reportDate: '2025-03-23', 
//       status: 'Pending Assessment',
//       district: 'Airport Zone',
//       reportedBy: 'Peter Chang',
//       priority: 'High'
//     },
//     { 
//       id: 'REQ-2025-016', 
//       location: 'University Campus Road', 
//       reportDate: '2025-03-23', 
//       status: 'Pending Assessment',
//       district: 'University Zone',
//       reportedBy: 'Rachel Green',
//       priority: 'Medium'
//     },
//     { 
//       id: 'REQ-2025-017', 
//       location: 'Central Park Perimeter Road', 
//       reportDate: '2025-03-24', 
//       status: 'Pending Assessment',
//       district: 'Park Zone',
//       reportedBy: 'Daniel Brown',
//       priority: 'Low'
//     },
//     { 
//       id: 'REQ-2025-018', 
//       location: 'Railway Station Approach Road', 
//       reportDate: '2025-03-24', 
//       status: 'Pending Assessment',
//       district: 'Railway Zone',
//       reportedBy: 'Susan Taylor',
//       priority: 'High'
//     },
//     { 
//       id: 'REQ-2025-019', 
//       location: 'Market Street, Old City', 
//       reportDate: '2025-03-25', 
//       status: 'Pending Assessment',
//       district: 'Heritage Zone',
//       reportedBy: 'Michael Scott',
//       priority: 'Medium'
//     },
//     { 
//       id: 'REQ-2025-020', 
//       location: 'Bus Terminal Road', 
//       reportDate: '2025-03-25', 
//       status: 'Pending Assessment',
//       district: 'Transport Hub',
//       reportedBy: 'Jennifer Lopez',
//       priority: 'High'
//     }
//   ]);
//   const [completedAssessments, setCompletedAssessments] = useState([
//     { id: 'REQ-2025-000', location: 'North Park Avenue', reportDate: '2025-03-10', assessmentDate: '2025-03-11', priority: 'High', status: 'Scheduled' },
//   ]);
//   const [assessmentForm, setAssessmentForm] = useState({
//     requestId: '',
//     severity: 'medium',
//     localityType: 'residential',
//     priority: 'medium',
//     notes: '',
//     materials: {
//       asphalt: 0,
//       concrete: 0,
//       gravel: 0
//     },
//     machines: {
//       roadroller: 0,
//       pavingmachine: 0,
//       excavator: 0
//     },
//     personnel: {
//       laborers: 0,
//       operators: 0,
//       engineers: 0
//     }
//   });
//   const [isFormVisible, setIsFormVisible] = useState(false);

//   // Function to start new assessment
//   const startAssessment = (request) => {
//     setAssessmentForm({
//       ...assessmentForm,
//       requestId: request.id
//     });
//     setIsFormVisible(true);
//   };

//   // Function to handle input changes in the form
//   const handleInputChange = (e, section, field) => {
//     if (section) {
//       setAssessmentForm({
//         ...assessmentForm,
//         [section]: {
//           ...assessmentForm[section],
//           [field]: parseInt(e.target.value) || 0
//         }
//       });
//     } else {
//       setAssessmentForm({
//         ...assessmentForm,
//         [field]: e.target.value
//       });
//     }
//   };

//   // Function to submit assessment
//   const submitAssessment = (e) => {
//     e.preventDefault();
    
//     // Find the request in pending assessments
//     const requestIndex = pendingAssessments.findIndex(req => req.id === assessmentForm.requestId);
//     if (requestIndex !== -1) {
//       const request = pendingAssessments[requestIndex];
      
//       // Create a new completed assessment
//       const newCompletedAssessment = {
//         ...request,
//         assessmentDate: new Date().toISOString().split('T')[0],
//         priority: assessmentForm.priority,
//         severity: assessmentForm.severity,
//         localityType: assessmentForm.localityType,
//         status: 'Scheduled',
//         materials: { ...assessmentForm.materials },
//         machines: { ...assessmentForm.machines },
//         personnel: { ...assessmentForm.personnel },
//         notes: assessmentForm.notes
//       };
      
//       // Update state
//       setCompletedAssessments([newCompletedAssessment, ...completedAssessments]);
      
//       // Remove from pending
//       const newPendingAssessments = [...pendingAssessments];
//       newPendingAssessments.splice(requestIndex, 1);
//       setPendingAssessments(newPendingAssessments);
      
//       // Reset form and hide it
//       setIsFormVisible(false);
//       setAssessmentForm({
//         requestId: '',
//         severity: 'medium',
//         localityType: 'residential',
//         priority: 'medium',
//         notes: '',
//         materials: {
//           asphalt: 0,
//           concrete: 0,
//           gravel: 0
//         },
//         machines: {
//           roadroller: 0,
//           pavingmachine: 0,
//           excavator: 0
//         },
//         personnel: {
//           laborers: 0,
//           operators: 0,
//           engineers: 0
//         }
//       });
//     }
//   };

//   return (
//     <div>
//       {/* ... rest of your component code ... */}
//     </div>
//   );

// }
