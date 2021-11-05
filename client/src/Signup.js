import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
  FormHelperText,
} from "@material-ui/core";
import { register } from "./store/utils/thunkCreators";
import { useStyles } from "./styles/styles";
import backgroundImg from "./assets/bg-img.png";
import { ReactComponent as ChatLogo } from "./assets/bubble.svg";

const Login = (props) => {
  const history = useHistory();
  const { user, register } = props;
  const [formErrorMessage, setFormErrorMessage] = useState({});
  const classes = useStyles(props);

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
        <Grid item className={classes.sideBanner}>
          <div className={classes.bgOverlay}>
            <img
              className={classes.bgImg}
              src={backgroundImg}
              alt="A group conversing"
            />
            <Box className={classes.content}>
              <ChatLogo />
              <Typography className={classes.sloganText}>
                Converse with anyone with any language
              </Typography>
            </Box>
          </div>
        </Grid>
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

            <Grid container className={classes.formContainer}>
              <Typography className={classes.header}>
                Create an account.
              </Typography>
              <form className={classes.form} onSubmit={handleRegister}>
                <Grid>
                  <Grid>
                    <FormControl className={classes.formCtrl}>
                      <Typography className={classes.smGrayText}>
                        Username *
                      </Typography>
                      <TextField
                        className={classes.textField}
                        aria-label="username"
                        name="username"
                        type="text"
                        required
                      />
                    </FormControl>
                  </Grid>
                  <Grid>
                    <FormControl className={classes.formCtrl}>
                      <Typography className={classes.smGrayText}>
                        E-mail address *
                      </Typography>
                      <TextField
                        className={classes.textField}
                        aria-label="e-mail address"
                        type="email"
                        name="email"
                        required
                      />
                    </FormControl>
                  </Grid>
                  <Grid>
                    <FormControl
                      className={classes.formCtrl}
                      error={!!formErrorMessage.confirmPassword}>
                      <Typography className={classes.smGrayText}>
                        Password *
                      </Typography>
                      <TextField
                        className={classes.textField}
                        aria-label="password"
                        type="password"
                        inputProps={{ minLength: 6 }}
                        name="password"
                        required
                      />
                      <FormHelperText>
                        {formErrorMessage.confirmPassword}
                      </FormHelperText>
                    </FormControl>
                  </Grid>
                  <Grid>
                    <FormControl
                      className={classes.formCtrl}
                      error={!!formErrorMessage.confirmPassword}>
                      <Typography className={classes.smGrayText}>
                        Confirm Password *
                      </Typography>
                      <TextField
                        className={classes.textField}
                        aria-label="confirm password"
                        type="password"
                        inputProps={{ minLength: 6 }}
                        name="confirmPassword"
                        required
                      />
                      <FormHelperText>
                        {formErrorMessage.confirmPassword}
                      </FormHelperText>
                    </FormControl>
                  </Grid>
                  <Box className={classes.btnContainer}>
                    <Button
                      type="submit"
                      color="primary"
                      variant="contained"
                      size="large"
                      className={classes.button}>
                      Create
                    </Button>
                  </Box>
                </Grid>
              </form>
            </Grid>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
