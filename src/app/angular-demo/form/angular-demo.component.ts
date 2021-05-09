import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import { countries}  from '../../../assets/countries';

@Component({
  selector: 'app-angular-demo',
  templateUrl: './angular-demo.component.html',
  styleUrls: ['./angular-demo.component.css']
})
export class AngularDemoComponent implements OnInit {
  public userFormGroup: FormGroup;
  public countries: any;
  public filteredCountries: Observable<any[]>;

  constructor() { 
    this.userFormGroup = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required]),
      birthdate: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),

    });

    this.countries = countries;
    this.filteredCountries = this.userFormGroup.controls["country"].valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.countries.slice())
      )
  }

  ngOnInit(): void {
  }

  private _filter(name: string): any[] {
    const filterValue = name.toLowerCase();

    return this.countries.filter((country: any) => country.name.toLowerCase().indexOf(filterValue) === 0);
  }

  public displayFn(country: any) {
    return country.name;
  }

  public onSubmit() {
    console.log(this.userFormGroup)
  }
}
