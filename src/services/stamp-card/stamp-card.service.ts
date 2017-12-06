import { Injectable } from "@angular/core";

import { AngularFireDatabase } from 'angularfire2/database'
import { City } from "../../models/stamp-card/stamp-card.model";


@Injectable()
export class StampCardService {

    private stampCardRef = this.db.list<City>('stamp-card');

    constructor(private db: AngularFireDatabase) {

    }

    getStampCard() {
        console.log(this.stampCardRef);
    }

    addStamps(Array) {
        return this.stampCardRef.push(Array);
    }

}