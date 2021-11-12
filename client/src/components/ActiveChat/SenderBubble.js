import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import { MessageContent } from "./MessageContent";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    margin: "1rem 0",
  },
}));

const SenderBubble = (props) => {
  const classes = useStyles();
  const { time, text, attachments, otherUser } = props;

  return (
    <Box className={classes.root}>
      <MessageContent
        attachments={attachments}
        text={text}
        otherUser={otherUser}
        time={time}
        bubbleType="sender"
      />
    </Box>
  );
};

export default SenderBubble;
