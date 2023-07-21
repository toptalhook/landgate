import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() title: String;
  @Input() description: String;
  @Input('cta-text') ctaText: String;
  @Input('cta-type') ctaType: String;

  constructor() { }

  ngOnInit(): void {
  }

}
