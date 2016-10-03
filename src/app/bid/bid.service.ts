
export class BidService {

    private apiKey : string = "";
    private serverUrl : string = "";
    Parse = require('parse').Parse;
    private bids;

    constructor(){
        console.log("Initializing bids");
        this.Parse.initialize('kvn+?QM6h)^5m.4t');
        this.Parse.serverURL = 'http://localhost:1337/parse';

    }

    /**
     * Get all Bids from Parse Server
     */
    public getBids(): any{
        console.log("getting bids...");
        var Bid = this.Parse.Object.extend("Bid");//create Bid object
        var bid = new Bid(); //instantiate the object
        var q = new this.Parse.Query(Bid); //create query object
        q.find().then( (results) => {//it returns a promise
            for(var i = 0; i < results.length; i++){
                console.log("Bid#", results[i].id);
            }
        },
        (result,error) => {
            console.error(result, error);//error
        });
    }

}