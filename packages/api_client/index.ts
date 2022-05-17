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

export class PlaneService {
  /**
   *
   */
  static listPlanes(
    params: {
      /** A page number within the paginated result set. */
      page?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/plane/plane/';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { page: params['page'] };

      /** 适配ios13，get请求不允许带body */

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
  static listMaintenanceRecords(
    params: {
      /** A page number within the paginated result set. */
      page?: number;
      /** plane */
      plane?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/plane/maintenance/';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { page: params['page'], plane: params['plane'] };

      /** 适配ios13，get请求不允许带body */

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
      let url = basePath + '/plane/maintenance/{id}/';
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
  static listMaintenanceRecordItems(
    params: {
      /** A page number within the paginated result set. */
      page?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/plane/maintenance-item/';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { page: params['page'] };

      /** 适配ios13，get请求不允许带body */

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
}

export interface Plane {
  /**  */
  id?: number;

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
  id?: number;

  /**  */
  start_time?: Date;

  /**  */
  end_time?: Date;

  /**  */
  status?: string;

  /**  */
  name?: string;

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
  name?: string;

  /** Maintenance record description */
  description: string;

  /**  */
  progress?: EnumMaintenanceRecordDetailProgress;

  /**  */
  plane: number;
}

export interface MaintenanceRecordItem {
  /**  */
  id?: number;

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
  status?: EnumMaintenanceRecordItemStatus;

  /**  */
  maintenance_record: number;

  /**  */
  operator?: number;
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
  'BAD_CONDITION' = 'BAD_CONDITION'
}
