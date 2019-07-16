/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.3.6
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-api-ts code generator program.
 * https://github.com/DestinyItemManager/bugie-api-ts
 * Do not edit these files manually.
 */
import { GeneralUser } from '../user/interfaces';
import { GroupResponse } from '../groupv2/interfaces';
import { IgnoreResponse, TagResponse } from '../platform';
import { PagedQuery } from '../common';
/**
 * This enum represents a set of flags - use bitwise operators to check which of
 * these match your value.
 */
export declare const enum ForumTopicsCategoryFiltersEnum {
    None = 0,
    Links = 1,
    Questions = 2,
    AnsweredQuestions = 4,
    Media = 8,
    TextOnly = 16,
    Announcement = 32,
    BungieOfficial = 64,
    Polls = 128
}
export declare const enum ForumTopicsQuickDateEnum {
    All = 0,
    LastYear = 1,
    LastMonth = 2,
    LastWeek = 3,
    LastDay = 4
}
export declare const enum ForumTopicsSortEnum {
    Default = 0,
    LastReplied = 1,
    MostReplied = 2,
    Popularity = 3,
    Controversiality = 4,
    Liked = 5,
    HighestRated = 6,
    MostUpvoted = 7
}
export declare const enum ForumPostSortEnum {
    Default = 0,
    OldestFirst = 1
}
export interface PostSearchResponse {
    readonly relatedPosts: PostResponse[];
    readonly authors: GeneralUser[];
    readonly groups: GroupResponse[];
    readonly searchedTags: TagResponse[];
    readonly polls: PollResponse[];
    readonly recruitmentDetails: ForumRecruitmentDetail[];
    readonly availablePages?: number;
    readonly results: PostResponse[];
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
export interface PostResponse {
    readonly lastReplyTimestamp: string;
    readonly IsPinned: boolean;
    readonly urlMediaType: ForumMediaType;
    readonly thumbnail: string;
    readonly popularity: ForumPostPopularity;
    readonly isActive: boolean;
    readonly isAnnouncement: boolean;
    readonly userRating: number;
    readonly userHasRated: boolean;
    readonly userHasMutedPost: boolean;
    readonly latestReplyPostId: string;
    readonly latestReplyAuthorId: string;
    readonly ignoreStatus: IgnoreResponse;
    readonly locale: string;
}
export declare const enum ForumMediaType {
    None = 0,
    Image = 1,
    Video = 2,
    Youtube = 3
}
export declare const enum ForumPostPopularity {
    Empty = 0,
    Default = 1,
    Discussed = 2,
    CoolStory = 3,
    HeatingUp = 4,
    Hot = 5
}
export interface PollResponse {
    readonly topicId: string;
    readonly results: PollResult[];
    readonly totalVotes: number;
}
export interface PollResult {
    readonly answerText: string;
    readonly answerSlot: number;
    readonly lastVoteDate: string;
    readonly votes: number;
    readonly requestingUserVoted: boolean;
}
export interface ForumRecruitmentDetail {
    readonly topicId: string;
    readonly microphoneRequired: boolean;
    readonly intensity: ForumRecruitmentIntensityLabel;
    readonly tone: ForumRecruitmentToneLabel;
    readonly approved: boolean;
    readonly conversationId?: string;
    readonly playerSlotsTotal: number;
    readonly playerSlotsRemaining: number;
    readonly Fireteam: GeneralUser[];
    readonly kickedPlayerIds: string[];
}
export declare const enum ForumRecruitmentIntensityLabel {
    None = 0,
    Casual = 1,
    Professional = 2
}
export declare const enum ForumRecruitmentToneLabel {
    None = 0,
    FamilyFriendly = 1,
    Rowdy = 2
}
export declare const enum CommunityContentSortMode {
    Trending = 0,
    Latest = 1,
    HighestRated = 2
}
