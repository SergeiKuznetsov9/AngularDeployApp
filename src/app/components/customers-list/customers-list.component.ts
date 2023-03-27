import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { HttpCustomerService } from 'src/app/shared/services/http/httpCustomer.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit, OnDestroy {

  @ViewChild('customersTable') customersTable!: MatTable<any>;
  subscriptionOnCustomresChange!: Subscription;


  displayedColumns: string[] = ['name', 'location', 'email', 'mobile', 'edit', 'delete']

  constructor(public httpCustomer: HttpCustomerService) {}

  ngOnInit(): void {
    this.getData();
    this.subscriptionOnCustomresChange = this.httpCustomer.updateCustomersEmitter.subscribe({
      next: () => this.customersTable.renderRows()
    })
  }

  ngOnDestroy(): void {
    this.subscriptionOnCustomresChange.unsubscribe()
  } 

  getData() {
    this.httpCustomer.getData()
  }

  onEdit(customer: any) {
    console.log(customer)
  }

  onDelete(customer: any) {
    console.log(customer)

  }


}
