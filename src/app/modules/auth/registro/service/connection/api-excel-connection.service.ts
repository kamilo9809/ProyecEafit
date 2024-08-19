import { Injectable } from '@angular/core';
import { dataFormRegister } from '../../../../interfaces/data-register';
import { HttpClient } from '@angular/common/http';
import { User } from '../../../interface/user';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

const SHEETDB_API_URL = 'https://sheetdb.io/api/v1/oxjtdankgbu46';

@Injectable({
  providedIn: 'root',
})
export class ApiExcelConnectionService {
  resultado:any

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ){}
  
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

  loginSesion(email:string,password:string){
    const correo = this.http.get<User[]>(`${SHEETDB_API_URL}/search?CorreoElectronico=${email}`).subscribe({
      next: (response) => {
        if (response.length === 0) {
          alert('Correo no existe. Verifique que se encuentre bien escrito');
        } else {
          console.log('Correo correcto');
         if(response[0].Contraseña === password){
          console.log('contraseña correcta');
          this.authService.login()
          localStorage.setItem('user',JSON.stringify(response))
          this.router.navigate(['/private/home'])
         }else{
          alert('contraseña incorrecta')
         }
        }
      },
      error: (e) => {
        console.error('Error al hacer la petición', e);
        alert('Se produjo un error al verificar el correo.');
      }
    })
  }
}