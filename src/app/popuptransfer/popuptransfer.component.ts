import { Component,Input, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { transactions } from 'src/models/account';

@Component({
  selector: 'app-popuptransfer',
  templateUrl: './popuptransfer.component.html',
  styleUrls: ['./popuptransfer.component.scss'],
})
export class PopuptransferComponent implements OnInit {
  @Input() currentAmount:number;
  transfertInstruction: transactions
  hasToTransfer: boolean;
  constructor(private popoverController:PopoverController) { }

  ngOnInit() {
    this.hasToTransfer = false;
    this.transfertInstruction = {} as transactions;
  }
  confirmTransaction(){
    this.popoverController.dismiss(this.transfertInstruction, 'transfert');
  }
  cancelTransaction(){
    this.popoverController.dismiss();
  }
  askConfirmation(instructions: transactions){
    this.hasToTransfer = true;
    instructions.beneficer = 'Renato Silva';
    instructions.sender = 'Richkard Joseph';
    instructions.senderId = '038598583Test45';
    instructions.date = new Date(Date.now());
    instructions.nature = 'Transfert';
    instructions.id='Test03882fake_Id';
    instructions.taxes = 15;
    console.table(instructions);
  }

}
