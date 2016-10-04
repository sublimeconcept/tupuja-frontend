export class ParseService {
    
    private Parse = require('parse').Parse;;
    
    constructor(){
        
    }

    /**
     * Initialize the parameters connection here.
     */
    public initParseConnection(apiKey: string, serverUrl: string): void{
        this.Parse.initialize(apiKey);
        this.Parse.serverURL = serverUrl;
    }

    /**
     * Return instance of Param object
     */
    public getParse(): any{
        return this.Parse;
    }


}