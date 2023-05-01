import { Box, Flex, Heading } from "@chakra-ui/react";
import Button from "../Buttons/Button";

const ShopNow = ({ price }: { price: number }) => {
  return (
    <Flex direction='column' borderLeft={1} borderColor='gray'>
      <Heading as='h2'>Start From</Heading>
      <Box as='span'>{price}</Box>
      <Button>Shop Now</Button>
    </Flex>
  );
};

export default ShopNow;
