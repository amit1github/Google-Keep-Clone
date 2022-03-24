import React, { useEffect, useState } from "react";
import Header from "./Component/Header";
import CreateNote from "./Component/CreateNote";
import Note from "./Component/Note";
import Footer from "./Component/Footer";

const App = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const localNotes = localStorage.getItem("notes")
    console.log({localNotes});  
    if (localNotes) {
      setNotes(JSON.parse(localNotes))
    }
  }, []);


  const addNotes = async note => {
    setNotes([...notes, note])
  }


  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes])


  const markDelete = id => {
    setNotes(notes.filter(note => note.id !== id))
  }

  return (
    <>
      <Header />
      <CreateNote addNotes={addNotes} />
      <Note notes={notes} markDelete={markDelete} />
      <Footer />
    </>
  );
};

export default App;
