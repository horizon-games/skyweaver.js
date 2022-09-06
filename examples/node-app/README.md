Skyweaver API node-app example
==============================

Welcome to the `skyweaver.js` API example for node servers.

Please note that `skyweaver.js` for node recommends node v18+, as it relies on
the new `fetch` method available in v18 of node. However, you can also use a polyfill with
some extra work, but we recommend to just use node v18.


## Getting Started

Please first make sure you have a Skyweaver Developer API Key for your project.

You can request an API key at https://request-api-key.skyweaver.net

**Best place to start:** [read the example source here](src/main.ts) :)


## Docs / usage

The skyweaver.js SDK provides type-safe access to the Skyweaver API. The best
reference is to read the [`Client API interface`](/src/skyweaver-api.gen.ts) to
learn the available methods.

Once you have an API key, next steps:

1. cd skyweaver.js/examples/node-app
2. yarn install
3. update the [example source](src/main.ts) to set `apiAccessToken` with your api key
4. yarn dev
5. have fun :D


## Support

If you have any questions, please visit our discord at https://discord.gg/skyweaver
and ask in our #talk-to-the-devs channel.

Wishing you all the best and welcome any feedback :)

-Horizon team
