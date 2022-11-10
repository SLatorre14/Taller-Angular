import { Component, OnInit } from '@angular/core';
import { Serie } from '../Serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent implements OnInit {

  series : Array<Serie> = [];
  promedio: number = 0;
  suma: number = 0;
  constructor(private serieService: SerieService) { }

  getSeries(): void {
    this.serieService.getSeries().subscribe((series) => {
      this.series = series;
    });
  }

  calcularPromedio(): void {
    this.series.forEach((serie) => {
      this.suma = this.suma + serie.seasons;

    });
    this.promedio = this.suma/(this.series.length);
  }

  ngOnInit() {
    this.getSeries();
    this.calcularPromedio();
  }

}
