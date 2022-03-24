import React from "react";
import {
  Card,
  CardActions,
  Container,
  Grid,
  TextField,
  CardContent,
  Button,
} from "@mui/material";

const Note = ({ notes, markDelete }) => {
  return (
    <Container sx={{ py: 6 }} maxWidth="md">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{ height: "100%", display: "flex", flexDirection: "column" }}
          >
            {notes.map((note) => (
              <CardContent key={note.id} sx={{ flexGrow: 1 }} disableGutters>
                <TextField primary={note.noteString} placeholder="Your Title" sx={{ pb: 2 }} />
                <TextField
                  placeholder="Your Notes will render here"
                  multiline
                  rows={4}
                  primary={note.noteString}
                />
                <span
                  //  sx={{ display: "flex", alignItems: "flex-end" }}
                   onClick={() => markDelete(note.id)}
                >
                <CardActions>
                  <Button size="small" variant="contained" color="secondary">
                    Delete
                  </Button>
                </CardActions>
                </span>
              </CardContent>
            ))}
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Note;
