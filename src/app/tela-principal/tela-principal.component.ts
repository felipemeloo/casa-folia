import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela-principal',
  templateUrl: './tela-principal.component.html',
  styleUrls: ['./tela-principal.component.css']
})
export class TelaPrincipalComponent implements OnInit {

  
  textTransformation() {
    let deg = 1000;
    for (let i = 1; i <= 30; i++) {
      let div = document.querySelector(".containerr div:nth-child(" + i + ")") as HTMLElement;
      div.style.transform = 'rotate(' + deg + 'deg)';
      deg = deg + 10;
    };
  }

  ngOnInit() { 
    this.textTransformation();
  }

}
