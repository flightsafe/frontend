import axios, { AxiosInstance } from "axios";
import { stringify } from "query-string";
import { DataProvider, HttpError } from "@pankod/refine-core";
import { DRFQueryInterface, DRFPaginationResponse } from "./types";
import { generateFilter, generateSort, getRequestBody } from "./utils";

const axiosInstance = axios.create();

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const customError: HttpError = {
      ...error,
      message: error.response?.data?.message,
      statusCode: error.response?.status,
    };

    return Promise.reject(customError);
  }
);

const DrfServer = (
  apiUrl: string,
  httpClient: AxiosInstance = axiosInstance
): DataProvider => ({
  getList: async ({ resource, pagination, filters, sort }) => {
    const url = `${apiUrl}/${resource}`;

    const current = pagination?.current || 1;
    const pageSize = pagination?.pageSize || 10;

    const queryFilters = generateFilter(filters);

    const query: DRFQueryInterface = {
      page: current,
      page_size: pageSize,
      ...queryFilters,
    };

    const generatedSort = generateSort(sort);
    if (generatedSort) {
      query.ordering = generatedSort.join(",");
    }

    const rqURL = `${url}?${stringify(query)}`;

    const { data } = await httpClient.get<DRFPaginationResponse>(
      `${url}?${stringify(query)}`
    );

    const total = data.count;

    return {
      data: data.results,
      total,
    };
  },

  getMany: async ({ resource, ids }) => {
    const { data } = await httpClient.get<DRFPaginationResponse>(
      `${apiUrl}/${resource}?${stringify({ id: ids })}`
    );

    return {
      data: data.results,
    };
  },

  create: async ({ resource, variables }) => {
    const url = `${apiUrl}/${resource}/`;
    const [generatedVariables, contentType] = getRequestBody(variables);
    const { data } = await httpClient.post(url, generatedVariables, {
      headers: { "Content-Type": contentType },
    });

    return {
      data,
    };
  },

  createMany: async ({ resource, variables }) => {
    const response = await Promise.all(
      variables.map(async (param) => {
        const { data } = await httpClient.post(`${apiUrl}/${resource}`, param);
        return data;
      })
    );

    return { data: response };
  },

  update: async ({ resource, id, variables, metaData }) => {
    const url = `${apiUrl}/${resource}/${id}/`;

    const [generatedVariables, contentType] = getRequestBody(variables, true);
    console.log("generatedVariables", generatedVariables, contentType);
    const { data } = await httpClient.patch(url, generatedVariables, {
      headers: { "Content-Type": contentType },
    });

    return {
      data,
    };
  },

  updateMany: async ({ resource, ids, variables }) => {
    const response = await Promise.all(
      ids.map(async (id) => {
        const { data } = await httpClient.patch(
          `${apiUrl}/${resource}/${id}`,
          variables
        );
        return data;
      })
    );

    return { data: response };
  },

  getOne: async ({ resource, id }) => {
    const url = `${apiUrl}/${resource}/${id}`;

    const { data } = await httpClient.get(url);

    return {
      data,
    };
  },

  deleteOne: async ({ resource, id, variables }) => {
    const url = `${apiUrl}/${resource}/${id}`;

    const { data } = await httpClient.delete(url, variables);

    return {
      data,
    };
  },

  deleteMany: async ({ resource, ids, variables }) => {
    const response = await Promise.all(
      ids.map(async (id) => {
        const { data } = await httpClient.delete(
          `${apiUrl}/${resource}/${id}`,
          variables
        );
        return data;
      })
    );
    return { data: response };
  },

  getApiUrl: () => {
    return apiUrl;
  },

  custom: async ({ url, method, filters, sort, payload, query, headers }) => {
    let requestUrl = `${url}?`;

    if (sort) {
      const generatedSort = generateSort(sort);
      if (generatedSort) {
        const ordering = generatedSort.join(",");
        requestUrl = `${requestUrl}&${{ ordering }}`;
      }
    }

    if (filters) {
      const filterQuery = generateFilter(filters);
      requestUrl = `${requestUrl}&${stringify(filterQuery)}`;
    }

    if (query) {
      requestUrl = `${requestUrl}&${stringify(query)}`;
    }

    if (headers) {
      httpClient.defaults.headers = {
        ...httpClient.defaults.headers,
        ...headers,
      };
    }

    let axiosResponse;
    switch (method) {
      case "put":
      case "post":
      case "patch":
        axiosResponse = await httpClient[method](url, payload);
        break;
      case "delete":
        axiosResponse = await httpClient.delete(url);
        break;
      default:
        axiosResponse = await httpClient.get(requestUrl);
        break;
    }

    const { data } = axiosResponse;

    return Promise.resolve({ data });
  },
});

export default DrfServer;
