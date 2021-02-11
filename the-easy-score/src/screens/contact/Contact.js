import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Card, Form, Button } from "react-bootstrap";
import { setNavStyle, setFooterStyle } from "../../actions/index";
import TextField from "@material-ui/core/TextField";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import "./Contact.css";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const initialFormValues = {
  name: "",
  email: "",
  message: "",
  subject: "",
};

let vertical = "bottom";
let horizontal = "left";

const Contact = (props) => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [errorOpen, setErrorOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);

  useEffect(() => {
    props.setNavStyle(3);
    props.setFooterStyle(3);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  function url(path) {
    return process.env.NODE_ENV === "development"
      ? `http://localhost:4000${path}`
      : path;
  }

  const sendEmail = () => {
    console.log("yup!", formValues);
    axios
<<<<<<< HEAD
      .post(url("/send"), formValues)
=======
      // .post("https://tes-emailer.herokuapp.com/send", { ...formValues })
      .post(url("/send"), { ...formValues })
>>>>>>> 63a24a71efe505f86c8a9e3be12f8ead2f5896e0
      .then((res) => {
        setFormValues(initialFormValues);
        setSuccessOpen(true);
      })
      .catch((err) => {
        console.log(err.err);
        console.log(err.message);
        setFormValues(initialFormValues);
        setErrorOpen(true);
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
    sendEmail();
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setErrorOpen(false);
    setSuccessOpen(false);
  };

  return (
    <div className="container mt-5 contact-container">
      <Card className="row w-100 p-5">
        <div className="col">
          <h2 className="mt-15">Contact Us.</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                onChange={handleChange}
                name="name"
                value={formValues.name}
                className="form-padding"
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
                className="form-padding"
              />
              <Form.Text className="text-muted">
                We never share your email with anyone.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Subject"
                onChange={handleChange}
                name="subject"
                value={formValues.subject}
                className="form-padding"
              />
              <Form.Text className="text-muted">
                Please provide a subejct.
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
            <Button
              className="contactTextArea contactBtn"
              variant="primary"
              type="submit"
            >
              Send
            </Button>
            <Snackbar
              anchorOrigin={{ vertical, horizontal }}
              severity="success"
              open={successOpen}
              autoHideDuration={2000}
              onClose={handleClose}
            >
              <Alert onClose={handleClose} severity="success">
                Success! Thank you for your message!
              </Alert>
            </Snackbar>
            <Snackbar
              anchorOrigin={{ vertical, horizontal }}
              open={errorOpen}
              autoHideDuration={2000}
              onClose={handleClose}
            >
              <Alert severity="error" onClose={handleClose}>
                There was an error making your request
              </Alert>
            </Snackbar>
          </Form>
        </div>
      </Card>
      <br />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    navStyle: state.navStyle,
    footerStyle: state.footerStyle,
  };
};

export default connect(mapStateToProps, { setNavStyle, setFooterStyle })(
  Contact
);
