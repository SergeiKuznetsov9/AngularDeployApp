import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { HttpCustomerService } from 'src/app/shared/services/http/httpCustomer.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent {

  @ViewChild('customersTable') customersTable!: MatTable<any>;


  displayedColumns: string[] = ['name', 'location', 'email', 'mobile', 'edit', 'delete']

  constructor(public httpCustomer: HttpCustomerService) {}

  ngOnInit(): void {
    this.getData()
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

  showTable() {
    this.customersTable.renderRows()
  }

}
