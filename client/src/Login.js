import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { Grid, Box, Typography, Button } from "@material-ui/core";
import { login } from "./store/utils/thunkCreators";
import { useStyles } from "./styles/styles";
import { Form } from "./components/Form";
import { SideBanner } from "./components/SideBanner";

const Login = (props) => {
  const history = useHistory();
  const { user, login } = props;
  const classes = useStyles(props);

  const loginInputs = [
    {
      id: "input0",
      labelHeading: "Username",
      ariaLabel: "username",
      name: "username",
      type: "text",
      required: true,
    },
    {
      id: "input1",
      labelHeading: "Password",
      ariaLabel: "password",
      name: "password",
      type: "password",
      required: true,
    },
  ];

  const handleLogin = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    await login({ username, password });
  };

  if (user.id) {
    return <Redirect to="/home" />;
  }

  return (
    <Grid spacing={0} className={classes.outerFlexContainer}>
      <SideBanner />
      <Grid item className={classes.rightSection}>
        <Box>
          <Grid container item className={classes.topContainer}>
            <Typography className={classes.smGrayText}>
              Need to register?
            </Typography>
            <Button
              color="secondary"
              variant="contained"
              size="large"
              className={classes.button}
              onClick={() => history.push("/register")}>
              Register
            </Button>
          </Grid>
          <Form
            onSubmit={handleLogin}
            inputs={loginInputs}
            greetingText="Welcome!"
            buttonText="Login"
          />
        </Box>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (credentials) => {
      dispatch(login(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
