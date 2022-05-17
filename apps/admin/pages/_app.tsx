import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout, Menu } from "ui";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { AirplanemodeActive } from "@mui/icons-material";
import { QueryClient, QueryClientProvider } from "react-query";
import NextProgress from "next-progress";
import { AuthenticationProvider } from "model";
import { getAuthenticator } from "../utils/getAuthenticator";

const darkTheme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          backgroundColor: "white",
        },
      },
    },
  },
  palette: {
    mode: "light",
    background: {
      default: "#f0f1f2",
    },
    primary: {
      main: "#00ab55",
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
  const queryClient = new QueryClient();

  return (
    <AuthenticationProvider authenticator={getAuthenticator()}>
      <>
        <NextProgress delay={300} options={{ showSpinner: true }} />
        <ThemeProvider theme={darkTheme}>
          <QueryClientProvider client={queryClient}>
            <Layout menus={menus}>
              <Component {...pageProps} />
              <CssBaseline />
            </Layout>
          </QueryClientProvider>
        </ThemeProvider>
      </>
    </AuthenticationProvider>
  );
}

export default MyApp;
