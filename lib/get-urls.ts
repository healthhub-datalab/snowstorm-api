import {
  AsyncConceptChangeBatch,
  AuthoringStatsSummary,
  Branch,
  BranchMergeJob,
  BranchPojo,
  BranchReview,
  BranchReviewConceptChanges,
  BrowserDescriptionSearchResult,
  BuildVersion,
  Classification,
  CodeSystem,
  CodeSystemVersion,
  Collection,
  Concept,
  ConceptDescriptionsResult,
  ConceptMicro,
  ConceptMini,
  ConceptReferencesResult,
  ConceptView,
  Description,
  EquivalentConceptsResponse,
  ExportConfiguration,
  Expression,
  ExpressionConstraint,
  ExpressionStringPojo,
  ImportJob,
  InactivationTypeAndConceptIdList,
  InboundRelationshipsResult,
  ItemsPage,
  MergeReview,
  MergeReviewConceptVersions,
  Page,
  PermissionRecord,
  ReferenceSetMember,
  RefSetMemberPageWithBucketAggregations,
  Relationship,
  RelationshipChange,
} from './types';

export interface GET {
  '/admin/permissions': {
    responseType: Array<PermissionRecord>,
    parameterType: undefined,
    headerType: undefined,
  }
  '/admin/permissions/global': {
    responseType: Array<PermissionRecord>,
    parameterType: undefined,
    headerType: undefined,
  }
  '/admin/permissions/{branch}': {
    responseType: Array<PermissionRecord>,
    parameterType: {
      branch: string,
    },
    headerType: undefined,
  }

  '/{branch}/authoring-stats': {
    responseType: AuthoringStatsSummary,
    parameterType: {
      branch: string,
    },
    headerType: undefined,
  }
  '/{branch}/authoring-stats/changed-fully-specified-names': {
    responseType: Array<ConceptMicro>,
    parameterType: {
      branch: string,
    },
    headerType: {
      'Accept-Language': string,
    },
  }
  '/{branch}/authoring-stats/inactivated-concepts': {
    responseType: Array<ConceptMicro>,
    parameterType: {
      branch: string,
    },
    headerType: {
      'Accept-Language': string,
    },
  }
  '/{branch}/authoring-stats/inactivated-synonyms': {
    responseType: Array<ConceptMicro>,
    parameterType: {
      branch: string,
    },
    headerType: undefined,
  }
  '/{branch}/authoring-stats/new-concepts': {
    responseType: Array<ConceptMicro>,
    parameterType: {
      branch: string,
    },
    headerType: {
      'Accept-Language': string,
    },
  }
  '/{branch}/authoring-stats/new-synonyms-on-existing-concepts': {
    responseType: Array<ConceptMicro>,
    parameterType: {
      branch: string,
    },
    headerType: undefined,
  }
  '/{branch}/authoring-stats/reactivated-concepts': {
    responseType: Array<ConceptMicro>,
    parameterType: {
      branch: string,
    },
    headerType: {
      'Accept-Language': string,
    },
  }
  '/{branch}/authoring-stats/reactivated-synonyms': {
    responseType: Array<ConceptMicro>,
    parameterType: {
      branch: string,
    },
    headerType: undefined,
  }

  '/branches': {
    responseType: Array<Branch>,
    parameterType: undefined,
    headerType: undefined,
  }
  '/branches/{branch}': {
    responseType: BranchPojo,
    parameterType: {
      branch: string,
      includeInheritedMetadata?: boolean,
    },
    headerType: undefined,
  }
  '/branches/{branch}/children': {
    responseType: Array<Branch>,
    parameterType: {
      branch: string,
      immediateChildren?: boolean,
      page?: number,
      size?: number,
    },
    headerType: undefined,
  }
  '/merge-reviews/{id}': {
    responseType: MergeReview,
    parameterType: {
      id: string,
    },
    headerType: undefined,
  }
  '/merge-reviews/{id}/details': {
    responseType: Collection<MergeReviewConceptVersions>,
    parameterType: {
      id: string,
    },
    headerType: {
      'Accept-Language': string,
    },
  }
  '/merges/{mergeId}': {
    responseType: BranchMergeJob,
    parameterType: {
      mergeId: string,
    },
    headerType: undefined,
  }
  '/reviews/{id}': {
    responseType: BranchReview,
    parameterType: {
      id: string,
    },
    headerType: undefined,
  }
  '/reviews/{id}/concept-changes': {
    responseType: BranchReviewConceptChanges,
    parameterType: {
      id: string,
    },
    headerType: undefined,
  }

  '/{branch}/classifications': {
    responseType: ItemsPage<Classification>,
    parameterType: {
      branch: string,
    },
    headerType: undefined,
  }
  '/{branch}/classifications/{classificationId}': {
    responseType: Classification,
    parameterType: {
      branch: string,
      classificationId: string,
    },
    headerType: undefined,
  }
  '/{branch}/classifications/{classificationId}/concept-preview/{conceptId}': {
    responseType: ConceptView,
    parameterType: {
      branch: string,
      classificationId: string,
      conceptId: string,
    },
    headerType: {
      'Accept-Language': string,
    },
  }
  '/{branch}/classifications/{classificationId}/equivalent-concepts': {
    responseType: ItemsPage<EquivalentConceptsResponse>,
    parameterType: {
      branch: string,
      classificationId: string,
      offset?: number,
      limit?: number,
    },
    headerType: {
      'Accept-Language': string,
    },
  }
  '/{branch}/classifications/{classificationId}/relationship-changes': {
    responseType: ItemsPage<RelationshipChange>,
    parameterType: {
      branch: string,
      classificationId: string,
      offset?: number,
      limit?: number,
    },
    headerType: {
      'Accept-Language': string,
    },
  }

  '/codesystems': {
    responseType: ItemsPage<CodeSystem>,
    parameterType: {
      forBranch?: string,
    },
    headerType: undefined,
  }
  '/codesystems/{shortName}': {
    responseType: CodeSystem,
    parameterType: {
      shortName: string,
    },
    headerType: undefined,
  }
  '/codesystems/{shortName}/versions': {
    responseType: ItemsPage<CodeSystemVersion>,
    parameterType: {
      shortName: string,
      showFutureVersions?: boolean,
    },
    headerType: undefined,
  }

  '/browser/{branch}/concepts': {
    responseType: ItemsPage<Concept>,
    parameterType: {
      branch: string,
      conceptIds?: Array<number>,
      number?: number,
      size?: number,
      searchAfter?: string,
    },
    headerType: {
      'Accept-Language': string,
    },
  }
  '/browser/{branch}/concepts/bulk/{bulkChangeId}': {
    responseType: AsyncConceptChangeBatch,
    parameterType: {
      branch: string,
      bulkChangeId: string,
    },
    headerType: undefined,
  }
  '/browser/{branch}/concepts/{conceptId}': {
    responseType: ConceptView,
    parameterType: {
      branch: string,
      conceptId: string,
      descendantCountForm?: string,
    },
    headerType: {
      'Accept-Language': string,
    },
  }
  '/browser/{branch}/concepts/{conceptId}/ancestors': {
    responseType: Collection<Record<string, unknown>>,
    parameterType: {
      branch: string,
      conceptId: string,
      form?: string,
    },
    headerType: {
      'Accept-Language': string,
    },
  }
  '/browser/{branch}/concepts/{conceptId}/children': {
    responseType: Collection<ConceptMini>,
    parameterType: {
      branch: string,
      conceptId: string,
      form?: string,
      includeDescendantCount?: boolean,
    },
    headerType: {
      'Accept-Language': string,
    },
  }
  '/browser/{branch}/concepts/{conceptId}/parents': {
    responseType: Collection<ConceptMini>,
    parameterType: {
      branch: string,
      conceptId: string,
      form?: string,
      includeDescendantCount?: boolean,
    },
    headerType: {
      'Accept-Language': string,
    },
  }
  '/{branch}/concepts': {
    responseType: ItemsPage<Record<string, unknown>>,
    parameterType: {
      branch: string,
      activeFilter?: boolean,
      definitionStatusFilter?: string,
      term?: string,
      termActive?: boolean,
      language?: Array<string>,
      preferredIn?: Array<number>,
      acceptableIn?: Array<number>,
      preferredOrAcceptableIn?: Array<number>,
      ecl?: string,
      statedEcl?: string,
      conceptIds?: Array<string>,
      returnIdOnly?: boolean,
      offset?: number,
      limit?: number,
      searchAfter?: string,
    },
    headerType: {
      'Accept-Language'?: string,
    },
  }
  '/{branch}/concepts/{conceptId}': {
    responseType: ConceptMini,
    parameterType: {
      branch: string,
      conceptId: string,
    },
    headerType: {
      'Accept-Language': string,
    },
  }
  '/{branch}/concepts/{conceptId}/authoring-form': {
    responseType: Expression,
    parameterType: {
      branch: string,
      conceptId: string,
    },
    headerType: {
      'Accept-Language': string,
    },
  }
  '/{branch}/concepts/{conceptId}/descendants': {
    responseType: ItemsPage<ConceptMini>,
    parameterType: {
      branch: string,
      conceptId: string,
      stated?: boolean,
      offset?: number,
      limit?: number,
    },
    headerType: {
      'Accept-Language': string,
    },
  }
  '/{branch}/concepts/{conceptId}/descriptions': {
    responseType: ConceptDescriptionsResult,
    parameterType: {
      branch: string,
      conceptId: string,
    },
    headerType: {
      'Accept-Language': string,
    },
  }
  '/{branch}/concepts/{conceptId}/inbound-relationships': {
    responseType: InboundRelationshipsResult,
    parameterType: {
      branch: string,
      conceptId: string,
    },
    headerType: undefined,
  }
  '/{branch}/concepts/{conceptId}/normal-form': {
    responseType: ExpressionStringPojo,
    parameterType: {
      branch: string,
      conceptId: string,
      statedView?: boolean,
      includeTerms?: boolean,
    },
    headerType: {
      'Accept-Language': string,
    },
  }
  '/{branch}/concepts/{conceptId}/references': {
    responseType: ConceptReferencesResult,
    parameterType: {
      branch: string,
      conceptId: number,
      stated?: boolean,
      offset?: number,
      limit?: number,
    },
    headerType: {
      'Accept-Language': string,
    },
  }

  '/browser/{branch}/descriptions': {
    responseType: Page<BrowserDescriptionSearchResult>,
    parameterType: {
      branch: string,
      term?: string,
      active?: boolean,
      module?: Array<string>,
      language?: Array<string>,
      type?: Array<number>,
      semanticTag?: string,
      semanticTags?: Array<string>,
      preferredIn?: Array<number>,
      acceptableIn?: Array<number>,
      preferredOrAcceptableIn?: Array<number>,
      conceptActive?: boolean,
      conceptRefset?: string,
      groupByConcept?: boolean,
      searchMode?: string,
      offset?: number,
      limit?: number,
    },
    headerType: {
      'Accept-Language': string,
    },
  }
  '/{branch}/descriptions': {
    responseType: ItemsPage<Description>,
    parameterType: {
      branch: string,
      conceptId?: string,
      conceptIds?: Array<string>,
      offset?: number,
      limit?: number,
    },
    headerType: undefined,
  }
  '/{branch}/descriptions/semantictags': {
    responseType: Record<string, unknown>,
    parameterType: {
      branch: string,
    },
    headerType: undefined,
  }
  '/{branch}/descriptions/{descriptionId}': {
    responseType: Description,
    parameterType: {
      branch: string,
      descriptionId: string,
    },
    headerType: undefined,
  }

  '/exports/{exportId}': {
    responseType: ExportConfiguration,
    parameterType: {
      exportId: string,
    },
    headerType: undefined,
  }
  '/exports/{exportId}/archive': {
    responseType: void,
    parameterType: {
      exportId: string,
    },
    headerType: undefined,
  }

  '/imports/{importId}': {
    responseType: ImportJob,
    parameterType: {
      importId: string,
    },
    headerType: undefined,
  }

  '/mrcm/{branch}/attribute-values/{attributeId}': {
    responseType: ItemsPage<ConceptMini>,
    parameterType: {
      branch: string,
      contentType?: string,
      attributeId: string,
      termPrefix: string,
    },
    headerType: {
      'Accept-Language': string,
    },
  }
  '/mrcm/{branch}/concept-model-attribute-hierarchy': {
    responseType: ConceptMini,
    parameterType: {
      branch: string,
    },
    headerType: {
      'Accept-Language': string,
    },
  }
  '/mrcm/{branch}/domain-attributes': {
    responseType: ItemsPage<ConceptMini & {
      // https://github.com/IHTSDO/snowstorm/blob/59171afc/src/main/java/org/snomed/snowstorm/mrcm/MRCMService.java#L147
      attributeDomain: {
        id: string;
        effectiveTime: string; // YYYYMMDD
        active: boolean;
        referencedComponentId: string;
        domainId: string;
        grouped: boolean;
        attributeCardinality: {
          value: string;
          min?: number;
          max?: number;
        };
        attributeInGroupCardinality: {
          value: string;
          min?: number;
          max?: number;
        };
        ruleStrength: string;
        contentType: string;
      }[];
      // https://github.com/IHTSDO/snowstorm/blob/59171afc/src/main/java/org/snomed/snowstorm/mrcm/MRCMService.java#L156
      attributeRange: unknown[];
    }>,
    parameterType: {
      branch: string,
      parentIds?: Array<number>,
      proximalPrimitiveModeling?: boolean,
      contentType?: string,
    },
    headerType: {
      'Accept-Language': string,
    },
  }

  '/multisearch/concepts': {
    responseType: ItemsPage<ConceptMini>,
    parameterType: {
      conceptIds?: Array<string>,
      active?: boolean,
      offset?: number,
      limit?: number,
    },
    headerType: {
      'Accept-Language': string,
    },
  }
  '/multisearch/descriptions': {
    responseType: ItemsPage<BrowserDescriptionSearchResult>,
    parameterType: {
      term: string,
      active?: boolean,
      module?: string,
      language?: Array<string>,
      type?: Array<number>,
      conceptActive?: boolean,
      contentScope?: string,
      offset?: number,
      limit?: number,
    },
    headerType: {
      'Accept-Language': string,
    },
  }

  '/browser/{branch}/members': {
    responseType: RefSetMemberPageWithBucketAggregations<ReferenceSetMember>,
    parameterType: {
      branch: string,
      referenceSet?: string,
      referencedComponentId?: string,
      active?: boolean,
      offset?: number,
      limit?: number,
    },
    headerType: {
      'Accept-Language': string,
    },
  }
  '/{branch}/members': {
    responseType: ItemsPage<ReferenceSetMember>,
    parameterType: {
      branch: string,
      referenceSet?: string,
      referencedComponentId?: string,
      active?: boolean,
      targetComponent?: string,
      mapTarget?: string,
      owlExpression: {
        conceptId?: string,
        gci?: boolean,
      }
      offset?: number,
      limit?: number,
    },
    headerType: {
      'Accept-Language': string,
    },
  }
  '/{branch}/members/{uuid}': {
    responseType: ReferenceSetMember,
    parameterType: {
      branch: string,
      uuid: string,
    },
    headerType: {
      'Accept-Language': string,
    },
  }

  '/{branch}/relationships': {
    responseType: ItemsPage<Relationship>,
    parameterType: {
      branch: string,
      active?: boolean,
      module?: string,
      effectiveTime?: string,
      source?: string,
      type?: string,
      destination?: string,
      characteristicType?: string,
      group?: number,
      offset?: number,
      limit?: number,
    },
    headerType: {
      'Accept-Language': string,
    },
  }
  '/{branch}/relationships/{relationshipId}': {
    responseType: Relationship,
    parameterType: {
      branch: string,
      relationshipId: string,
    },
    headerType: {
      'Accept-Language': string,
    },
  }

  '/util/parse-ecl': {
    responseType: ExpressionConstraint,
    parameterType: {
      ecl: string,
    },
    headerType: undefined,
  }

  '/{branch}/report/inactive-concepts-without-association': {
    responseType: Array<InactivationTypeAndConceptIdList>,
    parameterType: {
      branch: string,
      conceptEffectiveTime?: string,
    },
    headerType: undefined,
  }

  '/version': {
    responseType: BuildVersion,
    parameterType: undefined,
    headerType: undefined,
  }
}
