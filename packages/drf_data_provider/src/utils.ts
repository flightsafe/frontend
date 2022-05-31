import { CrudOperators, CrudSorting, CrudFilters } from "@pankod/refine-core";
import { Variable } from "./types";

export const mapOperator = (operator: CrudOperators): string => {
  switch (operator) {
    case "ne":
    case "gte":
    case "lte":
      return `_${operator}`;
    case "contains":
      return "_like";
    case "eq":
    default:
      return "";
  }
};

export const imageFieldMapper = ["image", "cover", "avatar"];

/**
 * Generate a django rest framework query string from a CrudSorting object
 * @param sort
 * @returns
 */
export const generateSort = (sort?: CrudSorting) => {
  if (sort && sort.length > 0) {
    return sort.map(({ field, order }) => {
      const customOrder = order === "desc" ? "-" : "";
      return `${customOrder}${field}`;
    });
  }

  return;
};

export const generateFilter = (filters?: CrudFilters) => {
  const queryFilters: { [key: string]: string } = {};
  if (filters) {
    filters.forEach((filter) => {
      if (filter.operator !== "or") {
        const { field, operator, value } = filter;

        if (operator === "eq") {
          queryFilters[field] = value;
          return;
        }
      }
    });
  }

  return queryFilters;
};

/**
 * Get request body for a django rest framework request
 * @param variables Request variables
 * @returns Request body, content type
 */
export const getRequestBody = (
  variables: Variable,
  forceForm = false
): [Variable, string] => {
  let useFormData = forceForm;
  extraImage(variables);
  cleanImageField(variables);

  for (const variable of Object.values(variables)) {
    if (variable instanceof File) {
      useFormData = true;
      break;
    }
  }

  if (useFormData) {
    const formData = new FormData();
    for (const [key, value] of Object.entries(variables)) {
      if (value instanceof File) {
        formData.append(key, value);
      } else if (value === null) {
        formData.append(key, "");
      } else if (value.$d) {
        // format dayjs
        formData.append(key, value.format());
      } else {
        formData.append(key, value);
      }
    }
    return [formData, "multipart/form-data"];
  }

  return [variables, "application/json"];
};

const extraImage = (variables: { [key: string]: any }) => {
  for (const [key, value] of Object.entries(variables)) {
    // check if value is a list
    if (Array.isArray(value)) {
      // check if the list contains a file
      if (value[0].originFileObj) {
        variables[key] = value[0].originFileObj;
      }
    }
  }
};

const cleanImageField = (variables: { [key: string]: any }) => {
  for (const [key, value] of Object.entries(variables)) {
    if (imageFieldMapper.includes(key)) {
      if (typeof value === "string" && value.startsWith("http")) {
        delete variables[key];
      }
    }
  }
};
