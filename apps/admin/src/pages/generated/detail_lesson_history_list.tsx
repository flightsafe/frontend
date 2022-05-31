import { Show, Typography, ImageField } from "@pankod/refine-antd";
import { useShow, useOne } from "@pankod/refine-core";

const { Title, Text } = Typography;

import { useNavigation } from "@pankod/refine-core";
import qs from "query-string";
import React from "react";

export default function DetailLessonHistory() {
  const { queryResult } = useShow<any>();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  const { data: planeSelection } = useOne({
    resource: "plane",
    id: record?.plane,
    queryOptions: {
      enabled: !!record?.plane,
    },
  });

  const { data: lessonSelection } = useOne({
    resource: "lesson",
    id: record?.lesson,
    queryOptions: {
      enabled: !!record?.lesson,
    },
  });

  const { data: studentSelection } = useOne({
    resource: "user",
    id: record?.student,
    queryOptions: {
      enabled: !!record?.student,
    },
  });

  return (
    //@ts-ignore
    <Show isLoading={isLoading}>
      <Title level={5}>ID</Title>
      <Text>{record?.id}</Text>

      <Title level={5}>Start time</Title>
      <Text>{record?.start_time}</Text>

      <Title level={5}>End time</Title>
      <Text>{record?.end_time}</Text>

      <Title level={5}>Grade</Title>
      <Text>{record?.grade}</Text>

      <Title level={5}>Plane</Title>
      <Text>{planeSelection?.data?.title}</Text>

      <Title level={5}>Lesson</Title>
      <Text>{lessonSelection?.data?.title}</Text>

      <Title level={5}>Student</Title>
      <Text>{studentSelection?.data?.title}</Text>
    </Show>
  );
}
