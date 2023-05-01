import { Box, Flex, Icon, Image, Spacer } from "@chakra-ui/react";
import { HiBars3CenterLeft, HiOutlineShoppingBag } from "react-icons/hi2";
import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <Flex as='nav' alignItems='center'>
      <Box w={["15rem", "20rem"]}>
        <Image objectFit='cover' src={Logo} alt='Softy Logo' />
      </Box>
      <Spacer></Spacer>
      <Flex columnGap={12}>
        <Icon as={HiOutlineShoppingBag} boxSize='2.8rem' />
        <Icon as={HiBars3CenterLeft} boxSize='3rem' />
      </Flex>
    </Flex>
  );
};

export default Navbar;
