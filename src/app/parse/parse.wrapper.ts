export class ParseWrapper {
    
    protected Parse = require('parse').Parse;;
    
    constructor(){
        //this.initParseConnection('kvn+?QM6h)^5m.4t','http://localhost:1337/parse');
    }

    /**
     * Initialize the parameters connection here.
     */
    public initParseConnection(apiKey: string, serverUrl: string): void{
        this.Parse.initialize(apiKey);
        this.Parse.serverURL = serverUrl;
    }


}