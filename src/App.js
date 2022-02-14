import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Modal from "./components/Modal";

function App() {
  const [inputCompany, setInputCompany] = useState("");
  const [inputPosition, setInputPosition] = useState("");
  const [inputApplication, setInputApplication] = useState("");
  const [inputAddress, setInputAddress] = useState("");
  const [inputContact, setInputContact] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [inputSalary, setInputSalary] = useState("");
  const [inputApplied, setInputApplied] = useState("");
  const [inputResponse, setInputResponse] = useState("");
  const [inputDate, setInputDate] = useState("");

  const [applications, setApplications] = useState([]);
  const [selectedApplication, setSelectedApplication] = useState(false);
  const [nextID, setnextID] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const application = {
      nextID,
      inputCompany,
      inputPosition,
      inputApplication,
      inputAddress,
      inputContact,
      inputPhone,
      inputSalary,
      inputApplied,
      inputResponse,
      inputDate,
    };
    let tempApplications = Array.from(applications);
    tempApplications.push(application);
    setApplications(tempApplications);
    console.log(application);
    setnextID(nextID + 1);
  };

  return (
    <div className="App">
      <header>
        <h1>Application Tracker</h1>
      </header>

      <form onSubmit={handleSubmit}>
        <h2>Company Name</h2>
        <Input inputText={inputCompany} setInputText={setInputCompany} />
        <h2>Position Title</h2>
        <Input inputText={inputPosition} setInputText={setInputPosition} />
        <h2>Application/Website Link</h2>
        <Input
          inputText={inputApplication}
          setInputText={setInputApplication}
        />
        <h2>Address</h2>
        <Input inputText={inputAddress} setInputText={setInputAddress} />
        <h2>Contact Name</h2>
        <Input inputText={inputContact} setInputText={setInputContact} />
        <h2>Phone Number</h2>
        <Input inputText={inputPhone} setInputText={setInputPhone} />
        <h2>Salary</h2>
        <Input inputText={inputSalary} setInputText={setInputSalary} />
        <h2>Date Applied</h2>
        <Input inputText={inputApplied} setInputText={setInputApplied} />
        <h2>Response</h2>
        <Input inputText={inputResponse} setInputText={setInputResponse} />
        <h2>Interview Date</h2>
        <Input inputText={inputDate} setInputText={setInputDate} />
        <button type="submit">Submit</button>
      </form>
      {applications.map((application) => (
        <div>
          <button onClick={() => setSelectedApplication(application)}>
            Edit
          </button>
          <div>{application.inputCompany}</div>
          <div>{application.inputPosition}</div>
          <div>{application.inputApplication}</div>
          <div>{application.inputAddress}</div>
          <div>{application.inputContact}</div>
          <div>{application.inputPhone}</div>
          <div>{application.inputSalary}</div>
          <div>{application.inputApplied}</div>
          <div>{application.inputResponse}</div>
          <div>{application.inputDate}</div>
        </div>
      ))}
      {setSelectedApplication && (
        <Modal
          closeModal={setSelectedApplication}
          selectedApplication={selectedApplication}
          setApplication={setSelectedApplication}
          setApplications={setApplications}
          applications={applications}
        />
      )}
    </div>
  );
}

export default App;
