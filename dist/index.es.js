/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

/* eslint-disable */
// WebRPC description and code-gen version
var WebRPCVersion = "v1";
// Schema version of your RIDL schema
var WebRPCSchemaVersion = "v0.3.0";
// Schema hash generated from your RIDL schema
var WebRPCSchemaHash = "bf3efdf3504c50d2ef8dd16b214905051dc2275c";
//
// Types
//
var AccountStatus;
(function (AccountStatus) {
    AccountStatus["ACTIVE"] = "ACTIVE";
    AccountStatus["SUSPENDED"] = "SUSPENDED";
    AccountStatus["BANNED"] = "BANNED";
    AccountStatus["VIP"] = "VIP";
    AccountStatus["FLAGGED"] = "FLAGGED";
    AccountStatus["TO_DELETE"] = "TO_DELETE";
    AccountStatus["DELETED"] = "DELETED";
})(AccountStatus || (AccountStatus = {}));
var PlayerRank;
(function (PlayerRank) {
    PlayerRank["UNKNOWN"] = "UNKNOWN";
    PlayerRank["WANDERER"] = "WANDERER";
    PlayerRank["RECRUIT"] = "RECRUIT";
    PlayerRank["APPRENTICE"] = "APPRENTICE";
    PlayerRank["SCHOLAR"] = "SCHOLAR";
    PlayerRank["PROPHET"] = "PROPHET";
    PlayerRank["MASTER"] = "MASTER";
    PlayerRank["GRANDMASTER"] = "GRANDMASTER";
})(PlayerRank || (PlayerRank = {}));
var ContractType;
(function (ContractType) {
    ContractType["UNKNOWN"] = "UNKNOWN";
    ContractType["SKYWEAVER_ASSETS"] = "SKYWEAVER_ASSETS";
})(ContractType || (ContractType = {}));
var ItemType;
(function (ItemType) {
    ItemType["UNKNOWN"] = "UNKNOWN";
    ItemType["USDC"] = "USDC";
    ItemType["SW_BASE_CARDS"] = "SW_BASE_CARDS";
    ItemType["SW_SILVER_DUST"] = "SW_SILVER_DUST";
    ItemType["SW_SILVER_CARDS"] = "SW_SILVER_CARDS";
    ItemType["SW_GOLD_CARDS"] = "SW_GOLD_CARDS";
    ItemType["SW_CONQUEST_TICKET"] = "SW_CONQUEST_TICKET";
    ItemType["SW_CRYSTALS"] = "SW_CRYSTALS";
    ItemType["SW_STICKERS"] = "SW_STICKERS";
    ItemType["SW_HERO_SKINS"] = "SW_HERO_SKINS";
    ItemType["SW_HERO"] = "SW_HERO";
})(ItemType || (ItemType = {}));
var FeedEventType;
(function (FeedEventType) {
    FeedEventType["LEVELUP"] = "LEVELUP";
    FeedEventType["MATCH"] = "MATCH";
    FeedEventType["REWARD"] = "REWARD";
    FeedEventType["TRADE"] = "TRADE";
    FeedEventType["RANKUP"] = "RANKUP";
    FeedEventType["LEADERBOARD_REWARD"] = "LEADERBOARD_REWARD";
    FeedEventType["HERO_UNLOCK"] = "HERO_UNLOCK";
    FeedEventType["IAP_CONQUEST_MINTING"] = "IAP_CONQUEST_MINTING";
    FeedEventType["DELAYED_REWARD"] = "DELAYED_REWARD";
    FeedEventType["DELAYED_REWARD_MINTED"] = "DELAYED_REWARD_MINTED";
    FeedEventType["STARTED_DECK_UNLOCK"] = "STARTED_DECK_UNLOCK";
    FeedEventType["CONQUEST_V2_REWARD"] = "CONQUEST_V2_REWARD";
})(FeedEventType || (FeedEventType = {}));
var Hero;
(function (Hero) {
    Hero["UNKNOWN"] = "UNKNOWN";
    Hero["ADA"] = "ADA";
    Hero["SAMYA"] = "SAMYA";
    Hero["FOX"] = "FOX";
    Hero["LOTUS"] = "LOTUS";
    Hero["TITUS"] = "TITUS";
    Hero["IRIS"] = "IRIS";
    Hero["BOURAN"] = "BOURAN";
    Hero["HORIK"] = "HORIK";
    Hero["ZOEY"] = "ZOEY";
    Hero["AXEL"] = "AXEL";
    Hero["ARI"] = "ARI";
    Hero["MIRA"] = "MIRA";
    Hero["MAI"] = "MAI";
    Hero["BANJO"] = "BANJO";
    Hero["SITTI"] = "SITTI";
})(Hero || (Hero = {}));
var DeckClass;
(function (DeckClass) {
    DeckClass["UNKNOWN_CLASS"] = "UNKNOWN_CLASS";
    DeckClass["STR"] = "STR";
    DeckClass["HRT"] = "HRT";
    DeckClass["AGY"] = "AGY";
    DeckClass["INT"] = "INT";
    DeckClass["WIS"] = "WIS";
    DeckClass["STH"] = "STH";
    DeckClass["STA"] = "STA";
    DeckClass["STI"] = "STI";
    DeckClass["STW"] = "STW";
    DeckClass["HRA"] = "HRA";
    DeckClass["HRI"] = "HRI";
    DeckClass["HRW"] = "HRW";
    DeckClass["AGI"] = "AGI";
    DeckClass["AGW"] = "AGW";
    DeckClass["INW"] = "INW";
})(DeckClass || (DeckClass = {}));
var CardType;
(function (CardType) {
    CardType["UNIT"] = "UNIT";
    CardType["SPELL"] = "SPELL";
})(CardType || (CardType = {}));
var CardKeyword;
(function (CardKeyword) {
    CardKeyword["ARMOR"] = "ARMOR";
    CardKeyword["STEALTH"] = "STEALTH";
    CardKeyword["GUARD"] = "GUARD";
    CardKeyword["BANNER"] = "BANNER";
    CardKeyword["WITHER"] = "WITHER";
    CardKeyword["DEATH"] = "DEATH";
})(CardKeyword || (CardKeyword = {}));
var CardElement;
(function (CardElement) {
    CardElement["WATER"] = "WATER";
    CardElement["FIRE"] = "FIRE";
    CardElement["EARTH"] = "EARTH";
    CardElement["AIR"] = "AIR";
    CardElement["MIND"] = "MIND";
    CardElement["METAL"] = "METAL";
    CardElement["LIGHT"] = "LIGHT";
    CardElement["DARK"] = "DARK";
})(CardElement || (CardElement = {}));
var CardStatus;
(function (CardStatus) {
    CardStatus["PLAY"] = "PLAY";
    CardStatus["BLOCKED"] = "BLOCKED";
    CardStatus["CODE"] = "CODE";
})(CardStatus || (CardStatus = {}));
var CardClass;
(function (CardClass) {
    CardClass["STR"] = "STR";
    CardClass["HRT"] = "HRT";
    CardClass["AGY"] = "AGY";
    CardClass["INT"] = "INT";
    CardClass["WIS"] = "WIS";
    CardClass["TOK"] = "TOK";
})(CardClass || (CardClass = {}));
var GameMode;
(function (GameMode) {
    GameMode["UNKNOWN"] = "UNKNOWN";
    GameMode["RANKED_CONSTRUCTED"] = "RANKED_CONSTRUCTED";
    GameMode["CHALLENGE_CONSTRUCTED"] = "CHALLENGE_CONSTRUCTED";
    GameMode["TUTORIAL"] = "TUTORIAL";
    GameMode["PRACTICE"] = "PRACTICE";
    GameMode["RANKED_DISCOVERY"] = "RANKED_DISCOVERY";
    GameMode["CONQUEST_CONSTRUCTED"] = "CONQUEST_CONSTRUCTED";
    GameMode["CONQUEST_DISCOVERY"] = "CONQUEST_DISCOVERY";
    GameMode["WARM_UP"] = "WARM_UP";
    GameMode["CHALLENGE_DISCOVERY"] = "CHALLENGE_DISCOVERY";
})(GameMode || (GameMode = {}));
var MatchStatus;
(function (MatchStatus) {
    MatchStatus["UNKNOWN"] = "UNKNOWN";
    MatchStatus["COMPLETED"] = "COMPLETED";
    MatchStatus["ABANDONED"] = "ABANDONED";
    MatchStatus["FORFEITED"] = "FORFEITED";
    MatchStatus["IN_PROGRESS"] = "IN_PROGRESS";
    MatchStatus["CRASHED"] = "CRASHED";
})(MatchStatus || (MatchStatus = {}));
var RewardType;
(function (RewardType) {
    RewardType["EXP"] = "EXP";
    RewardType["CARD"] = "CARD";
    RewardType["RANK"] = "RANK";
    RewardType["PRISM"] = "PRISM";
    RewardType["HERO"] = "HERO";
    RewardType["HERO_SKIN"] = "HERO_SKIN";
    RewardType["DECK"] = "DECK";
    RewardType["CONQUEST_POINTS"] = "CONQUEST_POINTS";
})(RewardType || (RewardType = {}));
var DeckType;
(function (DeckType) {
    DeckType["RANDOM"] = "RANDOM";
    DeckType["CUSTOM"] = "CUSTOM";
    DeckType["LOCKED_STARTER"] = "LOCKED_STARTER";
    DeckType["UNLOCKED_STARTER"] = "UNLOCKED_STARTER";
})(DeckType || (DeckType = {}));
var ConquestStatus;
(function (ConquestStatus) {
    ConquestStatus["UNKNOWN"] = "UNKNOWN";
    ConquestStatus["IN_PROGRESS"] = "IN_PROGRESS";
    ConquestStatus["REWARDS_PENDING"] = "REWARDS_PENDING";
    ConquestStatus["COMPLETED"] = "COMPLETED";
})(ConquestStatus || (ConquestStatus = {}));
var ConquestMatchResult;
(function (ConquestMatchResult) {
    ConquestMatchResult["UNKNOWN"] = "UNKNOWN";
    ConquestMatchResult["WIN"] = "WIN";
    ConquestMatchResult["LOSS"] = "LOSS";
    ConquestMatchResult["DRAW"] = "DRAW";
})(ConquestMatchResult || (ConquestMatchResult = {}));
var SortOrder;
(function (SortOrder) {
    SortOrder["DESC"] = "DESC";
    SortOrder["ASC"] = "ASC";
})(SortOrder || (SortOrder = {}));
var BannerType;
(function (BannerType) {
    BannerType["INFO"] = "INFO";
    BannerType["WARNING"] = "WARNING";
    BannerType["EMERGENCY"] = "EMERGENCY";
})(BannerType || (BannerType = {}));
var NotificationType;
(function (NotificationType) {
    NotificationType["LEADERBOARD_REWARD"] = "LEADERBOARD_REWARD";
    NotificationType["CONQUEST_V2_REWARD"] = "CONQUEST_V2_REWARD";
})(NotificationType || (NotificationType = {}));
//
// Client
//
var SkyWeaverAPI = /** @class */ (function () {
    function SkyWeaverAPI(hostname, fetch) {
        var _this = this;
        this.path = '/rpc/SkyWeaverAPI/';
        this.getSession = function (headers) {
            return _this.fetch(_this.url('GetSession'), createHTTPRequest({}, headers)).then(function (res) {
                return buildResponse(res).then(function (_data) {
                    return {
                        address: (_data.address),
                        account: (_data.account)
                    };
                });
            });
        };
        this.getAccount = function (args, headers) {
            return _this.fetch(_this.url('GetAccount'), createHTTPRequest(args, headers)).then(function (res) {
                return buildResponse(res).then(function (_data) {
                    return {
                        account: (_data.account)
                    };
                });
            });
        };
        this.getAccountByUsername = function (args, headers) {
            return _this.fetch(_this.url('GetAccountByUsername'), createHTTPRequest(args, headers)).then(function (res) {
                return buildResponse(res).then(function (_data) {
                    return {
                        account: (_data.account)
                    };
                });
            });
        };
        this.getAccountStats = function (args, headers) {
            return _this.fetch(_this.url('GetAccountStats'), createHTTPRequest(args, headers)).then(function (res) {
                return buildResponse(res).then(function (_data) {
                    return {
                        constructedStats: (_data.constructedStats),
                        discoveryStats: (_data.discoveryStats)
                    };
                });
            });
        };
        this.accountExists = function (args, headers) {
            return _this.fetch(_this.url('AccountExists'), createHTTPRequest(args, headers)).then(function (res) {
                return buildResponse(res).then(function (_data) {
                    return {
                        exists: (_data.exists),
                        pending_migration: (_data.pending_migration)
                    };
                });
            });
        };
        this.accountExistsByName = function (args, headers) {
            return _this.fetch(_this.url('AccountExistsByName'), createHTTPRequest(args, headers)).then(function (res) {
                return buildResponse(res).then(function (_data) {
                    return {
                        exists: (_data.exists),
                        pending_migration: (_data.pending_migration)
                    };
                });
            });
        };
        this.updateAccount = function (args, headers) {
            return _this.fetch(_this.url('UpdateAccount'), createHTTPRequest(args, headers)).then(function (res) {
                return buildResponse(res).then(function (_data) {
                    return {
                        account: (_data.account)
                    };
                });
            });
        };
        this.getPrivateSpectateCode = function (args, headers) {
            return _this.fetch(_this.url('GetPrivateSpectateCode'), createHTTPRequest(args, headers)).then(function (res) {
                return buildResponse(res).then(function (_data) {
                    return {
                        code: (_data.code)
                    };
                });
            });
        };
        this.listNotifications = function (headers) {
            return _this.fetch(_this.url('ListNotifications'), createHTTPRequest({}, headers)).then(function (res) {
                return buildResponse(res).then(function (_data) {
                    return {
                        notifications: (_data.notifications)
                    };
                });
            });
        };
        this.setNotificationsAsSeen = function (args, headers) {
            return _this.fetch(_this.url('SetNotificationsAsSeen'), createHTTPRequest(args, headers)).then(function (res) {
                return buildResponse(res).then(function (_data) {
                    return {
                        status: (_data.status)
                    };
                });
            });
        };
        this.getFriendPoints = function (args, headers) {
            return _this.fetch(_this.url('GetFriendPoints'), createHTTPRequest(args, headers)).then(function (res) {
                return buildResponse(res).then(function (_data) {
                    return {
                        total: (_data.total),
                        friends: (_data.friends)
                    };
                });
            });
        };
        this.getFriendPointsBySeason = function (args, headers) {
            return _this.fetch(_this.url('GetFriendPointsBySeason'), createHTTPRequest(args, headers)).then(function (res) {
                return buildResponse(res).then(function (_data) {
                    return {
                        total: (_data.total),
                        friends: (_data.friends)
                    };
                });
            });
        };
        this.getPointsGifted = function (args, headers) {
            return _this.fetch(_this.url('GetPointsGifted'), createHTTPRequest(args, headers)).then(function (res) {
                return buildResponse(res).then(function (_data) {
                    return {
                        total: (_data.total),
                        inviter: (_data.inviter)
                    };
                });
            });
        };
        this.getStickers = function (headers) {
            return _this.fetch(_this.url('GetStickers'), createHTTPRequest({}, headers)).then(function (res) {
                return buildResponse(res).then(function (_data) {
                    return {
                        stickers: (_data.stickers)
                    };
                });
            });
        };
        this.getStickersBySeason = function (args, headers) {
            return _this.fetch(_this.url('GetStickersBySeason'), createHTTPRequest(args, headers)).then(function (res) {
                return buildResponse(res).then(function (_data) {
                    return {
                        stickers: (_data.stickers)
                    };
                });
            });
        };
        this.getStickerOwnership = function (args, headers) {
            return _this.fetch(_this.url('GetStickerOwnership'), createHTTPRequest(args, headers)).then(function (res) {
                return buildResponse(res).then(function (_data) {
                    return {
                        res: (_data.res)
                    };
                });
            });
        };
        this.getFeed = function (args, headers) {
            return _this.fetch(_this.url('GetFeed'), createHTTPRequest(args, headers)).then(function (res) {
                return buildResponse(res).then(function (_data) {
                    return {
                        page: (_data.page),
                        res: (_data.res)
                    };
                });
            });
        };
        this.getItemSummary = function (args, headers) {
            return _this.fetch(_this.url('GetItemSummary'), createHTTPRequest(args, headers)).then(function (res) {
                return buildResponse(res).then(function (_data) {
                    return {
                        summary: (_data.summary)
                    };
                });
            });
        };
        this.getItemSupply = function (args, headers) {
            return _this.fetch(_this.url('GetItemSupply'), createHTTPRequest(args, headers)).then(function (res) {
                return buildResponse(res).then(function (_data) {
                    return {
                        summary: (_data.summary)
                    };
                });
            });
        };
        this.getBatchItemSupply = function (args, headers) {
            return _this.fetch(_this.url('GetBatchItemSupply'), createHTTPRequest(args, headers)).then(function (res) {
                return buildResponse(res).then(function (_data) {
                    return {
                        summary: (_data.summary)
                    };
                });
            });
        };
        this.getItemSuppliesByType = function (args, headers) {
            return _this.fetch(_this.url('GetItemSuppliesByType'), createHTTPRequest(args, headers)).then(function (res) {
                return buildResponse(res).then(function (_data) {
                    return {
                        summary: (_data.summary)
                    };
                });
            });
        };
        this.getItemOwnershipByType = function (args, headers) {
            return _this.fetch(_this.url('GetItemOwnershipByType'), createHTTPRequest(args, headers)).then(function (res) {
                return buildResponse(res).then(function (_data) {
                    return {
                        items: (_data.items)
                    };
                });
            });
        };
        this.getCardLibrary = function (args, headers) {
            return _this.fetch(_this.url('GetCardLibrary'), createHTTPRequest(args, headers)).then(function (res) {
                return buildResponse(res).then(function (_data) {
                    return {
                        cards: (_data.cards)
                    };
                });
            });
        };
        this.getCardsByID = function (args, headers) {
            return _this.fetch(_this.url('GetCardsByID'), createHTTPRequest(args, headers)).then(function (res) {
                return buildResponse(res).then(function (_data) {
                    return {
                        cards: (_data.cards)
                    };
                });
            });
        };
        this.getCardsByDeckString = function (args, headers) {
            return _this.fetch(_this.url('GetCardsByDeckString'), createHTTPRequest(args, headers)).then(function (res) {
                return buildResponse(res).then(function (_data) {
                    return {
                        cards: (_data.cards)
                    };
                });
            });
        };
        this.searchCards = function (args, headers) {
            return _this.fetch(_this.url('SearchCards'), createHTTPRequest(args, headers)).then(function (res) {
                return buildResponse(res).then(function (_data) {
                    return {
                        page: (_data.page),
                        res: (_data.res)
                    };
                });
            });
        };
        this.getCardOwnership = function (args, headers) {
            return _this.fetch(_this.url('GetCardOwnership'), createHTTPRequest(args, headers)).then(function (res) {
                return buildResponse(res).then(function (_data) {
                    return {
                        res: (_data.res)
                    };
                });
            });
        };
        this.getPendingCards = function (headers) {
            return _this.fetch(_this.url('GetPendingCards'), createHTTPRequest({}, headers)).then(function (res) {
                return buildResponse(res).then(function (_data) {
                    return {
                        res: (_data.res)
                    };
                });
            });
        };
        this.listDecks = function (args, headers) {
            return _this.fetch(_this.url('ListDecks'), createHTTPRequest(args, headers)).then(function (res) {
                return buildResponse(res).then(function (_data) {
                    return {
                        page: (_data.page),
                        res: (_data.res)
                    };
                });
            });
        };
        this.searchDecks = function (args, headers) {
            return _this.fetch(_this.url('SearchDecks'), createHTTPRequest(args, headers)).then(function (res) {
                return buildResponse(res).then(function (_data) {
                    return {
                        page: (_data.page),
                        res: (_data.res)
                    };
                });
            });
        };
        this.createDeck = function (args, headers) {
            return _this.fetch(_this.url('CreateDeck'), createHTTPRequest(args, headers)).then(function (res) {
                return buildResponse(res).then(function (_data) {
                    return {
                        res: (_data.res)
                    };
                });
            });
        };
        this.updateDeck = function (args, headers) {
            return _this.fetch(_this.url('UpdateDeck'), createHTTPRequest(args, headers)).then(function (res) {
                return buildResponse(res).then(function (_data) {
                    return {
                        res: (_data.res)
                    };
                });
            });
        };
        this.favoriteDeck = function (args, headers) {
            return _this.fetch(_this.url('FavoriteDeck'), createHTTPRequest(args, headers)).then(function (res) {
                return buildResponse(res).then(function (_data) {
                    return {
                        ok: (_data.ok)
                    };
                });
            });
        };
        this.unfavoriteDeck = function (args, headers) {
            return _this.fetch(_this.url('UnfavoriteDeck'), createHTTPRequest(args, headers)).then(function (res) {
                return buildResponse(res).then(function (_data) {
                    return {
                        ok: (_data.ok)
                    };
                });
            });
        };
        this.toggleDeckFavorite = function (args, headers) {
            return _this.fetch(_this.url('ToggleDeckFavorite'), createHTTPRequest(args, headers)).then(function (res) {
                return buildResponse(res).then(function (_data) {
                    return {
                        isFavorite: (_data.isFavorite)
                    };
                });
            });
        };
        this.getDeck = function (args, headers) {
            return _this.fetch(_this.url('GetDeck'), createHTTPRequest(args, headers)).then(function (res) {
                return buildResponse(res).then(function (_data) {
                    return {
                        res: (_data.res)
                    };
                });
            });
        };
        this.checkDeck = function (args, headers) {
            return _this.fetch(_this.url('CheckDeck'), createHTTPRequest(args, headers)).then(function (res) {
                return buildResponse(res).then(function (_data) {
                    return {
                        res: (_data.res)
                    };
                });
            });
        };
        this.deleteDeck = function (args, headers) {
            return _this.fetch(_this.url('DeleteDeck'), createHTTPRequest(args, headers)).then(function (res) {
                return buildResponse(res).then(function (_data) {
                    return {
                        ok: (_data.ok)
                    };
                });
            });
        };
        this.searchDeckRanks = function (args, headers) {
            return _this.fetch(_this.url('SearchDeckRanks'), createHTTPRequest(args, headers)).then(function (res) {
                return buildResponse(res).then(function (_data) {
                    return {
                        page: (_data.page),
                        res: (_data.res)
                    };
                });
            });
        };
        this.listDeckRanks = function (args, headers) {
            return _this.fetch(_this.url('ListDeckRanks'), createHTTPRequest(args, headers)).then(function (res) {
                return buildResponse(res).then(function (_data) {
                    return {
                        page: (_data.page),
                        res: (_data.res)
                    };
                });
            });
        };
        this.markDeckNotNew = function (args, headers) {
            return _this.fetch(_this.url('MarkDeckNotNew'), createHTTPRequest(args, headers)).then(function (res) {
                return buildResponse(res).then(function (_data) {
                    return {
                        ok: (_data.ok)
                    };
                });
            });
        };
        this.listLeaderboard = function (args, headers) {
            return _this.fetch(_this.url('ListLeaderboard'), createHTTPRequest(args, headers)).then(function (res) {
                return buildResponse(res).then(function (_data) {
                    return {
                        page: (_data.page),
                        res: (_data.res)
                    };
                });
            });
        };
        this.listMatches = function (args, headers) {
            return _this.fetch(_this.url('ListMatches'), createHTTPRequest(args, headers)).then(function (res) {
                return buildResponse(res).then(function (_data) {
                    return {
                        page: (_data.page),
                        res: (_data.res)
                    };
                });
            });
        };
        this.getMatch = function (args, headers) {
            return _this.fetch(_this.url('GetMatch'), createHTTPRequest(args, headers)).then(function (res) {
                return buildResponse(res).then(function (_data) {
                    return {
                        match: (_data.match)
                    };
                });
            });
        };
        this.getCurrentSeason = function (headers) {
            return _this.fetch(_this.url('GetCurrentSeason'), createHTTPRequest({}, headers)).then(function (res) {
                return buildResponse(res).then(function (_data) {
                    return {
                        res: (_data.res)
                    };
                });
            });
        };
        this.getNextRewardsTime = function (headers) {
            return _this.fetch(_this.url('GetNextRewardsTime'), createHTTPRequest({}, headers)).then(function (res) {
                return buildResponse(res).then(function (_data) {
                    return {
                        res: (_data.res)
                    };
                });
            });
        };
        this.getNextSeasonTime = function (headers) {
            return _this.fetch(_this.url('GetNextSeasonTime'), createHTTPRequest({}, headers)).then(function (res) {
                return buildResponse(res).then(function (_data) {
                    return {
                        res: (_data.res)
                    };
                });
            });
        };
        this.getCurrentSeasonStartTime = function (headers) {
            return _this.fetch(_this.url('GetCurrentSeasonStartTime'), createHTTPRequest({}, headers)).then(function (res) {
                return buildResponse(res).then(function (_data) {
                    return {
                        res: (_data.res)
                    };
                });
            });
        };
        this.accountLeaderboard = function (args, headers) {
            return _this.fetch(_this.url('AccountLeaderboard'), createHTTPRequest(args, headers)).then(function (res) {
                return buildResponse(res).then(function (_data) {
                    return {
                        page: (_data.page),
                        res: (_data.res)
                    };
                });
            });
        };
        this.getMatchArchiveRecordsURI = function (args, headers) {
            return _this.fetch(_this.url('GetMatchArchiveRecordsURI'), createHTTPRequest(args, headers)).then(function (res) {
                return buildResponse(res).then(function (_data) {
                    return {
                        ok: (_data.ok),
                        match: (_data.match),
                        archiveIndexURI: (_data.archiveIndexURI),
                        recordURIs: (_data.recordURIs)
                    };
                });
            });
        };
        this.getMatchLiveRecordsURI = function (args, headers) {
            return _this.fetch(_this.url('GetMatchLiveRecordsURI'), createHTTPRequest(args, headers)).then(function (res) {
                return buildResponse(res).then(function (_data) {
                    return {
                        ok: (_data.ok),
                        match: (_data.match),
                        liveIndexURI: (_data.liveIndexURI)
                    };
                });
            });
        };
        this.conquestStatus = function (headers) {
            return _this.fetch(_this.url('ConquestStatus'), createHTTPRequest({}, headers)).then(function (res) {
                return buildResponse(res).then(function (_data) {
                    return {
                        conquest: (_data.conquest)
                    };
                });
            });
        };
        this.conquestStats = function (headers) {
            return _this.fetch(_this.url('ConquestStats'), createHTTPRequest({}, headers)).then(function (res) {
                return buildResponse(res).then(function (_data) {
                    return {
                        stats: (_data.stats)
                    };
                });
            });
        };
        this.conquestRewards = function (headers) {
            return _this.fetch(_this.url('ConquestRewards'), createHTTPRequest({}, headers)).then(function (res) {
                return buildResponse(res).then(function (_data) {
                    return {
                        weeklyGolds: (_data.weeklyGolds)
                    };
                });
            });
        };
        this.conquestPoints = function (headers) {
            return _this.fetch(_this.url('ConquestPoints'), createHTTPRequest({}, headers)).then(function (res) {
                return buildResponse(res).then(function (_data) {
                    return {
                        points: (_data.points),
                        nedeed: (_data.nedeed)
                    };
                });
            });
        };
        this.heroUnlockLevels = function (headers) {
            return _this.fetch(_this.url('HeroUnlockLevels'), createHTTPRequest({}, headers)).then(function (res) {
                return buildResponse(res).then(function (_data) {
                    return {
                        res: (_data.res)
                    };
                });
            });
        };
        this.deckClassUnlockLevels = function (headers) {
            return _this.fetch(_this.url('DeckClassUnlockLevels'), createHTTPRequest({}, headers)).then(function (res) {
                return buildResponse(res).then(function (_data) {
                    return {
                        res: (_data.res)
                    };
                });
            });
        };
        this.availableXPBonuses = function (headers) {
            return _this.fetch(_this.url('AvailableXPBonuses'), createHTTPRequest({}, headers)).then(function (res) {
                return buildResponse(res).then(function (_data) {
                    return {
                        res: (_data.res)
                    };
                });
            });
        };
        this.getDiscordInfo = function (headers) {
            return _this.fetch(_this.url('GetDiscordInfo'), createHTTPRequest({}, headers)).then(function (res) {
                return buildResponse(res).then(function (_data) {
                    return {
                        data: (_data.data)
                    };
                });
            });
        };
        this.getTwitchInfo = function (headers) {
            return _this.fetch(_this.url('GetTwitchInfo'), createHTTPRequest({}, headers)).then(function (res) {
                return buildResponse(res).then(function (_data) {
                    return {
                        data: (_data.data)
                    };
                });
            });
        };
        this.getFeaturedStreamers = function (headers) {
            return _this.fetch(_this.url('GetFeaturedStreamers'), createHTTPRequest({}, headers)).then(function (res) {
                return buildResponse(res).then(function (_data) {
                    return {
                        streamers: (_data.streamers)
                    };
                });
            });
        };
        this.getBanners = function (headers) {
            return _this.fetch(_this.url('GetBanners'), createHTTPRequest({}, headers)).then(function (res) {
                return buildResponse(res).then(function (_data) {
                    return {
                        banners: (_data.banners)
                    };
                });
            });
        };
        this.gMListBanners = function (headers) {
            return _this.fetch(_this.url('GMListBanners'), createHTTPRequest({}, headers)).then(function (res) {
                return buildResponse(res).then(function (_data) {
                    return {
                        banners: (_data.banners)
                    };
                });
            });
        };
        this.ping = function (headers) {
            return _this.fetch(_this.url('Ping'), createHTTPRequest({}, headers)).then(function (res) {
                return buildResponse(res).then(function (_data) {
                    return {
                        status: (_data.status)
                    };
                });
            });
        };
        this.version = function (headers) {
            return _this.fetch(_this.url('Version'), createHTTPRequest({}, headers)).then(function (res) {
                return buildResponse(res).then(function (_data) {
                    return {
                        version: (_data.version)
                    };
                });
            });
        };
        this.hostname = hostname;
        this.fetch = fetch;
    }
    SkyWeaverAPI.prototype.url = function (name) {
        return this.hostname + this.path + name;
    };
    return SkyWeaverAPI;
}());
var createHTTPRequest = function (body, headers) {
    if (body === void 0) { body = {}; }
    if (headers === void 0) { headers = {}; }
    return {
        method: 'POST',
        headers: __assign(__assign({}, headers), { 'Content-Type': 'application/json' }),
        body: JSON.stringify(body || {})
    };
};
var buildResponse = function (res) {
    return res.text().then(function (text) {
        var data;
        try {
            data = JSON.parse(text);
        }
        catch (err) {
            throw { code: 'unknown', msg: "expecting JSON, got: ".concat(text), status: res.status };
        }
        if (!res.ok) {
            throw data; // webrpc error response
        }
        return data;
    });
};

var SkyweaverAPIClient = /** @class */ (function (_super) {
    __extends(SkyweaverAPIClient, _super);
    function SkyweaverAPIClient(apiAccessToken) {
        var _this = _super.call(this, 'https://api.skyweaver.net', fetch) || this;
        _this._fetch = function (input, init) { return __awaiter(_this, void 0, void 0, function () {
            var response, text, errorPayload;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Headers
                        init.headers = __assign(__assign({}, init.headers), this._headers);
                        return [4 /*yield*/, global.fetch(input, init)];
                    case 1:
                        response = _a.sent();
                        if (!!response.ok) return [3 /*break*/, 3];
                        return [4 /*yield*/, response.text()];
                    case 2:
                        text = _a.sent();
                        try {
                            errorPayload = JSON.parse(text);
                            throw new Error(errorPayload);
                        }
                        catch (err) {
                            throw new Error(text);
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, response];
                }
            });
        }); };
        _this._headers = {};
        _this._authToken = apiAccessToken;
        if (!apiAccessToken || apiAccessToken === '') {
            throw new Error('Skyweaver API config error -- please request api token at https://request-api-key.skyweaver.net');
        }
        // TODO(future fix), see webrpc https://github.com/webrpc/webrpc/pull/103
        _this.fetch = function (a, b) { return _this._fetch(a, b); };
        return _this;
    }
    Object.defineProperty(SkyweaverAPIClient.prototype, "authToken", {
        get: function () {
            return this._authToken;
        },
        set: function (authToken) {
            this._headers = {};
            this._authToken = authToken;
            this._headers['X-Client-Version'] = WebRPCSchemaHash;
            if (this.authToken && this.authToken.length > 0) {
                this._headers['Authorization'] = "BEARER ".concat(this.authToken);
            }
        },
        enumerable: false,
        configurable: true
    });
    return SkyweaverAPIClient;
}(SkyWeaverAPI));

export { AccountStatus, BannerType, CardClass, CardElement, CardKeyword, CardStatus, CardType, ConquestMatchResult, ConquestStatus, ContractType, DeckClass, DeckType, FeedEventType, GameMode, Hero, ItemType, MatchStatus, NotificationType, PlayerRank, RewardType, SkyWeaverAPI, SkyweaverAPIClient, SortOrder, WebRPCSchemaHash, WebRPCSchemaVersion, WebRPCVersion };
