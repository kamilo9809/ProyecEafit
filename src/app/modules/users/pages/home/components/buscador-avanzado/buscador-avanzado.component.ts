import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { dropdownCiudad, Oportunidad, sector } from './data/dataDropdowns';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { dataOportunidades } from './data/dataOportunidades';
import { User } from '../../../../../auth/interface/user';

@Component({
  selector: 'app-buscador-avanzado',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './buscador-avanzado.component.html',
  styleUrl: './buscador-avanzado.component.css'
})
export class BuscadorAvanzadoComponent {
  stylesClassDropdown:string="border-2 rounded-4 bg-transparent my-2 p-1 w-100"
  stylesDropdown:string=`
  border-color: #ccc; 
  color:#6E6E6C;
  `
  buttonStyle:string='py-1 fs-5 fw-bold w-50 border-1 border-dark rounded-2'
  public dropdownOportunidad = Oportunidad.map(item=>item ?? [])
  public dropdownSector = sector.map(item=>item ?? [])
  public dropdownCiudadObject = dropdownCiudad.map(item=>item ?? [])
  public datos: User[] = localStorage.getItem('user') 
  ? JSON.parse(localStorage.getItem('user') as any) 
  : [];
  public oportunidades = dataOportunidades
  public fullText:string[] = this.oportunidades.map(item=>item.parrafo)
  public shortText: string[] = this.fullText.map(text => 
    text.length > 100 ? text.substring(0, 290) + '...' : text
  );
  public showFullText: boolean[] = new Array(this.oportunidades.length).fill(false);
  toggleText(index: number) {
    this.showFullText[index] = !this.showFullText[index];
  }
  public buttonContainerStyle:string='py-2 px-4 fs-5 fw-bold border-1 rounded-4 text-black'
  isActive: boolean[] = [];
  form!: FormGroup;

  constructor(
    private method: FormBuilder
  ) {
    this.showFullText = new Array(this.oportunidades.length).fill(false);
    this.isActive = new Array(this.oportunidades.length).fill(false);

    this.form = this.method.group({
      fechaInicio: ['', Validators.required],
      fechaFinal:['',Validators.required],
      ubicacion:['',Validators.required],
      oportunidad:['',Validators.required],
      sector:['',Validators.required]
    })
  }

  toggleActive(index: number): void {
    this.isActive[index] = !this.isActive[index];
  }

  @ViewChild('search') search!: ElementRef<HTMLInputElement>

  get isInputEmpty():boolean{
    const logic = !this.search.nativeElement.value
    return logic      
  }

  searchValue: string = '';

  clearInput(): void {
    this.searchValue = '';
  }

  get filterOportunity() {
    if (!this.searchValue) {
      return this.oportunidades;
    }
    const lowerCaseSearchTerm = this.searchValue.toLowerCase();
    return this.oportunidades.filter(oportunidad =>
      oportunidad.titulo.toLowerCase().includes(lowerCaseSearchTerm) ||
      oportunidad.ubicacion.toLowerCase().includes(lowerCaseSearchTerm) ||
      oportunidad.sector.toLowerCase().includes(lowerCaseSearchTerm) ||
      oportunidad.parrafo.toLowerCase().includes(lowerCaseSearchTerm)
    );
  }

  onSubmit(){
    if (this.form.valid) {
      console.log(this.form.value);
      
    }else{
      console.log('error en el envio de datos');
      
    }
    this.form = this.method.group({
      fechaInicio: '',
      fechaFinal:'',
      ubicacion:'',
      oportunidad:'',
      sector:'',
    })
  }

  clearFind(){
    this.form = this.method.group({
      fechaInicio: '',
      fechaFinal:'',
      ubicacion:'',
      oportunidad:'',
      sector:'',
    })
  }
}
