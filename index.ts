import axios from 'axios';
import { GET } from './lib/get-urls';
import { POST } from './lib/post-urls';
import { PUT } from './lib/put-urls';
import { DELETE } from './lib/delete-urls';
import { queryBuild } from './lib/utils';
import {
  SNOWSTORM_GET,
  SNOWSTORM_POST,
  SNOWSTORM_PUT,
  SNOWSTORM_DELETE,
} from './lib';

const requestGet: SNOWSTORM_GET = async <K extends keyof GET>(
  url: K,
  parameters: GET[K]['parameterType'],
  headers?: GET[K]['headerType']
): Promise<GET[K]['responseType']> => {
  const compiledUrl = queryBuild(url, parameters);
  const { data, status } = await axios.get<GET[K]['responseType']>(compiledUrl, { headers });
  if (!data) throw new Error(status.toString());
  return data;
};
const requestPost: SNOWSTORM_POST = async <K extends keyof POST>(
  url: K,
  parameters: POST[K]['parameterType'],
  body?: POST[K]['bodyType'],
  headers?: POST[K]['headerType']
): Promise<POST[K]['responseType']> => {
  const compiledUrl = queryBuild(url, parameters);
  const { data, status } = await axios.post<POST[K]['responseType']>(compiledUrl, body, { headers });
  if (!data) throw new Error(status.toString());
  return data;
};
const requestPut: SNOWSTORM_PUT = async <K extends keyof PUT>(
  url: K,
  parameters: PUT[K]['parameterType'],
  body?: PUT[K]['bodyType'],
  headers?: PUT[K]['headerType']
): Promise<PUT[K]['responseType']> => {
  const compiledUrl = queryBuild(url, parameters);
  const { data, status } = await axios.put<PUT[K]['responseType']>(compiledUrl, body, { headers });
  if (!data) throw new Error(status.toString());
  return data;
};
const requestDelete: SNOWSTORM_DELETE = async <K extends keyof DELETE>(
  url: K, parameters: DELETE[K]['parameterType'],
  body?: DELETE[K]['bodyType'],
  headers?: DELETE[K]['headerType']
): Promise<DELETE[K]['responseType']> => {
  const compiledUrl = queryBuild(url, parameters);
  const { data, status } = await axios.request<DELETE[K]['responseType']>({
    url: compiledUrl,
    method: 'delete',
    data: body,
    ...{ headers },
  });
  if (!data) throw new Error(status.toString());
  return data;
};

export default {
  requestGet,
  get: requestGet,
  requestPost,
  post: requestPost,
  requestPut,
  put: requestPut,
  requestDelete,
  delete: requestDelete,
};