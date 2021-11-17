import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Avatar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  date: {
    fontSize: 11,
    color: "#BECCE2",
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 2,
  },
  text: {
    fontSize: 14,
    color: (props) => (props.bubbleType === "sender" ? "#91A3C0" : "#FFFFFF"),
    letterSpacing: -0.2,
    padding: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  bubble: {
    background: (props) =>
      props.bubbleType === "sender"
        ? "#F4F6FA"
        : "linear-gradient(225deg, #6CC1FF 0%, #3A8DFF 100%)",

    borderRadius: (props) =>
      props.bubbleType === "sender" ? "10px 10px 0 10px" : "10px 10px 0 10px",
    margin: (props) => (props.bubbleType === "sender" ? "0.5rem 0" : null),
  },
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
  avatar: {
    height: 25,
    width: 25,
    marginTop: 6,
  },
}));

export const MessageContent = (props) => {
  const { time, text, attachments, otherUser, bubbleType } = props;
  const classes = useStyles(props);

  const renderMessageContent = () => {
    // Message with no text and one image
    if (attachments !== null && attachments.length === 1 && text === "") {
      return (
        <>
          <Typography className={classes.date}>{time}</Typography>
          <img
            className={classes.image}
            src={attachments[0]}
            alt={attachments[0].split(".")[0]}
          />
          <Avatar
            alt={otherUser.username}
            src={otherUser.photoUrl}
            className={classes.avatar}></Avatar>
        </>
      );
    }
    // Message with text and only one image
    else if (attachments !== null && attachments.length === 1) {
      return (
        <>
          <Typography className={classes.date}>{time}</Typography>
          <Box className={classes.bubble}>
            <img
              className={classes.image}
              src={attachments[0]}
              alt={attachments[0].split(".")[0]}
            />
            <Typography className={classes.text}>{text}</Typography>
          </Box>
          <Avatar
            alt={otherUser.username}
            src={otherUser.photoUrl}
            className={classes.avatar}></Avatar>
        </>
      );
    }
    // Multiple Images
    else if (attachments !== null && attachments.length > 1) {
      return (
        <>
          <Box className={classes.bubble}>
            <Typography className={classes.text}>{text}</Typography>
          </Box>
          <Box className={classes.imgContainer}>
            {attachments.map((url) => {
              return (
                <img
                  src={url}
                  className={classes.image}
                  alt={attachments[0].split(".")[0]}
                />
              );
            })}
          </Box>
          <Typography className={classes.date}>{time}</Typography>
          <Avatar
            alt={otherUser.username}
            src={otherUser.photoUrl}
            className={classes.avatar}></Avatar>
        </>
      );
    }
    // Message with only text
    else {
      return (
        <>
          <Typography className={classes.date}>
            {bubbleType === "sender" ? time : null}
          </Typography>
          <Box className={classes.bubble}>
            <Typography className={classes.text}>{text}</Typography>
          </Box>
        </>
      );
    }
  };

  return renderMessageContent();
};
