import {Deferred} from '../utils/util.deferred';
import {ParseComponent} from '../parse/parse.component';

export class BidService extends ParseComponent{

    private Bid;

    constructor(){
        super();
        this.Bid = this.Parse.Object.extend("Bid");//create Bid object   
    }

    /**
     * Get all Bids from Parse Server
     */
    public getBids(): Promise<any>{
        let deferred = new Deferred();
        let bid = new this.Bid(); //instantiate the object
        let q = new this.Parse.Query(bid); //create query object
        q.find().then( (results) => {
            deferred.resolve(results);
        },
        (error) => {
            deferred.reject(error);
        });

        return deferred.promise;
    }

}