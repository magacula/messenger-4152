import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  outerFlexContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
    },
  },

  header: {
    fontWeight: "600",
    fontSize: "2rem",
    margin: theme.spacing("auto", "auto", "auto", 0),

    [theme.breakpoints.down("sm")]: {
      margin: "auto",
    },
  },

  button: {
    borderRadius: 3,
    border: 0,
    padding: "10px 40px",
    marginTop: "1rem",
    fontFamily: theme.typography.button.fontFamily,
  },

  btnContainer: {
    marginTop: "1.5rem",
    display: "flex",
    justifyContent: "center",
  },

  sideBanner: {
    minHeight: "100vh",
    position: "relative",
    width: "100%",

    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  rightSection: {
    height: "100vh",
  },

  topContainer: {
    gap: "2rem",
    justifyContent: "flex-end",
    paddingRight: "3rem",
    alignItems: "center",
    gridTemplateColumns: "200px 200px",
    marginTop: "1rem",
  },

  formCtrl: {
    marginTop: "1rem",
    marginLeft: "0.5rem",
  },

  formContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: "4rem",
  },

  form: {
    margin: theme.spacing("auto", "auto", "auto", 0),

    [theme.breakpoints.down("sm")]: {
      margin: "auto",
    },
  },

  textField: {
    width: "25rem",
  },

  smGrayText: {
    color: theme.palette.smallTextColor.main,
    fontSize: theme.typography.fontSize,
    marginTop: "1rem",
  },

  bgOverlay: {
    height: "100vh",
    position: "absolute",

    "&::after": {
      content: `""`,
      position: "absolute",
      background: "linear-gradient(#3A8DFF, #86B9FF)",
      opacity: "85%",
      width: "100%",
      height: "100%",
      top: "0",
      left: "0",
    },
  },

  bgImg: {
    objectFit: "cover",
    maxWidth: "100%",
    height: "100%",
  },

  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 3,
    display: "grid",
    justifyItems: "center",
    gridGap: "2.5rem",
  },

  sloganText: {
    fontSize: "1.75rem",
    textAlign: "center",
    color: theme.typography.color,
  },
}));
