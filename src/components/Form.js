import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Input,
} from "reactstrap";
import { getDefaultApplication } from "../utils";

function Form({
  onSubmit,
  show,
  onToggle,
  selectedApplication,
  setSelectedApplication,
}) {
  const [nextID, setnextID] = useState(1);
  const defaultApplication = getDefaultApplication();

  const updateApplicationProperty = (property, newValue) => {
    setSelectedApplication({
      ...selectedApplication,
      [property]: newValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      ...selectedApplication,
      nextID: selectedApplication.nextID || nextID,
    });

    setnextID(nextID + 1);
    setSelectedApplication(defaultApplication);
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
        {selectedApplication.nextID ? "Edit" : "Add"} Application
      </ModalHeader>
      <ModalBody>
        <form onSubmit={handleSubmit}>
          <div className="form-inputs">
            <div className="form-input">
              <h2>Company</h2>
              <Input
                value={selectedApplication.inputCompany}
                onChange={(e) =>
                  updateApplicationProperty("inputCompany", e.target.value)
                }
              />
            </div>

            <div className="form-input">
              <h2>Position</h2>
              <Input
                value={selectedApplication.inputPosition}
                onChange={(e) =>
                  updateApplicationProperty("inputPosition", e.target.value)
                }
              />
            </div>

            <div className="form-input">
              <h2>Link</h2>
              <Input
                value={selectedApplication.inputApplication}
                onChange={(e) =>
                  updateApplicationProperty("inputApplication", e.target.value)
                }
              />
            </div>

            <div className="form-input">
              <h2>Address</h2>
              <Input
                value={selectedApplication.inputAddress}
                onChange={(e) =>
                  updateApplicationProperty("inputAddress", e.target.value)
                }
              />
            </div>

            <div className="form-input">
              <h2>Contact</h2>
              <Input
                value={selectedApplication.inputContact}
                onChange={(e) =>
                  updateApplicationProperty("inputContact", e.target.value)
                }
              />
            </div>

            <div className="form-input">
              <h2>Phone</h2>
              <Input
                value={selectedApplication.inputPhone}
                onChange={(e) =>
                  updateApplicationProperty("inputPhone", e.target.value)
                }
              />
            </div>

            <div className="form-input">
              <h2>Salary</h2>
              <Input
                value={selectedApplication.inputSalary}
                onChange={(e) =>
                  updateApplicationProperty("inputSalary", e.target.value)
                }
              />
            </div>

            <div className="form-input">
              <h2>Date Applied</h2>
              <Input
                value={selectedApplication.inputApplied}
                onChange={(e) =>
                  updateApplicationProperty("inputApplied", e.target.value)
                }
              />
            </div>

            <div className="form-input">
              <h2>Response</h2>
              <Input
                value={selectedApplication.inputResponse}
                onChange={(e) =>
                  updateApplicationProperty("inputResponse", e.target.value)
                }
              />
            </div>

            <div className="form-input">
              <h2>Interview Date</h2>
              <Input
                value={selectedApplication.inputDate}
                onChange={(e) =>
                  updateApplicationProperty("inputDate", e.target.value)
                }
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
