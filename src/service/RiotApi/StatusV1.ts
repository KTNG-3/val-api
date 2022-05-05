//import
import { AxiosClient } from "../../client/AxiosClient";

import type { IRiotApi_Service } from "../../resources/interface/IRiotApi";
import type { IValRegion } from "../../resources/interface/IValRegion";
import type { IAxiosClient } from "../../resources/interface/IAxiosClient";

//class

/**
 * * Class ID: @ing3kth/val-api/RiotApi/StatusV1
 */
class StatusV1 {
    public classId:string;
    private apiKey:string;
    private region:IValRegion;
    private AxiosClient:AxiosClient;

    /**
    * @param {JSON} data Services Data
    */
    constructor(data:IRiotApi_Service) {
        this.classId = '@ing3kth/val-api/RiotApi/StatusV1';
        this.apiKey = data.key;
        this.region = data.region;

        this.AxiosClient = new AxiosClient(data.AxiosData);
    }

    /**
     * @returns {Promise<IAxiosClient>}
     */
     public async PlatformData():Promise<IAxiosClient> {
        return await this.AxiosClient.get(this.region.riot.server + `/val/status/v1/platform-data` + `?api_key=${this.apiKey}`);
    }
}

//export
export { StatusV1 };