import React from "react";
import {
  Card,
  CardActions,
  Container,
  Grid,
  Typography,
  TextField,
  IconButton,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Delete, Edit } from "@mui/icons-material";

const useStyle = makeStyles({
  container: {
    marginTop: "30px",
  },

  card: {
    boxShadow: "0px 0px 10px black",
    borderRadius: "20px",
  },

  textField: {
    width: "100%",
    padding: "10px",
  },

  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },

  button: {
    padding: "0px",
  },

  // delete: {
  //   padding: "0px",
  // },
});

const Note = () => {
  const classes = useStyle();

  return (
    <>
      <Container className={classes.container}>
        <Grid item>
          <Grid spacing={2} xs={12} sm={6} md={3} lg={4}>
            <Card className={classes.card}>
              <Typography align="center" variant="h6">
                Your Saved Notes
              </Typography>
              <TextField
                className={classes.textField}
                rows={5}
                multiline
                // variant="standard"
                // InputProps={{
                //   disableUnderline: true,
                // }}
              />
              <CardActions className={classes.cardActions}>
                <IconButton color="primary">
                  <Edit/>
                </IconButton>
                <IconButton color="warning">
                  <Delete/>
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Note;
