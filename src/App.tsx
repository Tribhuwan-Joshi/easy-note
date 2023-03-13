import CreateNote from "./components/CreateNote";
import Header from "./components/Header";
import {Box} from "@mui/material"
import Notes from "./components/Notes";
function App() {
  return (
    <>
      <Header />
      <Box style={{ padding: 20 }}>
        <CreateNote />
        <Notes/>
      </Box>
    </>
  );
}

export default App;
