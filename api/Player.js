//import
const AxiosClient = require('../resources/request');

class Player {
    constructor(data) {
        this.Account = data
    }

    /**
    */
    async GetUserInfo() {
        const Account = this.Account;
        const axiosClient = new AxiosClient({
            cookie: Account.request.cookie,
            headers: Account.request.headers,
        });

        const response = await axiosClient.post(`https://auth.riotgames.com/userinfo`);

        return response.data;
    }

    /**
    * @param {string} puuid PlayerUUID
    */
    async FetchPlayer(puuid) {
        const Account = this.Account;
        const axiosClient = new AxiosClient({
            cookie: Account.request.cookie,
            headers: Account.request.headers,
        });

        const response = await axiosClient.get(Account.url.playerData + `/mmr/v1/players/${puuid}`);

        return response.data;
    }

    /**
    * @param {string} puuid PlayerUUID
    */
     async GetUsername(puuid) {
        const Account = this.Account;
        const axiosClient = new AxiosClient({
            cookie: Account.request.cookie,
            headers: Account.request.headers,
        });

        const response = await axiosClient.put(Account.url.playerData + `/name-service/v2/players`, [
            `${puuid}`
        ]);

        return response.data;
    }

    /**
    * @param {string} puuid PlayerUUID
    * @param {string} queueId QueueID
    * @param {number} startIndex startIndex
    * @param {number} endIndex endIndex
    */
    async FetchCompetitiveUpdates(puuid, queueId = null, startIndex = 0, endIndex = 10) {
        const Account = this.Account;
        const axiosClient = new AxiosClient({
            cookie: Account.request.cookie,
            headers: Account.request.headers,
        });

        let _url = Account.url.playerData + `/mmr/v1/players/${puuid}/competitiveupdates?startIndex=${startIndex}&endIndex=${endIndex}`;
        if (queueId != null) {
            _url += `&queue=${queueId}`
        }

        const response = await axiosClient.get(_url);

        return response.data;
    }

    /**
    * @param {string} puuid PlayerUUID
    */
    async Loadout(puuid) {
        const Account = this.Account;
        const axiosClient = new AxiosClient({
            cookie: Account.request.cookie,
            headers: Account.request.headers,
        });

        const response = await axiosClient.get(Account.url.playerData + `/personalization/v2/players/${puuid}/playerloadout`);

        return response.data;
    }

    /**
    * @param {string} puuid PlayerUUID
    */
    async AccountXP(puuid) {
        const Account = this.Account;
        const axiosClient = new AxiosClient({
            cookie: Account.request.cookie,
            headers: Account.request.headers,
        });

        const response = await axiosClient.get(Account.url.playerData + `/account-xp/v1/players/${puuid}`);

        return response.data;
    }
}

module.exports = Player;