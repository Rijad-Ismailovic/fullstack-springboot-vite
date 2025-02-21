import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import {
  authenticatePassword,
  getUserById,
  updateUserById,
} from "../services/UserService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";

function EditProfileModal() {
  const [show, setShow] = useState(false);

  const navigator = useNavigate();

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [file, setFile] = useState(null);
  const [fileChanged, setFileChanged] = useState(false);
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    oldPassword: "",
    newPassword: "",
  });

  const handleShow = () => {
    getUserById(localStorage.getItem("userId"))
      .then((response) => {
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setEmail(response.data.email);
      })
      .catch((error) => {
        console.log(error);
      });

    setShow(true);
  };

  const handleClose = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setFile(null);

    setShow(false);
  };

  const handleSaveChanges = () => {
    if (validate()) {
      authenticatePassword({ email, password: oldPassword })
        .then((response) => {
          if (!response.data) {
            throw new Error("Authentication failed");
          }

          const fileToSend = fileChanged ? file : null;

          return updateUserById(localStorage.getItem("userId"), {
            firstName,
            lastName,
            email,
            password: newPassword,
            file: fileToSend,
          });
        })
        .then(() => {
          setShow(false);
          navigator("/temp-route");
          setTimeout(
            () => navigator(`/profile/${localStorage.getItem("userId")}`),
            100
          );
          toast.success("Profile successfully edited");
        })
        .catch((error) => {
          console.error(error);
          if (error.message === "Authentication failed") {
            toast.error("Incorrect password");
          } else {
            toast.error("Error updating profile");
          }
        });
    }
  };

  function validate() {
    let valid = true;
    const errorsCopy = { ...errors };

    if (firstName != "") {
      errorsCopy.firstName = "";
    } else {
      errorsCopy.firstName = "First name is required";
      valid = false;
    }

    if (lastName != "") {
      errorsCopy.lastName = "";
    } else {
      errorsCopy.lastName = "Last name is required";
      valid = false;
    }

    if (oldPassword != "") {
      errorsCopy.oldPassword = "";
    } else {
      errorsCopy.oldPassword = "Field is required";
      valid = false;
    }

    if (newPassword == "") {
      errorsCopy.newPassword = "";
    } else {
      errorsCopy.newPassword = "Field is required";
      valid = false;
    }

    setErrors(errorsCopy);
    return valid;
  }

  return (
    <>
      <Button
        variant="link"
        onClick={handleShow}
        className="p-2 mb-1 border-0 bg-transparent"
      >
        <Icon.PencilFill className="p-0" color="lightgray" />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  autoFocus
                  disabled
                  readOnly
                />
              </Form.Group>
              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className={errors.firstName ? "is-invalid" : ""}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.firstName}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className={errors.lastName ? "is-invalid" : ""}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.lastName}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Form.Group className="mb-3">
                  <Form.Label>Old Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    className={errors.oldPassword ? "is-invalid" : ""}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.oldPassword}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>New Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className={errors.newPassword ? "is-invalid" : ""}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.newPassword}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Form.Group className="mb-3">
                <Form.Label>Profile picture</Form.Label>
                <Form.Control
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    setFile(e.target.files[0]);
                    setFileChanged(true);
                  }}
                />
                <Form.Text className="text-muted">
                  Leaving this input empty will not change/remove profile
                  picture
                </Form.Text>
              </Form.Group>
            </Form>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditProfileModal;
