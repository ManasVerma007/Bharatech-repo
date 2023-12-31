import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Modal from "../../UI/Modal/Modal";

export default function Login() {
  const room = "Room1";

  const emailRef = useRef();
  const passwordRef = useRef();
  const userNameRef = useRef();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem("Username", userNameRef.current.value);

    navigate("/dashboard");
  };

  return (
    <>
      <Modal>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Log In</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="username">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" ref={userNameRef} required />
              </Form.Group>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
              </Form.Group>
              <Button
                disabled={loading}
                className="w-100"
                type="submit"
                style={{ marginTop: "1.2em" }}
              >
                Log In
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2" style={{ color: "white" }}>
          Need an account? <Link to="/signup">Sign Up</Link>
        </div>
      </Modal>
    </>
  );
}

