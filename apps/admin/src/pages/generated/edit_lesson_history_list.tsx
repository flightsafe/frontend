import {
  Form,
  Input,
  Select,
  useForm,
  useSelect,
  getValueFromEvent,
  Upload,
  Edit,
} from "@pankod/refine-antd";

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

  const { selectProps: studentSelection } = useSelect({
    resource: "user",
    optionLabel: "title",
    optionValue: "id",
    defaultValue: queryResult?.data?.data?.student?.id,
  });

  return (
    //@ts-ignore
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item label="Start time" name="start_time" required={false}>
          <Input />
        </Form.Item>

        <Form.Item label="End time" name="end_time" required={false}>
          <Input />
        </Form.Item>

        <Form.Item label="Grade" name="grade" required={false}>
          <Input />
        </Form.Item>

        <Form.Item label="Plane" name={"plane"}>
          <Select {...planeSelection} />
        </Form.Item>

        <Form.Item label="Lesson" name={"lesson"}>
          <Select {...lessonSelection} />
        </Form.Item>

        <Form.Item label="Student" name={"student"}>
          <Select {...studentSelection} />
        </Form.Item>
      </Form>
    </Edit>
  );
}
