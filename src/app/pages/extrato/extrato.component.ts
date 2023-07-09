
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
})
export class ExtratoComponent {
  public conteudo: any[] = [
    {item: 'Seguro Cartão', valor_mes: 10.00},
    {item: 'LIS Conta', valor_mes: 3.50},
    {item: 'Cesta Produtos', valor_mes: 5.00},
  ];
  public displayedColumns: string[] = ['item', 'valor mês', 'info'];
  public dataSource = this.conteudo;

  constructor(public router: Router){}
}
