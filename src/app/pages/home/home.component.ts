import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../../services/quote.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  theQuote : any = [];

  constructor(private quoteService : QuoteService ) { }

  ngOnInit(): void {
    this.quoteService.getQuote().subscribe((response: any)=>{
      this.theQuote = response.results;
    })
  }

}
