import { Component, OnInit } from '@angular/core';
import { ClimaService } from 'src/app/services/clima.service';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.sass'],
  providers: [ClimaService]
})
export class InicioComponent implements OnInit {
  public ciudades: string[] = ["Sevilla","Tokyo","Paris","new york","Dubai","los angeles","Mexico","Dublin","Toronto","Vancouver"];
//public ciudades: string[] = ["Sevilla","Tokyo","Paris"];
  public datos: any[] = [];
  constructor(
    private _climaService: ClimaService
  ){

  }
  ngOnInit(): any {

    let mostrarCuidades: string[] = [];

    while(mostrarCuidades.length <3){
        mostrarCuidades.push(this.ciudades[Math.floor(Math.random() * this.ciudades.length)]);
    }

    mostrarCuidades.forEach((ciudad) => {
      this._climaService.show(ciudad).subscribe(
        response => {
          console.log(response);
          this.datos.push(response);
          console.log(response);
          console.log("sevilla : " + this.datos[0].location.name);
        },
        error => {
          console.log(error);
        }
      )
      
    });
  }
}
