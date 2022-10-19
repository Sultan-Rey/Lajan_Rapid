import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popupsetting',
  templateUrl: './popupsetting.component.html',
  styleUrls: ['./popupsetting.component.scss'],
})
export class PopupsettingComponent implements OnInit {

  constructor(private router: Router, private popoverController:PopoverController) { }

  ngOnInit() {}

  redirect(){
    this.popoverController.dismiss();
    this.router.navigateByUrl("/login");
  }
}
