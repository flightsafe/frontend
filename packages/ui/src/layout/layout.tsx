import {
  AppBar,
  Box,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { Add } from "@mui/icons-material";
import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";
import { SearchBar } from "./searchBar";
import { configs } from "common";

export interface Menu {
  title: string;
  icon: JSX.Element;
  link: string;
}

interface Props {
  children?: any;
  menus: Menu[];
}

/**
 * Default layout for the app. Including a sidebar, a appbar,
 * and will automatically fit different screen size
 * @param {any} props Props
 * @constructor
 */
export function Layout(props: Props) {
  const { children, menus } = props;
  const router = useRouter();

  React.useEffect(() => {}, []);

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  React.useEffect(() => {
    const found = menus.findIndex((m) => router.pathname.includes(m.link));
    if (found >= 0) {
      setSelectedIndex(found);
    }
  }, [router.pathname]);

  const listContent = (
    <div>
      {menus.map((m, i) => (
        <Link href={m.link} key={`item-${i}`}>
          <Tooltip title={m.title}>
            <ListItemButton selected={selectedIndex === i} id={m.title}>
              <ListItemIcon>{m.icon}</ListItemIcon>
              <ListItemText primary={m.title} />
            </ListItemButton>
          </Tooltip>
        </Link>
      ))}
    </div>
  );

  const tools = (
    <Stack direction={"row"}>
      <Tooltip title={"Bind Device"}>
        <IconButton>
          <Add />
        </IconButton>
      </Tooltip>
    </Stack>
  );

  const appbar = (
    <AppBar elevation={0} position={"fixed"}>
      <Toolbar style={{ marginLeft: configs.drawerSize }}>
        <div style={{ width: 400 }}>
          <Typography style={{ color: "black" }} variant={"h6"}>
            {menus[selectedIndex]?.title ?? ""}
          </Typography>
        </div>
        <Divider
          orientation={"vertical"}
          style={{ marginRight: 10, height: 35 }}
        />
        <SearchBar />
        <Box sx={{ flexGrow: 1 }} />
        {tools}
      </Toolbar>
    </AppBar>
  );

  return (
    <div>
      {/*Left Desktop toolbar*/}
      <Hidden only={["xs"]}>
        {appbar}
        <Drawer variant="permanent">
          <List
            style={{
              width: configs.drawerSize,
              overflowX: "hidden",
            }}
          >
            {listContent}
          </List>
        </Drawer>
      </Hidden>
      {/*End left desktop toolbar*/}
      {/*Start desktop main*/}
      <Hidden only={["xs"]}>
        {/** Desktop**/}
        <main
          style={{
            marginLeft: configs.drawerSize,
            marginTop: configs.appbarHeight,
          }}
        >
          {children}
        </main>
      </Hidden>
      {/*End desktop main*/}
    </div>
  );
}
