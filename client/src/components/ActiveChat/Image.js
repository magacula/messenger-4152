import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  image: {
    height: 200,
    borderTopLeftRadius: "0.75rem",
    borderTopRightRadius: "0.75rem",
    borderBottomLeftRadius: "0.75rem",
  },
  imgContainer: {
    display: "flex",
    gap: "0.5rem",
  },
  text: {
    fontSize: 14,
    color: "#91A3C0",
    letterSpacing: -0.2,
    padding: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  bubble: {
    background: "#F4F6FA",
    borderRadius: "10px 10px 0 10px",
  },
}));

export const Image = ({ attachments }) => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.imgContainer}>
        {attachments.map((url, index) => {
          return <img className={classes.image} key={index} src={url} />;
        })}
      </Box>
    </>
  );
};
