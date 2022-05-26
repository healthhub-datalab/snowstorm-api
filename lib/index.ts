/* eslint-disable max-len */
import { GET } from './get-urls';
import { POST } from './post-urls';
import { PUT } from './put-urls';
import { DELETE } from './delete-urls';

export type SNOWSTORM_GET = <K extends keyof GET>(url: K, parameters: GET[K]['parameterType'], headers?: GET[K]['headerType']) => Promise<GET[K]['responseType']>
export type SNOWSTORM_POST = <K extends keyof POST>(url: K, parameters: POST[K]['parameterType'], body?: POST[K]['bodyType'], headers?: POST[K]['headerType']) => Promise<POST[K]['responseType']>
export type SNOWSTORM_PUT = <K extends keyof PUT>(url: K, parameters: PUT[K]['parameterType'], body?: PUT[K]['bodyType'], headers?: PUT[K]['headerType']) => Promise<PUT[K]['responseType']>
export type SNOWSTORM_DELETE = <K extends keyof DELETE>(url: K, parameters: DELETE[K]['parameterType'], body?: DELETE[K]['bodyType'], headers?: DELETE[K]['headerType']) => Promise<DELETE[K]['responseType']>
