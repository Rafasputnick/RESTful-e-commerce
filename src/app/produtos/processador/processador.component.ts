import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-processador',
  templateUrl: './processador.component.html',
  styleUrls: ['./processador.component.css']
})
export class ProcessadorComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }



  onFileSelect(event) {
    if (event.target.files && event.target.files[0]){
      const foto = event.target.files[0];
      const formData = new FormData();
      formData.append('foto', foto);

      this.http.post('http://localhost:8080/produtos/new', formData)
        .subscribe(resposta => console.log('Upload ok.'));
    }
  }

  onUpload() {

  }


}
