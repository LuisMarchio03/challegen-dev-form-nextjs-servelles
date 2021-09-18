import { FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box } from "@chakra-ui/layout";

import Form from "../components/Form";
import Main from "../components/Main";

export default function Home() {
  return (
    <Main>
      <Form>
        <Box>
          <FormLabel for-id="name">Digite o seu nome</FormLabel>
          <Input
            type="text"
            id="name"
            placeholder="Ex: Luís Gabriel Marchió Batista"
          />
        </Box>

        <Box>
          <FormLabel for-id="email">Digite o seu melhor email</FormLabel>
          <Input
            type="email"
            id="email"
            placeholder="Ex: luisgabrielmarchio75@gmail.com"
          />
        </Box>

        <Box>
          <FormLabel for-id="cpf">Digite o seu cpf</FormLabel>
          <Input type="text" id="cpf" placeholder="Ex: 000.000.000-00" />
        </Box>
      </Form>
    </Main>
  );
}
