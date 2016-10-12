export class ParseWrapper {
    
    protected Parse = require('parse').Parse;

    private klassName;
    private klassModel;

    constructor(_klassName : string){
        console.log("initializing for " + _klassName);
        this.initParseConnection('kvn+?QM6h)^5m.4t','https://tupuja-backend-app.herokuapp.com/parse');
        this.klassName = _klassName;
        this.klassModel = this.Parse.Object.extend(this.klassName);
    }

    public query() {
        return new this.Parse.Query(this.model());
    }

    public model() {
        return this.klassModel;
    }

    /**
     * Initialize the parameters connection here.
     */
    public initParseConnection(apiKey: string, serverUrl: string): void{
        this.Parse.initialize(apiKey);
        this.Parse.serverURL = serverUrl;
    }

}