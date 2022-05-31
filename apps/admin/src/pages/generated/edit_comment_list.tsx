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

export default function EditComment() {
  const { formProps, saveButtonProps, queryResult } = useForm();

  const { selectProps: authorSelection } = useSelect({
    resource: "user",
    optionLabel: "title",
    optionValue: "id",
    defaultValue: queryResult?.data?.data?.author?.id,
  });

  const { selectProps: lesson_historySelection } = useSelect({
    resource: "lessonhistory",
    optionLabel: "title",
    optionValue: "id",
    defaultValue: queryResult?.data?.data?.lesson_history?.id,
  });

  return (
    //@ts-ignore
    <Edit saveButtonProps={saveButtonProps}>
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
    </Edit>
  );
}
