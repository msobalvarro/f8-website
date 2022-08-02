import React from "react"

import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Image,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const NavbarComponent = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  // const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex
        as="header"
        bg={useColorModeValue('gray.100', 'gray.900')}
        position="fixed"
        alignItems="center"
        justifyContent="space-between"
        paddingX="10"
        // paddingY="10"
        zIndex={1000}
        backdropFilter="saturate(180%) blur(10  px)"
        w="100%">
        <Box>
          <Image
            padding="5"
            src={require("../assets/images/logo/F8_Horizontal_Logo.png")} h="16" />
        </Box>



        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          <Button
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'#'}>
            Sign In
          </Button>
          <Button
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'pink.400'}
            href={'#'}
            _hover={{
              bg: 'pink.300',
            }}>
            Sign Up
          </Button>
        </Stack>
      </Flex>
    </>
  );
}

export default NavbarComponent