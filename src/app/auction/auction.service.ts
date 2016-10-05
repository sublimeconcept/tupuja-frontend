import { Injectable } from '@angular/core'
import { ParseService } from '../parse/parse.service';
import { Deferred } from '../utils/util.deferred';

@Injectable()

export class AuctionService {
    private Auction;
    private Parse;

    constructor(private parseService: ParseService){
        this.Parse = parseService.getParse();
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
