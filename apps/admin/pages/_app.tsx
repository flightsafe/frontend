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

import CreatePlanePage from "../src/pages/planes/CreatePlane";
import BookingList from "../src/pages/generated/create_booking_list";
import CourseList from "../src/pages/generated/create_course_list";
import ListCourse from "../src/pages/generated/list_course_list";
import ListBooking from "../src/pages/generated/list_booking_list";
import CreateCourse from "../src/pages/generated/create_course_list";
import ListPlane from "../src/pages/generated/list_plane_list";
import ListMaintenance from "../src/pages/generated/list_maintenance_list";
import EditPlane from "../src/pages/generated/edit_plane_list";
import CreatePlane from "../src/pages/generated/create_plane_list";
import EditMaintenance from "../src/pages/generated/edit_maintenance_list";
import CreateLesson from "../src/pages/generated/create_lesson_list";
import EditLesson from "../src/pages/generated/edit_lesson_list";
import CreateLessonHistory from "../src/pages/generated/create_lesson_history_list";
import EditLessonHistory from "../src/pages/generated/edit_lesson_history_list";
import ListComment from "../src/pages/generated/list_comment_list";
import EditComment from "../src/pages/generated/edit_comment_list";
import CreateComment from "../src/pages/generated/create_comment_list";
import CreateMaintenance from "../src/pages/maintenance/CreateMaintenance";

import "@pankod/refine-antd/dist/styles.min.css";
import DetailMaintenance from "../src/pages/generated/detail_maintenance_list";
import DetailCourse from "../src/pages/generated/detail_course_list";
import DetailBooking from "../src/pages/generated/detail_booking_list";
import DetailLessonHistory from "../src/pages/generated/detail_lesson_history_list";
import DetailComment from "../src/pages/generated/detail_comment_list";
import ListLesson from "../src/pages/generated/list_lesson_list";
import ListLessonHistory from "../src/pages/generated/list_lesson_history_list";
import CreateBooking from "../src/pages/generated/create_booking_list";
import EditBooking from "../src/pages/generated/edit_booking_list";
import DetailLesson from "../src/pages/generated/detail_lesson_list";
import EditCourse from "../src/pages/generated/edit_course_list";

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
          list: ListPlane,
          show: ShowPlanePage,
          create: CreatePlane,
          edit: EditPlane,
        },
        {
          name: "maintenance",
          create: CreateMaintenance,
          list: ListMaintenance,
          edit: EditMaintenance,
          show: DetailMaintenance,
        },
        {
          name: "course",
          create: CreateCourse,
          list: ListCourse,
          edit: EditCourse,
          show: DetailCourse,
        },
        {
          name: "booking",
          list: ListBooking,
          edit: EditBooking,
          create: CreateBooking,
          show: DetailBooking,
        },
        {
          name: "lesson",
          create: CreateLesson,
          edit: EditLesson,
          list: ListLesson,
          show: DetailLesson,
        },
        {
          name: "lesson-history",
          create: CreateLessonHistory,
          edit: EditLessonHistory,
          show: DetailLessonHistory,
          list: ListLessonHistory,
        },
        {
          name: "comment",
          list: ListComment,
          edit: EditComment,
          create: CreateComment,
          show: DetailComment,
        },
      ]}
    >
      <Component {...pageProps} />
    </Refine>
  );
}

export default MyApp;
