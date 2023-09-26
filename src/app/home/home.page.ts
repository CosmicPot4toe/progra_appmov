import { Component } from '@angular/core';
import { User } from '../app-model';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';

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
  db!:SQLiteObject;

  constructor(private sqlite:SQLite) {}
  //SQLite thingies

  createOpenDB(){
    try{
      this.sqlite.create({
        name: 'data.db',
        location:'default'
      })
      .then((db:SQLiteObject)=>{
        this.db=db;
        alert('database created/opened');
      })
      .catch(e=>alert(JSON.stringify(e)))
    }catch(err:any){
      alert(err);
    }
  }




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
