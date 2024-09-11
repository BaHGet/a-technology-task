import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements OnInit {

  checked: boolean = false;
  checkedStatus: string =  'غير مفعلة';
  tickts = [
    {
      id:1,
      name:"فهد زين",
      ticketId: "C-101",
      price: 60,
      cinema: "سينما مصر , مول العرب , برج الأطنان , سرايا القبة , صيدناوي مول , برج العرب",
      numberOfPeople: 2,
      numberOfPurchases: 1,
      ticketfile:''
    },
    {
      id:2,
      name:"أحمد العمري",
      ticketId: "C-153",
      price: 40,
      cinema: "سينما مصر , مول العرب , برج الأطنان , سرايا القبة , صيدناوي مول , برج العرب",
      numberOfPeople: 3,
      numberOfPurchases: 2,
      ticketfile:''
    },
    {
      id:3,
      name:"صالح الزهراني",
      ticketId: "C-658",
      price: 100,
      cinema: "سينما مصر , مول العرب , برج الأطنان , سرايا القبة , صيدناوي مول , برج العرب",
      numberOfPeople: 1,
      numberOfPurchases: 1,
      ticketfile:''
    },
    {
      id:4,
      name:"أحمد كساب",
      ticketId: "A-324",
      price: 80,
      cinema: "سينما مصر , مول العرب , برج الأطنان , سرايا القبة , صيدناوي مول , برج العرب",
      numberOfPeople: 7,
      numberOfPurchases: 9,
      ticketfile:''
    },
    {
      id:5,
      name:"عبدالرحمن احمد",
      ticketId: "C-194",
      price: 830,
      cinema: "سينما مصر , مول العرب , برج الأطنان , سرايا القبة , صيدناوي مول , برج العرب",
      numberOfPeople: 2,
      numberOfPurchases: 4,
      ticketfile:''
    },
    {
      id:6,
      name:"محمد هاني",
      ticketId: "C-175",
      price: 1000,
      cinema: "سينما مصر , مول العرب , برج الأطنان , سرايا القبة , صيدناوي مول , برج العرب",
      numberOfPeople: 3,
      numberOfPurchases: 2,
      ticketfile:''
    }
  ]

  constructor(private _http: HttpClient) { }
  ngOnInit(): void {
    // this.image()
    localStorage.setItem('tickts', JSON.stringify(this.tickts));
  }

  filterGlobal(event: any) {
    let value = (event.target.value);
    if(this.tickts.length == 0 || value == "") this.tickts = JSON.parse(localStorage.getItem('tickts') || '[]');
    if (!(this.tickts.filter((val) => val.name.includes(value)))) {
      this.tickts = JSON.parse(localStorage.getItem('tickts') || '[]');
    }else{
      this.tickts = this.tickts.filter((val) => val.name.includes(value));
    }
  }

  changeStatus(){
    this.checkedStatus =  this.checked ? 'مفعلة' : 'غير مفعلة'
  }

  filename(ticket: any): any {
    
    return ticket.ticketId + '.pdf'
  }

  
}
