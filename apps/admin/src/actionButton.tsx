import { Button } from "@pankod/refine-antd";
import { useNavigation } from "@pankod/refine-core";
import React from "react";
import qs from "query-string";

interface Props {
  action: "create" | "edit" | "delete";
  resource: string;
  id?: string | number;
  extraData: { [key: string]: any };
  title?: string;
  icon?: React.ReactNode;
  shape: "circle" | "round" | "default";
}

/**
 * Action Button
 * @returns ReactElement
 */
export default function ActionButton(props: Props) {
  const { push } = useNavigation();
  return (
    <Button
      onClick={() => {
        let url = `/${props.resource}/${props.action}`;
        if (props.id) {
          url += `/${props.id}`;
        }
        push(url + "?" + qs.stringify(props.extraData));
      }}
      icon={props.icon}
      shape={props.shape}
    >
      {props.title}
    </Button>
  );
}
