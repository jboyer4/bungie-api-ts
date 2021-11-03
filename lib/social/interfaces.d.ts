/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.12.2
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-api-ts code generator program.
 * https://github.com/DestinyItemManager/bungie-api-ts
 * Do not edit these files manually.
 */
import { BungieMembershipType } from '../common.js';
import { GeneralUser } from '../user/interfaces.js';
export declare const enum PlatformFriendType {
  Unknown = 0,
  Xbox = 1,
  PSN = 2,
  Steam = 3,
}
export interface BungieFriendListResponse {
  readonly friends: BungieFriend[];
}
export interface BungieFriend {
  readonly lastSeenAsMembershipId: string;
  readonly lastSeenAsBungieMembershipType: BungieMembershipType;
  readonly bungieGlobalDisplayName: string;
  readonly bungieGlobalDisplayNameCode?: number;
  readonly onlineStatus: PresenceStatus;
  /**
   * This enum represents a set of flags - use bitwise operators to check which of
   * these match your value.
   */
  readonly onlineTitle: PresenceOnlineStateFlags;
  readonly relationship: FriendRelationshipState;
  readonly bungieNetUser: GeneralUser;
}
export declare const enum PresenceStatus {
  OfflineOrUnknown = 0,
  Online = 1,
}
/**
 * This enum represents a set of flags - use bitwise operators to check which of
 * these match your value.
 */
export declare const enum PresenceOnlineStateFlags {
  None = 0,
  Destiny1 = 1,
  Destiny2 = 2,
}
export declare const enum FriendRelationshipState {
  Unknown = 0,
  Friend = 1,
  IncomingRequest = 2,
  OutgoingRequest = 3,
}
export interface BungieFriendRequestListResponse {
  readonly incomingRequests: BungieFriend[];
  readonly outgoingRequests: BungieFriend[];
}
export interface PlatformFriendResponse {
  readonly itemsPerPage: number;
  readonly currentPage: number;
  readonly hasMore: boolean;
  readonly platformFriends: PlatformFriend[];
}
export interface PlatformFriend {
  readonly platformDisplayName: string;
  readonly friendPlatform: PlatformFriendType;
  readonly destinyMembershipId?: string;
  readonly destinyMembershipType?: number;
  readonly bungieNetMembershipId?: string;
  readonly bungieGlobalDisplayName: string;
  readonly bungieGlobalDisplayNameCode?: number;
}
