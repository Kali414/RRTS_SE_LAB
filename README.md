# **Road Repair and Tracking System (RRTS)**  

## **Overview**  
The **Road Repair and Tracking System (RRTS)** is designed to automate various bookkeeping activities related to road repairs undertaken by the Public Works Department of a large city. The system facilitates efficient request handling, scheduling, and tracking of repair activities while ensuring optimal resource utilization.  

## **Key Features**  
- **Repair Request Management:** Residents can raise road repair requests, which are recorded in the system by clerks.  
- **Inspection and Prioritization:** A supervisor evaluates the road condition and assigns a priority level based on severity and locality type.  
- **Resource Estimation:** The system determines the raw materials, machines, and personnel required for repairs.  
- **Automated Scheduling:** Repairs are scheduled based on priority and resource availability.  
- **Resource Management:** The city corporation administrator manages available manpower and machines, with dynamic rescheduling based on changes.  
- **Reporting & Statistics:** The mayor can generate reports on repair progress, outstanding work, and resource utilization.  

## **System Users**  
1. **Clerk:** Records repair requests submitted by residents.  
2. **Supervisor:** Assesses road conditions, prioritizes repairs, and estimates resources.  
3. **City Corporation Administrator:** Manages resource availability and updates workforce/machine data.  
4. **Mayor:** Views repair statistics and overall progress reports.  

## **Technology Stack**  
- **Backend:** Python (Flask/Django) or Node.js  
- **Frontend:** HTML, CSS, JavaScript (React.js/Angular)  
- **Database:** PostgreSQL/MySQL/MongoDB  
- **Hosting:** Render/Heroku/AWS  

## **Installation & Setup**  
1. **Clone the repository:**  
   ```sh
   git clone https://github.com/yourusername/RRTS.git  
   cd RRTS  
   ```  
2. **Install dependencies:**  
   ```sh
   pip install -r requirements.txt  # For Python-based backend  
   npm install  # If using Node.js  
   ```  
3. **Run the server:**  
   ```sh
   python app.py  # Flask/Django  
   npm start  # If using Node.js  
   ```  
4. **Access the system via:**  
   ```sh
   http://127.0.0.1:5000/  
   ```  

## **Future Enhancements**  
- **Mobile App Support** for field supervisors.  
- **AI-based Road Condition Prediction** for automated prioritization.  
- **Integration with GIS & Maps** for better visualization.  

## **Contributors**  
- Kalicharan Chinmay Sahoo
- Adit Kumar Jena
- Roop Kumar Munsun Biswal  

## **License**  
This project is licensed under the MIT License.  

---
