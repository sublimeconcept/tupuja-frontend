import { Injectable } from '@angular/core';
import {ParseWrapper} from '../parse/parse.wrapper';
import {Deferred} from '../utils/util.deferred';


/**
 * this is important otherwise trying
 * to inject one service into another
 * would cause: missing param error
 */
export class BidService extends ParseWrapper{

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