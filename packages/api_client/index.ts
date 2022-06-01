/** Generate by swagger-axios-codegen */
// @ts-nocheck
/* eslint-disable */

/** Generate by swagger-axios-codegen */
/* eslint-disable */
// @ts-nocheck
import axiosStatic, { AxiosInstance, AxiosRequestConfig } from 'axios';

export interface IRequestOptions extends AxiosRequestConfig {}

export interface IRequestConfig {
  method?: any;
  headers?: any;
  url?: any;
  data?: any;
  params?: any;
}

// Add options interface
export interface ServiceOptions {
  axios?: AxiosInstance;
}

// Add default options
export const serviceOptions: ServiceOptions = {};

// Instance selector
export function axios(configs: IRequestConfig, resolve: (p: any) => void, reject: (p: any) => void): Promise<any> {
  if (serviceOptions.axios) {
    return serviceOptions.axios
      .request(configs)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  } else {
    throw new Error('please inject yourself instance like axios  ');
  }
}

export function getConfigs(method: string, contentType: string, url: string, options: any): IRequestConfig {
  const configs: IRequestConfig = { ...options, method, url };
  configs.headers = {
    ...options.headers,
    'Content-Type': contentType
  };
  return configs;
}

export const basePath = 'http://127.0.0.1:8000';

export interface IList<T> extends Array<T> {}
export interface List<T> extends Array<T> {}
export interface IDictionary<TValue> {
  [key: string]: TValue;
}
export interface Dictionary<TValue> extends IDictionary<TValue> {}

export interface IListResult<T> {
  items?: T[];
}

export class ListResultDto<T> implements IListResult<T> {
  items?: T[];
}

export interface IPagedResult<T> extends IListResult<T> {
  totalCount?: number;
  items?: T[];
}

export class PagedResultDto<T = any> implements IPagedResult<T> {
  totalCount?: number;
  items?: T[];
}

// customer definition
// empty

export class ApiService {
  /**
   *
   */
  static listPlanes(
    params: {
      /** A page number within the paginated result set. */
      page?: number;
      /** Number of results to return per page. */
      pageSize?: number;
      /** title */
      title?: string;
      /** description */
      description?: string;
      /** id */
      id?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/plane/';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        page: params['page'],
        page_size: params['pageSize'],
        title: params['title'],
        description: params['description'],
        id: params['id']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static createPlane(
    params: {
      /** requestBody */
      body?: Plane;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Plane> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/plane/';

      const configs: IRequestConfig = getConfigs('post', 'multipart/form-data', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static metadataPlane(options: IRequestOptions = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/plane/';

      const configs: IRequestConfig = getConfigs('options', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static retrievePlane(
    params: {
      /** id */
      id?: string;
      /** title */
      title?: string;
      /** description */
      description?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PlaneDetail> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/plane/{id}/';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { id: params['id'], title: params['title'], description: params['description'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static updatePlane(
    params: {
      /** id */
      id?: string;
      /** title */
      title?: string;
      /** description */
      description?: string;
      /** requestBody */
      body?: Plane;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Plane> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/plane/{id}/';

      const configs: IRequestConfig = getConfigs('put', 'multipart/form-data', url, options);
      configs.params = { id: params['id'], title: params['title'], description: params['description'] };

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static partialUpdatePlane(
    params: {
      /** id */
      id?: string;
      /** title */
      title?: string;
      /** description */
      description?: string;
      /** requestBody */
      body?: Plane;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Plane> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/plane/{id}/';

      const configs: IRequestConfig = getConfigs('patch', 'multipart/form-data', url, options);
      configs.params = { id: params['id'], title: params['title'], description: params['description'] };

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static destroyPlane(
    params: {
      /** id */
      id?: string;
      /** title */
      title?: string;
      /** description */
      description?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/plane/{id}/';

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);
      configs.params = { id: params['id'], title: params['title'], description: params['description'] };

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static listMaintenanceRecords(
    params: {
      /** A page number within the paginated result set. */
      page?: number;
      /** Number of results to return per page. */
      pageSize?: number;
      /** plane */
      plane?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/maintenance/';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { page: params['page'], page_size: params['pageSize'], plane: params['plane'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static createMaintenanceRecord(
    params: {
      /** requestBody */
      body?: MaintenanceRecord;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<MaintenanceRecord> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/maintenance/';

      const configs: IRequestConfig = getConfigs('post', 'multipart/form-data', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static metadataMaintenanceRecord(options: IRequestOptions = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/maintenance/';

      const configs: IRequestConfig = getConfigs('options', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static retrieveMaintenanceRecord(
    params: {
      /** A unique integer value identifying this maintenance record. */
      id: string;
      /** plane */
      plane?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<MaintenanceRecordDetail> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/maintenance/{id}/';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { plane: params['plane'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static updateMaintenanceRecord(
    params: {
      /** A unique integer value identifying this maintenance record. */
      id: string;
      /** plane */
      plane?: string;
      /** requestBody */
      body?: MaintenanceRecord;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<MaintenanceRecord> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/maintenance/{id}/';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('put', 'multipart/form-data', url, options);
      configs.params = { plane: params['plane'] };

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static partialUpdateMaintenanceRecord(
    params: {
      /** A unique integer value identifying this maintenance record. */
      id: string;
      /** plane */
      plane?: string;
      /** requestBody */
      body?: MaintenanceRecord;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<MaintenanceRecord> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/maintenance/{id}/';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('patch', 'multipart/form-data', url, options);
      configs.params = { plane: params['plane'] };

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static destroyMaintenanceRecord(
    params: {
      /** A unique integer value identifying this maintenance record. */
      id: string;
      /** plane */
      plane?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/maintenance/{id}/';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);
      configs.params = { plane: params['plane'] };

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static listMaintenanceRecordItems(
    params: {
      /** A page number within the paginated result set. */
      page?: number;
      /** Number of results to return per page. */
      pageSize?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/maintenance-item/';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { page: params['page'], page_size: params['pageSize'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static createMaintenanceRecordItem(
    params: {
      /** requestBody */
      body?: MaintenanceRecordItem;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<MaintenanceRecordItem> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/maintenance-item/';

      const configs: IRequestConfig = getConfigs('post', 'multipart/form-data', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static metadataMaintenanceRecordItem(options: IRequestOptions = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/maintenance-item/';

      const configs: IRequestConfig = getConfigs('options', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static retrieveMaintenanceRecordItem(
    params: {
      /** A unique integer value identifying this maintenance record item. */
      id: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<MaintenanceRecordItem> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/maintenance-item/{id}/';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static updateMaintenanceRecordItem(
    params: {
      /** A unique integer value identifying this maintenance record item. */
      id: string;
      /** requestBody */
      body?: MaintenanceRecordItem;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<MaintenanceRecordItem> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/maintenance-item/{id}/';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('put', 'multipart/form-data', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static partialUpdateMaintenanceRecordItem(
    params: {
      /** A unique integer value identifying this maintenance record item. */
      id: string;
      /** requestBody */
      body?: MaintenanceRecordItem;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<MaintenanceRecordItem> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/maintenance-item/{id}/';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('patch', 'multipart/form-data', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static destroyMaintenanceRecordItem(
    params: {
      /** A unique integer value identifying this maintenance record item. */
      id: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/maintenance-item/{id}/';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static listBookingRecords(
    params: {
      /** A page number within the paginated result set. */
      page?: number;
      /** Number of results to return per page. */
      pageSize?: number;
      /** plane */
      plane?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/booking/';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { page: params['page'], page_size: params['pageSize'], plane: params['plane'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static createBookingRecord(
    params: {
      /** requestBody */
      body?: BookingRecord;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<BookingRecord> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/booking/';

      const configs: IRequestConfig = getConfigs('post', 'multipart/form-data', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static metadataBookingRecord(options: IRequestOptions = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/booking/';

      const configs: IRequestConfig = getConfigs('options', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static retrieveBookingRecord(
    params: {
      /** A unique integer value identifying this booking record. */
      id: string;
      /** plane */
      plane?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<BookingRecord> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/booking/{id}/';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { plane: params['plane'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static updateBookingRecord(
    params: {
      /** A unique integer value identifying this booking record. */
      id: string;
      /** plane */
      plane?: string;
      /** requestBody */
      body?: BookingRecord;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<BookingRecord> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/booking/{id}/';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('put', 'multipart/form-data', url, options);
      configs.params = { plane: params['plane'] };

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static partialUpdateBookingRecord(
    params: {
      /** A unique integer value identifying this booking record. */
      id: string;
      /** plane */
      plane?: string;
      /** requestBody */
      body?: BookingRecord;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<BookingRecord> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/booking/{id}/';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('patch', 'multipart/form-data', url, options);
      configs.params = { plane: params['plane'] };

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static destroyBookingRecord(
    params: {
      /** A unique integer value identifying this booking record. */
      id: string;
      /** plane */
      plane?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/booking/{id}/';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);
      configs.params = { plane: params['plane'] };

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static listTransactionInfos(
    params: {
      /** A page number within the paginated result set. */
      page?: number;
      /** Number of results to return per page. */
      pageSize?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/transaction/';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { page: params['page'], page_size: params['pageSize'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static createTransactionInfo(
    params: {
      /** requestBody */
      body?: TransactionInfo;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<TransactionInfo> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/transaction/';

      const configs: IRequestConfig = getConfigs('post', 'multipart/form-data', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static metadataTransactionInfo(options: IRequestOptions = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/transaction/';

      const configs: IRequestConfig = getConfigs('options', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static retrieveTransactionInfo(
    params: {
      /** A unique integer value identifying this transaction info. */
      id: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<TransactionInfo> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/transaction/{id}/';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static updateTransactionInfo(
    params: {
      /** A unique integer value identifying this transaction info. */
      id: string;
      /** requestBody */
      body?: TransactionInfo;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<TransactionInfo> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/transaction/{id}/';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('put', 'multipart/form-data', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static partialUpdateTransactionInfo(
    params: {
      /** A unique integer value identifying this transaction info. */
      id: string;
      /** requestBody */
      body?: TransactionInfo;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<TransactionInfo> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/transaction/{id}/';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('patch', 'multipart/form-data', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static destroyTransactionInfo(
    params: {
      /** A unique integer value identifying this transaction info. */
      id: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/transaction/{id}/';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static listCourses(
    params: {
      /** A page number within the paginated result set. */
      page?: number;
      /** Number of results to return per page. */
      pageSize?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/course/';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { page: params['page'], page_size: params['pageSize'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static createCourse(
    params: {
      /** requestBody */
      body?: Course;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Course> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/course/';

      const configs: IRequestConfig = getConfigs('post', 'multipart/form-data', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static metadataCourse(options: IRequestOptions = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/course/';

      const configs: IRequestConfig = getConfigs('options', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static retrieveCourse(
    params: {
      /** A unique integer value identifying this course. */
      id: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Course> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/course/{id}/';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static updateCourse(
    params: {
      /** A unique integer value identifying this course. */
      id: string;
      /** requestBody */
      body?: Course;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Course> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/course/{id}/';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('put', 'multipart/form-data', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static partialUpdateCourse(
    params: {
      /** A unique integer value identifying this course. */
      id: string;
      /** requestBody */
      body?: Course;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Course> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/course/{id}/';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('patch', 'multipart/form-data', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static destroyCourse(
    params: {
      /** A unique integer value identifying this course. */
      id: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/course/{id}/';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static listComments(
    params: {
      /** A page number within the paginated result set. */
      page?: number;
      /** Number of results to return per page. */
      pageSize?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/comment/';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { page: params['page'], page_size: params['pageSize'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static createComment(
    params: {
      /** requestBody */
      body?: Comment;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Comment> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/comment/';

      const configs: IRequestConfig = getConfigs('post', 'multipart/form-data', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static metadataComment(options: IRequestOptions = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/comment/';

      const configs: IRequestConfig = getConfigs('options', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static retrieveComment(
    params: {
      /** A unique integer value identifying this comment. */
      id: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Comment> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/comment/{id}/';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static updateComment(
    params: {
      /** A unique integer value identifying this comment. */
      id: string;
      /** requestBody */
      body?: Comment;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Comment> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/comment/{id}/';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('put', 'multipart/form-data', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static partialUpdateComment(
    params: {
      /** A unique integer value identifying this comment. */
      id: string;
      /** requestBody */
      body?: Comment;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Comment> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/comment/{id}/';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('patch', 'multipart/form-data', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static destroyComment(
    params: {
      /** A unique integer value identifying this comment. */
      id: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/comment/{id}/';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static listLessons(
    params: {
      /** A page number within the paginated result set. */
      page?: number;
      /** Number of results to return per page. */
      pageSize?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/lesson/';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { page: params['page'], page_size: params['pageSize'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static createLesson(
    params: {
      /** requestBody */
      body?: Lesson;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Lesson> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/lesson/';

      const configs: IRequestConfig = getConfigs('post', 'multipart/form-data', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static metadataLesson(options: IRequestOptions = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/lesson/';

      const configs: IRequestConfig = getConfigs('options', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static retrieveLesson(
    params: {
      /** A unique integer value identifying this lesson. */
      id: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Lesson> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/lesson/{id}/';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static updateLesson(
    params: {
      /** A unique integer value identifying this lesson. */
      id: string;
      /** requestBody */
      body?: Lesson;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Lesson> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/lesson/{id}/';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('put', 'multipart/form-data', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static partialUpdateLesson(
    params: {
      /** A unique integer value identifying this lesson. */
      id: string;
      /** requestBody */
      body?: Lesson;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Lesson> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/lesson/{id}/';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('patch', 'multipart/form-data', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static destroyLesson(
    params: {
      /** A unique integer value identifying this lesson. */
      id: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/lesson/{id}/';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static listLessonHistorys(
    params: {
      /** A page number within the paginated result set. */
      page?: number;
      /** Number of results to return per page. */
      pageSize?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/lessonhistory/';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { page: params['page'], page_size: params['pageSize'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static createLessonHistory(
    params: {
      /** requestBody */
      body?: LessonHistory;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<LessonHistory> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/lessonhistory/';

      const configs: IRequestConfig = getConfigs('post', 'multipart/form-data', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static metadataLessonHistory(options: IRequestOptions = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/lessonhistory/';

      const configs: IRequestConfig = getConfigs('options', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static retrieveLessonHistory(
    params: {
      /** A unique integer value identifying this lesson history. */
      id: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<LessonHistory> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/lessonhistory/{id}/';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static updateLessonHistory(
    params: {
      /** A unique integer value identifying this lesson history. */
      id: string;
      /** requestBody */
      body?: LessonHistory;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<LessonHistory> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/lessonhistory/{id}/';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('put', 'multipart/form-data', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static partialUpdateLessonHistory(
    params: {
      /** A unique integer value identifying this lesson history. */
      id: string;
      /** requestBody */
      body?: LessonHistory;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<LessonHistory> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/lessonhistory/{id}/';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('patch', 'multipart/form-data', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static destroyLessonHistory(
    params: {
      /** A unique integer value identifying this lesson history. */
      id: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/lessonhistory/{id}/';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static listUsers(
    params: {
      /** A page number within the paginated result set. */
      page?: number;
      /** Number of results to return per page. */
      pageSize?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/user/';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { page: params['page'], page_size: params['pageSize'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static createUser(
    params: {
      /** requestBody */
      body?: User;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<User> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/user/';

      const configs: IRequestConfig = getConfigs('post', 'multipart/form-data', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static metadataUser(options: IRequestOptions = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/user/';

      const configs: IRequestConfig = getConfigs('options', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static retrieveUser(
    params: {
      /** A unique integer value identifying this user. */
      id: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<User> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/user/{id}/';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static updateUser(
    params: {
      /** A unique integer value identifying this user. */
      id: string;
      /** requestBody */
      body?: User;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<User> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/user/{id}/';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('put', 'multipart/form-data', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static partialUpdateUser(
    params: {
      /** A unique integer value identifying this user. */
      id: string;
      /** requestBody */
      body?: User;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<User> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/user/{id}/';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('patch', 'multipart/form-data', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static destroyUser(
    params: {
      /** A unique integer value identifying this user. */
      id: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/user/{id}/';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
}

export class TokenService {
  /**
   *
   */
  static createTokenObtainPair(
    params: {
      /** requestBody */
      body?: TokenObtainPair;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<TokenObtainPair> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/token/';

      const configs: IRequestConfig = getConfigs('post', 'multipart/form-data', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static metadataTokenObtainPair(options: IRequestOptions = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/token/';

      const configs: IRequestConfig = getConfigs('options', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static createTokenRefresh(
    params: {
      /** requestBody */
      body?: TokenRefresh;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<TokenRefresh> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/token/refresh/';

      const configs: IRequestConfig = getConfigs('post', 'multipart/form-data', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static metadataTokenRefresh(options: IRequestOptions = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/token/refresh/';

      const configs: IRequestConfig = getConfigs('options', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
}

export interface Plane {
  /**  */
  id?: number;

  /**  */
  title: string;

  /**  */
  image: string;

  /**  */
  created_time?: Date;

  /**  */
  updated_time?: Date;
}

export interface PlaneDetail {
  /**  */
  id?: number;

  /**  */
  records?: object[];

  /**  */
  title: string;

  /**  */
  description: string;

  /**  */
  image: string;

  /**  */
  created_time?: Date;

  /**  */
  updated_time?: Date;
}

export interface MaintenanceRecord {
  /**  */
  id?: number;

  /**  */
  start_time?: Date;

  /**  */
  end_time?: Date;

  /**  */
  status?: string;

  /**  */
  title?: string;

  /** Maintenance record description */
  description: string;

  /**  */
  progress?: EnumMaintenanceRecordProgress;

  /**  */
  plane: number;
}

export interface MaintenanceRecordDetail {
  /**  */
  id?: number;

  /**  */
  items?: object[];

  /**  */
  start_time?: Date;

  /**  */
  end_time?: Date;

  /**  */
  status?: string;

  /**  */
  plane_name?: string;

  /**  */
  title?: string;

  /** Maintenance record description */
  description: string;

  /**  */
  progress?: EnumMaintenanceRecordDetailProgress;

  /**  */
  plane: number;

  /**  */
  author?: number;
}

export interface MaintenanceRecordItem {
  /**  */
  id?: number;

  /**  */
  title: string;

  /**  */
  description: string;

  /**  */
  image?: string;

  /**  */
  start_time?: Date;

  /**  */
  end_time?: Date;

  /**  */
  expire_at?: Date;

  /**  */
  status?: EnumMaintenanceRecordItemStatus;

  /**  */
  maintenance_record: number;

  /**  */
  operator?: number;
}

export interface BookingRecord {
  /**  */
  id?: number;

  /**  */
  plane_name?: string;

  /**  */
  start_time: Date;

  /**  */
  end_time: Date;

  /**  */
  plane: number;

  /** Used in the lesson */
  lesson?: number;

  /**  */
  user: number;
}

export interface TransactionInfo {
  /**  */
  id?: number;

  /**  */
  title: EnumTransactionInfoTitle;

  /** Transaction details */
  details?: object;

  /**  */
  created_time?: Date;

  /**  */
  user?: number;
}

export interface Course {
  /**  */
  id?: number;

  /**  */
  title: string;

  /**  */
  description: string;

  /**  */
  cover?: string;
}

export interface Comment {
  /**  */
  id?: number;

  /**  */
  comment: string;

  /**  */
  create_at?: Date;

  /**  */
  author: number;

  /**  */
  lesson_history: number;
}

export interface Lesson {
  /**  */
  id?: number;

  /**  */
  title: string;

  /**  */
  description: string;

  /**  */
  course: number;
}

export interface LessonHistory {
  /**  */
  id?: number;

  /**  */
  start_time?: Date;

  /**  */
  end_time?: Date;

  /** grade for this lesson history. */
  grade?: number;

  /**  */
  plane: number;

  /**  */
  lesson: number;

  /**  */
  student: number;
}

export interface User {
  /**  */
  id?: number;

  /**  */
  title?: string;

  /**  */
  password: string;

  /**  */
  last_login?: Date;

  /** Designates that this user has all permissions without explicitly assigning them. */
  is_superuser?: boolean;

  /** Required. 150 characters or fewer. Letters, digits and @\/.\/+\/-\/_ only. */
  username: string;

  /**  */
  first_name?: string;

  /**  */
  last_name?: string;

  /**  */
  email?: string;

  /** Designates whether the user can log into this admin site. */
  is_staff?: boolean;

  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
  is_active?: boolean;

  /**  */
  date_joined?: Date;

  /** The groups this user belongs to. A user will get all permissions granted to each of their groups. */
  groups?: number[];

  /** Specific permissions for this user. */
  user_permissions?: number[];
}

export interface TokenObtainPair {
  /**  */
  username: string;

  /**  */
  password: string;
}

export interface TokenRefresh {
  /**  */
  refresh: string;

  /**  */
  access?: string;
}

export interface BookingRecordOption {
  /**  */
  id?: number;

  /**  */
  start_time: Date;

  /**  */
  end_time: Date;

  /**  */
  plane: number;

  /** Used in the lesson */
  lesson?: number;
}
export enum EnumMaintenanceRecordProgress {
  'PENDING' = 'PENDING',
  'IN_PROGRESS' = 'IN_PROGRESS',
  'FINISHED' = 'FINISHED'
}
export enum EnumMaintenanceRecordDetailProgress {
  'PENDING' = 'PENDING',
  'IN_PROGRESS' = 'IN_PROGRESS',
  'FINISHED' = 'FINISHED'
}
export enum EnumMaintenanceRecordItemStatus {
  'GOOD_CONDITION' = 'GOOD_CONDITION',
  'BAD_CONDITION' = 'BAD_CONDITION',
  'EXPIRED' = 'EXPIRED'
}
export enum EnumTransactionInfoTitle {
  'CREATE_BOOKING' = 'CREATE_BOOKING',
  'DELETE_BOOKING' = 'DELETE_BOOKING',
  'CREATE_LESSON_RECORD' = 'CREATE_LESSON_RECORD',
  'CREATE_COMMENT' = 'CREATE_COMMENT',
  'ADD_MAINTENANCE_ITEM' = 'ADD_MAINTENANCE_ITEM',
  'CHANGE_MAINTENANCE_STATUS' = 'CHANGE_MAINTENANCE_STATUS',
  'START_MAINTENANCE' = 'START_MAINTENANCE',
  'END_MAINTENANCE' = 'END_MAINTENANCE'
}
