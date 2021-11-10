import React, { useState, useRef } from "react";
import {
  FormControl,
  FilledInput,
  InputAdornment,
  TextField,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { postMessage } from "../../store/utils/thunkCreators";
import { IoImagesSharp } from "react-icons/io5";

const useStyles = makeStyles(() => ({
  root: {
    justifySelf: "flex-end",
    marginTop: 15,
  },
  input: {
    padding: "1rem 2rem",
    height: 60,
    backgroundColor: "#F4F6FA",
    borderRadius: 8,
    marginBottom: 20,
  },
  uploadBtn: {
    cursor: "pointer",
    fontSize: 20,
  },
}));

const Input = (props) => {
  const classes = useStyles();
  const [text, setText] = useState("");
  const { postMessage, otherUser, conversationId, user } = props;

  const [attachmentsList, setAttachmentsList] = useState([]);
  const [image, setImage] = useState("");

  const inputRef = useRef();

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleFiles = (event) => {
    let newImage = event.target.files[0]; // gets a new File Object from selecting an image

    uploadImage(newImage); // pass the image file to uploadImage
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // add sender user info if posting to a brand new convo, so that the other user will have access to username, profile pic, etc.
    const reqBody = {
      text: event.target.text.value,
      recipientId: otherUser.id,
      conversationId,
      sender: conversationId ? null : user,
      attachments: attachmentsList,
    };
    await postMessage(reqBody);
    setText("");
    setAttachmentsList([]);
  };

  // function takes in a new image and makes a API call to Cloudinary cloud server
  // and returns its image URL stored on the server
  const uploadImage = async (newImage) => {
    // FormData() holds form fields & their values in key/value pairs (form data)
    const formData = new FormData();
    formData.append("file", newImage);
    formData.append("upload_preset", "l4lhhvmt");

    try {
      // uploads image data to Cloudinary server
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dspjub0if/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();

      attachmentsList.push(data.url); // data.url is the URL we get back from the response
      setAttachmentsList(attachmentsList);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <FormControl fullWidth hiddenLabel>
        <TextField
          inputRef={inputRef}
          classes={{ root: classes.input }}
          placeholder="Type something..."
          value={text}
          name="text"
          onChange={handleChange}
          InputProps={{
            disableUnderline: true,
            endAdornment: (
              <InputAdornment position="start">
                <label htmlFor="files">
                  <IoImagesSharp className={classes.uploadBtn} />
                </label>
                <FilledInput
                  type="file"
                  id="files"
                  style={{ display: "none" }}
                  name="image_upload"
                  onChange={(event) => {
                    handleFiles(event);
                    inputRef.current.focus();
                  }}
                  onClick={(event) => {
                    event.target.value = null;
                  }}
                  multiple
                />
              </InputAdornment>
            ),
          }}
        />
      </FormControl>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    postMessage: (message) => {
      dispatch(postMessage(message));
    },
  };
};

export default connect(null, mapDispatchToProps)(Input);
