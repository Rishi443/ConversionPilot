import React from "react";
import { Image, Text, Flex, Box } from "@chakra-ui/react";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";

export default function Sidebar1({ ...props }) {
  const [collapsed, setCollapsed] = React.useState(false);

  //use this function to collapse/expand the sidebar
  //function collapseSidebar() {
  //    setCollapsed(!collapsed)
  //}

  return (
    <Box {...props} width="256px !important" collapsedWidth="80px !important" collapsed={collapsed} as={Sidebar}>
      <Image src="images/img_image_15.svg" h="32px" ml={{ md: "20px", base: "0px" }} w="40%" borderRadius="4px" />
      <Box
        menuItemStyles={{
          button: {
            padding: "8px 8px 8px 16px",
            gap: "8px",
            alignSelf: "start",
            color: "#565d6d",
            fontWeight: 400,
            fontSize: "14px",
            [`&:hover, &.ps-active`]: { color: "#6d31ed", fontWeight: "700 !important" },
          },
        }}
        as={Menu}
        mt="79px"
        alignSelf="stretch"
        display="flex"
        flexDirection="column"
        w="100%"
      >
        <MenuItem icon={<Image src="images/img_home.svg" h="24px" w="24px" />}>Active Leads </MenuItem>
        <MenuItem icon={<Image src="images/img_home_gray_700.svg" h="24px" w="24px" />}>Buyers</MenuItem>
      </Box>
      {!collapsed ? (
        <Flex
          mt="643px"
          mb="7px"
          mr={{ md: "20px", base: "0px" }}
          alignSelf="end"
          w="68%"
          justifyContent="space-between"
          alignItems="start"
          gap="20px"
        >
          <Text size="xs">View profile</Text>
          <Image src="images/img_search.svg" h="24px" mb="10px" w="24px" />
        </Flex>
      ) : null}
    </Box>
  );
}
