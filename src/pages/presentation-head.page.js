import "../styles/presentation.scss"
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Image,
} from "@chakra-ui/react"


const Presentation = () => (
  <>
    <Container maxW={"3xl"}>
      <Stack
        as={Box}
        textAlign={"center"}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 36 }}>
        <Image
          // alignSelf="center"
          // height="12"  
          // width="auto"
          src={require("../assets/images/logo/F8_Logo_Basic_Variant.png")} />

        <Heading
          fontWeight={600}
          flexDir="column"
          fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}>
          Make money from <br />
          <Text as={"span"} color={"green.400"}>
            your audience
          </Text>
        </Heading>

        <Text color={"gray.500"}>
          Monetize your content by charging your most loyal readers and reward
          them loyalty points. Give back to your loyal readers by granting
          them access to your pre-releases and sneak-peaks.
        </Text>

        <Stack
          direction={"column"}
          spacing={3}
          align={"center"}
          alignSelf={"center"}
          position={"relative"}>
          <Button
            colorScheme={"green"}
            bg={"green.400"}
            rounded={"full"}
            px={6}
            _hover={{
              bg: "green.500",
            }}>
            Get Started
          </Button>
        </Stack>
      </Stack>
    </Container>
  </>
)

export default Presentation