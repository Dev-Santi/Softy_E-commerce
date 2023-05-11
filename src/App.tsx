//React and Chakra UI
import { useEffect } from "react";
import { Box, Flex, Heading, Spacer } from "@chakra-ui/react";
//Components
import Navbar from "./components/Navbar";
import ShopNow from "./components/Cards/ShopNow";
import HeaderImg from "./components/Designs/HeaderImg";
//Styles
import "./scss/style.scss";

const pageTitle = "Softy - Bienestar y belleza";

function App() {
  useEffect(() => {
    document.title = pageTitle;
  });

  return (
    <>
      <Box
        pb='14rem'
        overflowY={"hidden"}
        as='header'
        pt={5}
        className='sectionPadding'
      >
        <Navbar isLoad={true} />
        <Flex direction={["column", null, "row"]}>
          <Box>
            <Heading
              margin='2rem 0'
              lineHeight={["5.5rem", "8rem"]}
              width='fit-content'
              as='h1'
              fontSize='clamp(2rem, 10vw, 5rem)'
            >
              Natural ☘
              <br />
              Ingredients for
              <br />
              Healthy Skin Care
            </Heading>
            <ShopNow price={"25.00"}></ShopNow>
          </Box>
          <Spacer />
          <HeaderImg />
        </Flex>
      </Box>
    </>
  );
}

export default App;
