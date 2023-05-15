import type { ValAxios } from "@valapi/lib";

import { WebClientService } from "../client/WebClientService";

export namespace Premier {
    export interface Seasons {
        PremierSeasons: Array<any>; // * unknown
    }

    export interface Conferences {
        PremierConferences: Array<any>; // * unknown
    }

    export interface Player {
        puuid: string;
        rosterId: string;
        invites: Array<any>; // * unknown
        version: number;
        createdAt: number;
        updatedAt: number;
    }

    export interface RosterCustomization {
        /**
         * Icon ID
         */
        icon: string;
        /**
         * 0.000000 <= number <= 1.000000
         */
        primaryColor: `(R=${number},G=${number},B=${number},A=${number})`;
        /**
         * 0.000000 <= number <= 1.000000
         */
        secondaryColor: `(R=${number},G=${number},B=${number},A=${number})`;
        /**
         * 0.000000 <= number <= 1.000000
         */
        tertiaryColor: `(R=${number},G=${number},B=${number},A=${number})`;
    }
}

export class Premier extends WebClientService {
    /**
     * @deprecated Please, Contact us if you find out how its works
     * @returns {Promise<ValAxios.Response<any>>}
     */
    public async getEligibility(): Promise<ValAxios.Response<any>> {
        return await this.axios.get(`${this.apiRegion.url.playerData}/premier/v1/player/eligibility`);
    }

    /**
     * @returns {Promise<ValAxios.Response<Premier.Conferences>>}
     */
    public async getPremierConferences(): Promise<ValAxios.Response<Premier.Conferences>> {
        return await this.axios.get(`${this.apiRegion.url.playerData}/premier/v1/affinities/${this.apiRegion.id}/conferences`);
    }

    /**
     * @returns {Promise<ValAxios.Response<Premier.Seasons>>}
     */
    public async fetchPremierSeasons(): Promise<ValAxios.Response<Premier.Seasons>> {
        return await this.axios.get(`${this.apiRegion.url.playerData}/premier/v1/affinities/${this.apiRegion.id}/premier-seasons`);
    }

    /**
     * @deprecated Please, Contact us if you find out how its works
     * @returns {Promise<ValAxios.Response<any>>}
     */
    public async getActivePremierSeason(): Promise<ValAxios.Response<any>> {
        return await this.axios.get(`${this.apiRegion.url.playerData}/premier/v1/affinities/${this.apiRegion.id}/premier-seasons/active`);
    }

    /**
     * @deprecated Please, Contact us if you find out how its works
     * @param {string} realm Realm
     * @param {string} rosterId Roster ID
     * @returns {Promise<ValAxios.Response<any>>}
     */
    public async getMUCToken(realm: string, rosterId: string): Promise<ValAxios.Response<any>> {
        return await this.axios.get(`${this.apiRegion.url.playerData}/premier/v1/rsp/rosters/v1/${realm}/roster/${rosterId}/muctoken`);
    }

    /**
     * @param {string} subject Player UUID
     * @returns {Promise<ValAxios.Response<Premier.Player>>}
     */
    public async getPlayer(subject: string): Promise<ValAxios.Response<Premier.Player>> {
        return await this.axios.get(`${this.apiRegion.url.playerData}/premier/v2/players/${subject}`);
    }

    /**
     * @deprecated Please, Contact us if you find out how its works
     * @param {string} rosterId Roster ID
     * @returns {Promise<ValAxios.Response<any>>}
     */
    public async GetRosterV1(rosterId: string): Promise<ValAxios.Response<any>> {
        return await this.axios.get(`${this.apiRegion.url.playerData}/premier/v1/rosters/${rosterId}`);
    }

    /**
     * @deprecated Please, Contact us if you find out how its works
     * @param {string} rosterId Roster ID
     * @returns {Promise<ValAxios.Response<any>>}
     */
    public async GetRosterV2(rosterId: string): Promise<ValAxios.Response<any>> {
        return await this.axios.get(`${this.apiRegion.url.playerData}/premier/v2/rosters/${rosterId}`);
    }

    /**
     * @deprecated Please, Contact us if you find out how its works
     * @param {string} realm Realm
     * @param {string} rosterId Roster ID
     * @returns {Promise<ValAxios.Response<any>>}
     */
    public async getRosterByProxy(realm: string, rosterId: string): Promise<ValAxios.Response<any>> {
        return await this.axios.get(`${this.apiRegion.url.playerData}/premier/v1/rsp/rosters/v1/${realm}/roster/${rosterId}`);
    }

    /**
     * @deprecated Please, Contact us if you find out how its works
     * @param {string} rosterId Roster ID
     * @param {Premier.RosterCustomization} rosterCustomization Roster Customization
     * @returns {Promise<ValAxios.Response<any>>}
     */
    public async setPremierRosterCustomization(rosterId: string, rosterCustomization: Premier.RosterCustomization): Promise<ValAxios.Response<any>> {
        return await this.axios.put(`${this.apiRegion.url.playerData}/premier/v1/rosters/${rosterId}/customization`, rosterCustomization);
    }

    /**
     * @deprecated Please, Contact us if you find out how its works
     * @param {string} realm Realm
     * @param {string} rosterId Roster ID
     * @returns {Promise<ValAxios.Response<any>>}
     */
    public async deleteRosterByProxy(realm: string, rosterId: string): Promise<ValAxios.Response<any>> {
        return await this.axios.delete(`${this.apiRegion.url.playerData}/premier/v1/rsp/rosters/v1/${realm}/roster/${rosterId}`);
    }

    /**
     * @deprecated Please, Contact us if you find out how its works
     * @param {string} rosterId Roster ID
     * @param {string} conferenceId Conference ID
     * @returns {Promise<ValAxios.Response<any>>}
     */
    public async rosterEnroll(rosterId: string, conferenceId: string): Promise<ValAxios.Response<any>> {
        return await this.axios.put(`${this.apiRegion.url.playerData}/premier/v1/rosters/${rosterId}/enroll`, {
            id: conferenceId
        });
    }

    /**
     * @deprecated Please, Contact us if you find out how its works
     * @param {string} rosterId Roster ID
     * @param {string} subject Player UUID
     * @returns {Promise<ValAxios.Response<any>>}
     */
    public async createInvite(rosterId: string, subject: string): Promise<ValAxios.Response<any>> {
        return await this.axios.post(`${this.apiRegion.url.playerData}/premier/v2/rosters/${rosterId}/invites/${subject}`);
    }
}