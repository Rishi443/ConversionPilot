import React from "react";
import { ChakraProps } from "@chakra-ui/react";
import { Image, Box } from "@chakra-ui/react";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";

interface Props extends ChakraProps {
  className?: string;
}

export default function SideNavBar({ ...props }: Props) {
  const [collapsed, setCollapsed] = React.useState(false);

  //use this function to collapse/expand the sidebar
  //function collapseSidebar() {
  //    setCollapsed(!collapsed)
  //}

  return (
    <Box {...props} width="256px !important" collapsedWidth="80px !important" collapsed={collapsed} as={Sidebar}>
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
        mt="93px"
        alignSelf="stretch"
        display="flex"
        flexDirection="column"
        w="100%"
      >
        <MenuItem icon={<Image src="images/img_home.svg" h="24px" w="24px" />}>Active Leads </MenuItem>
        <MenuItem icon={<Image src="images/img_home_gray_700.svg" h="24px" w="24px" />}>Buyers</MenuItem>
        <MenuItem icon={<Image src="images/img_home_gray_700.svg" h="24px" w="24px" />}>Menu item</MenuItem>
      </Box>
      {!collapsed ? <Image src="images/img_search.svg" h="24px" ml={{ md: "17px", base: "0px" }} w="24px" /> : null}
    </Box>
  );
}
