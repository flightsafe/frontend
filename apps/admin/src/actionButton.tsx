import { Button } from "@pankod/refine-antd";
import { useDelete, useNavigation } from "@pankod/refine-core";
import React from "react";
import qs from "query-string";

interface Props {
  action: "create" | "edit" | "delete";
  resource: string;
  size?: "small" | "middle" | "large";
  id?: string | number;
  extraData: { [key: string]: any };
  title?: string;
  icon?: React.ReactNode;
  shape: "circle" | "round" | "default";
  onDone?: () => void;
}

/**
 * Action Button
 * @returns ReactElement
 */
export default function ActionButton(props: Props) {
  const { push } = useNavigation();
  const { mutateAsync } = useDelete();
  function onCreate() {
    let url = `/${props.resource}/${props.action}`;
    if (props.id) {
      url += `/${props.id}`;
    }
    push(url + "?" + qs.stringify(props.extraData));
  }

  function onEdit() {
    let url = `/${props.resource}/${props.action}`;
    if (props.id) {
      url += `/${props.id}`;
    }
    push(url + "?" + qs.stringify(props.extraData));
  }

  async function onDelete() {
    await mutateAsync({
      resource: props.resource,
      id: props.id as any,
    });
    if (props.onDone) {
      props.onDone();
    }
  }

  return (
    <Button
      onClick={() => {
        if (props.action === "edit") {
          onEdit();
        }
        if (props.action === "delete") {
          onDelete();
        }

        if (props.action === "create") {
          onCreate();
        }
      }}
      icon={props.icon}
      shape={props.shape}
      size={props.size}
    >
      {props.title}
    </Button>
  );
}
