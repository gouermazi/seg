import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  searchForm = new FormGroup({
    baidu: new FormControl(''),
    google: new FormControl(''),
  });
  onSubmit() {
    console.warn(this.searchForm.value);
  }
}
