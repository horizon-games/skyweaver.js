export * from './skyweaver-api.gen'

import { SkyWeaverAPI as BaseSkyweaverAPI, WebRPCSchemaHash } from './skyweaver-api.gen'

export class SkyweaverAPIClient extends BaseSkyweaverAPI {
  private _authToken?: string
  private _headers: { [key: string]: any }

  constructor(apiAccessToken?: string) {
    super('https://api.skyweaver.net', fetch)

    this._headers = {}
    this._authToken = apiAccessToken

    if (!apiAccessToken || apiAccessToken === '') {
      throw new Error('Skyweaver API config error -- please request api token at https://developers.skyweaver.net')
    }

    // TODO(future fix), see webrpc https://github.com/webrpc/webrpc/pull/103
    this.fetch = (a, b) => this._fetch(a, b)
  }

  get authToken(): string | undefined {
    return this._authToken
  }

  set authToken(authToken: string | undefined) {
    this._headers = {}
    this._authToken = authToken

    this._headers['X-Client-Version'] = WebRPCSchemaHash
    if (this.authToken && this.authToken.length > 0) {
      this._headers['Authorization'] = `BEARER ${this.authToken}`
    }
  }

  _fetch = async (input: RequestInfo, init?: RequestInit): Promise<Response> => {
    // Headers
    init!.headers = { ...init!.headers, ...this._headers }

    // Request
    const response = await global.fetch(input, init)

    if (!response.ok) {
      const text = await response.text()
      try {
        const errorPayload = JSON.parse(text)
        throw new Error(errorPayload)
      } catch (err) {
        throw new Error(text)
      }
    }

    return response
  }
}
