let requests = [
    { id: 1, location: 'Visakhapatnam, Andhra Pradesh', description: 'Pothole repair needed', priority: 'High', status: 'Pending', date: '2024-03-20' },
    { id: 2, location: 'Vijayawada, Andhra Pradesh', description: 'Drainage issue', priority: 'Medium', status: 'In Progress', date: '2024-03-19' },
    { id: 3, location: 'Itanagar, Arunachal Pradesh', description: 'Broken streetlight', priority: 'Low', status: 'Completed', date: '2024-03-18' },
    { id: 4, location: 'Tawang, Arunachal Pradesh', description: 'Road widening needed', priority: 'High', status: 'Pending', date: '2024-03-21' },
    { id: 5, location: 'Guwahati, Assam', description: 'Large pothole on main road', priority: 'High', status: 'Pending', date: '2024-03-22' },
    { id: 6, location: 'Dibrugarh, Assam', description: 'Traffic congestion issue', priority: 'Medium', status: 'In Progress', date: '2024-03-23' },
    { id: 7, location: 'Patna, Bihar', description: 'Street drainage clogged', priority: 'Medium', status: 'Completed', date: '2024-03-24' },
    { id: 8, location: 'Gaya, Bihar', description: 'Traffic light malfunction', priority: 'Medium', status: 'Pending', date: '2024-03-25' },
    { id: 9, location: 'Raipur, Chhattisgarh', description: 'Pothole near bus stand', priority: 'High', status: 'Pending', date: '2024-03-26' },
    { id: 10, location: 'Bhilai, Chhattisgarh', description: 'Broken speed bump', priority: 'Low', status: 'In Progress', date: '2024-03-27' },
    { id: 11, location: 'Panaji, Goa', description: 'Road surface damage', priority: 'High', status: 'Completed', date: '2024-03-28' },
    { id: 12, location: 'Margao, Goa', description: 'Drainage cover missing', priority: 'High', status: 'Pending', date: '2024-03-29' },
    { id: 13, location: 'Ahmedabad, Gujarat', description: 'Flyover cracks', priority: 'High', status: 'Pending', date: '2024-03-30' },
    { id: 14, location: 'Surat, Gujarat', description: 'Pavement damage', priority: 'Medium', status: 'In Progress', date: '2024-03-31' },
    { id: 15, location: 'Chandigarh, Haryana', description: 'Traffic congestion', priority: 'Low', status: 'Completed', date: '2024-04-01' },
    { id: 16, location: 'Faridabad, Haryana', description: 'Potholes on highway', priority: 'High', status: 'Pending', date: '2024-04-02' },
    { id: 17, location: 'Shimla, Himachal Pradesh', description: 'Snow-covered road hazard', priority: 'High', status: 'Pending', date: '2024-04-03' },
    { id: 18, location: 'Mandi, Himachal Pradesh', description: 'Bridge cracks', priority: 'Medium', status: 'In Progress', date: '2024-04-04' },
    { id: 19, location: 'Ranchi, Jharkhand', description: 'Speed breaker needed', priority: 'Medium', status: 'Completed', date: '2024-04-05' },
    { id: 20, location: 'Jamshedpur, Jharkhand', description: 'Water logging issue', priority: 'High', status: 'Pending', date: '2024-04-06' },
    { id: 21, location: 'Bangalore, Karnataka', description: 'Flyover under construction', priority: 'Medium', status: 'In Progress', date: '2024-04-07' },
    { id: 22, location: 'Mysore, Karnataka', description: 'Pedestrian crossing issue', priority: 'Low', status: 'Completed', date: '2024-04-08' },
    { id: 23, location: 'Thiruvananthapuram, Kerala', description: 'Speed breakers needed', priority: 'High', status: 'Pending', date: '2024-04-09' },
    { id: 24, location: 'Kochi, Kerala', description: 'Damaged road signs', priority: 'Medium', status: 'In Progress', date: '2024-04-10' },
    { id: 25, location: 'Bhopal, Madhya Pradesh', description: 'Overgrown roadside trees', priority: 'Medium', status: 'Completed', date: '2024-04-11' },
    { id: 26, location: 'Indore, Madhya Pradesh', description: 'Pavement damaged', priority: 'High', status: 'Pending', date: '2024-04-12' },
    { id: 27, location: 'Mumbai, Maharashtra', description: 'Highway traffic congestion', priority: 'High', status: 'Pending', date: '2024-04-13' },
    { id: 28, location: 'Pune, Maharashtra', description: 'Potholes after rains', priority: 'Medium', status: 'In Progress', date: '2024-04-14' },
    { id: 29, location: 'Nagpur, Maharashtra', description: 'Crack in flyover', priority: 'High', status: 'Completed', date: '2024-04-15' },
    { id: 30, location: 'Nashik, Maharashtra', description: 'Blocked drainage', priority: 'High', status: 'Pending', date: '2024-04-16' },
    { id: 31, location: 'Aurangabad, Maharashtra', description: 'Speed breaker required', priority: 'Medium', status: 'In Progress', date: '2024-04-17' },
    { id: 32, location: 'Solapur, Maharashtra', description: 'Fallen tree blocking road', priority: 'Low', status: 'Completed', date: '2024-04-18' },
    { id: 33, location: 'Amravati, Maharashtra', description: 'Roadside lighting issue', priority: 'Medium', status: 'Completed', date: '2024-04-19' },
    { id: 34, location: 'Kolhapur, Maharashtra', description: 'Bridge damage report', priority: 'Medium', status: 'In Progress', date: '2024-04-20' },
    { id: 35, location: 'Latur, Maharashtra', description: 'Large pothole spotted', priority: 'Low', status: 'Completed', date: '2024-04-21' },
    { id: 36, location: 'Alappuzha, Kerala', description: 'Bridge needs urgent repair', priority: 'High', status: 'Pending', date: '2024-04-01' },
    { id: 37, location: 'Thrissur, Kerala', description: 'Drainage blockage causing flooding', priority: 'Medium', status: 'In Progress', date: '2024-04-02' },
    { id: 38, location: 'Satna, Madhya Pradesh', description: 'Road surface uneven', priority: 'High', status: 'Completed', date: '2024-04-03' },
    { id: 39, location: 'Sagar, Madhya Pradesh', description: 'Traffic congestion at crossroads', priority: 'High', status: 'Pending', date: '2024-04-04' },
    { id: 40, location: 'Chandrapur, Maharashtra', description: 'Potholes on highway', priority: 'Medium', status: 'In Progress', date: '2024-04-05' },
    { id: 41, location: 'Kolhapur, Maharashtra', description: 'Bridge cracks reported', priority: 'High', status: 'Pending', date: '2024-04-06' },
    { id: 42, location: 'Imphal, Manipur', description: 'Street lights not working', priority: 'Medium', status: 'Completed', date: '2024-04-07' },
    { id: 43, location: 'Shillong, Meghalaya', description: 'Heavy traffic in central market', priority: 'Medium', status: 'In Progress', date: '2024-04-08' },
    { id: 44, location: 'Aizawl, Mizoram', description: 'Drainage collapse due to rain', priority: 'High', status: 'Pending', date: '2024-04-09' },
    { id: 45, location: 'Kohima, Nagaland', description: 'Hillside road requires reinforcement', priority: 'Medium', status: 'In Progress', date: '2024-04-10' },
    { id: 46, location: 'Balangir, Odisha', description: 'Footpath encroachment issues', priority: 'Low', status: 'Completed', date: '2024-04-11' },
    { id: 47, location: 'Karimnagar, Telangana', description: 'Unfinished flyover construction', priority: 'High', status: 'Pending', date: '2024-04-12' },
    { id: 48, location: 'Dharmapuri, Tamil Nadu', description: 'Traffic signal malfunctioning', priority: 'Medium', status: 'In Progress', date: '2024-04-13' },
    { id: 49, location: 'Kottayam, Kerala', description: 'Heavy road damage from rain', priority: 'High', status: 'Pending', date: '2024-04-14' },
    { id: 50, location: 'Tirunelveli, Tamil Nadu', description: 'Flooding on main road', priority: 'Medium', status: 'Completed', date: '2024-04-15' },
    { id: 51, location: 'Siliguri, West Bengal', description: 'Drainage overflow', priority: 'High', status: 'Pending', date: '2024-04-10' },
    { id: 52, location: 'Durgapur, West Bengal', description: 'Streetlight failure', priority: 'Low', status: 'Completed', date: '2024-04-11' },
    { id: 53, location: 'Chennai, Tamil Nadu', description: 'Traffic jam hotspot', priority: 'High', status: 'Pending', date: '2024-04-12' },
    { id: 54, location: 'Madurai, Tamil Nadu', description: 'Speed breaker required', priority: 'Medium', status: 'In Progress', date: '2024-04-13' },
    { id: 55, location: 'Hyderabad, Telangana', description: 'Footpath encroachment', priority: 'Medium', status: 'Completed', date: '2024-04-14' },
    { id: 56, location: 'Warangal, Telangana', description: 'Bridge maintenance required', priority: 'High', status: 'Pending', date: '2024-04-15' },
    { id: 57, location: 'Lucknow, Uttar Pradesh', description: 'Traffic signals malfunction', priority: 'Medium', status: 'In Progress', date: '2024-04-16' },
    { id: 58, location: 'Varanasi, Uttar Pradesh', description: 'Potholes after monsoon', priority: 'High', status: 'Pending', date: '2024-04-17' },
    { id: 59, location: 'Dehradun, Uttarakhand', description: 'Blocked drainage', priority: 'Low', status: 'Completed', date: '2024-04-18' },
    { id: 60, location: 'Haridwar, Uttarakhand', description: 'Bridge damage report', priority: 'Medium', status: 'In Progress', date: '2024-04-19' },
    { id: 61, location: 'Jaipur, Rajasthan', description: 'Potholes after rain', priority: 'High', status: 'Pending', date: '2024-04-20' },
    { id: 62, location: 'Jodhpur, Rajasthan', description: 'Damaged roadside barriers', priority: 'Medium', status: 'In Progress', date: '2024-04-21' },
    { id: 63, location: 'Gandhinagar, Gujarat', description: 'Footpath construction delay', priority: 'Medium', status: 'Completed', date: '2024-04-22' },
    { id: 64, location: 'Bhubaneswar, Odisha', description: 'New flyover cracks', priority: 'High', status: 'Pending', date: '2024-04-23' },
    { id: 65, location: 'Cuttack, Odisha', description: 'Roadside railing missing', priority: 'Medium', status: 'In Progress', date: '2024-04-24' },
    { id: 66, location: 'Kolkata, West Bengal', description: 'Major traffic congestion', priority: 'High', status: 'Pending', date: '2024-04-25' },
    { id: 67, location: 'Asansol, West Bengal', description: 'Damaged pedestrian walkway', priority: 'Medium', status: 'In Progress', date: '2024-04-26' },
    { id: 68, location: 'Puducherry, Puducherry', description: 'Street flooding', priority: 'High', status: 'Completed', date: '2024-04-27' },
    { id: 69, location: 'Agartala, Tripura', description: 'Damaged road divider', priority: 'Medium', status: 'In Progress', date: '2024-04-28' },
  ];
  
  // Helper functions to filter requests
  export const getAllRequests = () => requests;
  
  export const getPendingRequests = () => requests.filter(request => request.status === 'Pending');
  
  export const getInProgressRequests = () => requests.filter(request => request.status === 'In Progress');
  
  export const getCompletedRequests = () => requests.filter(request => request.status === 'Completed');
  
  export const updateRequestStatus = (requestId, newStatus, assignmentDetails) => {
    requests = requests.map(request => {
      if (request.id === requestId) {
        return {
          ...request,
          status: newStatus,
          assignmentDetails: assignmentDetails,
          startDate: new Date().toLocaleDateString(),
          progress: 0
        };
      }
      return request;
    });
  };
  
  export const updateRequestProgress = (requestId, progress, notes) => {
    requests = requests.map(request => {
      if (request.id === requestId) {
        // If progress is 100%, move to completed
        if (progress === 100) {
          return {
            ...request,
            status: 'Completed',
            progress: progress,
            completionDate: new Date().toLocaleDateString(),
            completionNotes: notes,
            finalStatus: {
              materialsUsed: request.assignmentDetails?.materials || {},
              equipmentUsed: request.assignmentDetails?.equipment || {},
              workersUsed: request.assignmentDetails?.workers || 0,
              startDate: request.startDate,
              completionDate: new Date().toLocaleDateString(),
              duration: Math.ceil((new Date() - new Date(request.startDate)) / (1000 * 60 * 60 * 24)),
              notes: notes
            }
          };
        }
        
        // If progress is not 100%, just update progress
        return {
          ...request,
          progress: progress,
          lastUpdateNotes: notes,
          lastUpdateDate: new Date().toLocaleDateString()
        };
      }
      return request;
    });
  };