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

export const basePath = '';

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

export class PlaneService {
  /**
   *
   */
  static listPlanes(options: IRequestOptions = {}): Promise<Plane[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/plane/plane/';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

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
      let url = basePath + '/plane/plane/';

      const configs: IRequestConfig = getConfigs('post', 'multipart/form-data', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static retrievePlane(
    params: {
      /** A unique integer value identifying this plane. */
      id: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Plane> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/plane/plane/{id}/';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static updatePlane(
    params: {
      /** A unique integer value identifying this plane. */
      id: string;
      /** requestBody */
      body?: Plane;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Plane> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/plane/plane/{id}/';
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
  static partialUpdatePlane(
    params: {
      /** A unique integer value identifying this plane. */
      id: string;
      /** requestBody */
      body?: Plane;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Plane> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/plane/plane/{id}/';
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
  static destroyPlane(
    params: {
      /** A unique integer value identifying this plane. */
      id: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/plane/plane/{id}/';
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
  static listMaintenanceRecords(options: IRequestOptions = {}): Promise<MaintenanceRecord[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/plane/maintenance/';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

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
      let url = basePath + '/plane/maintenance/';

      const configs: IRequestConfig = getConfigs('post', 'multipart/form-data', url, options);

      let data = params.body;

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
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<MaintenanceRecord> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/plane/maintenance/{id}/';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

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
      /** requestBody */
      body?: MaintenanceRecord;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<MaintenanceRecord> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/plane/maintenance/{id}/';
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
  static partialUpdateMaintenanceRecord(
    params: {
      /** A unique integer value identifying this maintenance record. */
      id: string;
      /** requestBody */
      body?: MaintenanceRecord;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<MaintenanceRecord> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/plane/maintenance/{id}/';
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
  static destroyMaintenanceRecord(
    params: {
      /** A unique integer value identifying this maintenance record. */
      id: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/plane/maintenance/{id}/';
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
  static listMaintenanceRecordItems(options: IRequestOptions = {}): Promise<MaintenanceRecordItem[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/plane/maintenance-item/';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

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
      let url = basePath + '/plane/maintenance-item/';

      const configs: IRequestConfig = getConfigs('post', 'multipart/form-data', url, options);

      let data = params.body;

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
      let url = basePath + '/plane/maintenance-item/{id}/';
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
      let url = basePath + '/plane/maintenance-item/{id}/';
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
      let url = basePath + '/plane/maintenance-item/{id}/';
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
      let url = basePath + '/plane/maintenance-item/{id}/';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
}

export interface Plane {
  /**  */
  url?: string;

  /**  */
  name: string;

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
  url?: string;

  /**  */
  name?: string;

  /** Maintenance record description */
  description: string;

  /**  */
  progress?: EnumMaintenanceRecordProgress;

  /**  */
  plane: string;
}

export interface MaintenanceRecordItem {
  /**  */
  url?: string;

  /**  */
  name: string;

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
  maintenance_record: string;

  /**  */
  operator?: string;
}
export enum EnumMaintenanceRecordProgress {
  'PENDING' = 'PENDING',
  'IN_PROGRESS' = 'IN_PROGRESS',
  'FINISHED' = 'FINISHED'
}
