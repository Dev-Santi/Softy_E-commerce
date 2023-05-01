import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Image,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";
import { HiBars3CenterLeft, HiOutlineShoppingBag } from "react-icons/hi2";
import Logo from "../assets/logo.png";
import "../scss/components/_index.scss";

const Navbar = ({ isLoad }: { isLoad: boolean }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex as='nav' alignItems='center'>
      <Box w={["15rem", "20rem"]}>
        <Image objectFit='cover' src={Logo} alt='Softy Logo' />
      </Box>
      <Spacer></Spacer>
      <Flex align='center' flexDirection={"row-reverse"}>
        <Box className='relative'>
          <Button
            _hover={{ transform: "scale(1.2)" }}
            colorScheme='transparent'
            color='black'
            onClick={onOpen}
          >
            <HiBars3CenterLeft />
          </Button>
          {isLoad ? <div className='greenCircle'></div> : ""}
        </Box>
        <Drawer placement={"right"} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
            <DrawerBody>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
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
