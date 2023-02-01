import { RelationshipIdPojo } from './types';

export interface DELETE {
  '/admin/{branch}/actions/hard-delete': {
    responseType: void,
    parameterType: {
      branch: string,
    },
    headerType: undefined,
    bodyType: undefined,
  }

  '/admin/permissions/global/role/{role}': {
    responseType: void,
    parameterType: {
      role: string,
    },
    headerType: undefined,
    bodyType: undefined,
  }
  '/admin/permissions/{branch}/role/{role}': {
    responseType: void,
    parameterType: {
      branch: string,
      role: string,
    },
    headerType: undefined,
    bodyType: undefined,
  }

  '/merge-reviews/{id}/{conceptId}': {
    responseType: void,
    parameterType: {
      id: string,
      conceptId: string,
    },
    headerType: undefined,
    bodyType: undefined,
  }

  '/codesystems/{shortName}': {
    responseType: void,
    parameterType: {
      shortName: string,
    },
    headerType: undefined,
    bodyType: undefined,
  }

  '/{branch}/concepts/{conceptId}': {
    responseType: void,
    parameterType: {
      branch: string,
      conceptId: string,
      force?: boolean,
    },
    headerType: undefined,
    bodyType: undefined,
  }

  '/{branch}/descriptions/{descriptionId}': {
    responseType: void,
    parameterType: {
      branch: string,
      descriptionId: string,
      force?: boolean,
    },
    headerType: undefined,
    bodyType: undefined,
  }

  '/{branch}/members': {
    responseType: void,
    parameterType: {
      branch: string,
      force?: boolean,
    },
    headerType: undefined,
    bodyType: undefined,
  }
  '/{branch}/members/{uuid}': {
    responseType: void,
    parameterType: {
      branch: string,
      uuid: string,
      force?: boolean,
    },
    headerType: undefined,
    bodyType: undefined,
  }

  '/{branch}/relationships': {
    responseType: void,
    parameterType: {
      branch: string,
      force?: boolean,
    },
    headerType: undefined,
    bodyType: {
      relationshipIdPojo: RelationshipIdPojo,
    },
  }
  '/{branch}/relationships/{relationshipId}': {
    responseType: void,
    parameterType: {
      branch: string,
      relationshipId: string,
      force?: boolean,
    },
    headerType: undefined,
    bodyType: undefined,
  }
}
