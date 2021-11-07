import React from "react";
import backgroundImg from "../assets/bg-img.png";
import { ReactComponent as ChatLogo } from "../assets/bubble.svg";
import { Grid, Box, Typography } from "@material-ui/core";
import { useStyles } from "../styles/styles";

export const SideBanner = () => {
  const classes = useStyles();

  return (
    <>
      <Grid item className={classes.sideBanner}>
        <Box className={classes.bgOverlay}>
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
        </Box>
      </Grid>
    </>
  );
};
