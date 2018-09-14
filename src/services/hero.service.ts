import { Injectable, EventEmitter } from '@angular/core';

import { Subject } from 'rxjs/Subject';

@Injectable() export class HeroService {

    i: number = 0;
    customerName: any = '明成祖...';

    change: EventEmitter<any>;

    constructor() {
        this.change = new EventEmitter();
    }

    private Source = new Subject<any>();
    Status$ = this.Source.asObservable();
    StatusMission(message: any) {
        this.Source.next(message);
    }


}