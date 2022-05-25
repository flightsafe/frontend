import {
  Form,
  Input,
  Select,
  useForm,
  useSelect,
  getValueFromEvent,
  Upload,
} from "@pankod/refine-antd";
import { Create } from "@pankod/refine-antd";

import { useNavigation } from "@pankod/refine-core";
import qs from "query-string";
import React from "react";

export default function BookingList() {
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

  const { formProps, saveButtonProps } = useForm();

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
