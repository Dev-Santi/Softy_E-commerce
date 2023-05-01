import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
//Components
import Navbar from "./components/Navbar";

const pageTitle = "Softy - Bienestar y belleza";

function App() {
  useEffect(() => {
    document.title = pageTitle;
  });

  return (
    <>
      <Box as='header' pt={5} className='sectionPadding'>
        <Navbar isLoad={true} />
      </Box>
    </>
  );
}

export default App;
