import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {
  blogForm:any;


  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.blogForm = this.fb.group({
      blogName:["",Validators.required],
      blogText:["",Validators.required]

    })

  }

  addBlogPost(){
    console.log(this.blogForm.value);
    this.blogForm.reset();

  }

}
