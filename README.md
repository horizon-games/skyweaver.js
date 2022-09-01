skyweaver.js
============

Skyweaver API & Developer SDK for Web, React Native and Nodejs.

The skyweaver.js SDK provides type-safe access to the Skyweaver API. The best
reference is to read the [`Client API interface`](/src/skyweaver-api.gen.ts) to
learn the available methods and check out the [examples](/examples/). The



## Install

`npm install skyweaver`

or

`yarn add skyweaver`



## Request a Skyweaver API Key

https://developers.skyweaver.net


## Examples

Please see our [web](/examples/web-app/) and [node](/examples/node-app/) examples using `skyweaver.js`


## Note to developers

The Skyweaver API is built on [webrpc](https://github.com/webrpc/webrpc), which code-generates
the API client source into a single file: [/src/skyweaver-api.gen.ts](/src/skyweaver-api.gen.ts).

The source is very readable and a great reference for the capabilities of the API. Simply jump to
`export interface SkyWeaverAPI` in the source to view the interface type which defines all RPC
methods/endpoints of the Skyweaver API.


## Support

If you have any questions, please visit our discord at https://discord.gg/skyweaver
and ask in our #talk-to-the-devs channel.

Wishing you all the best and welcome any feedback :)

-Horizon team
