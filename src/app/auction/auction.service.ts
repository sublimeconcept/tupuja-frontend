import { ParseWrapper } from '../parse/parse.wrapper';
import { Deferred } from '../utils/util.deferred';

export class AuctionService extends ParseWrapper{
    private Auction;
    constructor(){
        super("Auction");
    }

    getAuctions(): Promise<any>{
        let deferred = new Deferred();
        this.query().find().then( (auctions) => {
            deferred.resolve(auctions);
        },
        (result,error) => {
            deferred.reject(error);
        });
        return deferred.promise;
    }

}
