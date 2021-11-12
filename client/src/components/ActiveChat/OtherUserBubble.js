import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Avatar } from "@material-ui/core";
import { MessageContent } from "./MessageContent";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    margin: "1rem 0",
  },
  avatar: {
    height: 30,
    width: 30,
    marginRight: 11,
    marginTop: 6,
  },
  usernameDate: {
    fontSize: 11,
    color: "#BECCE2",
    fontWeight: "bold",
    marginBottom: 5,
  },
}));

const OtherUserBubble = (props) => {
  const classes = useStyles(props);
  const { text, time, otherUser, attachments } = props;
  return (
    <Box className={classes.root}>
      <Avatar
        alt={otherUser.username}
        src={otherUser.photoUrl}
        className={classes.avatar}></Avatar>
      <Box>
        <Typography className={classes.usernameDate}>
          {otherUser.username} {time}
        </Typography>
        <MessageContent
          attachments={attachments}
          text={text}
          otherUser={otherUser}
          time={time}
          bubbleType="receiver"
        />
      </Box>
    </Box>
  );
};

export default OtherUserBubble;
