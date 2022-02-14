import React, { useState } from "react";
import Input from "./Input";
import "./Modal.css";

const Modal = ({
  selectedApplication,
  setSelectedApplication,
  setApplications,
  applications,
  closeModal,
}) => {
  const [inputCompany, setInputCompany] = useState(
    selectedApplication?.inputCompany
  );
  const [inputPosition, setInputPosition] = useState(
    selectedApplication?.inputPosition
  );
  const [inputApplication, setInputApplication] = useState(
    selectedApplication?.inputApplication
  );
  const [inputAddress, setInputAddress] = useState(
    selectedApplication?.inputAddress
  );
  const [inputContact, setInputContact] = useState(
    selectedApplication?.inputContact
  );
  const [inputPhone, setInputPhone] = useState(selectedApplication?.inputPhone);
  const [inputSalary, setInputSalary] = useState(
    selectedApplication?.inputSalary
  );
  const [inputApplied, setInputApplied] = useState(
    selectedApplication?.inputApplied
  );
  const [inputResponse, setInputResponse] = useState(
    selectedApplication?.inputResponse
  );
  const [inputDate, setInputDate] = useState(selectedApplication?.inputDate);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedApplication = {
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
    let tempApplications = applications.map((application) => {
      if (application.nextID === selectedApplication.nextID) {
        return updatedApplication;
      } else {
        return application;
      }
    });
    setApplications(tempApplications);
    setSelectedApplication(null);
  };

  if (!selectedApplication) {
    return null;
  }

  return (
    <div className="modal-Container">
      <button onClick={() => closeModal(false)}> X </button>
      <h2>Edit Info</h2>
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
    </div>
  );
};

export default Modal;
