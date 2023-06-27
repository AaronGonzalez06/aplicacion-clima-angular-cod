import { Component,OnInit } from '@angular/core';
import { ClimaService } from 'src/app/services/clima.service';

@Component({
  selector: 'app-futuro',
  templateUrl: './futuro.component.html',
  styleUrls: ['./futuro.component.sass'],
  providers: [ClimaService]
})
export class FuturoComponent implements OnInit {
  public ocultarDiv: boolean = true;
  public campo: string;
  public dato: any;
  public fecha: string;

  constructor(
    private _climaService: ClimaService
  ){
    this.campo="";
    this.fecha = "";
  }

  ngOnInit(): any {

  }

  buscador(){
      this._climaService.historial(this.campo,this.fecha).subscribe(
        response => {
          console.log(response);
          this.dato = response;
          this.ocultarDiv = false;
        },
        error => {
          console.log(error);
          alert("La busqueda debe de estar entre 14 días y 300 días desde la fecha de hoy.");
        }
      )
  }
}
