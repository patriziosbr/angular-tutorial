import { Injectable } from '@angular/core';
import { Post } from './interfaces/data.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private posts: Post[] = [
    {
      title: 'pippa',
      author: "Verga G",
      paragraph: 'lorem ipsuim bla bla'
    },
    {
      title: 'ciao sono un titolo',
      author: "Mariano G",
      paragraph: 'secondo round'
    },
    {
      title: 'Terzo post',
      author: "fivverr",
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam quidem ex earum labore nobis maiores reiciendis architecto ducimus quas, sint vitae iure doloremque. Quidem assumenda libero tenetur. Ullam, mollitia. Laborum voluptates nulla minima facilis natus quidem incidunt excepturi accusamus eaque quod? Minima aliquid, culpa mollitia optio, cumque odit deleniti provident minus porro fugiat dolore odio exercitationem. Debitis, adipisci? Sequi, voluptates?'
    }
  ]

  getPost() {
    return this.posts;
  }
}
