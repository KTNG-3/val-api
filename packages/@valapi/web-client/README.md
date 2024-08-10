[githubrepo_image]: https://github.com/valapi/.github/blob/main/128_valapi.png?raw=true
[githubrepo_url]: https://github.com/valapi
[download_image]: https://badgen.net/npm/dt/@valapi/web-client?icon=npm
[download_url]: https://www.npmjs.com/package/@valapi/web-client
[size_image]: https://packagephobia.com/badge?p=@valapi/web-client
[size_url]: https://packagephobia.com/result?p=@valapi/web-client
[vulnerabilities_image]: https://snyk.io/test/npm/@valapi/web-client/badge.svg
[vulnerabilities_url]: https://snyk.io/test/npm/@valapi/web-client
[license_image]: https://badgen.net/badge/license/MIT/blue
[license_url]: https://github.com/valapi/.github/blob/main/LICENSE
[github_image]: https://badgen.net/badge/icon/github?icon=github&label
[github_url]: https://github.com/valapi/node-valapi/tree/master/packages/@valapi/web-client
[discord_image]: https://badgen.net/badge/icon/discord?icon=discord&label
[discord_url]: https://discord.gg/pbyWbUYjyt

<div align="center">
  
# Valorant API - Web Client
  
[![Profile][githubrepo_image]][github_url]

Web API

[![Downloads][download_image]][download_url]
[![install size][size_image]][size_url]
[![Known Vulnerabilities][vulnerabilities_image]][vulnerabilities_url]

[![LICENSE][license_image]][license_url]
[![Github][github_image]][github_url]
[![Discord][discord_image]][discord_url]

Documentation: [valapi.github.io/docs](https://valapi.github.io/docs)

Guide: [valapi.github.io/guide](https://valapi.github.io/guide)

</div>

---

> -   **@valapi/web-client** isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Riot Games properties. Riot Games, and all associated properties are trademarks or registered trademarks of Riot Games, Inc.
> -   **@valapi/web-client** was created under [Riot Games' "Legal Jibber Jabber"](https://www.riotgames.com/en/legal) policy using assets owned by Riot Games. Riot Games does not endorse or sponsor this project.
> -   [MIT License][license_url]

## Installation

**NPM:**

```bash
npm install @valapi/web-client
```

**PNPM:**

```bash
pnpm add @valapi/web-client
```

## Guide

```typescript
import { WebClient } from "@valapi/web-client";
```

```typescript
const client = new WebClient({
    user: auth.toJSON(),
    region: await auth.regionTokenization()
});
```

### API

```typescript
const userInfo = await client.getUserInfo();

console.log(userInfo.data);
```

```typescript
const mapId = "match-id-1234567890";
const matchDetails = await client.Match.fetchMatchDetails(mapId);

console.log(matchDetails.data);
```

```typescript
const wallet = await client.Store.getWallet(subject);

console.log(wallet.data);
```
