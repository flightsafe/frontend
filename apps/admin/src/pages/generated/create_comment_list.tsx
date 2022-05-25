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

export default function CommentList() {
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

  const { formProps, saveButtonProps } = useForm();

  return (
    //@ts-ignore
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item label="Comment" name="comment" required={true}>
          <Input />
        </Form.Item>
        <Form.Item label="Author" name={"author"}>
          <Select {...authorSelection} />
        </Form.Item>
        <Form.Item label="Lesson history" name={"lesson_history"}>
          <Select {...lesson_historySelection} />
        </Form.Item>
      </Form>
    </Create>
  );
}
