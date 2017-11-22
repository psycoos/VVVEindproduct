import { Injectable } from "@angular/core";

import { AngularFireDatabase } from 'angularfire2/database'
import { StampCard } from "../../models/stamp-card/stamp-card.model";


@Injectable()
export class StampCardService {

    private stampCardRef = this.db.list<StampCard>('stamp-card');

    constructor(private db: AngularFireDatabase) {

    }

    getStampCard() {
        console.log(this.stampCardRef);
    }

    addStamp(stampCard: StampCard) {
        return this.stampCardRef.push(stampCard);
    }

}