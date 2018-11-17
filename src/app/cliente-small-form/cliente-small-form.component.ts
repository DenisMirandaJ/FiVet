import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cliente-small-form',
  templateUrl: './cliente-small-form.component.html',
  styleUrls: ['./cliente-small-form.component.css']
})
export class ClienteSmallFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  clienteForm: FormGroup;
  ngOnInit() {
    this.clienteForm = this.fb.group({
      title: [],
      selling_points: this.fb.array([this.fb.group({point:''})])
    })
  }

}
