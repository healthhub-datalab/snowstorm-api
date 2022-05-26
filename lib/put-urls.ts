import {
  BranchPojo,
  ClassificationUpdateRequest,
  CodeSystem,
  CodeSystemUpdateRequest,
  ConceptView,
  ReferenceSetMemberView,
  UpdateBranchRequest,
  UserGroupsPojo,
} from './types';

export interface PUT {
  '/admin/permissions/global/role/{role}': {
    responseType: void,
    parameterType: {
      role: string,
    },
    headerType: undefined,
    bodyType: {
      userGroupsPojo: UserGroupsPojo,
    },
  }
  '/admin/permissions/{branch}/role/{role}': {
    responseType: void,
    parameterType: {
      branch: string,
      role: string,
    },
    headerType: undefined,
    bodyType: {
      userGroupsPojo: UserGroupsPojo,
    },
  }

  '/branches/{branch}': {
    responseType: BranchPojo,
    parameterType: {
      branch: string,
    },
    headerType: undefined,
    bodyType: {
      request: UpdateBranchRequest,
    },
  }

  '/{branch}/classifications/{classificationId}': {
    responseType: void,
    parameterType: {
      branch: string,
      classificationId: string,
    },
    headerType: undefined,
    bodyType: {
      updateRequest: ClassificationUpdateRequest,
    },
  }

  '/codesystems/{shortName}': {
    responseType: CodeSystem,
    parameterType: {
      shortName: string,
    },
    headerType: undefined,
    bodyType: {
      updateRequest: CodeSystemUpdateRequest,
    },
  }

  '/browser/{branch}/concepts/{conceptId}': {
    responseType: ConceptView,
    parameterType: {
      branch: string,
      conceptId: string,
    },
    headerType: {
      'Accept-Language': string,
    },
    bodyType: {
      concept: ConceptView,
    },
  }

  '/{branch}/members/{uuid}': {
    responseType: ReferenceSetMemberView,
    parameterType: {
      branch: string,
      uuid: string,
    },
    headerType: undefined,
    bodyType: {
      member: ReferenceSetMemberView,
    },
  }
}
