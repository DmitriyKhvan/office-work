import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-search-block',
  templateUrl: './search-block.component.html',
  styleUrls: ['./search-block.component.scss'],
})
export class SearchBlockComponent implements OnInit {
  lang = 'ru';
  constructor() {}

  ngOnInit(): void {}
}
