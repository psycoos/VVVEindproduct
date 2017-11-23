import { Injectable } from "@angular/core";

import { AngularFireDatabase } from 'angularfire2/database'
import { City } from "../../models/stamp-card/stamp-card.model";


@Injectable()
export class StampCardService {

    private stampCardRef = this.db.list<City>('stamp-card');

    constructor(private db: AngularFireDatabase) {

    }

    getStampCard() {
        return this.stampCardRef;
    }

    addStamps(city: City) {
        return this.stampCardRef.push(city);
    }

}