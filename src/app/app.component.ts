import { Component } from '@angular/core';
import { BusquedaService } from './services/busqueda.service';
import { Busqueda } from './classes/busqueda';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'AppLiverpoolSearch';
  public resultado: any;
  public historial: any;
  public busqueda = new Busqueda();
  constructor( private busquedaService:BusquedaService){

  }
  ngOnInit(): void {
    this.getHistorial();
  }

  buscar(){
    this.busquedaService.serarchProduct(this.busqueda).subscribe(
      (resultado: any)=>{
        this.resultado = resultado;
        this.getHistorial();
      },
      (error)=>{
        console.log(error);
      }
    );
  }

  getHistorial(){
    if(this.busquedaService.getInstorioBusqueda()){
      this.historial= this.busquedaService.getInstorioBusqueda()
    }else{
      this.historial =  [{ busqueda: "S/n"}];
    }
    
  }

  historia(dato: string){
    this.busqueda.parametro = dato;
    this.buscar()
  }
}
