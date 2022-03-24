import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Button,
  TextField,
} from "@mui/material";
import { v4 } from "uuid";

const CreateNote = ({ addNotes }) => {
  const [noteString, setNoteString] = useState({
    title: "",
    content: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (noteString === "") {
      return alert("Please Fill Up Your Notes First");
    }

    const notes = {
      noteString,
      id: v4(),
    };

    //Todo: to understand
    addNotes(notes);
    setNoteString("");
  };

  return (
    <>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid
          container
          sx={{
            // spacing: "0px",
            display: "flex",
            direction: "column",
            justifyContent: "center",
          }}
        >
          <Grid item xs={6} sm={6} md={6}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                width: "auto",
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <TextField
                  placeholder="Your Title"
                  sx={{ pb: 2, width: 400 }}
                  value={noteString.title}
                  onChange={(e) => setNoteString(e.target.value)}
                />
                <TextField
                  placeholder="Your Notes will render here"
                  multiline
                  rows={4}
                  sx={{ width: 400 }}
                  value={noteString.content}
                  onChange={(e) => setNoteString(e.target.value)}
                />
                <CardActions>
                  <Button
                    size="medium"
                    variant="contained"
                    type="submit"
                    onClick={handleSubmit}
                    // sx={{ border: "1px solid black", display: "flex", alignItems: "flex-end", justifyContent: "flex-end", }}
                  >
                    Submit
                  </Button>
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
