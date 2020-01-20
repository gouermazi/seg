import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  private baidu = '';
  private google = '';

  searchForm = new FormGroup({
    baidu: new FormControl(''),
    google: new FormControl('')
  });
  onSubmit() {
    this.baidu = this.searchForm.value.baidu;
    this.google = this.searchForm.value.google;

    console.warn(this.google);
    console.warn(this.baidu);
    this.clear();
    this.jump(this.getTarget());

  }

  jump(url: string) {
    window.location.href = url;
  }

  getTarget() {
    let google = this.google.length > 0 ? 'https://www.google.com/search?q=' + this.google + '&pws=0&gl=us&gws_rd=cr'  : '';
    let baidu  = this.baidu.length > 0 ? 'https://www.baidu.com/s?wd=' + this.baidu : '';
    if (google.length > 0 ) {
      return google;
    }
    return baidu;
  }

  clear() {
    this.searchForm.patchValue({
      baidu: '',
      google: ''
    });
  }

}
