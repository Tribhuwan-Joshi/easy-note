import {Box,Typography} from "@mui/material"
import { NoteObject } from "../models/note"
import Note from "./Note"

function Notes({notes}:{notes : NoteObject[]}) {
  return (
  <Box>
    <Typography variant="h5">Notes</Typography>
    <Box>
        {notes.map( note => (
            <Note note={note}/>
        ))}
    </Box>
  </Box>
  )
}

export default Notes