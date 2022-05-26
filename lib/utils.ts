type Primitive = string | number | boolean | undefined
type Parameters = { [key: string]: Array<Primitive> | Primitive | Parameters }

function paramsObjectToPairs(parameters: Parameters, prefix = ''): [string, string][] {
  return Object.entries(parameters).flatMap<
    [string, string],
    [string, Parameters | Primitive | Primitive[]]
  >(([key, value]): [string, string][] => {
    if (Array.isArray(value)) {
      return value.flatMap((v): [string, string][] => {
        return v === undefined ? [] : [[(prefix ? `${prefix}.` : '') + key, v.toString()]];
      });
    } else if (typeof value === 'object') {
      return paramsObjectToPairs(value, `${prefix ? `${prefix}.` : ''}${key}`);
    } else {
      if (value === undefined) return [];
      return [[(prefix ? `${prefix}.` : '') + key, value.toString()]];
    }
  });
}

export function queryBuild(
  parametricUrl: string,
  parameters?: Parameters
): string {
  if (!parameters) {
    return parametricUrl;
  }

  const params: string[] = [];
  const url = parametricUrl.replace(/\{(.*?)\}/g, (_, name) => {
    const pathParam = parameters[name];
    if (typeof pathParam === 'string' || typeof pathParam === 'number' || typeof pathParam === 'boolean') {
      params.push(name);
      return pathParam.toString();
    } else {
      throw Error('URL path params are expected as string');
    }
  });

  const searchParams = new URLSearchParams(paramsObjectToPairs(parameters));
  for (const param of params) searchParams.delete(param);
  return `${url}${Array.from(searchParams.entries()).length ? `?${searchParams}` : ''}`;
}
