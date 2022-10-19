import { Component, OnInit } from '@angular/core';
import { LoadingController, PickerController, PopoverController } from '@ionic/angular';
import { Account, transactions } from 'src/models/account';
import { PopuptransferComponent } from '../popuptransfer/popuptransfer.component';
import { PickerOptions } from '@ionic/core';
import { PopupsettingComponent } from '../popupsetting/popupsetting.component';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  account!: Account;
  reedemUSD = ['20','50','100','200','250','500'];
  reedemHTG = ['250','500','750','1000','5000','10.000'];
  reedemMethod = '';
  totalTransac = 0;
  constructor(private popoverController: PopoverController, private loadingController: LoadingController,
    private pickerCtrl: PickerController, private payPal: PayPal) { }

  ngOnInit() {
    this.account = {} as Account;
    this.account.amount=1000;
    this.account.devise= 'USD';
    this.account.refillHistoric = [];
    this.account.transaction = [];
  }

  refill(devise: string, amount: string){
      this.showMethod(amount);
  }

    async showMethod(amount:string) {
    const opts: PickerOptions = {
      buttons: [
        {
          text: 'Done',
          role: 'validate'
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ],
      columns: [
        {
          name: 'method',
          options: [
            { text: 'Wester-Union', value: 'WU' },
            { text: 'MonCash$', value: 'MC' },
            { text: 'Paypal', value: 'PP' },
            { text: 'Zelle', value: 'ZLL' },
            { text: 'CashApp', value: 'CA' },
            { text: 'MoneyGram', value: 'MG' },
          ]

        }
      ]
    };
    const picker = await this.pickerCtrl.create(opts);
    picker.present();
    picker.onDidDismiss().then(async response => {
      switch(response.role){
        case 'validate':
          const col = await picker.getColumn('method');
          this.reedemMethod = col.options[col.selectedIndex].text;
          if (this.reedemMethod === 'MonCash$'){
            console.log('moncash');
          }else if (this.reedemMethod === 'PayPal'){
            console.log('Paypal');
            this.payPal.init({
              PayPalEnvironmentProduction: 'YOUR_PRODUCTION_CLIENT_ID',
              PayPalEnvironmentSandbox: 'YOUR_SANDBOX_CLIENT_ID'
            }).then(() => {
              // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
              this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
                // Only needed if you get an "Internal Service Error" after PayPal login!
                //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
              })).then(() => {
                let payment = new PayPalPayment(amount, 'USD', 'Refill balance', 'sale');
                this.payPal.renderSinglePaymentUI(payment).then(() => {
                  // Successfully paid
            
                  // Example sandbox response
                  //
                  // {
                  //   "client": {
                  //     "environment": "sandbox",
                  //     "product_name": "PayPal iOS SDK",
                  //     "paypal_sdk_version": "2.16.0",
                  //     "platform": "iOS"
                  //   },
                  //   "response_type": "payment",
                  //   "response": {
                  //     "id": "PAY-1AB23456CD789012EF34GHIJ",
                  //     "state": "approved",
                  //     "create_time": "2016-10-03T13:33:33Z",
                  //     "intent": "sale"
                  //   }
                  // }
                }, () => {
                  // Error or render dialog closed without being successful
                });
              }, () => {
                // Error in configuration
              });
            }, () => {
              // Error in initialization, maybe PayPal isn't supported or something else
            });


          }
          break;

          case 'cancel':
            break;

      }
      
    });
  } 

  async OpenSettingDialog(){
    const popover = await this.popoverController.create({
      component: PopupsettingComponent,
      showBackdrop: true,
      backdropDismiss: true,
      cssClass: 'my-custom-class',
      mode: 'ios'
    });
    popover.present();
  }
  async OpenSenderDialog(){
    const popover = await this.popoverController.create({
      component: PopuptransferComponent,
      componentProps: {currentAmount:this.account.amount},
      showBackdrop: true,
      backdropDismiss: true,
      cssClass: 'my-custom-class',
      mode: 'ios'
    });

    popover.onWillDismiss().then((response)=>{
      if(response.role=='transfert'){
        this.loadingController.create({
          cssClass: 'my-custom-class',
              message: 'Please wait...',
              duration: 2000
        }).then((load)=>{
          load.present();
          let currentTransaction: transactions = response.data;
          this.account.amount = this.account.amount - currentTransaction.amount;
          this.account.transaction.push(currentTransaction);
          this.totalTransac = this.totalTransac + currentTransaction.amount;
        });
       
      }
    })
    popover.present();
  }

}
