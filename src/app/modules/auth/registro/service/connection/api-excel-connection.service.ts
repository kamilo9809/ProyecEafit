import { Injectable } from '@angular/core';
import { dataFormRegister } from '../../../../interfaces/data-register';
import { HttpClient } from '@angular/common/http';

const SHEETDB_API_URL = 'https://sheetdb.io/api/v1/oxjtdankgbu46';

@Injectable({
  providedIn: 'root',
})
export class ApiExcelConnectionService {
  resultado:any

  constructor(private http: HttpClient){}
  
  addData(newData:dataFormRegister){
    const headers={'Content-Type': 'application/json'}
    this.http.post<dataFormRegister>(SHEETDB_API_URL,{
      Headers:headers,
      body:newData
    }).subscribe({
      next:()=>{
        console.log('datos enviados correctamente');
        
      },
      error:(err)=>{
        console.log('se genero un error en el envio de datos', err);
        
      }
    })
  }

  getData(){
    this.http.get<dataFormRegister>(SHEETDB_API_URL)
  }
}