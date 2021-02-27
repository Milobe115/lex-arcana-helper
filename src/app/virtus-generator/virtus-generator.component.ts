import { Component, OnInit } from '@angular/core';
import random from "../utils/random";
import {SharedDataService} from "../shared-data.service";
import {Virtus} from "../data/virtus";

@Component({
  selector: 'app-virtus-generator',
  templateUrl: './virtus-generator.component.html',
  styleUrls: ['./virtus-generator.component.css']
})
export class VirtusGeneratorComponent implements OnInit {

  randomMethod = false;

  coordinatio = 0;
  auctoritas = 0;
  ratio = 0;
  vigor = 0;
  ingenium = 0;
  sensibilitas = 0;

  constructor(public sharedDataService: SharedDataService) {}

  ngOnInit(): void {}

  switchToOpen(): void{
    this.coordinatio = this.auctoritas = this.ratio = this.vigor = this.ingenium = this.sensibilitas = 0;
    this.randomMethod = false;
  }

  switchToRandom(): void{
    this.randomMethod = true;
    this.coordinatio = random.d6() + random.d6();
    this.auctoritas = random.d6() + random.d6();
    this.ratio = random.d6() + random.d6();
    this.vigor = random.d6() + random.d6();
    this.ingenium = random.d6() + random.d6();
    this.sensibilitas = random.d6() + random.d6();

    this.sharedDataService.sendAgeVirtus(
        new Virtus(this.coordinatio, this.auctoritas, this.ratio, this.vigor, this.ingenium, this.sensibilitas)
    );
  }
}
