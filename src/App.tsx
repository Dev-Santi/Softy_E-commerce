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
        <Heading margin='0 auto' as={"h1"} fontSize={["2.5rem", "5rem"]}>
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
