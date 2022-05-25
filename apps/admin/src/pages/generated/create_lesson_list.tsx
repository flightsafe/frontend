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

export default function LessonList() {
  const { selectProps: courseSelection } = useSelect({
    resource: "course",
    optionLabel: "title",
    optionValue: "id",
  });

  const { formProps, saveButtonProps } = useForm();

  return (
    //@ts-ignore
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item label="Name" name="name" required={true}>
          <Input.TextArea />
        </Form.Item>
        <Form.Item label="Description" name="description" required={true}>
          <Input />
        </Form.Item>
        <Form.Item label="Course" name={"course"}>
          <Select {...courseSelection} />
        </Form.Item>
      </Form>
    </Create>
  );
}
