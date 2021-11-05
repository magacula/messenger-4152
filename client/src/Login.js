import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
} from "@material-ui/core";
import { login } from "./store/utils/thunkCreators";
import { useStyles } from "./styles/styles";
import backgroundImg from "./assets/bg-img.png";
import { ReactComponent as ChatLogo } from "./assets/bubble.svg";

const Login = (props) => {
  const history = useHistory();
  const { user, login } = props;
  const classes = useStyles(props);

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
          <Grid container className={classes.formContainer}>
            <Typography className={classes.header}>Welcome back!</Typography>
            <form className={classes.form} onSubmit={handleLogin}>
              <Grid>
                <Grid>
                  <FormControl className={classes.formCtrl} required>
                    <Typography className={classes.smGrayText}>
                      Username
                    </Typography>
                    <TextField
                      className={classes.textField}
                      aria-label="username"
                      name="username"
                      type="text"
                    />
                  </FormControl>
                </Grid>
                <FormControl className={classes.formCtrl} required>
                  <Typography className={classes.smGrayText}>
                    Password
                  </Typography>
                  <TextField
                    className={classes.textField}
                    aria-label="password"
                    type="password"
                    name="password"
                  />
                </FormControl>
                <Grid>
                  <Box className={classes.btnContainer}>
                    <Button
                      className={classes.button}
                      type="submit"
                      variant="contained"
                      size="large"
                      color="primary">
                      Login
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </Grid>
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
