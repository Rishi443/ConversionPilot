import React from "react";
import { Helmet } from "react-helmet";
import { ReactTable } from "../../components/ReactTable";
import SideNavBar from "../../components/SideNavBar";
import { CloseIcon } from "@chakra-ui/icons";
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
  { viewone: "Personalize", viewtwo: "View details" },
  {
    nameone: "Matthew Martinez",
    ainotes: "Buyer wannts a 3 bedromm hourse and hasn\\'t repltied",
    viewone: "Personalize",
    viewtwo: "View details",
  },
  {
    email: "elizabeth_hall_1998@gmail.com",
    ainotes: "Buyer wannts a 3 bedromm hourse and hasn\\'t repltied",
    viewone: "Personalize",
    viewtwo: "View details",
  },
  { ainotes: "Buyer wannts a 3 bedromm hourse and hasn\\'t repltied", viewone: "Personalize", viewtwo: "View details" },
  {
    nameone: "Elizabeth Watson",
    ainotes: "Buyer wannts a 3 bedromm hourse and hasn\\'t repltied",
    viewone: "Personalize",
    viewtwo: "View details",
  },
  { ainotes: "Buyer wannts a 3 bedromm hourse and hasn\\'t repltied", viewone: "Personalize", viewtwo: "View details" },
  { ainotes: "Buyer wannts a 3 bedromm hourse and hasn\\'t repltied", viewone: "Personalize", viewtwo: "View details" },
  { ainotes: "Buyer wannts a 3 bedromm hourse and hasn\\'t repltied", viewone: "Personalize", viewtwo: "View details" },
];

type TableRowType = {
  nameone?: any;
  lastcontacted?: any;
  email?: any;
  ainotes?: any;
  viewone: string;
  viewtwo: string;
};

export default function OverviewpagePage() {
  const [searchBarValue, setSearchBarValue] = React.useState("");
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper<TableRowType>();
    return [
      tableColumnHelper.accessor("nameone", {
        cell: (info) => <Text size="undefined">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text
            color="gray.700"
            fontFamily="Lexend"
            borderColor="gray.100"
            borderTopWidth="0.5px"
            borderBottomWidth="0.5px"
            borderStyle="solid"
            bg="gray.50"
            justifyContent="center"
            display="flex"
            alignItems="center"
            h="62px"
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
            color="gray.700"
            fontFamily="Lexend"
            borderColor="gray.100"
            borderTopWidth="0.5px"
            borderBottomWidth="0.5px"
            borderStyle="solid"
            bg="gray.50"
            justifyContent="center"
            display="flex"
            alignItems="center"
            h="62px"
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
            color="gray.700"
            fontFamily="Lexend"
            borderColor="gray.100"
            borderTopWidth="0.5px"
            borderBottomWidth="0.5px"
            borderStyle="solid"
            bg="gray.50"
            justifyContent="center"
            display="flex"
            alignItems="center"
            h="62px"
          >
            EMAIL
          </Text>
        ),
        meta: { width: "237px" },
      }),
      tableColumnHelper.accessor("ainotes", {
        cell: (info) => (
          <Box
            h="76px"
            borderColor="gray.100"
            borderWidth="0.5px"
            borderStyle="solid"
            bg="white.A700"
            flex={1}
            alignSelf="stretch"
          />
        ),
        header: (info) => (
          <Text
            color="gray.700"
            fontFamily="Lexend"
            borderColor="gray.100"
            borderTopWidth="0.5px"
            borderBottomWidth="0.5px"
            borderStyle="solid"
            bg="gray.50"
            justifyContent="center"
            display="flex"
            alignItems="center"
            h="62px"
          >
            AI Notes
          </Text>
        ),
        meta: { width: "243px" },
      }),
      tableColumnHelper.accessor("viewone", {
        cell: (info) => (
          <Button
            size="md"
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
            bg="gray.50"
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
            justifyContent="center"
            alignSelf="stretch"
          >
            <Button minW="101px" borderRadius="4px">
              {info?.getValue?.()}
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
            bg="gray.50"
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
        <title>Conversion Pilot MVP</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <Box bg="white.A700" boxShadow="sm" w="100%">
        <Flex gap="10px" flexDirection="column">
          <Flex
            bg="white.A700"
            justifyContent="space-between"
            alignItems="center"
            gap="20px"
            p="8px"
            flexDirection={{ md: "row", base: "column" }}
          >
            <Flex
              ml={{ md: "15px", base: "0px" }}
              w={{ md: "43%", base: "100%" }}
              justifyContent="space-between"
              alignItems="center"
              gap="20px"
              my="4px"
              flexDirection={{ base: "column", sm: "row" }}
            >
              <Image src="images/img_logo.svg" h="32px" w={{ base: "100%", sm: "16%" }} borderRadius="4px" />
              <Flex
                pt="7px"
                pr="7px"
                w={{ base: "100%", sm: "60%" }}
                justifyContent="space-between"
                alignItems="center"
                gap="20px"
              >
                <Flex pt="16px" gap="11px" w="59%" flexDirection="column" alignItems="start">
                  <Heading as="h1" color="deep_purple.A400" ml={{ md: "57px", base: "0px" }}>
                    Leads
                  </Heading>
                  <Box h="4px" bg="deep_purple.A400" alignSelf="stretch" w="100%" />
                </Flex>
                <Text color="gray.700" mb="7px" mr="34px" alignSelf="end">
                  Knowledge
                </Text>
              </Flex>
            </Flex>
            <Flex
              mr={{ md: "4px", base: "0px" }}
              alignSelf="end"
              w={{ md: "10%", base: "100%" }}
              justifyContent="space-between"
              alignItems="center"
              gap="20px"
            >
              <Flex flexDirection="column" alignItems="start">
                <Text size="md">Amanda</Text>
                <Text>Keller Williams</Text>
              </Flex>
              <Box
                h={{ md: "44px", base: "auto" }}
                bg="deep_purple.100"
                w="44px"
                position="relative"
                borderRadius="22px"
              >
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
          </Flex>
          <Flex gap="34px" alignItems="start" flexDirection={{ md: "row", base: "column" }}>
            <SideNavBar
              gap={{ md: "517px", base: "258px", sm: "387px" }}
              display={{ md: "flex", base: "none" }}
              flexDirection="column"
              bg="white.A700"
              boxShadow="xs"
              w="258px"
              h="100vh"
              top="0px"
              overflow="auto"
              py={{ base: "20px", sm: "30px" }}
              p={{ md: "", base: "20px" }}
              sx={{ position: "sticky !important" }}
            />
            <Flex
              gap="16px"
              flex={1}
              flexDirection="column"
              alignItems="end"
              p={{ md: "", base: "20px" }}
              alignSelf="stretch"
            >
              <Flex
                mr={{ md: "22px", base: "0px" }}
                gap="29px"
                w={{ md: "35%", base: "100%" }}
                alignItems="center"
                flexDirection={{ base: "column", sm: "row" }}
              >
                <InputGroup size="sm" variant="fill">
                  <InputLeftElement>
                    <Image src="images/img_search_gray_900_01.svg" w="16px" h="16px" />
                  </InputLeftElement>
                  <Input
                    colorScheme="white_A700"
                    placeholder={`Search`}
                    value={searchBarValue}
                    onChange={(e) => setSearchBarValue(e.target.value)}
                    color="gray.400"
                    gap="6px"
                    flexGrow={1}
                    pr={{ base: "20px", sm: 0 }}
                  />
                  <InputRightElement>
                    {searchBarValue?.length > 0 ? <CloseIcon onClick={() => setSearchBarValue("")} /> : null}
                  </InputRightElement>
                </InputGroup>
                <Button
                  size="sm"
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
