import { Component, ElementRef, ViewChild} from '@angular/core';
import { AnimationController, Animation } from '@ionic/angular';

@Component({
  selector: 'app-anim',
  templateUrl: './anim.page.html',
  styleUrls: ['./anim.page.scss'],
})
export class AnimPage {
	
	/** 
	* El equivalente a un document.getElementById() 
	* solo que con una variable local
	*/
	@ViewChild('square',{ read : ElementRef }) square!:ElementRef;

	private anim!:Animation;

  constructor(private animCtrl:AnimationController) {}

  
	ngAfterViewInit(){
		this.anim = this.animCtrl
			.create()
			.addElement(this.square.nativeElement)
			.duration(1500)
			.iterations(Infinity)
			.fromTo('transform', 'translateX(0px)', 'translateX(275px)')
			.fromTo('opacity', '1', '0.1');
	}
	play(){
		this.anim.play();
	}
	pause(){
		this.anim.pause();
	}
	stop(){
		this.anim.stop();
	}

}
