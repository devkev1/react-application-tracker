import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Input,
} from "reactstrap";

function Form({ onSubmit, show, onToggle, selectedApplication }) {
  const [inputCompany, setInputCompany] = useState(selectedApplication ? selectedApplication.inputCompany : "");
  const [inputPosition, setInputPosition] = useState(selectedApplication ? selectedApplication.inputPosition : "");
  const [inputApplication, setInputApplication] = useState(selectedApplication ? selectedApplication.inputApplication : "");
  const [inputAddress, setInputAddress] = useState(selectedApplication ? selectedApplication.inputAddress : "");
  const [inputContact, setInputContact] = useState(selectedApplication ? selectedApplication.inputContact : "");
  const [inputPhone, setInputPhone] = useState(selectedApplication ? selectedApplication.inputPhone : "");
  const [inputSalary, setInputSalary] = useState(selectedApplication ? selectedApplication.inputPhone : "");
  const [inputApplied, setInputApplied] = useState(selectedApplication ? selectedApplication.inputSalary : "");
  const [inputResponse, setInputResponse] = useState(selectedApplication ? selectedApplication.inputResponse : "");
  const [inputDate, setInputDate] = useState(selectedApplication ? selectedApplication.inputinputDate : "");
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
    if (selectedApplication) {
      application.nextID = selectedApplication.nextID
    } else {
      setnextID(nextID + 1);
    }
    onSubmit(application);
    setInputCompany("");
    setInputPosition("");
    setInputApplication("");
    setInputAddress("");
    setInputContact("");
    setInputPhone("");
    setInputSalary("");
    setInputApplied("");
    setInputResponse("");
    setInputDate("");
  };

    return (
        <Modal isOpen={show} toggle={onToggle} size={"lg"}>
          <ModalHeader
            close={
              <button onClick={onToggle} style={{ fontSize: "26px" }}>
                &times;
              </button>
            }
          >
            {selectedApplication ? "Edit" : 'Add'  } Application
          </ModalHeader>
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <div className="form-inputs">
                <div className="form-input">
                  <h2>Company</h2>
                  <Input
                    value={inputCompany}
                    onChange={(e) => setInputCompany(e.target.value)}
                  />
                </div>
  
                <div className="form-input">
                  <h2>Position</h2>
                  <Input
                    value={inputPosition}
                    onChange={(e) => setInputPosition(e.target.value)}
                  />
                </div>
  
                <div className="form-input">
                  <h2>Link</h2>
                  <Input
                    value={inputApplication}
                    onChange={(e) => setInputApplication(e.target.value)}
                  />
                </div>
  
                <div className="form-input">
                  <h2>Address</h2>
                  <Input
                    value={inputAddress}
                    onChange={(e) => setInputAddress(e.target.value)}
                  />
                </div>
  
                <div className="form-input">
                  <h2>Contact</h2>
                  <Input
                    value={inputContact}
                    onChange={(e) => setInputContact(e.target.value)}
                  />
                </div>
  
                <div className="form-input">
                  <h2>Phone</h2>
                  <Input
                    value={inputPhone}
                    onChange={(e) => setInputPhone(e.target.value)}
                  />
                </div>
  
                <div className="form-input">
                  <h2>Salary</h2>
                  <Input
                    value={inputSalary}
                    onChange={(e) => setInputSalary(e.target.value)}
                  />
                </div>
  
                <div className="form-input">
                  <h2>Date Applied</h2>
                  <Input
                    value={inputApplied}
                    onChange={(e) => setInputApplied(e.target.value)}
                  />
                </div>
  
                <div className="form-input">
                  <h2>Response</h2>
                  <Input
                    value={inputResponse}
                    onChange={(e) => setInputResponse(e.target.value)}
                  />
                </div>
  
                <div className="form-input">
                  <h2>Interview Date</h2>
                  <Input
                    value={inputDate}
                    onChange={(e) => setInputDate(e.target.value)}
                  />
                </div>
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" onClick={handleSubmit} color="success">
              Submit
            </Button>
            <Button type="button" onClick={onToggle} color="danger">
              Close
            </Button>
          </ModalFooter>
        </Modal>
    );
  } 

export default Form;
