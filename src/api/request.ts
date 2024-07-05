import { AxiosRequestConfig, AxiosResponse } from "axios";

import { Row, RowList } from "@type/response";

import axiosInstance from "./instance";

const handleError = (error: any): never => {
  if (error.response) {
    // 서버 응답이 있는 경우
    throw error.response.data;
  }
  if (error.request) {
    // 요청이 이루어졌으나 응답이 없는 경우
    throw error.response.data;
  } else {
    // 요청 설정 중 에러가 발생한 경우
    throw error.response.data;
  }
};

const apiRequest = {
  get: async <T>(
    url: string,
    params: Record<string, any> = {},
    config: AxiosRequestConfig = {},
  ): Promise<T> => {
    try {
      const response: AxiosResponse<Row<T>> = await axiosInstance.get(url, {
        params,
        ...config,
      });

      return response.data.row;
    } catch (error) {
      return handleError(error);
    }
  },

  getList: async <T>(
    url: string,
    params: Record<string, any> = {},
    config: AxiosRequestConfig = {},
  ): Promise<T[]> => {
    try {
      const response: AxiosResponse<RowList<T>> = await axiosInstance.get(url, {
        params,
        ...config,
      });

      return response.data.rowList;
    } catch (error) {
      return handleError(error);
    }
  },

  post: async <T>(
    url: string,
    data: any,
    config: AxiosRequestConfig = {},
  ): Promise<T> => {
    try {
      const response: AxiosResponse<T> = await axiosInstance.post(url, data, {
        ...config,
      });
      return response.data;
    } catch (error) {
      return handleError(error);
    }
  },

  patch: async <T>(
    url: string,
    data: any,
    config: AxiosRequestConfig = {},
  ): Promise<T> => {
    try {
      const response: AxiosResponse<T> = await axiosInstance.patch(url, data, {
        ...config,
      });
      return response.data;
    } catch (error) {
      return handleError(error);
    }
  },

  delete: async <T>(
    url: string,
    config: AxiosRequestConfig = {},
  ): Promise<T> => {
    try {
      const response: AxiosResponse<T> = await axiosInstance.delete(url, {
        ...config,
      });
      return response.data;
    } catch (error) {
      return handleError(error);
    }
  },
};

export default apiRequest;
