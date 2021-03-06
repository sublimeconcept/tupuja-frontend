export class ParseWrapper {
    
    protected Parse = require('parse').Parse;

    private klassName;
    private klassModel;

    constructor(_klassName : string){
        this.initParseConnection('P1+F97wQcL4C0iTr','https://tupuja-backend-app.herokuapp.com/parse');
        if (_klassName == 'User'){
            this.klassModel = new this.Parse.User();
        }else{
            this.klassName = _klassName;
            this.klassModel = this.Parse.Object.extend(this.klassName);
        }
        
        
    }

    public query() {
        return new this.Parse.Query(this.model());
    }

    public model() {
        return this.klassModel;
    }

    public newModel() {
        return new this.klassModel;
    }

    /**
     * Initialize the parameters connection here.
     */
    public initParseConnection(apiKey: string, serverUrl: string): void{
        this.Parse.initialize(apiKey);
        this.Parse.serverURL = serverUrl;
    }

}