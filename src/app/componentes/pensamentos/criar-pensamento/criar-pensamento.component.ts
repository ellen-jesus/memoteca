import { PensamentoService } from './../pensamento.service';
import { Pensamento } from './../pensamento';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css'],
})
export class CriarPensamentoComponent {
  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1',
  };

  constructor(
    private service: PensamentoService,
    private router: Router // para redirecionar a pagina ao mural
    ) {}

  criarPensamento() {
    this.service.criar(this.pensamento).subscribe(() =>{
      this.router.navigate(['/listarPensamento']) //ele ja salva o pensamento e faz o redirecionamento para o mural
    });
  }

  cancelarPensamento() {
    this.router.navigate(['/listarPensamento']) //ele ja cancela o pensamento e faz o redirecionamento para o mural
  }
}
