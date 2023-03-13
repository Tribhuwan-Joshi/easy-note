import { InputBase, Box, Button, styled, Typography } from "@mui/material";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { DETAILS_LIMIT, TITLE_LIMIT } from "../constants/constant";
import { NoteObject } from "../models/note";
const Container = styled(Box)`
& > * {
    margin: 20px 20px 20px 0;

}
& > div > input[type="text"]{
    border-bottom : 1px solid black;
    opacity:0.4;
    width:300px;
    padding-right:25px;
}
    & > div > input[type="color"]{
        width:40px;
        height:30px;
        position:relative;
        bottom:-10px;
    }
& > span {
    font-size:10px;
    position:relative;
    right:40px;
}

}

`;
const Error = styled(Typography)`
  background: red;
  color: white;
  width: 40%;
  padding: 10px;
`;
const defaultObj = {
    id: 0,
    title: "",
    details: "",
    color: "",
    date: new Date().toLocaleString().toString(),
};

function CreateNote({ addNotes }: { addNotes: (note: NoteObject) => void }) {
    const [note, setNote] = useState<NoteObject>(defaultObj);
    const [error, setError] = useState("");
    const onValueChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        if(error){
            setError("")
        }
        setNote({ ...note, [e.target.name]: e.target.value });
    };

    function onCreateNote() {
        if (!note.title && !note.details) {
            setError("All fields are mandatory");
            return;
        }
        addNotes({ ...note, id: uuid() });
        setNote(defaultObj);
    }
    return (
      <Container>
        <InputBase
          inputProps={{ maxLength: TITLE_LIMIT }}
          onChange={onValueChange}
          value={note.title}
          name="title"
          placeholder="Title"
        />
        <Box component="span">
          {note.title.trim().length}/{TITLE_LIMIT}
        </Box>
        <InputBase
          value={note.details}
          onChange={onValueChange}
          name="details"
          placeholder="Details"
          inputProps={{ maxLength: DETAILS_LIMIT }}
        />
        <Box component="span">
          {note.details.trim().length}/{DETAILS_LIMIT}
        </Box>
        <InputBase
          onChange={onValueChange}
          name="color"
          type="color"
          defaultValue={"#F5F5F5"}
        />
        <Button variant="outlined" onClick={onCreateNote}>
          Create Note
        </Button>
        {error && <Error>{error}</Error>}
      </Container>
    );
}

export default CreateNote;
