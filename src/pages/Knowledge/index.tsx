import React from "react";
import { Helmet } from "react-helmet";
import TopNavBar from "../../components/TopNavBar";
import { Text, Image, Flex, Box, Button, Input, Heading, InputRightElement, InputGroup } from "@chakra-ui/react";

export default function KnowledgePage() {
  return (
    <>
      <Helmet>
        <title>Conversion Pilot MVP</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <Box bg="gray.600" boxShadow="sm" w="100%">
        <TopNavBar display="flex" bg="white.A700" justifyContent="center" alignItems="center" />
        <Flex alignItems="center" flexDirection={{ md: "row", base: "column" }}>
          <Flex
            gap="41px"
            zIndex={1}
            bg="white.A700"
            boxShadow="xs"
            w={{ md: "32%", base: "100%" }}
            position="relative"
            flexDirection="column"
            alignItems="start"
            p={{ md: "17px", base: "20px" }}
            borderRadius="4px"
          >
            <Heading size="s" as="h1" mt="10px" fontFamily="Lexend" fontSize="23px">
              Test your AI
            </Heading>
            <Box mb="14px" alignSelf="stretch">
              <Flex
                borderColor="deep_purple.A400"
                borderWidth="1px"
                borderStyle="solid"
                justifyContent="space-between"
                alignItems="center"
                gap="20px"
                p="9px"
                borderRadius="4px"
              >
                <Text size="md" ml={{ md: "6px", base: "0px" }} alignSelf="end">
                  Chat
                </Text>
                <Flex mr={{ md: "5px", base: "0px" }} gap="8px">
                  <Image src="images/img_flag_complex.svg" h="20px" w="20px" />
                  <Image src="images/img_button_power.svg" h="20px" w="20px" />
                </Flex>
              </Flex>
              <Flex mt="371px" gap="10px" flexDirection="column" alignItems="start">
                <Flex gap="11px" alignSelf="stretch" alignItems="start">
                  <Image src="images/img_chatbot_logo.png" borderRadius="50%" h="46px" w="46px" />
                  <Flex bg="gray.50" boxShadow="xs" flex={1} p="14px" borderRadius="4px">
                    <Text size="md" w="98%" lineHeight="23px">
                      <>
                        Hello, I&#39;m ConvesionPilotPrototype, a<br />
                        virtual assistant. Just so you are aware, I<br />
                        sometimes use Al to answer your
                        <br />
                        questions. If you provided a website
                        <br />
                        during creation, try asking me about it
                        <br />
                        Next try giving me some more
                        <br />
                        knowledge by setting up generative AI.
                      </>
                    </Text>
                  </Flex>
                </Flex>
                <Text size="xs" color="gray.700" ml={{ md: "58px", base: "0px" }}>
                  4 minutes ago
                </Text>
              </Flex>
              <InputGroup mt="11px">
                <Input placeholder={`Input text`} gap="35px" />
                <InputRightElement>
                  <Image src="images/img_play_arrow.svg" w="20px" h="20px" />
                </InputRightElement>
              </InputGroup>
            </Box>
          </Flex>
          <Flex
            ml={{ md: "-3px", base: "0px" }}
            position="relative"
            bg="gray.50"
            boxShadow="xs"
            flex={1}
            flexDirection="column"
            alignItems="start"
            p={{ md: "26px", base: "20px" }}
            borderRadius="4px"
            alignSelf="stretch"
          >
            <Heading size="s" ml={{ md: "11px", base: "0px" }} fontFamily="Lexend" fontSize="23px">
              Add Knowledge
            </Heading>
            <Text size="md" color="gray.700" mt="7px" ml={{ md: "12px", base: "0px" }}>
              Add custom knowledge to make your AI assistant smarter
            </Text>
            <Flex
              mt="20px"
              ml={{ md: "8px", base: "0px" }}
              alignSelf="stretch"
              flexDirection="column"
              alignItems="start"
            >
              <Heading as="h3">Public websites & sources</Heading>
              <Flex
                mt="23px"
                gap="16px"
                w={{ md: "56%", base: "100%" }}
                alignItems="center"
                flexDirection={{ base: "column", sm: "row" }}
              >
                <Input
                  size="xs"
                  placeholder={`Enter your website`}
                  alignSelf="start"
                  flexGrow={1}
                  pr={{ base: "20px", sm: 0 }}
                />
                <Button minW="94px" borderRadius="4px" px={{ base: "20px", sm: "" }}>
                  Add
                </Button>
              </Flex>
              <Box mt="45px" bg="gray.50" boxShadow="xs" alignSelf="stretch" borderRadius="4px">
                <Flex
                  zIndex={2}
                  bg="white.A700"
                  boxShadow="xs"
                  position="relative"
                  justifyContent="space-between"
                  alignItems="end"
                  flexWrap="wrap"
                  gap="20px"
                  p="10px"
                  borderRadius="4px"
                >
                  <Text size="md" mt="5px" ml={{ md: "61px", base: "0px" }}>
                    Websites
                  </Text>
                  <Text size="md" mr={{ md: "188px", base: "0px" }}>
                    Data source
                  </Text>
                </Flex>
                <Flex
                  mt="-2px"
                  position="relative"
                  bg="white.A700"
                  boxShadow="xs"
                  justifyContent="space-between"
                  alignItems="end"
                  gap="20px"
                  p="10px"
                  borderRadius="4px"
                  flexDirection={{ base: "column", sm: "row" }}
                >
                  <Flex
                    mt="6px"
                    ml={{ md: "4px", base: "0px" }}
                    w={{ base: "100%", sm: "59%" }}
                    justifyContent="space-between"
                    alignItems="start"
                    gap="20px"
                    flexDirection={{ base: "column", sm: "row" }}
                  >
                    <Image src="images/img_globe_1.svg" h="20px" w={{ base: "100%", sm: "20px" }} />
                    <Text size="md" color="blue.400" mt="3px" textDecoration="underline">
                      https://crosscountrymortgage.com/about-us/
                    </Text>
                  </Flex>
                  <Flex mb="4px" mr={{ md: "198px", base: "0px" }} gap="23px" alignItems="center">
                    <Image src="images/img_more_horiz_1.svg" h="18px" w="18px" />
                    <Text size="xs" color="gray.700" alignSelf="start">
                      Public website
                    </Text>
                  </Flex>
                </Flex>
              </Box>
            </Flex>
            <Flex
              mt="38px"
              mb="133px"
              ml={{ md: "8px", base: "0px" }}
              gap="16px"
              alignSelf="stretch"
              flexDirection="column"
            >
              <Flex gap="25px" flexDirection="column">
                <Text lineHeight="24px">
                  <>
                    Upload a document
                    <br />
                    Upload a document to power real-time responses to users. . Recommend using text-based fles. Images,
                    audio, and video not supported
                  </>
                </Text>
                <Flex
                  gap="7px"
                  bg="gray.100"
                  boxShadow="xs"
                  flexDirection="column"
                  alignItems="center"
                  p={{ base: "20px", sm: "22px" }}
                  borderRadius="4px"
                >
                  <Flex mt="13px" alignItems="center">
                    <Image src="images/img_arrow_upward_1.svg" h="20px" alignSelf="start" w="20px" />
                    <Text size="md" alignSelf="end">
                      Drag and drop fie here or click to browse
                    </Text>
                  </Flex>
                  <Text color="gray.700">Up to 3 MB per file</Text>
                </Flex>
              </Flex>
              <Box>
                <Flex bg="white.A700" boxShadow="xs" p="10px" borderRadius="4px">
                  <Flex
                    mt="5px"
                    ml={{ md: "61px", base: "0px" }}
                    w={{ md: "77%", base: "100%" }}
                    justifyContent="space-between"
                    flexWrap="wrap"
                    gap="20px"
                  >
                    <Text size="md" alignSelf="start">
                      Documents
                    </Text>
                    <Text size="md">Data source</Text>
                  </Flex>
                </Flex>
                <Box bg="gray.50" boxShadow="xs" borderRadius="4px">
                  <Flex
                    pt="15px"
                    bg="white.A700"
                    boxShadow="xs"
                    justifyContent="space-between"
                    alignItems="end"
                    gap="20px"
                    px="15px"
                    borderRadius="4px"
                    flexDirection={{ base: "column", sm: "row" }}
                  >
                    <Flex
                      w={{ base: "100%", sm: "59%" }}
                      justifyContent="space-between"
                      alignItems="center"
                      gap="20px"
                      flexDirection={{ base: "column", sm: "row" }}
                    >
                      <Image src="images/img_globe_1_gray_700.png" h="19px" w={{ base: "100%", sm: "20px" }} />
                      <Text size="md" alignSelf="end">
                        https://crosscountrymortgage.com/about-us/
                      </Text>
                    </Flex>
                    <Flex mr={{ md: "192px", base: "0px" }} gap="14px" alignItems="center">
                      <Image src="images/img_more_horiz_1_deep_purple_a400.png" h="15px" />
                      <Text size="xs" color="gray.700">
                        Public website
                      </Text>
                    </Flex>
                  </Flex>
                </Box>
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
