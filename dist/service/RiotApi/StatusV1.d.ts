import { AxiosClient } from "@ing3kth/core/dist/core/AxiosClient";
import { IRiotApi_Service } from "../../resources/interface/IRiotApi";
import type { IValRegion } from "../../resources/interface/IValRegion";
import type { IAxiosClient_Out } from "@ing3kth/core/dist/interface/IAxiosClient";
/**
 * * Class ID: @ing3kth/val-api/RiotApi/StatusV1
 */
declare class StatusV1 {
    classId: string;
    apiKey: string;
    region: IValRegion;
    AxiosClient: AxiosClient;
    /**
    * @param {JSON} data Services Data
    */
    constructor(data: IRiotApi_Service);
    /**
     * @returns {Promise<IAxiosClient_Out>}
     */
    PlatformData(): Promise<IAxiosClient_Out>;
}
export { StatusV1 };
//# sourceMappingURL=StatusV1.d.ts.map