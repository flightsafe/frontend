import { AppProps } from "next/app";

import { Refine } from "@pankod/refine-core";
import {
  Layout,
  ReadyPage,
  notificationProvider,
  ErrorComponent,
  LoginPage,
} from "@pankod/refine-antd";

import dataProvider from "drf-data-provider";
import routerProvider from "@pankod/refine-nextjs-router";
import ListPlanesPage from "../src/pages/planes/ListPlanes";
import ShowPlanePage from "../src/pages/planes/ShowPlanes";
import { authProvider } from "../src/authProvider";
import "@pankod/refine-antd/dist/styles.min.css";
import CreateMaintenance from "../src/pages/maintenance/CreateMaintenance";
import CreatePlanePage from "../src/pages/planes/CreatePlane";
import BookingList from "../src/pages/generated/create_booking_list";
import CourseList from "../src/pages/generated/create_course_list";

const API_URL = "http://0.0.0.0:8000/api";

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
          show: ShowPlanePage,
          create: CreatePlanePage,
        },
        {
          name: "maintenance",
          create: CreateMaintenance,
        },
        {
          name: "course",
          create: CourseList,
        },
        {
          name: "booking",
          create: BookingList,
        },
      ]}
    >
      <Component {...pageProps} />
    </Refine>
  );
}

export default MyApp;
