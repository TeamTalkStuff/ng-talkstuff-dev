import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {AppConfig} from '../../config';
import {AuthService} from '../../security/auth.service';

declare var UIkit: any;

@Component({
  selector: 'app-photo-upload',
  templateUrl: './photo-upload.component.html',
  styleUrls: ['./photo-upload.component.css']
})
export class PhotoUploadComponent implements OnInit {

  uploading = false;
  @ViewChild('photoModal') photoModalEl: ElementRef;
  @Output() uploaded = new EventEmitter<any>();

  constructor(private http: Http, private authService: AuthService) {}

  ngOnInit() {
  }

  onFileChange(event) {
    this.uploading = true;
    this.authService.getAuthUser().subscribe(
      user => {
        const url = AppConfig.serverApi + '/media/' + user.id + '/upload-image?token=' + localStorage.getItem('authToken');
        const file = event.target.files[0];

        return new Promise((resolve, reject) => {
          const formData: any = new FormData();
          const xhr = new XMLHttpRequest();

          formData.append('image', file, file.name);

          xhr.onreadystatechange = () => {
            {
              if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                  this.mediaUploaded(xhr.response);
                } else {
                  reject(xhr.response);
                }
              }
            }
          }

          xhr.open('POST', url, true);
          xhr.send(formData);
        });
      }
    );
  }

  mediaUploaded(response: any){
    this.uploading = false;
    UIkit.modal(this.photoModalEl.nativeElement).hide();
    this.uploaded.emit(JSON.parse(response));
  }
}
