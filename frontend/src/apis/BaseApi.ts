import { createRequest } from 'src/utils/http';
import config from '@/config';
import type { ApiResponse } from '@/interfaces/common';

class BaseApi {
  // 如果没设置baseUrl，则默认使用当前相对路径
  BaseUrl = config.BACKEND_URL;

  http(url: string, ...option: any[]): Promise<ApiResponse<any>> {
    return createRequest(`${this.BaseUrl}${url}`, ...option);
  }
}

export default BaseApi;
