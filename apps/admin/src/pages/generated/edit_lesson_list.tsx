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

export default function EditLesson() {
  const { formProps, saveButtonProps, queryResult } = useForm();

  const { selectProps: courseSelection } = useSelect({
    resource: "course",
    optionLabel: "title",
    optionValue: "id",
    defaultValue: queryResult?.data?.data?.course?.id,
  });

  return (
    //@ts-ignore
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item label="Title" name="title" required={true}>
          <Input.TextArea />
        </Form.Item>

        <Form.Item label="Description" name="description" required={true}>
          <Input />
        </Form.Item>

        <Form.Item label="Course" name={"course"}>
          <Select {...courseSelection} />
        </Form.Item>
      </Form>
    </Edit>
  );
}
