import { Component } from '@angular/core';
import { BackendService } from 'src/app/backend.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  users:any
  constructor(private api: BackendService){}
  ngOnInit(){
this.getdata()
  }
  getdata(){ this.api.getEmployee().subscribe((res:any)=>{
    console.log(res)
    this.users=res
    })

  }
}

