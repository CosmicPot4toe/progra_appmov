import { Component } from '@angular/core';
import { User } from '../app-model';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usuarios:User[]=[
    {id:1,nombre:'pedrito',pass:'1234'},
    {id:2,nombre:'Ale',pass:'1342'}
  ];


  constructor() {}
	// Shit for the Education Level thingy, can't doc ever lol
	isOpen = false;
	SelOpt = '';
  public Options = [
    {
      name: 'EducLVL',
      options: [
        {
          text: 'Basica',
          value: 'B',
        },
        {
          text: 'Media',
          value: 'M',
        },
        {
          text: 'Superior',
          value: 'S',
        },
        {
          text: 'Profesional',
          value: 'P',
        }
      ]
    }
  ];
  public buTONS = [
    {
      text: 'Cancel',
      role: 'cancel'
    },
    {
      text: 'Confirm',
			role: 'confirm',
      handler: (value: any) => {
        // window.alert(`You selected: ${value.languages.value}`);
				this.SelOpt= value.EducLVL.text;
      },
    }
  ];
  setOpen(Open: boolean) {
    this.isOpen = Open;
  }
}
