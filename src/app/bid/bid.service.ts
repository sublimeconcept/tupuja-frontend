import { Injectable } from '@angular/core';
import {ParseComponent} from '../parse/parse.component';
import {Deferred} from '../utils/util.deferred';


/**
 * this is important otherwise trying
 * to inject one service into another
 * would cause: missing param error
 */
@Injectable()
export class BidService {

    private Bid;
    private Parse;

    constructor(private parseComponent: ParseComponent){
        this.Parse = parseComponent.getParse();
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