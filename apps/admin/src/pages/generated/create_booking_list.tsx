import {
  Form,
  Input,
  Select,
  useForm,
  useSelect,
  getValueFromEvent,
  Upload,
  Create,
} from "@pankod/refine-antd";

import { useNavigation } from "@pankod/refine-core";
import qs from "query-string";
import React from "react";

export default function CreateBooking() {
  const { formProps, saveButtonProps, queryResult } = useForm();

  const { selectProps: planeSelection } = useSelect({
    resource: "plane",
    optionLabel: "title",
    optionValue: "id",
  });

  const { selectProps: lessonSelection } = useSelect({
    resource: "lessonhistory",
    optionLabel: "title",
    optionValue: "id",
  });

  const { selectProps: userSelection } = useSelect({
    resource: "user",
    optionLabel: "title",
    optionValue: "id",
  });

  return (
    //@ts-ignore
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item label="Start time" name="start_time" required={true}>
          <Input />
        </Form.Item>

        <Form.Item label="End time" name="end_time" required={true}>
          <Input />
        </Form.Item>

        <Form.Item label="Plane" name={"plane"}>
          <Select {...planeSelection} />
        </Form.Item>

        <Form.Item label="Lesson" name={"lesson"}>
          <Select {...lessonSelection} />
        </Form.Item>

        <Form.Item label="User" name={"user"}>
          <Select {...userSelection} />
        </Form.Item>
      </Form>
    </Create>
  );
}
