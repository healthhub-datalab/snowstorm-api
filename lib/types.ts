/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable max-len */
export interface ConceptsInForm {
  inferredConceptIds: Array<number>;
  statedConceptIds: Array<number>;
}

export interface Concept {
  active: boolean;
  activeDescriptions: Array<Description>;
  allOwlAxiomMembers: Array<ReferenceSetMember>;
  associationTargets: Record<string, unknown>;
  changed: boolean;
  classAxioms: Array<Axiom>;
  conceptId: string;
  definitionStatus: string;
  definitionStatusId: string;
  deleted: boolean;
  descendantCount: number;
  descriptions: Array<Description>;
  effectiveTime: string;
  effectiveTimeI: number;
  end: string;
  fsn: TermLangPojo;
  gciAxioms: Array<Axiom>;
  inactivationIndicator: string;
  internalId: string;
  moduleId: string;
  path: string;
  primitive: boolean;
  pt: TermLangPojo;
  relationships: Array<Relationship>;
  releaseHash: string;
  released: boolean;
  releasedEffectiveTime: number;
  start: string;
}

export interface Description {
  acceptabilityMap: Record<string, unknown>;
  acceptabilityMapFromLangRefsetMembers: Record<string, unknown>;
  active: boolean;
  associationTargets: Record<string, unknown>;
  caseSignificance: string;
  caseSignificanceId: string;
  changed: boolean;
  conceptId: string;
  deleted: boolean;
  descriptionId: string;
  effectiveTime: string;
  effectiveTimeI: number;
  end: string;
  inactivationIndicator: string;
  internalId: string;
  lang: string;
  languageCode: string;
  moduleId: string;
  path: string;
  releaseHash: string;
  released: boolean;
  releasedEffectiveTime: number;
  start: string;
  tag: string;
  term: string;
  termFolded: string;
  termLen: number;
  type: string;
  typeId: string;
}

export interface ReferenceSetMember {
  active: boolean;
  additionalFields: Record<string, unknown>;
  changed: boolean;
  conceptId: string;
  deleted: boolean;
  effectiveTime: string;
  effectiveTimeI: number;
  end: string;
  internalId: string;
  memberId: string;
  moduleId: string;
  path: string;
  referencedComponent: Record<string, unknown>;
  referencedComponentId: string;
  refsetId: string;
  releaseHash: string;
  released: boolean;
  releasedEffectiveTime: number;
  start: string;
}

export interface Axiom {
  active: boolean;
  axiomId: string;
  definitionStatus: string;
  definitionStatusId: string;
  effectiveTime: number;
  id: string;
  moduleId: string;
  relationships: Array<Relationship>;
  released: boolean;
}

export interface TermLangPojo {
  lang: string;
  term: string;
}

export interface Relationship {
  active: boolean;
  changed: boolean;
  characteristicType: string;
  characteristicTypeId: string;
  deleted: boolean;
  destinationId: string;
  effectiveTime: string;
  effectiveTimeI: number;
  end: string;
  groupId: number;
  grouped: boolean;
  id: string;
  internalId: string;
  modifier: string;
  modifierId: string;
  moduleId: string;
  path: string;
  relationshipGroup: number;
  relationshipId: string;
  releaseHash: string;
  released: boolean;
  releasedEffectiveTime: number;
  source: ConceptMini;
  sourceId: string;
  start: string;
  target: ConceptMini;
  type: ConceptMini;
  typeId: string;
}

export interface ConceptMini {
  active: boolean;
  conceptId: string;
  definitionStatus: string;
  descendantCount: number;
  effectiveTime: string;
  fsn: TermLangPojo;
  id: string;
  isLeafInferred: boolean;
  isLeafStated: boolean;
  moduleId: string;
  pt: TermLangPojo;
}

// https://github.com/IHTSDO/snowstorm/blob/master/src/main/java/org/snomed/snowstorm/core/data/services/classification/pojo/EquivalentConceptsResponse.java
export interface EquivalentConceptsResponse {
  equivalentConcepts: ItemsPage<ConceptMini>;
}

// https://github.com/IHTSDO/snowstorm/blob/master/src/main/java/org/snomed/snowstorm/core/data/domain/classification/RelationshipChange.java
export interface RelationshipChange {
	internalId: string;
	classificationId: string;
	relationshipId: string;
	active: boolean;
	sourceId: string;
	destinationId: string;
	value: string;
	group: number;
	typeId: string;
	modifierId: string;
	inferredNotStated: boolean;
	source: ConceptMini;
	destination: ConceptMini;
	type: ConceptMini;
}

export interface PermissionRecord {
  global: boolean;
  key: string;
  path: string;
  role: string;
  userGroups: Array<string>;
}

export interface UserGroupsPojo {
  userGroups: Array<string>;
}

export interface AuthoringStatsSummary {
  changedFsnCount: number;
  executionTime: string;
  inactivatedConceptsCount: number;
  inactivatedSynonymsCount: number;
  newConceptsCount: number;
  newSynonymsForExistingConceptsCount: number;
  reactivatedConceptsCount: number;
  reactivatedSynonymsCount: number;
  title: string;
}

export interface ConceptMicro {
  id: string;
  primitive: boolean;
  term: string;
}

export interface Branch {
  base: string;
  baseTimestamp: number;
  containsContent: boolean;
  creation: string;
  creationTimestamp: number;
  deleted: boolean;
  end: string;
  head: string;
  headTimestamp: number;
  lastPromotion: string;
  locked: boolean;
  metadata: Record<string, unknown>;
  path: string;
  state: 'UP_TO_DATE' | 'FORWARD' | 'BEHIND' | 'DIVERGED';
  versionsReplacedCounts: Record<string, unknown>;
}

export interface BranchPojo {
  base: string;
  baseTimestamp: number;
  containsContent: boolean;
  creation: string;
  creationTimestamp: number;
  head: string;
  headTimestamp: number;
  locked: boolean;
  metadata: Record<string, unknown>;
  path: string;
  state: 'UP_TO_DATE' | 'FORWARD' | 'BEHIND' | 'DIVERGED';
  userRoles: Array<string>;
  versionsReplacedCounts: Record<string, unknown>;
}

export interface CreateBranchRequest {
  metadata: Record<string, unknown>;
  name: string;
  parent: string;
}

export interface UpdateBranchRequest {
  metadata: Record<string, unknown>;
}

export interface CreateReviewRequest {
  source: string;
  target: string;
}

export interface MergeReview {
  created: string;
  id: string;
  message: string;
  sourcePath: string;
  sourceToTargetReviewId: string;
  status: 'PENDING' | 'CURRENT' | 'STALE' | 'FAILED';
  targetPath: string;
  targetToSourceReviewId: string;
}

// https://github.com/IHTSDO/snowstorm/blob/master/src/main/java/org/snomed/snowstorm/core/data/domain/review/MergeReviewConceptVersions.java
export interface MergeReviewConceptVersions {
	sourceConcept: Concept;
	targetConcept: Concept;
	autoMergedConcept: Concept;
	manuallyMergedConcept: Concept;
}

export type Collection<T> = Array<T>;

export interface MergeRequest {
  commitComment: string;
  reviewId: string;
  source: string;
  target: string;
}

export interface BranchMergeJob {
  apiError: ApiError;
  endDate: string;
  id: string;
  message: string;
  scheduledDate: string;
  source: string;
  startDate: string;
  status: 'SCHEDULED' | 'IN_PROGRESS' | 'COMPLETED' | 'FAILED' | 'CONFLICTS';
  target: string;
}

export interface ApiError {
  additionalInfo: Record<string, unknown>;
  developerMessage: string;
  message: string;
}

export interface BranchReview {
  changedConcepts: Array<number>;
  id: string;
  lastUpdated: string;
  source: BranchState;
  sourceParent: boolean;
  status: 'PENDING' | 'CURRENT' | 'STALE' | 'FAILED';
  target: BranchState;
}

export interface BranchState {
  baseTimestamp: number;
  headTimestamp: number;
  path: string;
}

export interface BranchReviewConceptChanges {
  changedConcepts: Array<number>;
}

export interface IntegrityIssueReport {
  axiomsWithMissingOrInactiveReferencedConcept: Record<string, unknown>;
  empty: boolean;
  relationshipsWithMissingOrInactiveDestination: Record<string, unknown>;
  relationshipsWithMissingOrInactiveSource: Record<string, unknown>;
  relationshipsWithMissingOrInactiveType: Record<string, unknown>;
}

export interface ItemsPage<T> {
  items: Collection<T>;
  limit: number;
  offset: number;
  searchAfter: string;
  searchAfterArray: Array<any>;
  total: number;
}

export interface ResponseEntity {
  body: Record<string, unknown>;
  statusCode: '100 CONTINUE' | '101 SWITCHING_PROTOCOLS' | '102 PROCESSING' | '103 CHECKPOINT' | '200 OK' | '201 CREATED' | '202 ACCEPTED' | '203 NON_AUTHORITATIVE_INFORMATION' | '204 NO_CONTENT' | '205 RESET_CONTENT' | '206 PARTIAL_CONTENT' | '207 MULTI_STATUS' | '208 ALREADY_REPORTED' | '226 IM_USED' | '300 MULTIPLE_CHOICES' | '301 MOVED_PERMANENTLY' | '302 FOUND' | '302 MOVED_TEMPORARILY' | '303 SEE_OTHER' | '304 NOT_MODIFIED' | '305 USE_PROXY' | '307 TEMPORARY_REDIRECT' | '308 PERMANENT_REDIRECT' | '400 BAD_REQUEST' | '401 UNAUTHORIZED' | '402 PAYMENT_REQUIRED' | '403 FORBIDDEN' | '404 NOT_FOUND' | '405 METHOD_NOT_ALLOWED' | '406 NOT_ACCEPTABLE' | '407 PROXY_AUTHENTICATION_REQUIRED' | '408 REQUEST_TIMEOUT' | '409 CONFLICT' | '410 GONE' | '411 LENGTH_REQUIRED' | '412 PRECONDITION_FAILED' | '413 PAYLOAD_TOO_LARGE' | '413 REQUEST_ENTITY_TOO_LARGE' | '414 URI_TOO_LONG' | '414 REQUEST_URI_TOO_LONG' | '415 UNSUPPORTED_MEDIA_TYPE' | '416 REQUESTED_RANGE_NOT_SATISFIABLE' | '417 EXPECTATION_FAILED' | '418 I_AM_A_TEAPOT' | '419 INSUFFICIENT_SPACE_ON_RESOURCE' | '420 METHOD_FAILURE' | '421 DESTINATION_LOCKED' | '422 UNPROCESSABLE_ENTITY' | '423 LOCKED' | '424 FAILED_DEPENDENCY' | '425 TOO_EARLY' | '426 UPGRADE_REQUIRED' | '428 PRECONDITION_REQUIRED' | '429 TOO_MANY_REQUESTS' | '431 REQUEST_HEADER_FIELDS_TOO_LARGE' | '451 UNAVAILABLE_FOR_LEGAL_REASONS' | '500 INTERNAL_SERVER_ERROR' | '501 NOT_IMPLEMENTED' | '502 BAD_GATEWAY' | '503 SERVICE_UNAVAILABLE' | '504 GATEWAY_TIMEOUT' | '505 HTTP_VERSION_NOT_SUPPORTED' | '506 VARIANT_ALSO_NEGOTIATES' | '507 INSUFFICIENT_STORAGE' | '508 LOOP_DETECTED' | '509 BANDWIDTH_LIMIT_EXCEEDED' | '510 NOT_EXTENDED' | '511 NETWORK_AUTHENTICATION_REQUIRED';
  statusCodeValue: number;
}

export interface Classification {
  completionDate: string;
  creationDate: string;
  equivalentConceptsFound: boolean;
  errorMessage: string;
  id: string;
  inferredRelationshipChangesFound: boolean;
  lastCommitDate: string;
  path: string;
  reasonerId: string;
  redundantStatedRelationshipsFound: boolean;
  saveDate: string;
  status: 'SCHEDULED' | 'RUNNING' | 'FAILED' | 'COMPLETED' | 'STALE' | 'SAVING_IN_PROGRESS' | 'SAVED' | 'SAVE_FAILED';
  userId: string;
}

export interface ClassificationUpdateRequest {
  status: 'SCHEDULED' | 'RUNNING' | 'FAILED' | 'COMPLETED' | 'STALE' | 'SAVING_IN_PROGRESS' | 'SAVED' | 'SAVE_FAILED';
}

export interface ConceptView {
  active: boolean;
  classAxioms: Array<Axiom>;
  conceptId: string;
  definitionStatusId: string;
  descriptions: Array<Description>;
  effectiveTime: string;
  fsn: TermLangPojo;
  gciAxioms: Array<Axiom>;
  moduleId: string;
  pt: TermLangPojo;
  relationships: Array<Relationship>;
}

export interface CodeSystemCreate {
  branchPath: string;
  countryCode: string;
  defaultLanguageCode: string;
  defaultLanguageReferenceSets: Array<string>;
  dependantVersionEffectiveTime: number;
  maintainerType: string;
  name: string;
  shortName: string;
}

export interface CodeSystem {
  branchPath: string;
  countryCode: string;
  dailyBuildAvailable: boolean;
  defaultLanguageCode: string;
  defaultLanguageReferenceSets: Array<string>;
  dependantVersionEffectiveTime: number;
  languages: Record<string, unknown>;
  latestVersion: CodeSystemVersion;
  maintainerType: string;
  modules: Collection<ConceptMini>;
  name: string;
  shortName: string;
}

export interface CodeSystemVersion {
  branchPath: string;
  description: string;
  effectiveDate: number;
  importDate: string;
  parentBranchPath: string;
  shortName: string;
  version: string;
}

export interface CodeSystemUpdateRequest {
  countryCode: string;
  dailyBuildAvailable: boolean; // false
  defaultLanguageCode: string;
  defaultLanguageReferenceSets: Array<string>;
  maintainerType: string;
  name: string;
}

export interface CodeSystemMigrationRequest {
  copyMetadata: boolean;
  dependantCodeSystem: string;
  newDependantVersion: number;
}

export interface CodeSystemUpgradeRequest {
  contentAutomations: boolean;
  newDependantVersion: number;
}

export interface CreateCodeSystemVersionRequest {
  description: string;
  effectiveDate: number;
}

export interface BodyBuilder {
  
}

export interface ConceptBulkLoadRequest {
  conceptIds: Array<string>;
  descriptionIds: Array<string>;
}

export interface AsyncConceptChangeBatch {
  conceptIds: Array<number>;
  endTime: string;
  id: string;
  message: string;
  secondsDuration: number;
  startTime: string;
  status: 'RUNNING' | 'COMPLETED' | 'FAILED';
}

export interface ConceptSearchRequest {
  acceptableIn: Array<number>;
  activeFilter: boolean;
  conceptIds: Array<string>;
  definitionStatusFilter: string;
  eclFilter: string;
  language: Array<string>;
  limit: number;
  offset: number;
  preferredIn: Array<number>;
  preferredOrAcceptableIn: Array<number>;
  returnIdOnly: boolean;
  searchAfter: string;
  statedEclFilter: string;
  termActive: boolean;
  termFilter: string;
}

export interface Expression {
  attributes: Array<ExpressionAttribute>;
  concepts: Array<ConceptMicro>;
  groups: Collection<ExpressionGroup>;
}

// https://github.com/IHTSDO/snowstorm/blob/b72edab687285c39df5b76c43527f46b43f173cb/src/main/java/org/snomed/snowstorm/core/data/domain/expression/ExpressionGroup.java#L9
export interface ExpressionGroup {
  attributes: Array<ExpressionAttribute>;
}

export interface ExpressionAttribute {
  type: ConceptMicro;
  value: ConceptMicro;
}

export interface ConceptDescriptionsResult {
  conceptDescriptions: Array<Description>;
}

export interface InboundRelationshipsResult {
  inboundRelationships: Array<Relationship>;
  total: number;
}

export interface ExpressionStringPojo {
  expression: string;
}

export interface ConceptReferencesResult {
  limit: number;
  offset: number;
  referencesByType: Collection<TypeReferences>;
  total: number;
}

// https://github.com/IHTSDO/snowstorm/blob/b72edab687285c39df5b76c43527f46b43f173cb/src/main/java/org/snomed/snowstorm/rest/pojo/TypeReferences.java
export interface TypeReferences {
  referenceType: ConceptMini;
  referencingConcepts: Collection<ConceptMini>;
}

export interface Page<T> {
  empty: boolean;
  first: boolean;
  items: Array<T>;
  last: boolean;
  number: number;
  numberOfElements: number;
  size: number;
  totalElements: number;
  totalPages: number;
}

export interface BrowserDescriptionSearchResult {
  active: boolean;
  concept: ConceptMini;
  languageCode: string;
  module: string;
  term: string;
}

export interface ExportRequestView {
  branchPath: string;
  conceptsAndRelationshipsOnly: boolean; // false
  filenameEffectiveDate: string;
  moduleIds: Array<string>;
  startEffectiveTime: string; // Format: yyyymmdd. Can be used to produce a delta after content is versioned by filtering a SNAPSHOT export by effectiveTime.
  transientEffectiveTime: string; // Format: yyyymmdd. Add a transient effectiveTime to rows of content which are not yet versioned.
  type: 'DELTA' | 'SNAPSHOT' | 'FULL'; // DELTA
}

export interface ExportConfiguration {
  branchPath: string;
  conceptsAndRelationshipsOnly: boolean; // false
  filenameEffectiveDate: string;
  id: string;
  moduleIds: Array<string>;
  startDate: string;
  startEffectiveTime: string; // Format: yyyymmdd. Can be used to produce a delta after content is versioned by filtering a SNAPSHOT export by effectiveTime.
  transientEffectiveTime: string; // Format: yyyymmdd. Add a transient effectiveTime to rows of content which are not yet versioned.
  type: 'DELTA' | 'SNAPSHOT' | 'FULL'; // DELTA
}

export interface ImportCreationRequest {
  branchPath: string;
  createCodeSystemVersion: boolean;
  type: 'DELTA' | 'SNAPSHOT' | 'FULL';
}

export interface ImportPatchCreationRequest {
  branchPath: string;
  patchReleaseVersion: number;
}

export interface LocalFileImportCreationRequest {
  branchPath: string;
  createCodeSystemVersion: boolean;
  filePath: string;
  type: 'DELTA' | 'SNAPSHOT' | 'FULL';
}

export interface ImportJob {
  branchPath: string;
  createCodeSystemVersion: boolean;
  errorMessage: string;
  moduleIds: Array<string>;
  patchReleaseVersion: number;
  status: 'WAITING_FOR_FILE' | 'RUNNING' | 'COMPLETED' | 'FAILED';
  type: 'DELTA' | 'SNAPSHOT' | 'FULL';
}

export interface RefSetMemberPageWithBucketAggregations<T> {
  empty: boolean;
  first: boolean;
  items: Array<T>;
  last: boolean;
  memberCountsByReferenceSet: Record<string, unknown>;
  number: number;
  numberOfElements: number;
  referenceSets: Record<string, unknown>;
  size: number;
  totalElements: number;
  totalPages: number;
}

export interface MemberIdsPojo {
  memberIds: Array<string>;
}

export interface ReferenceSetMemberView {
  active: boolean;
  additionalFields: Record<string, unknown>;
  effectiveTime: string;
  memberId: string;
  moduleId: string;
  referencedComponentId: string;
  refsetId: string;
  released: boolean;
  releasedEffectiveTime: number;
}

export interface RelationshipIdPojo {
  relationshipIds: Array<string>;
}

export interface ExpressionConstraint {
  
}

export interface InvalidContent {
  component: Component;
  componentId: string;
  conceptFsn: string;
  conceptId: string;
  ignorePublishedCheck: boolean;
  message: string;
  published: boolean;
  severity: 'ERROR' | 'WARNING';
}

export interface Component {
  active: boolean;
  id: string;
  moduleId: string;
  published: boolean;
  released: boolean;
}

export interface InactivationTypeAndConceptIdList {
  conceptIds: Collection<number>;
  inactivationIndicator: ConceptMini;
}

export interface BuildVersion {
  time: string;
  version: string;
}
