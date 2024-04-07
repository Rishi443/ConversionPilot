import React from "react";
import { ChakraProps } from "@chakra-ui/react";
import { Box, Image, Link, Text, Flex, Heading, Container } from "@chakra-ui/react";

interface Props extends ChakraProps {
  className?: string;
}

export default function TopNavBar({ ...props }: Props) {
  return (
    <Box {...props} as="header">
      <Container
        alignSelf="start"
        w="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        maxW="1405px"
        gap="20px"
        px="0px"
        mx="auto"
        flexDirection={{ md: "row", base: "column" }}
        p={{ md: "", base: "20px" }}
      >
        <Flex
          mb="4px"
          w={{ md: "42%", base: "100%" }}
          justifyContent="space-between"
          alignItems="center"
          gap="20px"
          flexDirection={{ base: "column", sm: "row" }}
        >
          <Image src="images/img_logo.svg" h="32px" w={{ base: "100%", sm: "16%" }} borderRadius="4px" />
          <Flex
            pt="16px"
            pl="16px"
            w={{ base: "100%", sm: "59%" }}
            justifyContent="space-between"
            alignItems="start"
            gap="20px"
          >
            <Link href="Leads" target="_blank" rel="noreferrer">
              <Text color="gray.700" ml="41px">
                Leads
              </Text>
            </Link>
            <Flex gap="10px" w="66%" flexDirection="column" alignItems="center">
              <Heading as="h6" color="deep_purple.A400">
                Knowledge
              </Heading>
              <Box h="4px" bg="deep_purple.A400" alignSelf="stretch" w="100%" />
            </Flex>
          </Flex>
        </Flex>
        <Flex w={{ md: "10%", base: "100%" }} justifyContent="space-between" alignItems="center" gap="20px">
          <Flex flexDirection="column" alignItems="start">
            <Text size="md">Amanda</Text>
            <Link href="#">
              <Text>Keller Williams</Text>
            </Link>
          </Flex>
          <Box h={{ md: "44px", base: "auto" }} bg="deep_purple.100" w="44px" position="relative" borderRadius="22px">
            <Image src="images/img_rectangle.png" borderRadius="50%" h="44px" w="44px" />
            <Box
              h="11px"
              borderColor="white.A700"
              borderWidth="1px"
              borderStyle="solid"
              bg="green.A700"
              w="11px"
              position="absolute"
              bottom="0.94px"
              right="0.94px"
              m="auto"
              borderRadius="5px"
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
