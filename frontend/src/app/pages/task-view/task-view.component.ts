import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Task } from 'src/app/models/task.model';
import { List } from 'src/app/models/list.model';
<<<<<<< HEAD
<<<<<<< HEAD
import { AuthService } from '../../auth.service';
=======
>>>>>>> 84ef65cc20347f4f3fda13eed9f08d5c78919a79
=======
>>>>>>> 84ef65cc20347f4f3fda13eed9f08d5c78919a79

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

  lists: List[];
  tasks: Task[];
<<<<<<< HEAD
<<<<<<< HEAD
  con=false;

  selectedListId: string;

   public adminstatus=false;
  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router,
    private auth: AuthService) { }

  ngOnInit() {
    let adminstatus=localStorage.getItem('adminstatus');
    if(adminstatus=="true")
    {
      this.adminstatus=true;
    }
    else
    {
      this.adminstatus=false;
    }
    console.log(this.adminstatus);
=======
=======
>>>>>>> 84ef65cc20347f4f3fda13eed9f08d5c78919a79

  selectedListId: string;

  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
<<<<<<< HEAD
>>>>>>> 84ef65cc20347f4f3fda13eed9f08d5c78919a79
=======
>>>>>>> 84ef65cc20347f4f3fda13eed9f08d5c78919a79
    this.route.params.subscribe(
      (params: Params) => {
        if (params.listId) {
          this.selectedListId = params.listId;
          this.taskService.getTasks(params.listId).subscribe((tasks: Task[]) => {
            this.tasks = tasks;
          })
        } else {
          this.tasks = undefined;
        }
      }
    )

    this.taskService.getLists().subscribe((lists: List[]) => {
      this.lists = lists;
    })

  }

  onTaskClick(task: Task) {
    // we want to set the task to completed
    this.taskService.complete(task).subscribe(() => {
      // the task has been set to completed successfully
      console.log('Completed successully!');
      task.completed = !task.completed;
    })
  }

  onDeleteListClick() {
    this.taskService.deleteList(this.selectedListId).subscribe((res: any) => {
      this.router.navigate(['/lists']);
      console.log(res);
    })
  }

  onDeleteTaskClick(id: string) {
    this.taskService.deleteTask(this.selectedListId, id).subscribe((res: any) => {
      this.tasks = this.tasks.filter(val => val._id !== id);
      console.log(res);
    })
  }
<<<<<<< HEAD
<<<<<<< HEAD

  logout()
  {
    localStorage.removeItem('user-id');
    localStorage.removeItem('x-access-token');
    localStorage.removeItem('x-refresh-token');
    localStorage.removeItem('adminstatus');
    this.router.navigate(['/login']);
  }
=======
>>>>>>> 84ef65cc20347f4f3fda13eed9f08d5c78919a79
=======
>>>>>>> 84ef65cc20347f4f3fda13eed9f08d5c78919a79
}
