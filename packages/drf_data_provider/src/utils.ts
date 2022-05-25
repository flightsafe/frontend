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
export const getRequestBody = (variables: Variable): [Variable, string] => {
  let useFormData = false;
  for (const variable of Object.values(variables)) {
    if (variable instanceof File) {
      useFormData = true;
      break;
    }
  }

  if (useFormData) {
    const formData = new FormData();
    for (const [key, value] of Object.entries(variables)) {
      formData.append(key, value);
    }
    return [formData, "multipart/form-data"];
  }

  return [variables, "application/json"];
};
