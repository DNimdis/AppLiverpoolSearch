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
  public busqueda: any;
  constructor( private busquedaService:BusquedaService){
    this.busqueda = new Busqueda();

  }
  ngOnInit(): void {    
    this.getHistorial();  
  }

  buscar(){
    this.busquedaService.serarchProduct(this.busqueda).subscribe(
      (resultado: any)=>{
        this.resultado = resultado;
        console.log(this.resultado.contents);
        
      },
      (error)=>{
        console.log(error);
      }
    );
  }

  getHistorial(){
    if(this.busquedaService.getHistorioBusqueda()){
      this.historial= this.busquedaService.getHistorioBusqueda();                 
    }    
  }

  historia(dato: string){
    this.busqueda.parametro = dato;
    this.buscar()
  }
}
