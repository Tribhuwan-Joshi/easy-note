import {Card,CardContent,Typography,Box,Button,styled} from "@mui/material"
import { NoteObject } from '../models/note'
const styledCard = styled(Card)`
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
function Note({note}:{note:NoteObject}) {
  return (
    <Card style={{ backgroundColor: note.color }}>
      <CardContent>
        <Box>
          <Typography>{note.title}</Typography>
          <Typography>{note.details}</Typography>
          <Typography>{note.date}</Typography>
          <Wrapper>
            <Button variant="outlined">Delete</Button>
          </Wrapper>
        </Box>
      </CardContent>
    </Card>
  );
}

export default Note