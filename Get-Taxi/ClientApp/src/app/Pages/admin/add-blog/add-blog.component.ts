import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { ADD_BLOG, ADD_BLOG_DEFAULT } from 'src/app/actions/blog.actions';
import { State } from 'src/app/reducers';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {
  blogForm:any;
  blogAdded?:boolean;



  constructor(private fb:FormBuilder,private store:Store<State>) { }

  ngOnInit(): void {
    this.blogForm = this.fb.group({
      blogName:["",Validators.required],
      blogText:["",Validators.required],
      blogImage:null

    })

    this.store.select(state => state.blogState.blogAdded).subscribe(data =>{
      this.blogAdded = data;
    });

  }

  addBlogPost(){
    let formData = new FormData();
    formData.append("blogName",this.blogForm.get('blogName').value);
    formData.append("blogText",this.blogForm.get('blogText').value);
    formData.append("blogImage",this.blogForm.get('blogImage').value);
    this.store.dispatch(new ADD_BLOG(formData));
    setTimeout(() =>{
      this.store.dispatch(new ADD_BLOG_DEFAULT());
    },3000);
    this.blogForm.reset();
  }


  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.blogForm.get('blogImage').setValue(file);
    }
  }
}
