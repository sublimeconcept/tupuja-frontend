import { Injectable } from '@angular/core';
import {ParseWrapper} from '../parse/parse.wrapper';
import {Deferred} from '../utils/util.deferred';


/**
 * this is important otherwise trying
 * to inject one service into another
 * would cause: missing param error
 */
export class BidService extends ParseWrapper{
    constructor(){
        super("Bid");
    }

    public bidAuction(user, auction): Promise<any>{
        let newBid = this.newModel();
        let deferred = new Deferred();
        newBid.set("user", user);
        newBid.set("auction", auction);
        newBid.save().then(
            function(bid) { deferred.resolve(user); },
            function(error) { deferred.reject(error); }
        );

        return deferred.toPromise();
    }

}