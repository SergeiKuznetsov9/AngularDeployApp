import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { ICustomer } from 'src/app/shared/models/customer';
import { HttpCustomerService } from 'src/app/shared/services/http/httpCustomer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent {

  form = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    mobile: ['', [Validators.required, Validators.minLength(8)]],
    location: ['', [Validators.required]],
  })

  constructor(private httpCustomer: HttpCustomerService, private fb: FormBuilder) { }

  ngOnInit(): void {
    
  }

  onSubmit() {
    this.httpCustomer.createData(this.form.value as ICustomer)
  }


/*   const customer: ICustomer = {
    name: 'Bill',
    email: 'Bill@yandex.ru',
    mobile: '375 25 4684198',
    location: 'Mozir`',
  }; */

}
