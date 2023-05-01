import { Box } from "@chakra-ui/react";

const Button = ({ children }: { children: string }) => {
  return <Box as='button'>{children}</Box>;
};

export default Button;
