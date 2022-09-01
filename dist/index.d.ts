export * from './skyweaver-api.gen';
import { SkyWeaverAPI as BaseSkyweaverAPI } from './skyweaver-api.gen';
export declare class SkyweaverAPIClient extends BaseSkyweaverAPI {
    private _authToken?;
    private _headers;
    constructor(apiAccessToken?: string);
    get authToken(): string | undefined;
    set authToken(authToken: string | undefined);
    _fetch: (input: RequestInfo, init?: RequestInit) => Promise<Response>;
}
