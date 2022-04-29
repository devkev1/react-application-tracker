import {
    Button,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
  } from "reactstrap";

  function DeleteConfirmation ({ handleDelete, show, onToggle }) {
    return (
  <Modal isOpen={show} toggle={onToggle} size={"lg"}>
  <ModalHeader
    close={
      <button onClick={onToggle} style={{ fontSize: "26px" }}>
        &times;
      </button>
    }
  >
    Delete All?
  </ModalHeader>
  <ModalBody>
    Are you sure you want to delete everything?
  </ModalBody>
  <ModalFooter>
    <Button type="submit" onClick={handleDelete} color="danger">
      Yes
    </Button>
    <Button type="button" onClick={onToggle} color="secondary">
      Cancel
    </Button>
  </ModalFooter>
</Modal>
)}

export default DeleteConfirmation;