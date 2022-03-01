//class
class Region {
    constructor(region) {
        this.region = region.toLowerCase();
        this.playerDataUrl = `https://pd.${this.region}.a.pvp.net`;
        this.partyServiceUrl = `https://glz-${this.region}-1.${this.region}.a.pvp.net`;
        this.sharedDataUrl = `https://shared.${this.region}.a.pvp.net`;
    }

    toJSON() {
        return {
            region: this.region,
            playerData: this.playerDataUrl,
            partyService: this.partyServiceUrl,
            sharedData: this.sharedDataUrl
        };
    }
}

//export
module.exports = Region;