import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <HomeIcon />,
    class: "sidebar-text",
  },
  {
    title: "About",
    path: "/about",
    icon: <MailOutlineIcon />,
    class: "sidebar-text",
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <HelpOutlineIcon />,
    class: "sidebar-text",
  },
];
