import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [applications, setApplications] = useState([]);
  const [selectedApplication, setSelectedApplication] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleAdd = (application) => {
    let tempApplications = Array.from(applications);
    tempApplications.push(application);
    setApplications(tempApplications);
    setShowModal(false);
  };

  const handleEdit = (application) => {
    let tempApplications = applications.map((app) => {
      if (app.nextID === application.nextID) {
        return application;
      } else {
        return app;
      }
    });
    setApplications(tempApplications);
    setShowModal(false);
    setSelectedApplication(false);
  }

  const handleDelete = (application) => {
    setApplications(applications.filter(el => el.nextID !== application.nextID))
  }

  return (
    <div className="App">
      <header>
        <h1>Application Tracker</h1>
      </header>

    <div className="form-container">
      <Form
        onSubmit={selectedApplication ? handleEdit : handleAdd }
        show={showModal}
        onToggle={() => setShowModal((x) => !x)}
        selectedApplication = {selectedApplication}
      />
    
      {applications.map((application) => (
        <div key={application.inputCompany + application.Position}>
          <button onClick={() => {setSelectedApplication(application)
          setShowModal(true)
          }}>
            Edit
          </button>

          <button onClick={() => handleDelete(application)}>Delete</button>

          <div>Company: {application.inputCompany}</div>
          <div>Position: {application.inputPosition}</div>
          <div>Link: {application.inputApplication}</div>
          <div>Address: {application.inputAddress}</div>
          <div>Contact: {application.inputContact}</div>
          <div>Phone: {application.inputPhone}</div>
          <div>Salary: {application.inputSalary}</div>
          <div>Date Applied: {application.inputApplied}</div>
          <div>Response: {application.inputResponse}</div>
          <div>Interview Date: {application.inputDate}</div>
        </div>
        
      ))}
      <div><button onClick={() => setShowModal(true)}>Add Application</button></div>
      </div>
      
    </div>
  );
}

export default App;
