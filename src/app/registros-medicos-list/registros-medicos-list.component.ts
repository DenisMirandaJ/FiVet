import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegistroMedico } from '../Classes/RegistroMedico';
import { ApiRestRoutes } from '../Constants/ApiRestRoutes';
import { RegistroMedicoService} from '../Services/RegistroMedicoService';

@Component({
  selector: 'app-registros-medicos-list',
  templateUrl: './registros-medicos-list.component.html',
  styleUrls: ['./registros-medicos-list.component.css']
})
export class RegistrosMedicosListComponent implements OnInit {

  constructor(private http: HttpClient, private registroMedicosListService: RegistroMedicoService) { }

  registroMedicoId : String = "5bfc92918e1eb11c08b089d0";
  //registroMedicoId : String = "";
  ngOnInit() {
    if(this.registroMedicoId){
      this.http.get<RegistroMedico>(ApiRestRoutes.registroMedicoUri + this.registroMedicoId)
      .subscribe((registroMedico : RegistroMedico) => {
        this.registroMedicosListService.selectRegistroMedico(registroMedico);
      });

    }
  }
}
