import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //<app-root></app-root>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'app';
  subtitle : string = 'This is a subtitle';
  altText : string = "Angular Shield"
}
