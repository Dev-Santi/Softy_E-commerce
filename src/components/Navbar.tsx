import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Image,
  Link,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";
import { HiBars3CenterLeft, HiOutlineShoppingBag } from "react-icons/hi2";
import Logo from "../assets/logo.png";
import "../scss/components/_index.scss";

const Navbar = ({ isLoad }: { isLoad: boolean }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex as='nav' alignItems='center' marginBottom={"5rem"}>
      <Box w={["15rem", "20rem"]}>
        <Image objectFit='cover' src={Logo} alt='Softy Logo' />
      </Box>
      <Spacer></Spacer>
      <Flex align='center' flexDirection={"row-reverse"}>
        <Box className='relative'>
          <Button colorScheme='transparent' color='black' onClick={onOpen}>
            <HiBars3CenterLeft />
          </Button>
          {isLoad ? <div className='greenCircle'></div> : ""}
        </Box>
        <Drawer placement={"right"} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth='1px' fontSize='2.5rem'>
              Menu
            </DrawerHeader>
            <DrawerBody>
              <Accordion
                borderBottom={"transparent"}
                borderTop={"transparent"}
                allowMultiple
              >
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box className='navLinks navLinkAccordion'>Skin Care</Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Link
                      className='navLinks'
                      color={"gray.600"}
                      fontSize={"1.4rem"}
                    >
                      Si
                    </Link>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
              <Link className='navLinks' href='#'>
                Products
              </Link>
              <Link className='navLinks' href='#'>
                Testimonials
              </Link>
              <Link className='navLinks' href='#'>
                About Us
              </Link>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        <Button
          color='black'
          colorScheme='transparent'
          _hover={{ transform: "scale(1.2)" }}
        >
          <HiOutlineShoppingBag className='svg_small'></HiOutlineShoppingBag>
        </Button>
      </Flex>
    </Flex>
  );
};

export default Navbar;
