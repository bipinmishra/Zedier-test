import { Component, OnInit } from '@angular/core';
import { CountryListService } from '../services/country-list.service';

@Component({
  selector: 'app-holiday-list',
  templateUrl: './holiday-list.component.html',
  styleUrls: ['./holiday-list.component.sass']
})
export class HolidayListComponent implements OnInit {
  countryListName;
  constructor( private countryList : CountryListService) { }

  ngOnInit() {
    this.countryList.currentCountry.subscribe(
      (data)=> { this.countryListName = data})
  }

  selectCountry(e){
   alert(e);
  }

  allowedCOuntry =[]
  
  myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

}
