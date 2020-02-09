import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  tarefas = [];
  msgSuccess = 'Adicionado com sucesso!';
  msgErro = '';
  erro:boolean = false;

  pegarTarefa(valor:string){
    if(!(valor == '')){
      this.tarefas.push(valor);
      this.erro = false;
      this.msgErro = 'Você precisa informar uma tarefa'
    }else{
      this.erro = true;
    }
  }

  apagaTarefa(tarefa:string){
    let item = this.tarefas.indexOf(tarefa);
    this.tarefas.splice(item,1);
  }



  constructor() { }

  ngOnInit() {
  }

}
