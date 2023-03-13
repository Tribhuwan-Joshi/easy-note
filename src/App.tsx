import CreateNote from "./components/CreateNote";
import Header from "./components/Header";
import {Box} from "@mui/material"
import Notes from "./components/Notes";
import { useState } from "react";
import { NoteObject } from "./models/note";
function App() {
  const [notes,setNotes] = useState<NoteObject[]>([]);
  const addNotes = (note : NoteObject) => {
    setNotes([note,...notes])
  }
  return (
    <>
      <Header />
      <Box style={{ padding: 20 }}>
        <CreateNote addNotes={addNotes} />
        <Notes/>
      </Box>
    </>
  );
}

export default App;
