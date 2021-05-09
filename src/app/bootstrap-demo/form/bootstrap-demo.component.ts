import { Component, OnInit } from '@angular/core';
import { countries}  from '../../../assets/countries';

@Component({
  selector: 'app-bootstrap-demo',
  templateUrl: './bootstrap-demo.component.html',
  styleUrls: ['./bootstrap-demo.component.css']
})
export class BootstrapDemoComponent implements OnInit {
  public countries: any;
  public selectedCountry: string;

  constructor() { 
    this.countries = countries;
    this.selectedCountry = "Choose a country";
  }

  ngOnInit(): void {
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event: any) {
          if (form.checkValidity() === false ) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  }

  selectCountry(country: any) {
    this.selectedCountry = country.name;
  }

}
