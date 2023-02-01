import {
  BodyBuilder,
  BranchPojo,
  CodeSystemCreate,
  CodeSystemMigrationRequest,
  CodeSystemUpgradeRequest,
  Collection,
  Concept,
  ConceptBulkLoadRequest,
  ConceptSearchRequest,
  ConceptsInForm,
  ConceptView,
  CreateBranchRequest,
  CreateCodeSystemVersionRequest,
  CreateReviewRequest,
  ExportRequestView,
  ImportCreationRequest,
  ImportPatchCreationRequest,
  IntegrityIssueReport,
  InvalidContent,
  ItemsPage,
  LocalFileImportCreationRequest,
  MergeRequest,
  ReferenceSetMemberView,
  ResponseEntity,
} from './types';

export interface POST {
  '/admin/actions/rebuild-description-index-for-language': {
    responseType: void,
    parameterType: {
      languageCode: string,
    },
    headerType: undefined,
    bodyType: undefined,
  }
  '/admin/{branch}/actions/clone-child-branch': {
    responseType: void,
    parameterType: {
      branch: string,
      newBranch: string,
    },
    headerType: undefined,
    bodyType: undefined,
  }
  '/admin/{branch}/actions/delete-extra-inferred-relationships': {
    responseType: void,
    parameterType: {
      branch: string,
      effectiveTime: number,
    },
    headerType: undefined,
    bodyType: undefined,
  }
  '/admin/{branch}/actions/end-donated-content': {
    responseType: Record<string, unknown>,
    parameterType: {
      branch: string,
    },
    headerType: undefined,
    bodyType: undefined,
  }
  '/admin/{branch}/actions/find-duplicate-hide-parent-version': {
    responseType: Record<string, unknown>,
    parameterType: {
      branch: string,
    },
    headerType: undefined,
    bodyType: undefined,
  }
  '/admin/{branch}/actions/find-extra-concepts-in-semantic-index': {
    responseType: ConceptsInForm,
    parameterType: {
      branch: string,
    },
    headerType: undefined,
    bodyType: undefined,
  }
  '/admin/{branch}/actions/inactive-relationships-restore-group-number': {
    responseType: void,
    parameterType: {
      branch: string,
      currentEffectiveTime: string,
      previousReleaseBranch: string,
    },
    headerType: undefined,
    bodyType: undefined,
  }
  '/admin/{branch}/actions/rebuild-semantic-index': {
    responseType: void,
    parameterType: {
      branch: string,
    },
    headerType: undefined,
    bodyType: undefined,
  }
  '/admin/{branch}/actions/remove-redundant-versions-replaced': {
    responseType: Record<string, unknown>,
    parameterType: {
      branch: string,
    },
    headerType: undefined,
    bodyType: undefined,
  }
  '/admin/{branch}/actions/restore-released-status': {
    responseType: Concept,
    parameterType: {
      branch: string,
      conceptId: string,
    },
    headerType: undefined,
    bodyType: undefined,
  }
  '/admin/{branch}/actions/rollback-commit': {
    responseType: void,
    parameterType: {
      branch: string,
      commitHeadTime: number,
    },
    headerType: undefined,
    bodyType: undefined,
  }
  '/admin/{branch}/actions/rollback-partial-commit': {
    responseType: void,
    parameterType: {
      branch: string,
    },
    headerType: undefined,
    bodyType: undefined,
  }
  '/admin/{branch}/actions/update-definition-statuses': {
    responseType: void,
    parameterType: {
      branch: string,
    },
    headerType: undefined,
    bodyType: undefined,
  }
  '/admin/{branch}/actions/update-mrcm-domain-templates-and-attribute-rules': {
    responseType: void,
    parameterType: {
      branch: string,
    },
    headerType: undefined,
    bodyType: undefined,
  }
  '/admin/{releaseFixBranch}/actions/promote-release-fix': {
    responseType: void,
    parameterType: {
      releaseFixBranch: string,
    },
    headerType: undefined,
    bodyType: undefined,
  }

  '/branches': {
    responseType: BranchPojo,
    parameterType: undefined,
    headerType: undefined,
    bodyType: {
      request: CreateBranchRequest,
    },
  }
  '/branches/{branch}/actions/lock': {
    responseType: void,
    parameterType: {
      branch: string,
      lockMessage: string,
    },
    headerType: undefined,
    bodyType: undefined,
  }
  '/branches/{branch}/actions/unlock': {
    responseType: void,
    parameterType: {
      branch: string,
    },
    headerType: undefined,
    bodyType: undefined,
  }
  '/merge-reviews': {
    responseType: void,
    parameterType: undefined,
    headerType: undefined,
    bodyType: {
      request: CreateReviewRequest,
    },
  }
  '/merge-reviews/{id}/apply': {
    responseType: void,
    parameterType: {
      id: string,
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
    bodyType: {
      manuallyMergedConcept: Concept,
    },
  }
  '/merges': {
    responseType: void,
    parameterType: undefined,
    headerType: undefined,
    bodyType: {
      mergeRequest: MergeRequest,
    },
  }
  '/reviews': {
    responseType: void,
    parameterType: undefined,
    headerType: undefined,
    bodyType: {
      request: CreateReviewRequest,
    },
  }
  '/{branch}/integrity-check': {
    responseType: IntegrityIssueReport,
    parameterType: {
      branch?: string,
    },
    headerType: undefined,
    bodyType: undefined,
  }
  '/{branch}/integrity-check-full': {
    responseType: IntegrityIssueReport,
    parameterType: {
      branch?: string,
    },
    headerType: undefined,
    bodyType: undefined,
  }
  '/{branch}/upgrade-integrity-check': {
    responseType: IntegrityIssueReport,
    parameterType: {
      branch?: string,
      extensionMainBranchPath?: string,
    },
    headerType: undefined,
    bodyType: undefined,
  }

  '/{branch}/classifications': {
    responseType: ResponseEntity,
    parameterType: {
      branch: string,
      reasonerId?: string,
    },
    headerType: undefined,
    bodyType: undefined,
  }

  '/codesystems': {
    responseType: void,
    parameterType: undefined,
    headerType: undefined,
    bodyType: {
      codeSystem: CodeSystemCreate,
    },
  }
  '/codesystems/clear-cache': {
    responseType: void,
    parameterType: undefined,
    headerType: undefined,
    bodyType: undefined,
  }
  '/codesystems/{shortName}/additional-en-language-refset-delta': {
    responseType: void,
    parameterType: {
      shortName: string,
      branchPath: string,
      languageRefsetToCopyFrom?: string,
      completeCopy?: boolean,
    },
    headerType: undefined,
    bodyType: undefined,
  }
  '/codesystems/{shortName}/daily-build/rollback': {
    responseType: void,
    parameterType: {
      shortName: string,
    },
    headerType: undefined,
    bodyType: undefined,
  }
  '/codesystems/{shortName}/migrate': {
    responseType: void,
    parameterType: {
      shortName: string,
    },
    headerType: undefined,
    bodyType: {
      request: CodeSystemMigrationRequest,
    },
  }
  '/codesystems/{shortName}/upgrade': {
    responseType: void,
    parameterType: {
      shortName: string,
    },
    headerType: undefined,
    bodyType: {
      request: CodeSystemUpgradeRequest,
    },
  }
  '/codesystems/{shortName}/versions': {
    responseType: void,
    parameterType: {
      shortName: string,
    },
    headerType: undefined,
    bodyType: {
      input: CreateCodeSystemVersionRequest,
    },
  }

  '/browser/{branch}/concepts': {
    responseType: ConceptView,
    parameterType: {
      branch: string,
    },
    headerType: {
      'Accept-Language': string,
    },
    bodyType: {
      concept: ConceptView,
    },
  }
  '/browser/{branch}/concepts/bulk': {
    responseType: BodyBuilder,
    parameterType: {
      branch: string,
    },
    headerType: undefined,
    bodyType: {
      concepts: Array<ConceptView>,
    },
  }
  '/browser/{branch}/concepts/bulk-load': {
    responseType: Collection<Concept>,
    parameterType: {
      branch: string,
    },
    headerType: {
      'Accept-Language': string,
    },
    bodyType: {
      request: ConceptBulkLoadRequest,
    },
  }
  '/{branch}/concepts/search': {
    responseType: ItemsPage<Record<string, unknown>>,
    parameterType: {
      branch: string,
    },
    headerType: {
      'Accept-Language': string,
    },
    bodyType: {
      searchRequest: ConceptSearchRequest,
    },
  }

  '/exports': {
    responseType: void,
    parameterType: undefined,
    headerType: undefined,
    bodyType: {
      exportConfiguration: ExportRequestView,
    },
  }

  '/imports': {
    responseType: void,
    parameterType: undefined,
    headerType: undefined,
    bodyType: {
      importRequest: ImportCreationRequest,
    },
  }
  '/imports/release-patch': {
    responseType: void,
    parameterType: undefined,
    headerType: undefined,
    bodyType: {
      importPatchRequest: ImportPatchCreationRequest,
    },
  }
  '/imports/start-local-file-import': {
    responseType: void,
    parameterType: undefined,
    headerType: undefined,
    bodyType: {
      importRequest: LocalFileImportCreationRequest,
    },
  }
  '/imports/{importId}/archive': {
    responseType: void,
    parameterType: {
      importId: string,
    },
    headerType: undefined,
    bodyType: undefined,
  }

  '/{branch}/members': {
    responseType: ReferenceSetMemberView,
    parameterType: {
      branch: string,
    },
    headerType: undefined,
    bodyType: {
      member: ReferenceSetMemberView,
    },
  }

  '/browser/{branch}/validate/concept': {
    responseType: Array<InvalidContent>,
    parameterType: {
      branch?: string,
    },
    headerType: undefined,
    bodyType: {
      concept?: Concept,
    },
  }
  '/browser/{branch}/validate/concepts': {
    responseType: Array<InvalidContent>,
    parameterType: {
      branch?: string,
    },
    headerType: undefined,
    bodyType: {
      concepts?: Array<Concept>,
    },
  }
  '/validation-maintenance/reload-validation-rules': {
    responseType: void,
    parameterType: undefined,
    headerType: undefined,
    bodyType: undefined,
  }
}
