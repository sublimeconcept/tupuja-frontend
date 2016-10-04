import { Injectable } from '@angular/core';
import {ParseService} from '../parse/parse.service';


/**
 * this is important otherwise trying
 * to inject one service into another
 * would cause: missing param error
 */
@Injectable()
export class BidService {

    private bids;

    private Bid;
    private Parse;

    constructor(private parseService: ParseService){
        this.Parse = parseService.getParse();
        this.Bid = this.Parse.Object.extend("Bid");//create Bid object   
    }

    /**
     * Get all Bids from Parse Server
     */
    public getBids(): any{
        
        var bid = new this.Bid(); //instantiate the object
        var q = new this.Parse.Query(bid); //create query object
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