export declare const WebRPCVersion = "v1";
export declare const WebRPCSchemaVersion = "v0.3.0";
export declare const WebRPCSchemaHash = "bf3efdf3504c50d2ef8dd16b214905051dc2275c";
export declare enum AccountStatus {
    ACTIVE = "ACTIVE",
    SUSPENDED = "SUSPENDED",
    BANNED = "BANNED",
    VIP = "VIP",
    FLAGGED = "FLAGGED",
    TO_DELETE = "TO_DELETE",
    DELETED = "DELETED"
}
export declare enum PlayerRank {
    UNKNOWN = "UNKNOWN",
    WANDERER = "WANDERER",
    RECRUIT = "RECRUIT",
    APPRENTICE = "APPRENTICE",
    SCHOLAR = "SCHOLAR",
    PROPHET = "PROPHET",
    MASTER = "MASTER",
    GRANDMASTER = "GRANDMASTER"
}
export declare enum ContractType {
    UNKNOWN = "UNKNOWN",
    SKYWEAVER_ASSETS = "SKYWEAVER_ASSETS"
}
export declare enum ItemType {
    UNKNOWN = "UNKNOWN",
    USDC = "USDC",
    SW_BASE_CARDS = "SW_BASE_CARDS",
    SW_SILVER_DUST = "SW_SILVER_DUST",
    SW_SILVER_CARDS = "SW_SILVER_CARDS",
    SW_GOLD_CARDS = "SW_GOLD_CARDS",
    SW_CONQUEST_TICKET = "SW_CONQUEST_TICKET",
    SW_CRYSTALS = "SW_CRYSTALS",
    SW_STICKERS = "SW_STICKERS",
    SW_HERO_SKINS = "SW_HERO_SKINS",
    SW_HERO = "SW_HERO"
}
export declare enum FeedEventType {
    LEVELUP = "LEVELUP",
    MATCH = "MATCH",
    REWARD = "REWARD",
    TRADE = "TRADE",
    RANKUP = "RANKUP",
    LEADERBOARD_REWARD = "LEADERBOARD_REWARD",
    HERO_UNLOCK = "HERO_UNLOCK",
    IAP_CONQUEST_MINTING = "IAP_CONQUEST_MINTING",
    DELAYED_REWARD = "DELAYED_REWARD",
    DELAYED_REWARD_MINTED = "DELAYED_REWARD_MINTED",
    STARTED_DECK_UNLOCK = "STARTED_DECK_UNLOCK",
    CONQUEST_V2_REWARD = "CONQUEST_V2_REWARD"
}
export declare enum Hero {
    UNKNOWN = "UNKNOWN",
    ADA = "ADA",
    SAMYA = "SAMYA",
    FOX = "FOX",
    LOTUS = "LOTUS",
    TITUS = "TITUS",
    IRIS = "IRIS",
    BOURAN = "BOURAN",
    HORIK = "HORIK",
    ZOEY = "ZOEY",
    AXEL = "AXEL",
    ARI = "ARI",
    MIRA = "MIRA",
    MAI = "MAI",
    BANJO = "BANJO",
    SITTI = "SITTI"
}
export declare enum DeckClass {
    UNKNOWN_CLASS = "UNKNOWN_CLASS",
    STR = "STR",
    HRT = "HRT",
    AGY = "AGY",
    INT = "INT",
    WIS = "WIS",
    STH = "STH",
    STA = "STA",
    STI = "STI",
    STW = "STW",
    HRA = "HRA",
    HRI = "HRI",
    HRW = "HRW",
    AGI = "AGI",
    AGW = "AGW",
    INW = "INW"
}
export declare enum CardType {
    UNIT = "UNIT",
    SPELL = "SPELL"
}
export declare enum CardKeyword {
    ARMOR = "ARMOR",
    STEALTH = "STEALTH",
    GUARD = "GUARD",
    BANNER = "BANNER",
    WITHER = "WITHER",
    DEATH = "DEATH"
}
export declare enum CardElement {
    WATER = "WATER",
    FIRE = "FIRE",
    EARTH = "EARTH",
    AIR = "AIR",
    MIND = "MIND",
    METAL = "METAL",
    LIGHT = "LIGHT",
    DARK = "DARK"
}
export declare enum CardStatus {
    PLAY = "PLAY",
    BLOCKED = "BLOCKED",
    CODE = "CODE"
}
export declare enum CardClass {
    STR = "STR",
    HRT = "HRT",
    AGY = "AGY",
    INT = "INT",
    WIS = "WIS",
    TOK = "TOK"
}
export declare enum GameMode {
    UNKNOWN = "UNKNOWN",
    RANKED_CONSTRUCTED = "RANKED_CONSTRUCTED",
    CHALLENGE_CONSTRUCTED = "CHALLENGE_CONSTRUCTED",
    TUTORIAL = "TUTORIAL",
    PRACTICE = "PRACTICE",
    RANKED_DISCOVERY = "RANKED_DISCOVERY",
    CONQUEST_CONSTRUCTED = "CONQUEST_CONSTRUCTED",
    CONQUEST_DISCOVERY = "CONQUEST_DISCOVERY",
    WARM_UP = "WARM_UP",
    CHALLENGE_DISCOVERY = "CHALLENGE_DISCOVERY"
}
export declare enum MatchStatus {
    UNKNOWN = "UNKNOWN",
    COMPLETED = "COMPLETED",
    ABANDONED = "ABANDONED",
    FORFEITED = "FORFEITED",
    IN_PROGRESS = "IN_PROGRESS",
    CRASHED = "CRASHED"
}
export declare enum RewardType {
    EXP = "EXP",
    CARD = "CARD",
    RANK = "RANK",
    PRISM = "PRISM",
    HERO = "HERO",
    HERO_SKIN = "HERO_SKIN",
    DECK = "DECK",
    CONQUEST_POINTS = "CONQUEST_POINTS"
}
export declare enum DeckType {
    RANDOM = "RANDOM",
    CUSTOM = "CUSTOM",
    LOCKED_STARTER = "LOCKED_STARTER",
    UNLOCKED_STARTER = "UNLOCKED_STARTER"
}
export declare enum ConquestStatus {
    UNKNOWN = "UNKNOWN",
    IN_PROGRESS = "IN_PROGRESS",
    REWARDS_PENDING = "REWARDS_PENDING",
    COMPLETED = "COMPLETED"
}
export declare enum ConquestMatchResult {
    UNKNOWN = "UNKNOWN",
    WIN = "WIN",
    LOSS = "LOSS",
    DRAW = "DRAW"
}
export declare enum SortOrder {
    DESC = "DESC",
    ASC = "ASC"
}
export declare enum BannerType {
    INFO = "INFO",
    WARNING = "WARNING",
    EMERGENCY = "EMERGENCY"
}
export declare enum NotificationType {
    LEADERBOARD_REWARD = "LEADERBOARD_REWARD",
    CONQUEST_V2_REWARD = "CONQUEST_V2_REWARD"
}
export interface Version {
    webrpcVersion: string;
    schemaVersion: string;
    schemaHash: string;
    appVersion: string;
}
export interface Account {
    address: string;
    name: string;
    locale: string;
    createdAt: string;
    updatedAt: string;
    experience: number;
    warmUps: number;
    level: number;
    levelUpXP: number;
    stats?: AccountStats;
    region?: string;
    tagArtID?: string;
    crystalID?: number;
    settings?: AccountSettings;
    invitedBy?: string;
}
export interface AccountStats {
    rankedConstructed?: AccountStat;
    rankedDiscovery?: AccountStat;
    conquestConstructed?: AccountStat;
    conquestDiscovery?: AccountStat;
}
export interface AccountSettings {
    hidePlayerNames?: boolean;
    suspended?: boolean;
    requestMoreInvites?: boolean;
    renameLockedUntil?: string;
    starterDeckMigration?: boolean;
    spectateCode?: string;
    spectateCodeExpiresAt?: string;
    twitchProfile?: string;
}
export interface AccountStat {
    accountAddress: string;
    gameMode: GameMode;
    winCount: number;
    lossCount: number;
    tieCount: number;
    forfeitCount: number;
    abandonCount: number;
    winRatio: number;
    gamesPlayed: number;
    score: number;
    createdAt: string;
    rank?: number;
    rankProgress?: number;
    playerRank: PlayerRank;
    playerRankScore: number;
    winStreak: number;
    lossStreak: number;
    season?: number;
}
export interface SetInvitedByRequest {
    address: string;
    invitedBy: string;
}
export interface Item {
    id: number;
    accountAddress: string;
    contractAddress?: string;
    itemType: ItemType;
    tokenID: number;
    balance: string;
    lastUpdateID: number;
    updatedAt?: string;
    createdAt?: string;
}
export interface ItemSummary {
    id: number;
    accountAddress: string;
    itemType: ItemType;
    totalBalance: string;
    updatedAt?: string;
    createdAt?: string;
}
export interface ItemSupply {
    itemID: number;
    itemType: ItemType;
    totalBalance: string;
}
export interface GetFeedRequest {
    accountAddress: string;
    types?: Array<FeedEventType>;
}
export interface FeedEvent {
    id: number;
    accountAddress: string;
    type: FeedEventType;
    createdAt: string;
    match: Match;
    level?: number;
    playerRank?: PlayerRank;
    tokenIds?: Array<number>;
    cards: Array<Card>;
    heroes: Array<Hero>;
    gameMode?: GameMode;
    leaderboardRank?: number;
    conquestV2Reward?: number;
    conquestV2TreasureLevel?: number;
}
export interface CardImageURL {
    small: string;
    medium: string;
    large: string;
}
export interface Card {
    id: number;
    name: string;
    description: string;
    asset: string;
    class: CardClass;
    element: CardElement;
    type: CardType;
    manaCost: number;
    power: number;
    health: number;
    attachedSpellID?: number;
    keywords: Array<string>;
    status: CardStatus;
    imageURL: CardImageURL;
    itemType: ItemType;
    silverCardTokenId?: number;
    goldCardTokenId?: number;
}
export interface Sticker {
    id: number;
    name: string;
    requiredPoints: number;
    asset: string;
    tokenId: number;
    season: number;
}
export interface StickerOwnershipResponse {
    stickerBalances: {
        [key: number]: BalanceTuple;
    };
}
export interface LevelsPerSeason {
    address: string;
    inviter_address: string;
    season: number;
    levels: number;
    pointsCarried: number;
    pointsSpent: number;
}
export interface FriendPoints {
    account?: Account;
    season: number;
    levels: number;
    points: number;
    pointsSpent: number;
}
export interface CardSearchCriteria {
    ids?: Array<number>;
    cardClass?: Array<CardClass>;
    cardType?: CardType;
    cardElement?: Array<CardElement>;
    searchText?: string;
    cardManaCost?: Array<string>;
    itemType?: ItemType;
    ownedCards?: boolean;
    accountAddress?: string;
    includeTokens?: boolean;
}
export interface GetCardsRequest {
    ids: Array<number>;
    includeUserBalances: boolean;
    accountAddress?: string;
}
export interface SearchCardsRequest {
    criteria: CardSearchCriteria;
    includeUserBalances: boolean;
    contractQuery: boolean;
}
export interface CardWithBalance {
    card: Card;
    balance: string;
    balanceByType: {
        [key: string]: BalanceTuple;
    };
    createdAt: string;
}
export interface BalanceTuple {
    balance: string;
}
export interface CardOwnershipResponse {
    cardBalances: {
        [key: number]: {
            [key: string]: BalanceTuple;
        };
    };
    lockedCards: number;
    lockedCardsByClass: {
        [key: string]: number;
    };
    lockedCardsByFrame: {
        [key: string]: number;
    };
    lockedCardsByClassAndFrame: {
        [key: string]: {
            [key: string]: number;
        };
    };
    unlockedCards: number;
    unlockedCardsByClass: {
        [key: string]: number;
    };
    unlockedCardsByFrame: {
        [key: string]: number;
    };
    unlockedCardsByClassAndFrame: {
        [key: string]: {
            [key: string]: number;
        };
    };
    pendingCards: number;
    pendingCardsByClass: {
        [key: string]: number;
    };
    pendingCardsByFrame: {
        [key: string]: number;
    };
    pendingCardsByClassAndFrame: {
        [key: string]: {
            [key: string]: number;
        };
    };
}
export interface PendingCardsResponse {
    cards: Array<Card>;
    tokenIDs: Array<number>;
    mintAt: string;
}
export interface WeeklyGolds {
    startAt: string;
    endAt: string;
    tokenId: number;
    totalSupply: number;
}
export interface Deck {
    uuid: string;
    accountAddress: string;
    name: string;
    class: DeckClass;
    deckString: string;
    cardIds: Array<number>;
    art: string;
    createdAt: string;
    updatedAt: string;
    isFavorite: boolean;
    favoritedAt: string;
    deckType: DeckType;
    isNew: boolean;
    conquestV2Points: number;
}
export interface CheckDeckResponse {
    containsInvalid: boolean;
    accountOwnsAllCards: boolean;
    unlockedClass: boolean;
}
export interface CreateDeckRequest {
    name: string;
    class?: DeckClass;
    cardIds: Array<number>;
    art?: string;
}
export interface UpdateDeckRequestDeck {
    deckString: string;
    name: string;
    class: DeckClass;
    art?: string;
}
export interface UpdateDeckRequest {
    uuid?: string;
    deckString?: string;
    deck: UpdateDeckRequestDeck;
}
export interface DeckRequest {
    uuid?: string;
    deckString?: string;
}
export interface CheckDeckRequest {
    accountAddress?: string;
    uuid?: string;
    deckString?: string;
    contractQuery: boolean;
}
export interface SearchDecksRequest {
    deckString?: string;
    name?: string;
    class?: DeckClass;
}
export interface DeckRank {
    deckString: string;
    class: DeckClass;
    cardIds: Array<number>;
    winCount: number;
    lossCount: number;
    forfeitCount: number;
    abandonCount: number;
    tieCount: number;
    winRatio: number;
    gamesPlayed: number;
    score: number;
    highestPlayerAddress: string;
}
export interface SearchDeckRanksRequest {
    deckString?: string;
    classes?: Array<DeckClass>;
    withCards?: Array<number>;
}
export interface ListDeckRanksRequest {
    class?: DeckClass;
}
export interface DeckRankAccount {
    deckRank: DeckRank;
    highestPlayer: Account;
}
export interface Match {
    id: number;
    status: MatchStatus;
    mode: GameMode;
    player1: MatchPlayer;
    player2: MatchPlayer;
    initPlayer1DeckNumCards: number;
    initPlayer2DeckNumCards: number;
    player1DeckClass?: DeckClass;
    player2DeckClass?: DeckClass;
    winningPlayer?: number;
    turnNonce: number;
    player1Moves: number;
    player2Moves: number;
    metrics: {
        [key: string]: any;
    };
    startedAt?: string;
    endedAt?: string;
    updatedAt?: string;
    createdAt?: string;
    replayID: string;
}
export interface MatchPlayer {
    address: string;
    name: string;
    region?: string;
    tagArtID?: string;
    crystalID?: number;
    deckString: string;
    initDeckString: string;
    deckClass: DeckClass;
    playerSessionId?: string;
    isBot: boolean;
}
export interface RankData {
    rank: PlayerRank;
    rankPoints: number;
    requiredRankPoints: number;
    eloScore: number;
    rankPosition: number;
    eloAbove: number;
    eloBelow: number;
}
export interface RewardRank {
    beforeMatch: RankData;
    afterMatch: RankData;
}
export interface RewardExp {
    amount: number;
    description: string;
    currentLevel: number;
    requiredExp: number;
}
export interface RewardCard {
    amount: number;
    description: string;
    card: Card;
    item?: Item;
}
export interface RewardHero {
    hero: Hero;
    deckClass: DeckClass;
}
export interface RewardHeroSkin {
    hero: Hero;
    deckClass: DeckClass;
    tokenId: number;
}
export interface RewardDeck {
    deckClass: DeckClass;
    tokenIds: Array<number>;
}
export interface ConquestV2TreasureProgress {
    treasureLevel: number;
    treasurePoints: number;
    treasurePointsRequired: number;
}
export interface RewardConquestV2TreasureProgress {
    beforeMatch: ConquestV2TreasureProgress;
    afterMatch: ConquestV2TreasureProgress;
}
export interface Reward {
    accountAddress: string;
    type: RewardType;
    rank?: RewardRank;
    exp?: RewardExp;
    card?: RewardCard;
    hero?: RewardHero;
    heroSkin?: RewardHeroSkin;
    deck?: RewardDeck;
    conquestV2TreasureProgress?: RewardConquestV2TreasureProgress;
}
export interface ListLeaderboardRequest {
    gameMode?: GameMode;
    region?: string;
    playerRank?: PlayerRank;
    playerNamePrefix?: string;
    season?: number;
}
export interface AccountLeaderboardRequest {
    gameMode: GameMode;
    accountAddress?: string;
    season?: number;
}
export interface LeaderboardEntry {
    account: Account;
    accountStat: AccountStat;
    rank: number;
    rankedSilverReward: number;
    rankedTicketReward: number;
}
export interface ListMatchesRequest {
    accountAddress?: string;
}
export interface GameClientFeedback {
    sentiment: string;
    timestamp: string;
    dump: {
        [key: string]: any;
    };
    screenshotImageURI: string;
}
export interface Conquest {
    id: number;
    status: ConquestStatus;
    accountAddress: string;
    nonce: number;
    mode: GameMode;
    hero: Hero;
    deckClass?: DeckClass;
    matchProgress: {
        [key: number]: ConquestMatchResult;
    };
    createdAt?: string;
    endedAt?: string;
}
export interface ConquestStats {
    discoveryTicketsUsed: number;
    constructedTicketsUsed: number;
    discoveryMatchesPlayed: number;
    constructedMatchesPlayed: number;
    discoveryWinRate: number;
    constructedWinRate: number;
    discoverySilverCardsWon: number;
    constructedSilverCardsWon: number;
    discoveryGoldCardsWon: number;
    constructedGoldCardsWon: number;
    firstConquestMatchPlayed: string;
}
export interface ConquestPoints {
    address: string;
    eventID: number;
    currentPoints: number;
    totalPoints: number;
}
export interface Page {
    pageSize?: number;
    before?: string;
    hasBefore?: boolean;
    after?: string;
    hasAfter?: boolean;
    sort?: Array<SortBy>;
}
export interface SortBy {
    column: string;
    order: SortOrder;
}
export interface TwitchFeaturedStreamer {
    username: string;
}
export interface Banner {
    order: number;
    type: BannerType;
    color?: string;
    msg: string;
    dismissable: boolean;
    id: number;
    link?: string;
    startAt?: string;
    endAt?: string;
}
export interface BannersRequest {
    order: number;
    bannerType: BannerType;
    msg: string;
    dismissable: boolean;
    color?: string;
    link?: string;
    startAt?: string;
    endAt?: string;
}
export interface TwitchInfoResponse {
    streamers_online: number;
    vods_available: number;
    streams: Array<TwitchStream>;
}
export interface TwitchStream {
    id: string;
    user_id: string;
    user_login: string;
    user_name: string;
    game_id: string;
    game_name: string;
    type: string;
    title: string;
    viewer_count: number;
    started_at: string;
    language: string;
    thumbnail_url: string;
    tag_ids: Array<string>;
    is_mature: boolean;
}
export interface DiscordInfoResponse {
    users_online: number;
    instant_invite_url: string;
}
export interface GameModesStatus {
    tutorial: boolean;
    practice: boolean;
    warmUp: boolean;
    rankedConstructed: boolean;
    rankedDiscovery: boolean;
    conquestConstructed: boolean;
    conquestDiscovery: boolean;
    challengeConstructed: boolean;
    challengeDiscovery: boolean;
}
export interface GameModeStatus {
    gameMode: GameMode;
    enabled: boolean;
}
export interface GameModeStatusHistory {
    id: number;
    accountAddress: string;
    gameMode: GameMode;
    enabled: boolean;
    createdAt: string;
}
export interface ConquestV2PoolConfigData {
    maxPoolCeiling?: number;
    poolCeiling: number;
    poolFloor: number;
    topWeightUnitPrice: number;
    bottomWeightUnitPrice: number;
}
export interface ConquestV2PoolConfig {
    default: ConquestV2PoolConfigData;
    settings: ConquestV2PoolConfigData;
    final: ConquestV2PoolConfigData;
}
export interface ConquestV2TreasureLevelSummary {
    level: number;
    numberOfPlayers: number;
    totalWeight: number;
}
export interface ConquestV2Summary {
    pool: number;
    totalWeight: number;
    weightUnitPrice: number;
    treasureLevels: Array<ConquestV2TreasureLevelSummary>;
}
export interface ConquestV2AccountTreasureProgress {
    accountAddress: string;
    accountName: string;
    progress: ConquestV2TreasureProgress;
}
export interface Notification {
    id: number;
    accountAddress: string;
    type: NotificationType;
    leaderboardReward?: NotificationLeaderboardReward;
    conquestV2Reward?: NotificationConquestV2Reward;
}
export interface NotificationLeaderboardReward {
}
export interface NotificationConquestV2Reward {
    season: number;
    week: number;
    treasureLevel: number;
    amountUSDC: number;
}
export interface SkyWeaverAPI {
    getSession(headers?: object): Promise<GetSessionReturn>;
    getAccount(args: GetAccountArgs, headers?: object): Promise<GetAccountReturn>;
    getAccountByUsername(args: GetAccountByUsernameArgs, headers?: object): Promise<GetAccountByUsernameReturn>;
    getAccountStats(args: GetAccountStatsArgs, headers?: object): Promise<GetAccountStatsReturn>;
    accountExists(args: AccountExistsArgs, headers?: object): Promise<AccountExistsReturn>;
    accountExistsByName(args: AccountExistsByNameArgs, headers?: object): Promise<AccountExistsByNameReturn>;
    updateAccount(args: UpdateAccountArgs, headers?: object): Promise<UpdateAccountReturn>;
    getPrivateSpectateCode(args: GetPrivateSpectateCodeArgs, headers?: object): Promise<GetPrivateSpectateCodeReturn>;
    listNotifications(headers?: object): Promise<ListNotificationsReturn>;
    setNotificationsAsSeen(args: SetNotificationsAsSeenArgs, headers?: object): Promise<SetNotificationsAsSeenReturn>;
    getFriendPoints(args: GetFriendPointsArgs, headers?: object): Promise<GetFriendPointsReturn>;
    getFriendPointsBySeason(args: GetFriendPointsBySeasonArgs, headers?: object): Promise<GetFriendPointsBySeasonReturn>;
    getPointsGifted(args: GetPointsGiftedArgs, headers?: object): Promise<GetPointsGiftedReturn>;
    getStickers(headers?: object): Promise<GetStickersReturn>;
    getStickersBySeason(args: GetStickersBySeasonArgs, headers?: object): Promise<GetStickersBySeasonReturn>;
    getStickerOwnership(args: GetStickerOwnershipArgs, headers?: object): Promise<GetStickerOwnershipReturn>;
    getFeed(args: GetFeedArgs, headers?: object): Promise<GetFeedReturn>;
    getItemSummary(args: GetItemSummaryArgs, headers?: object): Promise<GetItemSummaryReturn>;
    getItemSupply(args: GetItemSupplyArgs, headers?: object): Promise<GetItemSupplyReturn>;
    getBatchItemSupply(args: GetBatchItemSupplyArgs, headers?: object): Promise<GetBatchItemSupplyReturn>;
    getItemSuppliesByType(args: GetItemSuppliesByTypeArgs, headers?: object): Promise<GetItemSuppliesByTypeReturn>;
    getItemOwnershipByType(args: GetItemOwnershipByTypeArgs, headers?: object): Promise<GetItemOwnershipByTypeReturn>;
    getCardLibrary(args: GetCardLibraryArgs, headers?: object): Promise<GetCardLibraryReturn>;
    getCardsByID(args: GetCardsByIDArgs, headers?: object): Promise<GetCardsByIDReturn>;
    getCardsByDeckString(args: GetCardsByDeckStringArgs, headers?: object): Promise<GetCardsByDeckStringReturn>;
    searchCards(args: SearchCardsArgs, headers?: object): Promise<SearchCardsReturn>;
    getCardOwnership(args: GetCardOwnershipArgs, headers?: object): Promise<GetCardOwnershipReturn>;
    getPendingCards(headers?: object): Promise<GetPendingCardsReturn>;
    listDecks(args: ListDecksArgs, headers?: object): Promise<ListDecksReturn>;
    searchDecks(args: SearchDecksArgs, headers?: object): Promise<SearchDecksReturn>;
    createDeck(args: CreateDeckArgs, headers?: object): Promise<CreateDeckReturn>;
    updateDeck(args: UpdateDeckArgs, headers?: object): Promise<UpdateDeckReturn>;
    favoriteDeck(args: FavoriteDeckArgs, headers?: object): Promise<FavoriteDeckReturn>;
    unfavoriteDeck(args: UnfavoriteDeckArgs, headers?: object): Promise<UnfavoriteDeckReturn>;
    toggleDeckFavorite(args: ToggleDeckFavoriteArgs, headers?: object): Promise<ToggleDeckFavoriteReturn>;
    getDeck(args: GetDeckArgs, headers?: object): Promise<GetDeckReturn>;
    checkDeck(args: CheckDeckArgs, headers?: object): Promise<CheckDeckReturn>;
    deleteDeck(args: DeleteDeckArgs, headers?: object): Promise<DeleteDeckReturn>;
    searchDeckRanks(args: SearchDeckRanksArgs, headers?: object): Promise<SearchDeckRanksReturn>;
    listDeckRanks(args: ListDeckRanksArgs, headers?: object): Promise<ListDeckRanksReturn>;
    markDeckNotNew(args: MarkDeckNotNewArgs, headers?: object): Promise<MarkDeckNotNewReturn>;
    listLeaderboard(args: ListLeaderboardArgs, headers?: object): Promise<ListLeaderboardReturn>;
    listMatches(args: ListMatchesArgs, headers?: object): Promise<ListMatchesReturn>;
    getMatch(args: GetMatchArgs, headers?: object): Promise<GetMatchReturn>;
    getCurrentSeason(headers?: object): Promise<GetCurrentSeasonReturn>;
    getNextRewardsTime(headers?: object): Promise<GetNextRewardsTimeReturn>;
    getNextSeasonTime(headers?: object): Promise<GetNextSeasonTimeReturn>;
    getCurrentSeasonStartTime(headers?: object): Promise<GetCurrentSeasonStartTimeReturn>;
    accountLeaderboard(args: AccountLeaderboardArgs, headers?: object): Promise<AccountLeaderboardReturn>;
    getMatchArchiveRecordsURI(args: GetMatchArchiveRecordsURIArgs, headers?: object): Promise<GetMatchArchiveRecordsURIReturn>;
    getMatchLiveRecordsURI(args: GetMatchLiveRecordsURIArgs, headers?: object): Promise<GetMatchLiveRecordsURIReturn>;
    conquestStatus(headers?: object): Promise<ConquestStatusReturn>;
    conquestStats(headers?: object): Promise<ConquestStatsReturn>;
    conquestRewards(headers?: object): Promise<ConquestRewardsReturn>;
    conquestPoints(headers?: object): Promise<ConquestPointsReturn>;
    conquestV2Pool(headers?: object): Promise<ConquestV2PoolReturn>;
    conquestV2Progress(headers?: object): Promise<ConquestV2ProgressReturn>;
    heroUnlockLevels(headers?: object): Promise<HeroUnlockLevelsReturn>;
    deckClassUnlockLevels(headers?: object): Promise<DeckClassUnlockLevelsReturn>;
    availableXPBonuses(headers?: object): Promise<AvailableXPBonusesReturn>;
    getDiscordInfo(headers?: object): Promise<GetDiscordInfoReturn>;
    getTwitchInfo(headers?: object): Promise<GetTwitchInfoReturn>;
    getFeaturedStreamers(headers?: object): Promise<GetFeaturedStreamersReturn>;
    getBanners(headers?: object): Promise<GetBannersReturn>;
    ping(headers?: object): Promise<PingReturn>;
    version(headers?: object): Promise<VersionReturn>;
}
export interface GetAuthTokenArgs {
    ethAuthProofString: string;
}
export interface GetAuthTokenReturn {
    status: boolean;
    jwtToken: string;
    address: string;
    account?: Account;
}
export interface GetSessionArgs {
}
export interface GetSessionReturn {
    address: string;
    account?: Account;
}
export interface MigrateAccountReturn {
    ok: boolean;
}
export interface RegisterAccountArgs {
    account: Account;
    captcha: string;
}
export interface RegisterAccountReturn {
    status: boolean;
    account: Account;
}
export interface GetAccountArgs {
    address: string;
}
export interface GetAccountReturn {
    account: Account;
}
export interface GetAccountByUsernameArgs {
    username: string;
}
export interface GetAccountByUsernameReturn {
    account: Account;
}
export interface GetAccountStatsArgs {
    address: string;
    seasons?: Array<number>;
}
export interface GetAccountStatsReturn {
    constructedStats: Array<AccountStat>;
    discoveryStats: Array<AccountStat>;
}
export interface AccountExistsArgs {
    address: string;
}
export interface AccountExistsReturn {
    exists: boolean;
    pending_migration: boolean;
}
export interface AccountExistsByNameArgs {
    name: string;
}
export interface AccountExistsByNameReturn {
    exists: boolean;
    pending_migration: boolean;
}
export interface UpdateAccountArgs {
    account: Account;
}
export interface UpdateAccountReturn {
    account: Account;
}
export interface SetInvitedByArgs {
    req: SetInvitedByRequest;
}
export interface SetInvitedByReturn {
    ok: boolean;
}
export interface GetPrivateSpectateCodeArgs {
    reset?: boolean;
}
export interface GetPrivateSpectateCodeReturn {
    code: string;
}
export interface ListNotificationsArgs {
}
export interface ListNotificationsReturn {
    notifications: Array<Notification>;
}
export interface SetNotificationsAsSeenArgs {
    notificationIDs: Array<number>;
}
export interface SetNotificationsAsSeenReturn {
    status: boolean;
}
export interface GetFriendPointsArgs {
    address: string;
}
export interface GetFriendPointsReturn {
    total: number;
    friends: Array<FriendPoints>;
}
export interface GetFriendPointsBySeasonArgs {
    address: string;
    season: number;
}
export interface GetFriendPointsBySeasonReturn {
    total: number;
    friends: Array<FriendPoints>;
}
export interface GetPointsGiftedArgs {
    address: string;
}
export interface GetPointsGiftedReturn {
    total: number;
    inviter: Account;
}
export interface GetStickersArgs {
}
export interface GetStickersReturn {
    stickers: Array<Sticker>;
}
export interface GetStickersBySeasonArgs {
    season: number;
}
export interface GetStickersBySeasonReturn {
    stickers: Array<Sticker>;
}
export interface GetStickerOwnershipArgs {
    accountAddress?: string;
}
export interface GetStickerOwnershipReturn {
    res: StickerOwnershipResponse;
}
export interface GetFeedArgs {
    page?: Page;
    req: GetFeedRequest;
}
export interface GetFeedReturn {
    page?: Page;
    res: Array<FeedEvent>;
}
export interface GetItemSummaryArgs {
    accountAddress: string;
    contractQuery?: boolean;
}
export interface GetItemSummaryReturn {
    summary: {
        [key: string]: ItemSummary;
    };
}
export interface GetItemSupplyArgs {
    tokenID: number;
}
export interface GetItemSupplyReturn {
    summary: {
        [key: string]: Item;
    };
}
export interface GetBatchItemSupplyArgs {
    tokenIDs: Array<number>;
}
export interface GetBatchItemSupplyReturn {
    summary: {
        [key: number]: {
            [key: string]: Item;
        };
    };
}
export interface GetItemSuppliesByTypeArgs {
    itemTypes: Array<ItemType>;
}
export interface GetItemSuppliesByTypeReturn {
    summary: {
        [key: number]: Array<ItemSupply>;
    };
}
export interface GetItemOwnershipByTypeArgs {
    accountAddress?: string;
    itemTypes?: Array<ItemType>;
}
export interface GetItemOwnershipByTypeReturn {
    items: Array<Item>;
}
export interface GetCardLibraryArgs {
    page?: Page;
}
export interface GetCardLibraryReturn {
    cards: Array<Card>;
}
export interface GetCardsByIDArgs {
    cardIDs: Array<number>;
}
export interface GetCardsByIDReturn {
    cards: Array<Card>;
}
export interface GetCardsByDeckStringArgs {
    deckString: string;
}
export interface GetCardsByDeckStringReturn {
    cards: Array<Card>;
}
export interface SearchCardsArgs {
    page?: Page;
    req: SearchCardsRequest;
}
export interface SearchCardsReturn {
    page?: Page;
    res: Array<CardWithBalance>;
}
export interface GetCardOwnershipArgs {
    accountAddress?: string;
    contractQuery?: boolean;
}
export interface GetCardOwnershipReturn {
    res: CardOwnershipResponse;
}
export interface GetPendingCardsArgs {
}
export interface GetPendingCardsReturn {
    res: Array<PendingCardsResponse>;
}
export interface ListDecksArgs {
    page?: Page;
}
export interface ListDecksReturn {
    page?: Page;
    res: Array<Deck>;
}
export interface SearchDecksArgs {
    page?: Page;
    req: SearchDecksRequest;
}
export interface SearchDecksReturn {
    page?: Page;
    res: Array<Deck>;
}
export interface CreateDeckArgs {
    req: CreateDeckRequest;
}
export interface CreateDeckReturn {
    res: Deck;
}
export interface UpdateDeckArgs {
    req: UpdateDeckRequest;
}
export interface UpdateDeckReturn {
    res: Deck;
}
export interface FavoriteDeckArgs {
    uuid: string;
}
export interface FavoriteDeckReturn {
    ok: boolean;
}
export interface UnfavoriteDeckArgs {
    uuid: string;
}
export interface UnfavoriteDeckReturn {
    ok: boolean;
}
export interface ToggleDeckFavoriteArgs {
    uuid: string;
}
export interface ToggleDeckFavoriteReturn {
    isFavorite: boolean;
}
export interface GetDeckArgs {
    req: DeckRequest;
}
export interface GetDeckReturn {
    res: Deck;
}
export interface CheckDeckArgs {
    req: CheckDeckRequest;
}
export interface CheckDeckReturn {
    res: CheckDeckResponse;
}
export interface DeleteDeckArgs {
    req: DeckRequest;
}
export interface DeleteDeckReturn {
    ok: boolean;
}
export interface SearchDeckRanksArgs {
    page?: Page;
    req: SearchDeckRanksRequest;
}
export interface SearchDeckRanksReturn {
    page?: Page;
    res: Array<DeckRank>;
}
export interface ListDeckRanksArgs {
    page?: Page;
    req: ListDeckRanksRequest;
}
export interface ListDeckRanksReturn {
    page?: Page;
    res: Array<DeckRankAccount>;
}
export interface MarkDeckNotNewArgs {
    uuid: string;
}
export interface MarkDeckNotNewReturn {
    ok: boolean;
}
export interface ListLeaderboardArgs {
    page?: Page;
    req: ListLeaderboardRequest;
}
export interface ListLeaderboardReturn {
    page?: Page;
    res: Array<LeaderboardEntry>;
}
export interface ListMatchesArgs {
    page?: Page;
    req: ListMatchesRequest;
}
export interface ListMatchesReturn {
    page?: Page;
    res: Array<Match>;
}
export interface GetMatchArgs {
    matchID: number;
}
export interface GetMatchReturn {
    match: Match;
}
export interface GetCurrentSeasonArgs {
}
export interface GetCurrentSeasonReturn {
    res: number;
}
export interface GetNextRewardsTimeArgs {
}
export interface GetNextRewardsTimeReturn {
    res: string;
}
export interface GetNextSeasonTimeArgs {
}
export interface GetNextSeasonTimeReturn {
    res: string;
}
export interface GetCurrentSeasonStartTimeArgs {
}
export interface GetCurrentSeasonStartTimeReturn {
    res: string;
}
export interface AccountLeaderboardArgs {
    page?: Page;
    req: AccountLeaderboardRequest;
}
export interface AccountLeaderboardReturn {
    page?: Page;
    res: Array<LeaderboardEntry>;
}
export interface GetMatchArchiveRecordsURIArgs {
    matchID: number;
    replayID: string;
}
export interface GetMatchArchiveRecordsURIReturn {
    ok: boolean;
    match?: Match;
    archiveIndexURI: string;
    recordURIs: Array<string>;
}
export interface GetMatchLiveRecordsURIArgs {
    matchID: number;
}
export interface GetMatchLiveRecordsURIReturn {
    ok: boolean;
    match?: Match;
    liveIndexURI: string;
}
export interface InternalMatchEndReturn {
    rewards: Array<Reward>;
}
export interface InternalAppendMatchArchiveRecordsArgs {
    matchID: number;
    index: number;
    jsonStringData: string;
}
export interface InternalAppendMatchArchiveRecordsReturn {
    status: boolean;
    uri: string;
}
export interface InternalAppendMatchLiveRecordsArgs {
    matchID: number;
    index: number;
    jsonStringData: string;
}
export interface InternalAppendMatchLiveRecordsReturn {
    status: boolean;
    uri: string;
}
export interface InternalConquestStatusArgs {
    address: string;
}
export interface InternalConquestStatusReturn {
    conquest: Conquest;
}
export interface InternalGetAccountArgs {
    address: string;
}
export interface InternalGetAccountReturn {
    account: Account;
}
export interface InternalGetPrivateSpectateCodeArgs {
    address: string;
}
export interface InternalGetPrivateSpectateCodeReturn {
    code: string;
}
export interface EnterConquestArgs {
    hero: Hero;
}
export interface EnterConquestReturn {
    status: boolean;
}
export interface ConquestStatusArgs {
}
export interface ConquestStatusReturn {
    conquest: Conquest;
}
export interface ConquestStatsArgs {
}
export interface ConquestStatsReturn {
    stats: ConquestStats;
}
export interface ConquestRewardsArgs {
}
export interface ConquestRewardsReturn {
    weeklyGolds: Array<WeeklyGolds>;
}
export interface ConquestPointsArgs {
}
export interface ConquestPointsReturn {
    points: number;
    nedeed: number;
}
export interface ConquestV2PoolArgs {
}
export interface ConquestV2PoolReturn {
    pool: number;
}
export interface ConquestV2ProgressArgs {
}
export interface ConquestV2ProgressReturn {
    progress: ConquestV2TreasureProgress;
}
export interface IAPVerifyGoogleProductsArgs {
    packageName: string;
    productId: string;
    token: string;
    address: string;
}
export interface HeroUnlockLevelsArgs {
}
export interface HeroUnlockLevelsReturn {
    res: {
        [key: string]: number;
    };
}
export interface DeckClassUnlockLevelsArgs {
}
export interface DeckClassUnlockLevelsReturn {
    res: {
        [key: string]: number;
    };
}
export interface AvailableXPBonusesArgs {
}
export interface AvailableXPBonusesReturn {
    res: number;
}
export interface ReportAccountReturn {
    ok: boolean;
}
export interface GetDiscordInfoArgs {
}
export interface GetDiscordInfoReturn {
    data: DiscordInfoResponse;
}
export interface GetTwitchInfoArgs {
}
export interface GetTwitchInfoReturn {
    data: TwitchInfoResponse;
}
export interface GetFeaturedStreamersArgs {
}
export interface GetFeaturedStreamersReturn {
    streamers: Array<TwitchFeaturedStreamer>;
}
export interface GetBannersArgs {
}
export interface GetBannersReturn {
    banners: Array<Banner>;
}
export interface PingArgs {
}
export interface PingReturn {
    status: boolean;
}
export interface VersionArgs {
}
export interface VersionReturn {
    version: Version;
}
export declare class SkyWeaverAPI implements SkyWeaverAPI {
    protected hostname: string;
    protected fetch: Fetch;
    protected path: string;
    constructor(hostname: string, fetch: Fetch);
    private url;
    getSession: (headers?: object) => Promise<GetSessionReturn>;
    getAccount: (args: GetAccountArgs, headers?: object) => Promise<GetAccountReturn>;
    getAccountByUsername: (args: GetAccountByUsernameArgs, headers?: object) => Promise<GetAccountByUsernameReturn>;
    getAccountStats: (args: GetAccountStatsArgs, headers?: object) => Promise<GetAccountStatsReturn>;
    accountExists: (args: AccountExistsArgs, headers?: object) => Promise<AccountExistsReturn>;
    accountExistsByName: (args: AccountExistsByNameArgs, headers?: object) => Promise<AccountExistsByNameReturn>;
    updateAccount: (args: UpdateAccountArgs, headers?: object) => Promise<UpdateAccountReturn>;
    getPrivateSpectateCode: (args: GetPrivateSpectateCodeArgs, headers?: object) => Promise<GetPrivateSpectateCodeReturn>;
    listNotifications: (headers?: object) => Promise<ListNotificationsReturn>;
    setNotificationsAsSeen: (args: SetNotificationsAsSeenArgs, headers?: object) => Promise<SetNotificationsAsSeenReturn>;
    getFriendPoints: (args: GetFriendPointsArgs, headers?: object) => Promise<GetFriendPointsReturn>;
    getFriendPointsBySeason: (args: GetFriendPointsBySeasonArgs, headers?: object) => Promise<GetFriendPointsBySeasonReturn>;
    getPointsGifted: (args: GetPointsGiftedArgs, headers?: object) => Promise<GetPointsGiftedReturn>;
    getStickers: (headers?: object) => Promise<GetStickersReturn>;
    getStickersBySeason: (args: GetStickersBySeasonArgs, headers?: object) => Promise<GetStickersBySeasonReturn>;
    getStickerOwnership: (args: GetStickerOwnershipArgs, headers?: object) => Promise<GetStickerOwnershipReturn>;
    getFeed: (args: GetFeedArgs, headers?: object) => Promise<GetFeedReturn>;
    getItemSummary: (args: GetItemSummaryArgs, headers?: object) => Promise<GetItemSummaryReturn>;
    getItemSupply: (args: GetItemSupplyArgs, headers?: object) => Promise<GetItemSupplyReturn>;
    getBatchItemSupply: (args: GetBatchItemSupplyArgs, headers?: object) => Promise<GetBatchItemSupplyReturn>;
    getItemSuppliesByType: (args: GetItemSuppliesByTypeArgs, headers?: object) => Promise<GetItemSuppliesByTypeReturn>;
    getItemOwnershipByType: (args: GetItemOwnershipByTypeArgs, headers?: object) => Promise<GetItemOwnershipByTypeReturn>;
    getCardLibrary: (args: GetCardLibraryArgs, headers?: object) => Promise<GetCardLibraryReturn>;
    getCardsByID: (args: GetCardsByIDArgs, headers?: object) => Promise<GetCardsByIDReturn>;
    getCardsByDeckString: (args: GetCardsByDeckStringArgs, headers?: object) => Promise<GetCardsByDeckStringReturn>;
    searchCards: (args: SearchCardsArgs, headers?: object) => Promise<SearchCardsReturn>;
    getCardOwnership: (args: GetCardOwnershipArgs, headers?: object) => Promise<GetCardOwnershipReturn>;
    getPendingCards: (headers?: object) => Promise<GetPendingCardsReturn>;
    listDecks: (args: ListDecksArgs, headers?: object) => Promise<ListDecksReturn>;
    searchDecks: (args: SearchDecksArgs, headers?: object) => Promise<SearchDecksReturn>;
    createDeck: (args: CreateDeckArgs, headers?: object) => Promise<CreateDeckReturn>;
    updateDeck: (args: UpdateDeckArgs, headers?: object) => Promise<UpdateDeckReturn>;
    favoriteDeck: (args: FavoriteDeckArgs, headers?: object) => Promise<FavoriteDeckReturn>;
    unfavoriteDeck: (args: UnfavoriteDeckArgs, headers?: object) => Promise<UnfavoriteDeckReturn>;
    toggleDeckFavorite: (args: ToggleDeckFavoriteArgs, headers?: object) => Promise<ToggleDeckFavoriteReturn>;
    getDeck: (args: GetDeckArgs, headers?: object) => Promise<GetDeckReturn>;
    checkDeck: (args: CheckDeckArgs, headers?: object) => Promise<CheckDeckReturn>;
    deleteDeck: (args: DeleteDeckArgs, headers?: object) => Promise<DeleteDeckReturn>;
    searchDeckRanks: (args: SearchDeckRanksArgs, headers?: object) => Promise<SearchDeckRanksReturn>;
    listDeckRanks: (args: ListDeckRanksArgs, headers?: object) => Promise<ListDeckRanksReturn>;
    markDeckNotNew: (args: MarkDeckNotNewArgs, headers?: object) => Promise<MarkDeckNotNewReturn>;
    listLeaderboard: (args: ListLeaderboardArgs, headers?: object) => Promise<ListLeaderboardReturn>;
    listMatches: (args: ListMatchesArgs, headers?: object) => Promise<ListMatchesReturn>;
    getMatch: (args: GetMatchArgs, headers?: object) => Promise<GetMatchReturn>;
    getCurrentSeason: (headers?: object) => Promise<GetCurrentSeasonReturn>;
    getNextRewardsTime: (headers?: object) => Promise<GetNextRewardsTimeReturn>;
    getNextSeasonTime: (headers?: object) => Promise<GetNextSeasonTimeReturn>;
    getCurrentSeasonStartTime: (headers?: object) => Promise<GetCurrentSeasonStartTimeReturn>;
    accountLeaderboard: (args: AccountLeaderboardArgs, headers?: object) => Promise<AccountLeaderboardReturn>;
    getMatchArchiveRecordsURI: (args: GetMatchArchiveRecordsURIArgs, headers?: object) => Promise<GetMatchArchiveRecordsURIReturn>;
    getMatchLiveRecordsURI: (args: GetMatchLiveRecordsURIArgs, headers?: object) => Promise<GetMatchLiveRecordsURIReturn>;
    conquestStatus: (headers?: object) => Promise<ConquestStatusReturn>;
    conquestStats: (headers?: object) => Promise<ConquestStatsReturn>;
    conquestRewards: (headers?: object) => Promise<ConquestRewardsReturn>;
    conquestPoints: (headers?: object) => Promise<ConquestPointsReturn>;
    heroUnlockLevels: (headers?: object) => Promise<HeroUnlockLevelsReturn>;
    deckClassUnlockLevels: (headers?: object) => Promise<DeckClassUnlockLevelsReturn>;
    availableXPBonuses: (headers?: object) => Promise<AvailableXPBonusesReturn>;
    getDiscordInfo: (headers?: object) => Promise<GetDiscordInfoReturn>;
    getTwitchInfo: (headers?: object) => Promise<GetTwitchInfoReturn>;
    getFeaturedStreamers: (headers?: object) => Promise<GetFeaturedStreamersReturn>;
    getBanners: (headers?: object) => Promise<GetBannersReturn>;
    ping: (headers?: object) => Promise<PingReturn>;
    version: (headers?: object) => Promise<VersionReturn>;
}
export interface WebRPCError extends Error {
    code: string;
    msg: string;
    status: number;
}
export declare type Fetch = (input: RequestInfo, init?: RequestInit) => Promise<Response>;
