import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout, Menu } from "ui";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { AirplanemodeActive } from "@mui/icons-material";

const darkTheme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
        },
      },
    },
  },
  palette: {
    mode: "light",
    background: {
      default: "#F7F9FC",
    },
    primary: {
      main: "#c7007e",
    },
  },
});

const menus: Menu[] = [
  {
    title: "Plane",
    link: "/plane",
    icon: <AirplanemodeActive />,
  },
];

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <Layout menus={menus}>
        <Component {...pageProps} />
        <CssBaseline />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
