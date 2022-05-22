import { Component, OnInit } from '@angular/core';

import { CursosService } from '../shared';

@Component({
  selector: 'app-receber-curso-criado',
  templateUrl: './receber-curso-criado.component.html',
  styleUrls: ['./receber-curso-criado.component.css']
})
export class ReceberCursoCriadoComponent implements OnInit {
  curso: any;

  constructor(private cursoService: CursosService) { }

  ngOnInit(): void {
    this.cursoService.emitirCursoCriado.subscribe(
      data => {
        this.curso = data;
      }
    );
  }
}
