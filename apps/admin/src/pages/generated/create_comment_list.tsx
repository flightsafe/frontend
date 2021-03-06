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
  Breadcrumb,
} from "@pankod/refine-antd";

import { useNavigation } from "@pankod/refine-core";
import qs from "query-string";
import React from "react";

export default function CreateComment() {
  const { formProps, saveButtonProps, queryResult } = useForm();

  const { selectProps: authorSelection } = useSelect({
    resource: "user",
    optionLabel: "title",
    optionValue: "id",
  });

  const { selectProps: lesson_historySelection } = useSelect({
    resource: "lessonhistory",
    optionLabel: "title",
    optionValue: "id",
  });

  return (
    //@ts-ignore
    <Create
      saveButtonProps={saveButtonProps}
      pageHeaderProps={{ breadcrumb: <Breadcrumb /> }}
    >
      <Form {...formProps} layout="vertical">
        <Form.Item label="Comment" name="comment" required={true}>
          <Input />
        </Form.Item>

        <Form.Item label="Author" name={"author"} required={true}>
          <Select {...authorSelection} />
        </Form.Item>

        <Form.Item
          label="Lesson history"
          name={"lesson_history"}
          required={true}
        >
          <Select {...lesson_historySelection} />
        </Form.Item>
      </Form>
    </Create>
  );
}
