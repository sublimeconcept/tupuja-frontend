import { Component, OnInit, OnDestroy, Input, EventEmitter, Output,OnChanges, SimpleChange } from '@angular/core';

@Component({
    selector: "countdown",
    templateUrl: "./countdown.component.html",
})
export class CountdownComponent implements OnInit, OnDestroy, OnChanges {
    
    @Input('date') date: Date;

    @Input('units') unitsAsString: string;

    private units: string[];

    @Output('ended') signalFinished: EventEmitter<any> = new EventEmitter();

    private timerId: any;

    private displayString: string;

    constructor() {
        this.units = [];
    }

    ngOnChanges(changes: {[propKey: string]: SimpleChange}){
        
        debugger;
        let changedProp = changes['date'];
        let newDate: Date =   changedProp.currentValue;
        let dateDifference = newDate.getTime() - new Date().getTime();
        if(dateDifference > 0){
            this.date = newDate;
            this.startTimer();
        }
        
    }

    private displayDate(): void{
        if (typeof this.unitsAsString === 'string') {
            this.units = this.unitsAsString.split('|');
        }
       
        let dateDifference = this.date.getTime() - new Date().getTime();
        if(dateDifference <= 0){
            this.displayString = "";
            this.signalFinished.emit(true);
            if(this.timerId){
                clearInterval(this.timerId);
            }
            return;
        }

        let lastUnit = this.units[this.units.length - 1],
            unitConstantForMillisecs = {
                weeks: (1000 * 60 * 60 * 24 * 7),
                days: (1000 * 60 * 60 * 24),
                hours: (1000 * 60 * 60),
                minutes: (1000 * 60),
                seconds: 1000,
                milliseconds: 1
            },
            unitsLeft = {},
            returnString = '',
            totalMillisecsLeft = dateDifference,
            i,
            unit:any;
            for (i in this.units) {
                if (this.units.hasOwnProperty(i)) {

                    unit = this.units[i].trim();
                    if (unitConstantForMillisecs[unit.toLowerCase()] === false) {
                        //$interval.cancel(countDownInterval);
                        throw new Error('Cannot repeat unit: ' + unit);

                    }
                    if (unitConstantForMillisecs.hasOwnProperty(unit.toLowerCase()) === false) {
                        throw new Error('Unit: ' + unit + ' is not supported. Please use following units: weeks, days, hours, minutes, seconds, milliseconds');
                    }

                    unitsLeft[unit] = totalMillisecsLeft / unitConstantForMillisecs[unit.toLowerCase()];

                    if (lastUnit === unit) {
                        unitsLeft[unit] = Math.ceil(unitsLeft[unit]);
                    } else {
                        unitsLeft[unit] = Math.floor(unitsLeft[unit]);
                    }
                    totalMillisecsLeft -= unitsLeft[unit] * unitConstantForMillisecs[unit.toLowerCase()];
                    unitConstantForMillisecs[unit.toLowerCase()] = false;


                    returnString += ' ' + unitsLeft[unit] + ' ' + unit;
                }
            }
            
            this.displayString = returnString;
    }

    public ngOnInit(){
        this.startTimer();
    }

    private startTimer(){
        this.timerId = setInterval(()=>this.displayDate(), 1);
    }

    public ngOnDestroy(){
        
    }


}