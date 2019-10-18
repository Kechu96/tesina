import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user/shared/user.model';
import { AuthService } from '../shared/auth.service';
import { UserService} from '../../user/shared/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { University } from '../../user/shared/university.model';
declare var $: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: User;
  imageSrc: any;
  uploadFile: Array<File>;
  universities: University[];
  genders: any = [
    { value: 'Hombre' },
    { value: 'Mujer' },
    { value: 'Sin especificar' }
  ];
  constructor(private authService: AuthService, private userService: UserService,private toastr: ToastrService, private router: Router) { }
  ngOnInit() {
    this.user = new User();
    this.imageSrc = "../../../assets/images/default-user-image.png";
    this.userService.getAllUniversities().subscribe(
      (universities)=>{
        this.universities = universities;
      }
    );
  }
  onUpload(event) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      this.uploadFile = event.target.files;
      const reader = new FileReader();
      reader.onload = e => this.imageSrc = reader.result;
      console.log(this.imageSrc);
      reader.readAsDataURL(file);
    }
  }
  logUp() {
    this.authService.logUp(this.user).subscribe(
      (user) => {
        this.toastr.success(user.details,user.title);
        if(this.uploadFile && this.uploadFile[0]){
          this.setImage(user.userId);
        }
        console.log(user);
        this.router.navigate(['./login']);       
      },
      (err) => {
        this.toastr.error(err.error.details,err.error.title);

      }
    )

  }
  setImage(id: String) {
    let formData = new FormData();
    formData.append('image', this.uploadFile[0]);
    this.userService.uploadProfilePicture(formData,id).subscribe(
      (res) => {
        console.log('Respuesta:', res);
      }
    )
  }
}
