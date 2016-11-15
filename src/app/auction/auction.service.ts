import { ParseWrapper } from '../parse/parse.wrapper';
import { Deferred } from '../utils/util.deferred';

export class AuctionService extends ParseWrapper{
    constructor(){
        super("Auction");
    }

    initializeObject() {
       return this.model();
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

    getOutstandingAuction(): Promise<any>{
        let deferred = new Deferred();
        this.query().find().then( (auctions) => {
            deferred.resolve(auctions);
        },
        (result,error) => {
            deferred.reject(error);
        });
        return deferred.promise;
    }

    getAuction(auction_id: string): Promise<any> {
        debugger;
        let deferred = new Deferred();
        let qry = this.query();
        qry.equalTo("objectId", auction_id);
        qry.find().then((auction)=>{
            deferred.resolve(auction);
        },
        (err)=>{
            deferred.reject(err);
        });
        return deferred.toPromise();
    }

    getAuctionSubscription(auction_id): any {
        let qry = this.query();
        if(auction_id){
            qry.equalTo("objectId", auction_id);
        }
        return qry;
    }



}
