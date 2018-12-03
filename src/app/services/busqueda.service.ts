import { Injectable ,Inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Busqueda } from '../classes/busqueda';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';

const ENDPOIN = "https://www.liverpool.com.mx/tienda/?s=";

const STORAGE_KEY = '876sd876s87d687';
@Injectable()
export class BusquedaService {

  constructor(
    private _http: HttpClient,
    @Inject(SESSION_STORAGE) private storage:StorageService
  ) { 

  }

  serarchProduct(busqueda: Busqueda){
   
      this.storeOnLocalStorage( busqueda.parametro);
    
    return this._http.get(ENDPOIN+busqueda.parametro +"&d3106047a194921c01969dfdec083925=json");
  }

  public storeOnLocalStorage(busqueda: string): void {
        
        const currentTodoList = this.storage.get(STORAGE_KEY) || [];
        let bandera: boolean = false;
        try {
          this.storage.get(STORAGE_KEY).forEach(element => {
            if (element.busqueda == busqueda){
              bandera = true;
            }
          });
        } catch (error) {
          bandera= false;
        }
      
        if(!bandera){
          currentTodoList.push({
            busqueda: busqueda
          });
          this.storage.set(STORAGE_KEY, currentTodoList);
        }

        
        //console.log(this.storage.get(STORAGE_KEY) || 'LocaL storage is empty');
    }

    getHistorioBusqueda(){
      return this.storage
      .get(STORAGE_KEY) || 'LocaL storage is empty';
    }
}
