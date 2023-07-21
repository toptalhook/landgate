import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  firstTitle: string = 'Your online store, unlocked';
  firstDescription: string = 'Create exceptional ecommerce experiences for higher AOV. Quickly impact revenue without code or developer reliance.'
  firstCtaText: string = 'Get Started';

  secondTitle: string = 'Gain total storefront control—without complex infrastructure';
  secondDescription: string = 'Finally craft a premium shopping experience with the only Frontend Platform built for delivering unlimited design capability and incredible speed.'
  secondCtaText: string = 'Learn More';

  thirdTitle: string = 'TULA Skincare boosted site speed by 35%';
  thirdDescription: string = 'With Shogun Frontend and headless commerce, TULA.com’s page-to-page clickthrough is now 5x faster.'
  thirdCtaText: string = 'See the Case Study';

  constructor() { }

  ngOnInit() {
  }

}
