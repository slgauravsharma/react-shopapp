import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const AddEditMyJugTourModal = (props) => {
  const { onSubmit, onHide, defaultFormValues } = props;
  const [state, setState] = useState(defaultFormValues || {});
  const isEdit = defaultFormValues;

  const onFieldChange = (e) =>
    setState({ ...state, [e.target.name]: e.target.value });

  const { name, location, events } = state;
  const hasSubmitDisabled = !(name && location && events);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {isEdit ? "Update Tour" : "Add Tour"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={(e) => onSubmit(e, state)}>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              Name
            </Form.Label>
            <Col sm="10">
              <Form.Control
                name="name"
                value={name}
                onChange={onFieldChange}
                type="text"
                placeholder="enter name"
                required
              />
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              Location
            </Form.Label>
            <Col sm="10">
              <Form.Control
                name="location"
                value={location}
                onChange={onFieldChange}
                type="text"
                placeholder="enter location"
              />
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              Events
            </Form.Label>
            <Col sm="10">
              <Form.Control
                name="events"
                value={events}
                onChange={onFieldChange}
                type="text"
                placeholder="enter events"
              />
            </Col>
          </Form.Group>
          <Modal.Footer>
            <Button
              type="submit"
              onClick={(e) => onSubmit(e, state)}
              disabled={hasSubmitDisabled}
            >
              Save
            </Button>
            <Button variant="danger" onClick={onHide}>
              Cancel
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddEditMyJugTourModal;
