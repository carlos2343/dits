import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
imports:	 [ BrowserModule,
				FormsModule,
				BrowserAnimationsModule,
				MatButtonModule ],
})
export class AppModule { }


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

interface Item {
  name: string;
  category: string;
  description: string;
}

const items: Item[] = [
  {
    name: "Chair",
    category: "Furniture",
    description: "A comfortable armchair with soft cushions."
  },
  {
    name: "Toothbrush",
    category: "Hygiene",
    description: "A soft-bristled toothbrush for gentle cleaning."
  },
  {
    name: "Canned Goods",
    category: "Food",
    description: "A variety of canned foods, including beans, vegetables, and fruit."
  },
  {
    name: "Bedding",
    category: "Home Goods",
    description: "Soft and cozy bedding to keep you warm at night."
  }
];
