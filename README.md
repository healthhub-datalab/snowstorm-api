# Snowstorm API

This is a typed API library for [IHTSDO/snowstorm](https://github.com/IHTSDO/snowstorm).

## How to use

```ts
import { SnowstormClient } from 'snowstorm-api';

const client = new SnowstormClient('https://api.snowstorm.com');

client.get('/browser/{branch}/concepts', { branch: 'MAIN', conceptIds: [22298006] }).then(data => {
  console.log(data.items[0].fsn.term); // 'Myocardial infarction (disorder)'
});
```

You can implement your own client or request functions with types

```ts
import * as SnowstormApi from 'snowstorm-api';

const host = 'https://api.snowstorm.com';
async function get<K extends keyof SnowstormApi.GET>(
  url: K,
  parameters: SnowstormApi.GET[K]['parameterType'],
  headers?: SnowstormApi.GET[K]['headerType'],
  options?: Record<string, any>
): Promise<SnowstormApi.GET[K]['responseType']> => {
  // implement
}
```