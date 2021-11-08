import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { Grid, Box, Typography, Button } from "@material-ui/core";
import { register } from "./store/utils/thunkCreators";
import { useStyles } from "./styles/styles";
import { Form } from "./components/Form";
import { SideBanner } from "./components/SideBanner";

const Signup = (props) => {
  const history = useHistory();
  const { user, register } = props;
  const [formErrorMessage, setFormErrorMessage] = useState({});
  const classes = useStyles(props);

  const signupInputs = [
    {
      id: "input0",
      labelHeading: "Username *",
      ariaLabel: "username",
      name: "username",
      type: "text",
      required: true,
    },
    {
      id: "input1",
      labelHeading: "E-mail Address *",
      ariaLabel: "e-mail address",
      name: "email",
      type: "email",
      required: true,
    },
    {
      id: "input2",
      labelHeading: "Password *",
      ariaLabel: "password",
      name: "password",
      type: "password",
      inputProps: { minLength: 6 },
      required: true,
      formHelperText: formErrorMessage.confirmPassword,
      error: !!formErrorMessage.confirmPassword,
    },
    {
      id: "input3",
      labelHeading: "Confirm Password *",
      ariaLabel: "confirm password",
      name: "confirmPassword",
      type: "password",
      inputProps: { minLength: 6 },
      required: true,
      formHelperText: formErrorMessage.confirmPassword,
      error: !!formErrorMessage.confirmPassword,
    },
  ];

  const handleRegister = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password !== confirmPassword) {
      setFormErrorMessage({ confirmPassword: "Passwords must match" });
      return;
    }

    await register({ username, email, password });
  };

  if (user.id) {
    return <Redirect to="/home" />;
  }

  return (
    <>
      <Grid spacing={0} className={classes.outerFlexContainer}>
        <SideBanner />
        <Grid item className={classes.rightSection}>
          <Box>
            <Grid container item className={classes.topContainer}>
              <Typography className={classes.smGrayText}>
                Already have an account?
              </Typography>
              <Button
                color="secondary"
                variant="contained"
                size="large"
                className={classes.button}
                onClick={() => history.push("/login")}>
                Login
              </Button>
            </Grid>
            <Form
              onSubmit={handleRegister}
              inputs={signupInputs}
              buttonText="Create"
              greetingText="Create an account."
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (credentials) => {
      dispatch(register(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
