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

import {
  BungieRewardDisplay,
  PartnerOfferClaimRequest,
  PartnerOfferSkuHistoryResponse
} from './interfaces.js';
import {
  ServerResponse
} from '../common.js';

/** Claim a partner offer as the authenticated user. */
export function claimPartnerOffer(http: HttpClient, body: PartnerOfferClaimRequest): Promise<ServerResponse<boolean>> {
  return http({
    method: 'POST',
    url: 'https://www.bungie.net/Platform/Tokens/Partner/ClaimOffer/',
    body
  });
}

export interface ApplyMissingPartnerOffersWithoutClaimParams {
  /** The partner application identifier. */
  partnerApplicationId: number;
  /**
   * The bungie.net user to apply missing offers to. If not self, elevated
   * permissions are required.
   */
  targetBnetMembershipId: string;
}

/**
 * Apply a partner offer to the targeted user. This endpoint does not claim a new
 * offer, but any already claimed offers will be applied to the game if not already.
 */
export function applyMissingPartnerOffersWithoutClaim(http: HttpClient, params: ApplyMissingPartnerOffersWithoutClaimParams): Promise<ServerResponse<boolean>> {
  return http({
    method: 'POST',
    url: `https://www.bungie.net/Platform/Tokens/Partner/ApplyMissingOffers/${params.partnerApplicationId}/${params.targetBnetMembershipId}/`
  });
}

export interface GetPartnerOfferSkuHistoryParams {
  /** The partner application identifier. */
  partnerApplicationId: number;
  /**
   * The bungie.net user to apply missing offers to. If not self, elevated
   * permissions are required.
   */
  targetBnetMembershipId: string;
}

/**
 * Returns the partner sku and offer history of the targeted user. Elevated
 * permissions are required to see users that are not yourself.
 */
export function getPartnerOfferSkuHistory(http: HttpClient, params: GetPartnerOfferSkuHistoryParams): Promise<ServerResponse<PartnerOfferSkuHistoryResponse[]>> {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Tokens/Partner/History/${params.partnerApplicationId}/${params.targetBnetMembershipId}/`
  });
}

export interface GetBungieRewardsForUserParams {
  /**
   * bungie.net user membershipId for requested user rewards. If not self, elevated
   * permissions are required.
   */
  membershipId: string;
}

/** Returns the bungie rewards for the targeted user. */
export function getBungieRewardsForUser(http: HttpClient, params: GetBungieRewardsForUserParams): Promise<ServerResponse<{ [key: string]: BungieRewardDisplay }>> {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Tokens/Rewards/GetRewardsForUser/${params.membershipId}/`
  });
}

/** Returns a list of the current bungie rewards */
export function getBungieRewardsList(http: HttpClient): Promise<ServerResponse<{ [key: string]: BungieRewardDisplay }>> {
  return http({
    method: 'GET',
    url: 'https://www.bungie.net/Platform/Tokens/Rewards/BungieRewards/'
  });
}
