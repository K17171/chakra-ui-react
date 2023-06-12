import { Fragment } from "react";
import CardComponent from "./components/card";
import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import FilterComponent from "./components/filterComponent";

function App() {
  return (
    <Fragment>
      <Container maxW={"7xl"}>
        <Box m={90}>
          <Heading as="h1">Stories by Chakra Templates</Heading>
        </Box>
        <Flex m={20}>
          <Box w="300px" p="4" mr={"10px"}>
            <FilterComponent />
          </Box>
          <Box flex="2">
            <CardComponent />
          </Box>
        </Flex>
      </Container>
    </Fragment>
  );
}

export default App;
