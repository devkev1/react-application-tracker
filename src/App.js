import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import DeleteConfirmation from "./components/DeleteConfirmation";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [applications, setApplications] = useState([]);
  const [selectedApplication, setSelectedApplication] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showdeleteConfirm, setdeleteConfirm] = useState(false);

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

  const deleteAll = () => {
    setApplications([]);
    setdeleteConfirm(false);
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
    
      {applications.map((application, index) => (
        <div key={index}>
          <button onClick={() => {setSelectedApplication(application)
          setShowModal(true)
          }}>
            Edit
          </button>


         <button onClick={() => handleDelete(application)}>Delete</button>

          <div>Company: {application.inputCompany}</div>
          <div>Position: {application.inputPosition}</div>
          <div>Link: <a href={`//${application.inputApplication}`} target="_blank" rel="noreferrer">{application.inputApplication}</a></div> 
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
      <div><button onClick={() => setdeleteConfirm(true)}>Delete All</button></div>
      
      </div>
      <DeleteConfirmation handleDelete={deleteAll} show={showdeleteConfirm} onToggle={() => setdeleteConfirm(x => !x)}/>
    </div>
  );
}

export default App;
