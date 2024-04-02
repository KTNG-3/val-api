import type { AxiosResponse } from "axios";

import type { ItemTypeId } from "@valapi/lib";

import { WebClientService } from "../client/WebClientService";

export namespace Store {
    // response

    export type Currency = Record<string, number>;

    export interface Wallet {
        Balances: Store.Currency;
    }

    export interface Offer {
        OfferID: string;
        IsDirectPurchase: boolean;
        StartDate: Date;
        Cost: Store.Currency;
        Rewards: Array<{
            ItemTypeID: string;
            ItemID: string;
            Quantity: number;
        }>;
    }

    export type UpgradeCurrencyOffers = Array<{
        OfferID: string;
        StorefrontItemID: string;
        Offer: Store.Offer;
        DiscountedPercent: number;
    }>;

    export interface Bundle {
        ID: string;
        DataAssetID: string;
        CurrencyID: string;
        Items: Array<{
            Item: {
                ItemTypeID: string;
                ItemID: string;
                Amount: number;
            };
            BasePrice: number;
            CurrencyID: string;
            DiscountPercent: number;
            DiscountedPrice: number;
            IsPromoItem: boolean;
        }>;
        ItemOffers: Array<{
            BundleItemOfferID: string;
            Offer: Store.Offer;
            DiscountPercent: number;
            DiscountedCost: Store.Currency;
        }>;
        TotalBaseCost: Store.Currency;
        TotalDiscountedCost: Store.Currency;
        TotalDiscountPercent: number;
        DurationRemainingInSeconds: number;
        WholesaleOnly: boolean;
    }

    export interface Storefront {
        FeaturedBundle: {
            Bundle: Store.Bundle;
            Bundles: Array<Store.Bundle>;
            BundleRemainingDurationInSeconds: number;
        };
        SkinsPanelLayout: {
            SingleItemOffers: Array<string>;
            SingleItemStoreOffers: Array<Store.Offer>;
            SingleItemOffersRemainingDurationInSeconds: number;
        };
        UpgradeCurrencyStore: {
            UpgradeCurrencyOffers: Store.UpgradeCurrencyOffers;
        };
        BonusStore?: {
            BonusStoreOffers: Array<{
                BonusOfferID: string;
                Offer: Store.Offer;
                DiscountPercent: number;
                DiscountCosts: Store.Currency;
                IsSeen: boolean;
            }>;
            BonusStoreRemainingDurationInSeconds: number;
        };
        AccessoryStore: {
            AccessoryStoreOffers: Array<{
                Offer: Store.Offer;
                ContractID: string;
            }>;
            AccessoryStoreRemainingDurationInSeconds: number;
            StorefrontID: string;
        };
    }

    export interface Offers {
        Offers: Array<Store.Offer>;
        UpgradeCurrencyOffers: Store.UpgradeCurrencyOffers;
    }

    export interface Entitlements {
        ItemTypeID: string;
        Entitlements: Array<{
            TypeID: string;
            ItemID: string;
        }>;
    }

    export interface EntitlementsWithInstance extends Omit<Store.Entitlements, "Entitlements"> {
        Entitlements: Array<{
            TypeID: string;
            ItemID: string;
            InstanceID: string;
        }>;
    }

    export interface Agent {
        AgentStore: {
            AgentStoreOffers: Array<{
                AgentID: string;
                StoreOffers: Array<Store.Offer>;
            }>;
            FeaturedAgent: string;
        };
    }
}

export class Store extends WebClientService {
    /**
     * @param {string} subject Player UUID
     * @returns {Promise<AxiosResponse<Store.Wallet>>}
     */
    public getWallet(subject: string): Promise<AxiosResponse<Store.Wallet>> {
        return this.axios.get(`${this.apiRegion.url.playerData}/store/v1/wallet/${subject}`);
    }

    /**
     * @returns {Promise<AxiosResponse<Store.Offers>>}
     */
    public getOffers(): Promise<AxiosResponse<Store.Offers>> {
        return this.axios.get(`${this.apiRegion.url.playerData}/store/v1/offers/`);
    }

    /**
     * @param {string} subject Player UUID
     * @param {ItemTypeId.ID} itemTypeId Item Type
     * @returns {Promise<AxiosResponse<Store.EntitlementsWithInstance>>}
     */
    public getEntitlements(subject: string, itemTypeId: "dd3bf334-87f3-40bd-b043-682a57a8dc3a"): Promise<AxiosResponse<Store.EntitlementsWithInstance>>;
    /**
     * @param {string} subject Player UUID
     * @param {ItemTypeId.ID} itemTypeId Item Type
     * @returns {Promise<AxiosResponse<Store.Entitlements>>}
     */
    public getEntitlements(subject: string, itemTypeId: ItemTypeId.ID): Promise<AxiosResponse<Store.Entitlements>>;
    public getEntitlements(subject: string, itemTypeId: string): Promise<AxiosResponse<any>> {
        return this.axios.get(`${this.apiRegion.url.playerData}/store/v1/entitlements/${subject}/${itemTypeId}`);
    }

    public get StoreFront(): StoreFront {
        return new StoreFront(this.axios, this.apiRegion);
    }
}

export class StoreFront extends WebClientService {
    /**
     * @param {string} subject Player UUID
     * @returns {Promise<AxiosResponse<Store.Storefront>>}
     */
    public get(subject: string): Promise<AxiosResponse<Store.Storefront>> {
        return this.axios.get(`${this.apiRegion.url.playerData}/store/v2/storefront/${subject}`);
    }

    /**
     * @returns {Promise<AxiosResponse<Store.Agent>>}
     */
    public getAgent(): Promise<AxiosResponse<Store.Agent>> {
        return this.axios.get(`${this.apiRegion.url.playerData}/store/v1/storefronts/agent`);
    }

    /**
     * @deprecated Please, Contact us if you find out how its works
     * @param {string} subject Player UUID
     * @returns {Promise<AxiosResponse<any>>}
     */
    public revealNightMarketOffers(subject: string): Promise<AxiosResponse<any>> {
        return this.axios.post(`${this.apiRegion.url.playerData}/store/v2/storefront/${subject}/nightmarket/offers`);
    }
}
