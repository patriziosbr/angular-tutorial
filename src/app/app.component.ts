import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Task } from './interfaces/data.interface';
import { Post } from './interfaces/data.interface';
import { PostService } from './post.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tasks!: any; //metodo easy per dichiarare i dati nel componente

  submitted = false;

  constructor(private fb:FormBuilder, private data: DataService) {}
  // form builder
  taskForm = this.fb.group({
    heading: ['', Validators.required ],
    description: ['', Validators.required]
  })

  ngOnInit():void {
    this.tasks = this.data.getTasks();
  }

  onSubmit() {
    console.log( this.taskForm);
    this.submitted = true;
    if(this.taskForm.valid) {
      this.data.addTask({heading: this.taskForm.value.heading, description: this.taskForm.value.description});
      this.taskForm.reset();
      this.submitted = false;
    }
  }

  
  get heading() {return this.taskForm.get('heading');}
  get desc() {return this.taskForm.get('description');}
  // form control - macchinoso perche lo devi fare per ogni form
  // taskForm = new FormGroup({
  //   heading : new FormControl(),
  //   description : new FormControl()
  // });



  // posts!: Post[];

  // constructor(private data: PostService) {
  // }
  // ngOnInit():void {
  //   this.posts = this.data.getPost();
  // }

 

  // tasks!: Task[]; //metodo per portare l'oggetto con i dati nel componente 


  //service - dependecy injection
  // constructor(private data: DataService) {
  // }
  // ngOnInit():void {
  //   this.tasks = this.data.getTasks();
  // }
  //service - dependecy injection


  title = 'angular-tutorial';
  // <!-- custom pipe -->
  number = 10;
  // <!-- custom pipe -->


  // <!-- date pipe currency pipe -->
  today = new Date();
  amount = 20;
  // <!-- date pipe currency pipe -->


  // <!-- practice 2 ngFor ngIf ngClass -->
  // posts = [
  //   {
  //     title: 'pippa',
  //     author: "Verga G",
  //     paragraph: 'lorem ipsuim bla bla'
  //   },
  //   {
  //     title: 'ciao sono un titolo',
  //     author: "Mariano G",
  //     paragraph: 'secondo round'
  //   }
  // ]
  // <!-- practice 2 ngFor ngIf ngClass -->

}
