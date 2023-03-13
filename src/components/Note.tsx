import {Card,CardContent,Typography,Box,Button,styled} from "@mui/material"
import { NoteObject } from '../models/note'
const StyledCard = styled(Card)`
width:400px;
margin:20px;
`

const Wrapper = styled(Box)`
& > button {
    border: 1px solid black;
    background:white;
    margin-top:5px;

}
`


function Note({
  note,
  deleteNote,
}: {
  note: NoteObject;
  deleteNote: (id: number) => void;
}) {
  return (
    <StyledCard style={{ backgroundColor: note.color }}>
      <CardContent>
        <Box>
          <Typography>{note.title}</Typography>
          <Typography>{note.details}</Typography>
          <Typography>{note.date}</Typography>
          <Wrapper>
            <Button onClick={() => deleteNote(note.id)} variant="outlined">
              Delete
            </Button>
          </Wrapper>
        </Box>
      </CardContent>
    </StyledCard>
  );
}

export default Note