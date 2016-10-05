import { ParseWrapper } from '../parse/parse.wrapper';
import { Deferred } from '../utils/util.deferred';

export class AuctionService extends ParseWrapper{
    private Auction;

    constructor(){
        super();
        this.Auction = this.Parse.Object.extend("Auction");
    }

    getAuctions(): Promise<any>{
        let deferred = new Deferred();
        var auction = new this.Auction();
        var q = new this.Parse.Query(auction);
        q.find().then( (auctions) => {
            deferred.resolve(auctions);
        },
        (result,error) => {
            deferred.reject(error);
        });
        return deferred.promise;
    }

}
