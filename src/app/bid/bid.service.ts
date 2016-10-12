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

    /**
     * Get all Bids from Parse Server
     */
    public getBids(): Promise<any>{
        let deferred = new Deferred();

        super.query().find().then( (results) => {
            deferred.resolve(results);
        },
        (error) => {
            deferred.reject(error);
        });

        return deferred.promise;
    }

}