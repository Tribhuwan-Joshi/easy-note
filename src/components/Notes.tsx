import {Box,Typography} from "@mui/material"
import { NoteObject } from "../models/note"
import Note from "./Note"

function Notes({notes ,deleteNote}:{notes : NoteObject[] , deleteNote:(id:number)=>void}) {
  return (
  <Box>
    <Typography variant="h5">Notes</Typography>
    <Box>
        {notes.map( note => (
            <Note note={note} deleteNote={deleteNote}/>
        ))}
    </Box>
  </Box>
  )
}

export default Notes