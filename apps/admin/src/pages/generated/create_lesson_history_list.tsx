import {
  Form,
  Input,
  Select,
  useForm,
  useSelect,
  getValueFromEvent,
  Upload,
  Create,
  DatePicker,
} from "@pankod/refine-antd";

import { useNavigation } from "@pankod/refine-core";
import qs from "query-string";
import React from "react";

export default function CreateLessonHistory() {
  const { formProps, saveButtonProps, queryResult } = useForm();

  const { selectProps: planeSelection } = useSelect({
    resource: "plane",
    optionLabel: "title",
    optionValue: "id",
  });

  const { selectProps: lessonSelection } = useSelect({
    resource: "lesson",
    optionLabel: "title",
    optionValue: "id",
  });

  const { selectProps: studentSelection } = useSelect({
    resource: "user",
    optionLabel: "title",
    optionValue: "id",
  });

  return (
    //@ts-ignore
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
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

        <Form.Item label="Student" name={"student"} required={true}>
          <Select {...studentSelection} />
        </Form.Item>
      </Form>
    </Create>
  );
}
