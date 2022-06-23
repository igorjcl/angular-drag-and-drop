import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

interface Pessoa {
  id: number;
  nome: string;
  idade: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'dragdrop-list';

  pessoas: Pessoa[] = [
    {
      id: 1,
      nome: 'Igor',
      idade: 12,
    },
    {
      id: 2,
      nome: 'Igor 2',
      idade: 12,
    },
    {
      id: 3,
      nome: 'Igor 3',
      idade: 12,
    },
    {
      id: 4,
      nome: 'Igor 4',
      idade: 12,
    },
  ];

  drop(event: CdkDragDrop<Pessoa[]>) {
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }
}
