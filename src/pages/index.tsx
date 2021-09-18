import { Input } from "@chakra-ui/input";
import { Box, Text } from "@chakra-ui/layout";

import Form from "../components/Form";
import Main from "../components/Main";

export default function Home() {
  return (
    <Main>
      <Form>
        <Box mb={5}>
          <Text as="label" fontSize="1.1rem" for-id="name">
            Digite o seu nome:
          </Text>
          <Input
            type="text"
            id="name"
            placeholder="Ex: Luís Gabriel Marchió Batista"
            backgroundColor="gray.800"
            border="0"
            mt={2}
          />
        </Box>

        <Box mb={5}>
          <Text as="label" fontSize="1.1rem" for-id="email">
            Digite o seu melhor email:
          </Text>
          <Input
            type="email"
            id="email"
            placeholder="Ex: luisgabrielmarchio75@gmail.com"
            backgroundColor="gray.800"
            border="0"
            mt={2}
          />
        </Box>

        <Box mb={5}>
          <Text as="label" fontSize="1.1rem" for-id="cpf">
            Digite o seu cpf:
          </Text>
          <Input
            type="text"
            id="cpf"
            placeholder="Ex: 000.000.000-00"
            backgroundColor="gray.800"
            border="0"
            mt={2}
          />
        </Box>
      </Form>
    </Main>
  );
}
