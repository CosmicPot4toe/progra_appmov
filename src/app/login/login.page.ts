import { Component, OnInit,ViewChild} from '@angular/core';
import type { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
	UserModel = '';
	PassModel = '';

  @ViewChild('ionInputEl', { static: true }) ionInputEl!: IonInput;
  onUserInput(ev: { target: any; }) {
    const value = ev.target!.value;
    // Removes non alphanumeric characters
    const filteredValue = value.replace(/[^a-zA-Z0-9]+/g, '');
    /**
     * Update both the state variable and
     * the component to keep them in sync.
     */
    this.ionInputEl.value = this.UserModel = filteredValue;
  }
	@ViewChild('ionInputAl', { static: true }) ionInputAl!: IonInput;
	onPassInput(ev: { target: any; }) {
    const value = ev.target!.value;
    const filteredValue = value.replace(/[^0-9]+/g, '');

    this.ionInputAl.value = this.PassModel = filteredValue;
  }
}
