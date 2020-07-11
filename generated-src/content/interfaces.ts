/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.8.2
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-api-ts code generator program.
 * https://github.com/DestinyItemManager/bungie-api-ts
 * Do not edit these files manually.
 */

import {
  GeneralUser
} from '../user/interfaces.js';
import {
  PagedQuery
} from '../common.js';

export interface ContentTypeDescription {
  readonly cType: string;
  readonly name: string;
  readonly contentDescription: string;
  readonly previewImage: string;
  readonly priority: number;
  readonly reminder: string;
  readonly properties: ContentTypeProperty[];
  readonly tagMetadata: TagMetadataDefinition[];
  readonly tagMetadataItems: { [key: string]: TagMetadataItem };
  readonly usageExamples: string[];
  readonly showInContentEditor: boolean;
  readonly typeOf: string;
  readonly bindIdentifierToProperty: string;
  readonly boundRegex: string;
  readonly forceIdentifierBinding: boolean;
  readonly allowComments: boolean;
  readonly autoEnglishPropertyFallback: boolean;
  readonly bulkUploadable: boolean;
  readonly previews: ContentPreview[];
  readonly suppressCmsPath: boolean;
  readonly propertySections: ContentTypePropertySection[];
}

export interface ContentTypeProperty {
  readonly name: string;
  readonly rootPropertyName: string;
  readonly readableName: string;
  readonly value: string;
  readonly propertyDescription: string;
  readonly localizable: boolean;
  readonly fallback: boolean;
  readonly enabled: boolean;
  readonly order: number;
  readonly visible: boolean;
  readonly isTitle: boolean;
  readonly required: boolean;
  readonly maxLength: number;
  readonly maxByteLength: number;
  readonly maxFileSize: number;
  readonly regexp: string;
  readonly validateAs: string;
  readonly rssAttribute: string;
  readonly visibleDependency: string;
  readonly visibleOn: string;
  readonly datatype: ContentPropertyDataTypeEnum;
  readonly attributes: { [key: string]: string };
  readonly childProperties: ContentTypeProperty[];
  readonly contentTypeAllowed: string;
  readonly bindToProperty: string;
  readonly boundRegex: string;
  readonly representationSelection: { [key: string]: string };
  readonly defaultValues: ContentTypeDefaultValue[];
  readonly isExternalAllowed: boolean;
  readonly propertySection: string;
  readonly weight: number;
  readonly entitytype: string;
  readonly isCombo: boolean;
  readonly suppressProperty: boolean;
  readonly legalContentTypes: string[];
  readonly representationValidationString: string;
  readonly minWidth: number;
  readonly maxWidth: number;
  readonly minHeight: number;
  readonly maxHeight: number;
  readonly isVideo: boolean;
  readonly isImage: boolean;
}

export const enum ContentPropertyDataTypeEnum {
  None = 0,
  Plaintext = 1,
  Html = 2,
  Dropdown = 3,
  List = 4,
  Json = 5,
  Content = 6,
  Representation = 7,
  Set = 8,
  File = 9,
  FolderSet = 10,
  Date = 11,
  MultilinePlaintext = 12,
  DestinyContent = 13,
  Color = 14
}

export interface ContentTypeDefaultValue {
  readonly whenClause: string;
  readonly whenValue: string;
  readonly defaultValue: string;
}

export interface TagMetadataDefinition {
  readonly description: string;
  readonly order: number;
  readonly items: TagMetadataItem[];
  readonly datatype: string;
  readonly name: string;
  readonly isRequired: boolean;
}

export interface TagMetadataItem {
  readonly description: string;
  readonly tagText: string;
  readonly groups: string[];
  readonly isDefault: boolean;
  readonly name: string;
}

export interface ContentPreview {
  readonly name: string;
  readonly path: string;
  readonly itemInSet: boolean;
  readonly setTag: string;
  readonly setNesting: number;
  readonly useSetId: number;
}

export interface ContentTypePropertySection {
  readonly name: string;
  readonly readableName: string;
  readonly collapsed: boolean;
}

export interface ContentItemPublicContract {
  readonly contentId: string;
  readonly cType: string;
  readonly cmsPath: string;
  readonly creationDate: string;
  readonly modifyDate: string;
  readonly allowComments: boolean;
  readonly hasAgeGate: boolean;
  readonly minimumAge: number;
  readonly ratingImagePath: string;
  readonly author: GeneralUser;
  readonly autoEnglishPropertyFallback: boolean;
  /**
   * Firehose content is really a collection of metadata and "properties", which are
   * the potentially-but-not-strictly localizable data that comprises the meat of
   * whatever content is being shown.
   *
   * As Cole Porter would have crooned, "Anything Goes" with Firehose properties.
   * They are most often strings, but they can theoretically be anything. They are
   * JSON encoded, and could be JSON structures, simple strings, numbers etc... The
   * Content Type of the item (cType) will describe the properties, and thus how they
   * ought to be deserialized.
   */
  readonly properties: { [key: string]: object };
  readonly representations: ContentRepresentation[];
  /** NOTE: Tags will always be lower case. */
  readonly tags: string[];
  readonly commentSummary: CommentSummary;
}

export interface ContentRepresentation {
  readonly name: string;
  readonly path: string;
  readonly validationString: string;
}

export interface CommentSummary {
  readonly topicId: string;
  readonly commentCount: number;
}

export interface SearchResultOfContentItemPublicContract {
  readonly results: ContentItemPublicContract[];
  readonly totalResults: number;
  readonly hasMore: boolean;
  readonly query: PagedQuery;
  readonly replacementContinuationToken: string;
  /**
   * If useTotalResults is true, then totalResults represents an accurate count.
   *
   * If False, it does not, and may be estimated/only the size of the current page.
   *
   * Either way, you should probably always only trust hasMore.
   *
   * This is a long-held historical throwback to when we used to do paging with known
   * total results. Those queries toasted our database, and we were left to hastily
   * alter our endpoints and create backward- compatible shims, of which
   * useTotalResults is one.
   */
  readonly useTotalResults: boolean;
}
