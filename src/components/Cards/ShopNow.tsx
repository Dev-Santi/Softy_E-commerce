import { Box, Flex, Heading } from "@chakra-ui/react";
import Button from "../Buttons/Button";

const ShopNow = ({ price }: { price: string | number }) => {
  return (
    <Flex
      margin='3rem 0'
      direction='column'
      borderLeftWidth='1px'
      pl='1.5rem'
      borderColor='gray'
    >
      <Heading color='red.600' as='h2' fontSize='1.2rem'>
        Start From
      </Heading>
      <Box as='span' fontSize='2.5rem' fontWeight='500'>
        ${price}
      </Box>
      <Button>Shop Now</Button>
    </Flex>
  );
};

export default ShopNow;
