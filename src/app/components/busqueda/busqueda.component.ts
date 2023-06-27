import { Component, OnInit } from '@angular/core';
import { ClimaService } from 'src/app/services/clima.service';
@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.sass'],
  providers: [ClimaService]
})
export class BusquedaComponent implements OnInit {
  public ocultarDiv: boolean = true;
  public campo: string;
  public dato: any;

  constructor(
    private _climaService: ClimaService
  ){
    this.campo="";
  }

  ngOnInit(): any {

  }

  buscador(){
      this._climaService.show(this.campo).subscribe(
        response => {
          console.log(response);
          this.dato = response;
          this.ocultarDiv = false;
        },
        error => {
          console.log(error);
          alert("No existe la búsqueda.");
        }
      )
  }
}
