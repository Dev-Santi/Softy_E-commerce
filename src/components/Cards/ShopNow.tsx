import { Box, Flex, Heading, Img } from "@chakra-ui/react";
import arrowVector from "../../assets/arrow.png";
import Button from "../Buttons/Button";

const ShopNow = ({ price }: { price: string | number }) => {
  return (
    <Flex justifyContent='space-between' maxWidth='12rem' alignItems='center'>
      <Box margin='3rem 0' borderLeftWidth='1px' pl='1.5rem' borderColor='gray'>
        <Heading color='#ff5371dd' as='h2' fontSize='1.2rem'>
          Start From
        </Heading>
        <Box
          m='1rem 0'
          as='span'
          display='block'
          fontSize='2.5rem'
          fontWeight='900'
        >
          ${price}
        </Box>
        <Button className='btnGreen'>Shop Now</Button>
      </Box>
      <Box>
        <Img
          backdropFilter=''
          ml='2rem'
          transform='rotate(-30deg) scale(0.7) translatey(-3.5rem)'
          maxWidth='12rem'
          className='rotate'
          src={arrowVector}
          alt='An arrow vector'
        />
      </Box>
    </Flex>
  );
};

export default ShopNow;
