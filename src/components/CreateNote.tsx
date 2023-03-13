import {InputBase,Box,Button,styled} from "@mui/material"
import {useState} from "react"
import { NoteObject } from "../models/note"
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

`
const defaultObj = {
    id:0,
    title:'',
    details : '',
    color : '',
    date: (new Date().toLocaleString()).toString(),
}


function CreateNote() {

    const [note,setNote] = useState<NoteObject>(defaultObj);
    const onValueChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
setNote({...note , [e.target.name] : e.target.value.trim()})
    };
  return (
    <Container>
      <InputBase onChange={onValueChange} name="title" placeholder="Title" />
      <Box component="span">30</Box>
      <InputBase onChange={onValueChange} name="details" placeholder="Details" />
      <Box component="span">50</Box>
      <InputBase onChange={onValueChange} name="color"  type="color" defaultValue={"#F5F5F5"} />
      <Button variant="outlined">Create Note</Button>
    </Container>
  );
}

export default CreateNote