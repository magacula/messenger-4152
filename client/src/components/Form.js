import React from "react";
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
  FormHelperText,
} from "@material-ui/core";
import { useStyles } from "../styles/styles";

export const Form = ({ onSubmit, inputs, buttonText, greetingText }) => {
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.formContainer}>
        <Typography className={classes.header}>{greetingText}</Typography>
        <form className={classes.form} onSubmit={onSubmit}>
          <Grid>
            {inputs.map((input) => {
              return (
                <Grid key={input.id}>
                  <FormControl
                    className={classes.formCtrl}
                    error={input.error ? input.error : undefined}>
                    <Typography className={classes.smGrayText}>
                      {input.labelHeading}
                    </Typography>
                    <TextField
                      className={classes.textField}
                      aria-label={input.ariaLabel}
                      name={input.name}
                      type={input.type}
                      required={input.required ? { required: true } : undefined}
                      inputProps={
                        input.inputProps ? input.inputProps : undefined
                      }
                    />
                    {input.formHelperText && (
                      <FormHelperText>{input.formHelperText}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
              );
            })}
            <Box className={classes.btnContainer}>
              <Button
                type="submit"
                color="primary"
                variant="contained"
                size="large"
                className={classes.button}>
                {buttonText}
              </Button>
            </Box>
          </Grid>
        </form>
      </Grid>
    </>
  );
};
