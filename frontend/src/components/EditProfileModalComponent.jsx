import { useState } from "react";
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


function EditProfileModal() {
  const [show, setShow] = useState(false);
  const navigator = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState("");
  const [defaultFile, setDefaultFile] = useState("/defaultProfilePicture.jpg");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [removeImage, setRemoveImage] = useState(false);

  const handleShow = () => {
    getUserById(localStorage.getItem("userId"))
      .then((response) => {
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setEmail(response.data.email);
        setPassword(response.data.password);
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
    setFile("");
    setRemoveImage(false);

    setShow(false);
  };

  const handleSaveChanges = () => { // TODO general validation, nemoj se zajebati i zaboraviti unijeti new password
    authenticatePassword({ email, password: oldPassword })
      .then((response) => { 
        console.log("file:", file)
        console.log("removeImage:", removeImage)
        if (file == "" && removeImage == true) { //fix, uvijek execute ako nisi uplodovo profile pic
          setFile(defaultFile)
        } 

        updateUserById(localStorage.getItem("userId"), {
          firstName,
          lastName,
          email,
          password: newPassword,
          file,
        }).then((response) => {
          toast.success("Profile succesfully edited") // TODO attempt to reload page after succesfull edit
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error updating profile")
      });

    //setShow(false);
  };

  return (
    <>
      <Button variant="secondary" className="mt-5 mb-4" onClick={handleShow}>
        Edit profile
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
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
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>New Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Old Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                  />
                </Form.Group>
              </Row>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Profile picture</Form.Label>
                <Form.Control
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    setFile(e.target.files[0]);
                  }}
                />
                <Form.Text className="text-muted">
                  Leaving this input empty will not change/remove profile
                  picture
                </Form.Text>
                <Form.Check
                  className="mt-3"
                  type="checkbox"
                  checked={removeImage}
                  onChange={(e) => setRemoveImage(e.target.checked)}
                  label="Remove profile picture"
                ></Form.Check>
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
