import {
  Form,
  Input,
  Select,
  useForm,
  useSelect,
  getValueFromEvent,
  Upload,
  Edit,
  DatePicker,
  Breadcrumb,
} from "@pankod/refine-antd";
import dayjs from "dayjs";

import { useNavigation } from "@pankod/refine-core";
import qs from "query-string";
import React from "react";

export default function EditLessonHistory() {
  const { formProps, saveButtonProps, queryResult } = useForm();

  const { selectProps: planeSelection } = useSelect({
    resource: "plane",
    optionLabel: "title",
    optionValue: "id",
    defaultValue: queryResult?.data?.data?.plane?.id,
  });

  const { selectProps: lessonSelection } = useSelect({
    resource: "lesson",
    optionLabel: "title",
    optionValue: "id",
    defaultValue: queryResult?.data?.data?.lesson?.id,
  });

  const initialValues = {
    ...formProps.initialValues,
    start_time: dayjs(formProps.initialValues?.start_time),
    end_time: dayjs(formProps.initialValues?.end_time),
  };

  return (
    //@ts-ignore
    <Edit
      saveButtonProps={saveButtonProps}
      pageHeaderProps={{ breadcrumb: <Breadcrumb /> }}
    >
      <Form {...formProps} layout="vertical" initialValues={initialValues}>
        <Form.Item label="Start time" name="start_time" required={false}>
          <DatePicker showTime />
        </Form.Item>

        <Form.Item label="End time" name="end_time" required={false}>
          <DatePicker showTime />
        </Form.Item>

        <Form.Item label="Grade" name="grade" required={false}>
          <Input />
        </Form.Item>

        <Form.Item label="Plane" name={"plane"} required={true}>
          <Select {...planeSelection} />
        </Form.Item>

        <Form.Item label="Lesson" name={"lesson"} required={true}>
          <Select {...lessonSelection} />
        </Form.Item>
      </Form>
    </Edit>
  );
}
