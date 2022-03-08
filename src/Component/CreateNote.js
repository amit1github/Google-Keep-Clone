import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Container,
  Typography,
  Grid,
  IconButton,
  TextField,
} from "@mui/material";
// import { AddRounded, SendIcon, AddIcon, PhotoCamera } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import Icon from "@mui/material/Icon";
import { fontSize, textAlign } from "@mui/system";
import { makeStyles } from "@mui/styles";


const useStyle = makeStyles({
  container: {
    marginTop: "20px",
    // padding: "100px",
    // border: "2px solid green"
  },

  grid: {
    // border:"2px solid red",
    spacing: "0px",
    direction: "column",
    display: "flex",
    justifyContent: "center",
  },

  grid2: {
    // border: "2px solid blue",
  },

  card: {
    padding: "0px !important",
    paddingBottom: "0px",
    paddingRight: "0px",
    borderRadius: "20px",
    boxShadow: "0px 0px 10px black",
    // border: "1px solid #1976d2",
  },
  cardContent: {
    paddingBottom: "0px !important",
    // paddingRight: "0px",
  },

  textField: {
    width: "100%",
    // border: "0px !important",
    paddingTop: "15px"
  },

  PlaceholderFontSize: {
    fontSize: "22px"
  },

  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
    paddingBottom: "0px",
    paddingRight: "0px",
  },

  button: {
    // border: "2px solid blue",
    padding: "0px",
  },

  icon: {
    fontSize: "40px",
    // textAlign: "right",
    alignContent: "center",
  },
});

const CreateNote = () => {
  const classes = useStyle();

  return (
    <>
      <Container className={classes.container}>
        <Grid container className={classes.grid}>
          <Grid className={classes.grid2} padding={0} xs={12} sm={8} md={6} lg={6}>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <Typography variant="h5" placeHolder="Title" color="secondary" align="center">
                  Writing Your Note!
                </Typography>
                <TextField
                  className={classes.textField}
                  multiline
                  // focused >> it active your textfield 
                  rows={5}
                  placeholder="Write a note here..."
                  // variant="Outlined"
                  InputProps={{ classes: {
                                 input: classes.PlaceholderFontSize,
                               }, }}
                />
                <CardActions className={classes.cardActions}>
                  <IconButton color="primary" >
                    <Icon className={classes.icon}>add_circle</Icon>
                  </IconButton>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default CreateNote;
