import {InputBase,Box,Button,styled} from "@mui/material"

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
function CreateNote() {
  return (
    <Container>
      <InputBase placeholder="Title" />
      <Box component="span">30</Box>
      <InputBase placeholder="Details" />
      <Box component="span">50</Box>
      <InputBase type="color" defaultValue={"#F5F5F5"} />
      <Button variant="outlined">Create Note</Button>
    </Container>
  );
}

export default CreateNote