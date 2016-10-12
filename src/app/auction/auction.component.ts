import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
    selector: "auction",
    templateUrl: "./auction.component.html",
})
export class AuctionComponent implements OnInit, OnDestroy{
    
    @Input() private auction: any;

    constructor() {

    }

    public ngOnInit(){
        
    }

    public ngOnDestroy(){
        
    }


}