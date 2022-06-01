/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.15.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-api-ts code generator program.
 * https://github.com/DestinyItemManager/bungie-api-ts
 * Do not edit these files manually.
 */
import { HttpClient } from '../http';
import { ApiUsage, Application } from './interfaces.js';
import { ServerResponse } from '../common.js';
export interface GetApplicationApiUsageParams {
  /** ID of the application to get usage statistics. */
  applicationId: number;
  /** End time for query. Goes to now if not specified. */
  end?: string;
  /** Start time for query. Goes to 24 hours ago if not specified. */
  start?: string;
}
/**
 * Get API usage by application for time frame specified. You can go as far back as
 * 30 days ago, and can ask for up to a 48 hour window of time in a single request.
 * You must be authenticated with at least the ReadUserData permission to access
 * this endpoint.
 */
export declare function getApplicationApiUsage(
  http: HttpClient,
  params: GetApplicationApiUsageParams
): Promise<ServerResponse<ApiUsage>>;
/** Get list of applications created by Bungie. */
export declare function getBungieApplications(
  http: HttpClient
): Promise<ServerResponse<Application[]>>;
