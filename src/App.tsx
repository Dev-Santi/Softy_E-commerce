import { Box, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
//Components
import Navbar from "./components/Navbar";
import "./scss/style.scss";
import ShopNow from "./components/Cards/ShopNow";

const pageTitle = "Softy - Bienestar y belleza";

function App() {
  useEffect(() => {
    document.title = pageTitle;
  });

  return (
    <>
      <Box as='header' pt={5} className='sectionPadding'>
        <Navbar isLoad={true} />
        <Heading width='fit-content' as='h1' fontSize='clamp(2rem, 10vw, 5rem)'>
          Natural 🍃
          <br />
          Ingredients for
          <br />
          Healthy Skin Care
        </Heading>
        <ShopNow price={"25.00"}></ShopNow>
      </Box>
    </>
  );
}

export default App;
