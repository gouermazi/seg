import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  baidu: '';
  google: '';

  searchForm = new FormGroup({
    baidu: new FormControl(''),
    google: new FormControl('')
  });
  onSubmit() {
    this.baidu = this.searchForm.value.baidu;
    this.google = this.searchForm.value.google;

    console.warn(this.google);
    console.warn(this.baidu);

  }

  jump(url:string) {
    window.location.href = url;
  }

}
