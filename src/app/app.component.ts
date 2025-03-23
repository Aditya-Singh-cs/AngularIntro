import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Optional if you want styles
})
export class AppComponent {
  title = 'Hello from BridgeLabz';

  ng0nInit(): void{
    this.title="Hello From BridgeLabz."; 
  }
}