import React from "react";
import { Helmet } from "react-helmet";
import { ReactTable } from "../../components/ReactTable";
import Sidebar1 from "../../components/Sidebar1";
import { CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import {
  Button,
  Flex,
  Text,
  Box,
  InputLeftElement,
  InputGroup,
  InputRightElement,
  Image,
  Input,
  Heading,
} from "@chakra-ui/react";
import { createColumnHelper } from "@tanstack/react-table";

const tableData = [
  {
    id: 1,
    name: "Matthew Martinez",
    email: "matt@gmail.com",
    lastcontacted: "20th June",
    ainotes: "Buyer wants a 3 bedroom house and hasn't replied.",
    viewone: "Personalize",
    viewtwo: "View details",
  },
  {
    id: 2,
    name: "Elizabeth Watson",
    email: "elizabeth@gmail.com",
    lastcontacted: "26th June",
    ainotes: "Buyer wants a 7 bedroom house and hasn't replied.",
    viewone: "Personalize",
    viewtwo: "View details",
  },
  {
    id: 3,
    name: "Max Payne",
    email: "max@gmail.com",
    lastcontacted: "29th June",
    ainotes: "Buyer wants a 22 bedroom house and hasn't replied.",
    viewone: "Personalize",
    viewtwo: "View details",
  },
];

export default function OverviewpagePage() {
  const [searchBarValue, setSearchBarValue] = React.useState("");
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("name", {
        cell: (info) => <Text size="undefined">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text
            pl="12px"
            pr={{ base: "20px", sm: "35px" }}
            fontFamily="Lexend"
            borderColor="gray.100"
            borderTopWidth="0.5px"
            borderBottomWidth="0.5px"
            borderStyle="solid"
            bg="gray.50_01"
            display="flex"
            h="62px"
            py={{ base: "20px", sm: "22px" }}
          >
            NAME
          </Text>
        ),
        meta: { width: "152px" },
      }),
      tableColumnHelper.accessor("lastcontacted", {
        cell: (info) => <Text size="undefined">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text
            pl="12px"
            pr={{ base: "20px", sm: "35px" }}
            fontFamily="Lexend"
            borderColor="gray.100"
            borderTopWidth="0.5px"
            borderBottomWidth="0.5px"
            borderStyle="solid"
            bg="gray.50_01"
            display="flex"
            alignItems="center"
            h="62px"
            py={{ base: "20px", sm: "22px" }}
          >
            Last Contacted
          </Text>
        ),
        meta: { width: "151px" },
      }),
      tableColumnHelper.accessor("email", {
        cell: (info) => <Text size="undefined">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text
            pl="12px"
            pr={{ base: "20px", sm: "35px" }}
            fontFamily="Lexend"
            borderColor="gray.100"
            borderTopWidth="0.5px"
            borderBottomWidth="0.5px"
            borderStyle="solid"
            bg="gray.50_01"
            display="flex"
            alignItems="center"
            h="62px"
            py={{ base: "20px", sm: "22px" }}
          >
            EMAIL
          </Text>
        ),
        meta: { width: "237px" },
      }),
      tableColumnHelper.accessor("ainotes", {
        cell: (info) => (
          <Box
            borderColor="gray.100"
            borderWidth="0.5px"
            borderStyle="solid"
            bg="white.A700"
            flex={1}
            alignSelf="stretch"
          >
            <Text color="gray.900_01" lineHeight="22px" my="4px">
              {info?.getValue?.()}
            </Text>
          </Box>
        ),
        header: (info) => (
          <Text
            pl="12px"
            pr={{ base: "20px", sm: "35px" }}
            fontFamily="Lexend"
            borderColor="gray.100"
            borderTopWidth="0.5px"
            borderBottomWidth="0.5px"
            borderStyle="solid"
            bg="gray.50_01"
            display="flex"
            alignItems="center"
            h="62px"
            py={{ base: "20px", sm: "22px" }}
          >
            AI Notes
          </Text>
        ),
        meta: { width: "243px" },
      }),
      tableColumnHelper.accessor("viewone", {
        cell: (info) => (
          <Button
            size="2xl"
            colorScheme="white_A700"
            borderColor="gray.100"
            borderWidth="0.5px"
            borderStyle="solid"
            minW="124px"
          >
            {info?.getValue?.()}
          </Button>
        ),
        header: (info) => (
          <Box
            h="62px"
            borderColor="gray.100"
            borderTopWidth="0.5px"
            borderBottomWidth="0.5px"
            borderStyle="solid"
            bg="gray.50_01"
          />
        ),
        meta: { width: "124px" },
      }),
      tableColumnHelper.accessor("viewtwo", {
        cell: (info) => (
          <Flex
            borderColor="gray.100"
            borderWidth="0.5px"
            borderStyle="solid"
            bg="white.A700"
            flex={1}
            alignSelf="stretch"
          >
            <Button minW="101px" borderRadius="4px" onClick={()=> window.location.href = `/chat/${info.getValue()}`}>
              View details
            </Button>
          </Flex>
        ),
        header: (info) => (
          <Box
            h="62px"
            borderColor="gray.100"
            borderTopWidth="0.5px"
            borderBottomWidth="0.5px"
            borderStyle="solid"
            bg="gray.50_01"
            flex={1}
            alignSelf="stretch"
          />
        ),
        meta: { width: "232px" },
      }),
    ];
  }, []);

  return (
    <>
      <Helmet>
        <title>Conversion Pilot</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <Box pr="11px" bg="white.A700" boxShadow="sm" w="100%">
        <Flex alignItems="start" flexDirection={{ md: "row", base: "column" }}>
          <Sidebar1
            flexDirection="column"
            display={{ md: "flex", base: "none" }}
            bg="white.A700"
            boxShadow="xs"
            w="258px"
            h="100vh"
            top="0px"
            overflow="auto"
            py="12px"
            p={{ md: "", base: "20px" }}
            sx={{ position: "sticky !important" }}
          />
          <Flex gap="37px" flex={1} flexDirection="column" p={{ md: "", base: "20px" }} alignSelf="stretch">
            <Flex
              justifyContent="space-between"
              alignItems="center"
              gap="20px"
              flexDirection={{ md: "row", base: "column" }}
              as="header"
            >
              <Flex
                w={{ md: "72%", base: "100%" }}
                justifyContent="space-between"
                alignItems="center"
                gap="20px"
                flexDirection={{ base: "column", sm: "row" }}
              >
                <Flex w={{ base: "100%", sm: "34%" }} justifyContent="space-between" alignItems="center" gap="20px">
                  <Flex pt="16px" gap="11px" w="54%" flexDirection="column" alignItems="center">
                    <Heading as="h6">Leads</Heading>
                    <Box h="4px" bg="deep_purple.A400" alignSelf="stretch" w="100%" />
                  </Flex>
                  <Text mb="14px" alignSelf="end">
                    Knowledge
                  </Text>
                </Flex>
              </Flex>
              <Flex w={{ md: "12%", base: "100%" }} justifyContent="space-between" alignItems="center" gap="20px">
                <Flex flexDirection="column" alignItems="start">
                  <Text size="md" color="gray.900_01">
                    Amanda
                  </Text>
                  <Text color="gray.900_01">Keller Williams</Text>
                </Flex>
                <Box
                  h={{ md: "44px", base: "auto" }}
                  bg="deep_purple.100"
                  w="44px"
                  position="relative"
                  borderRadius="22px"
                >
                  <Image src="images/img_rectangle_44x44.png" borderRadius="50%" h="44px" w="44px" />
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
            </Flex>
            <Flex gap="26px" flexDirection="column" alignItems="end">
              <Flex
                gap="29px"
                w={{ md: "34%", base: "100%" }}
                alignItems="center"
                flexDirection={{ base: "column", sm: "row" }}
              >
                <InputGroup>
                  <InputLeftElement>
                    <Image src="images/img_search_gray_900_01.svg" w="16px" h="16px" />
                  </InputLeftElement>
                  <Input
                    placeholder={`Search`}
                    value={searchBarValue}
                    onChange={(e) => setSearchBarValue(e.target.value)}
                    pr={{ base: "20px", sm: 0 }}
                  />
                  <InputRightElement>
                    {searchBarValue?.length > 0 ? <CloseIcon onClick={() => setSearchBarValue("")} /> : null}
                  </InputRightElement>
                </InputGroup>
                <Button
                  size="lg"
                  colorScheme="white_A700"
                  borderColor="deep_purple.A400"
                  borderWidth="1px"
                  borderStyle="solid"
                  minW="133px"
                  borderRadius="4px"
                >
                  Import Leads
                </Button>
              </Flex>
              <ReactTable
                size="xs"
                mr={{ md: "12px", base: "0px" }}
                borderColor="gray.100"
                borderWidth="0.5px"
                borderStyle="solid"
                alignSelf="stretch"
                borderRadius="4px"
                columns={tableColumns}
                data={tableData}
              />
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
