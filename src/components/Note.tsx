import {Card,CardContent,Typography,Box,Button} from "@mui/material"
import { NoteObject } from '../models/note'

function Note({note}:{note:NoteObject}) {
  return (
    <Card style={{backgroundColor:note.color}}>
      <CardContent>
        <Box>
          <Typography>{note.title}</Typography>
          <Typography>{note.details}</Typography>
          <Typography>{note.date}</Typography>
          <Button variant="outlined">Delete</Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default Note