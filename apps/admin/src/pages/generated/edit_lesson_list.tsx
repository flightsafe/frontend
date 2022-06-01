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

export default function EditLesson() {
  const { formProps, saveButtonProps, queryResult } = useForm();

  const { selectProps: courseSelection } = useSelect({
    resource: "course",
    optionLabel: "title",
    optionValue: "id",
    defaultValue: queryResult?.data?.data?.course?.id,
  });

  const initialValues = {
    ...formProps.initialValues,
  };

  return (
    //@ts-ignore
    <Edit
      saveButtonProps={saveButtonProps}
      pageHeaderProps={{ breadcrumb: <Breadcrumb /> }}
    >
      <Form {...formProps} layout="vertical" initialValues={initialValues}>
        <Form.Item label="Title" name="title" required={true}>
          <Input.TextArea />
        </Form.Item>

        <Form.Item label="Description" name="description" required={true}>
          <Input />
        </Form.Item>

        <Form.Item label="Course" name={"course"} required={true}>
          <Select {...courseSelection} />
        </Form.Item>
      </Form>
    </Edit>
  );
}
