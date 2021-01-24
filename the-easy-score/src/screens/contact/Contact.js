import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Card, Form, Button } from "react-bootstrap";
import { setNavStyle } from "../../actions/index";
import TextField from "@material-ui/core/TextField";
import "./Contact.css";

const Contact = (props) => {
  useEffect(() => {
    props.setNavStyle(3);
  }, []);

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
            <Form.Control type="text" placeholder="Enter Name" />
            <Form.Text className="text-muted">
              Don't worry, it's just for our reference
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <br />
          <TextField
            id="outlined-multiline-static"
            label="Leave us a message"
            multiline
            rows={12}
            columns={8}
            fullWidth={true}
            defaultValue="Default Value"
            variant="outlined"
          />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    navStyle: state.navStyle,
  };
};

export default connect(mapStateToProps, { setNavStyle })(Contact);
