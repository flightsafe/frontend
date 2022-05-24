import { AppProps } from "next/app";

import { Refine } from "@pankod/refine-core";
import {
  Layout,
  ReadyPage,
  notificationProvider,
  ErrorComponent,
  LoginPage,
} from "@pankod/refine-antd";

import dataProvider from "@pankod/refine-simple-rest";
import routerProvider from "@pankod/refine-nextjs-router";
import ListPlanesPage from "../src/pages/planes/ListPlanes";
import { authProvider } from "../src/authProvider";
import "@pankod/refine-antd/dist/styles.min.css";

const API_URL = "http://localhost:8000/plane";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    //@ts-ignore
    <Refine
      routerProvider={routerProvider}
      dataProvider={dataProvider(API_URL)}
      authProvider={authProvider}
      Layout={Layout}
      ReadyPage={ReadyPage}
      notificationProvider={notificationProvider}
      catchAll={<ErrorComponent />}
      LoginPage={LoginPage}
      resources={[
        {
          name: "plane",
          list: ListPlanesPage,
          
        },
      ]}
    >
      <Component {...pageProps} />
    </Refine>
  );
}

export default MyApp;
