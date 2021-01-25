import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Card, Form, Button } from "react-bootstrap";
import { setNavStyle } from "../../actions/index";
import TextField from "@material-ui/core/TextField";
import "./Contact.css";

const initialFormValues = {
  name: "",
  email: "",
  message: "",
};

const Contact = (props) => {
  const [formValues, setFormValues] = useState(initialFormValues);
  useEffect(() => {
    props.setNavStyle(3);
  }, []);

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangeMessage = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <div className="container mt-5 contact-container">
      <Card className="col p-5">
        <h2 className="mt-15">Contact Us.</h2>
        <Form>
          {/* <Form.Group controlId="formBasicName"> */}
          {/* <TextField label="Name" placeholder="Name" variant="outlined" /> */}
          <br />
          {/* <TextField label="Email" placeholder="Email" variant="outlined" /> */}
          {/* <Form.Label>Name</Form.Label> */}
          {/* <Form.Control type="text" placeholder="Name" />
          </Form.Group> */}
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              onChange={handleChange}
              name="name"
              value={formValues.name}
            />
            <Form.Text className="text-muted">
              Let us know who we're talking to.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={handleChange}
              name="email"
              value={formValues.email}
            />
            <Form.Text className="text-muted">
              We never share your email with anyone.
            </Form.Text>
          </Form.Group>
          <br />
          <TextField
          
            label="Leave us a message"
            multiline
            rows={8}
            fullWidth={true}
            variant="outlined"
            onChange={handleChangeMessage}
            name="message"
            value={formValues.message}
          />
          <Button className="contactTextArea" variant="primary" onClick={handleSubmit}>
            Send
          </Button>
        </Form>
      </Card>
      <br />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    navStyle: state.navStyle,
  };
};

export default connect(mapStateToProps, { setNavStyle })(Contact);
