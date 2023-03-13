import CreateNote from "./components/CreateNote";
import Header from "./components/Header";
import {Box} from "@mui/material"
function App() {
  return (
    <>
      <Header />
      <Box style={{ padding: 20 }}>
        <CreateNote />
      </Box>
    </>
  );
}

export default App;
