import { Flex } from "@chakra-ui/layout";
import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const Form: React.FC = ({ children }: IProps) => {
  return (
    <Flex
      as="form"
      h="80%"
      w="60%"
      p={5}
      flexDir="column"
      backgroundColor="gray.700"
      border="2px solid #8257e6"
    >
      {children}
    </Flex>
  );
};

export default Form;
