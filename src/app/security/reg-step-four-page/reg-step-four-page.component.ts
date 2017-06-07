import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {UploaderService} from '../../shared/services/uploader.service';
import {RegistrationService} from "../registration-service.service";

declare var jQuery: any;

@Component({
  selector: 'app-reg-step-four-page',
  templateUrl: './reg-step-four-page.component.html',
  styleUrls: ['./reg-step-four-page.component.css']
})
export class RegStepFourPageComponent implements OnInit {
  @Input() user: any;
  @ViewChild('imgCtrl') imgCtrl: ElementRef;
  @Output() stageCompleted = new EventEmitter();


  defaultImg = 'assets/images/img_placeholder.png';
  progressMessage = 'Wrapping up things....';
  uploadFile: File;

  saving = false;
  imgSrc: any = this.defaultImg;


  constructor(private uploader: UploaderService, private regService: RegistrationService) { }

  ngOnInit() {
  }

  finishReg(){
    this.saving = true;
    this.progressMessage = 'Uploading profile image....'
    this.uploader.uploadImage(this.uploadFile, `/media/${this.user.id}/upload-profile`, 'POST').then(
      (image: any) => {
        // todo:: finish up registration

        if(image.id){
          // media was uploaded successfully
          this.completeRegistration(image);
        } else {
          console.log('error');
          console.log(image);
        }
      }
    );
  }

  completeRegistration(profileMedia){
    this.progressMessage = 'Wrapping up things....';

    this.regService.registerStageFour(this.user.id, profileMedia).subscribe(
      (response: any) => {
        this.saving = false;
        this.stageCompleted.emit(response.json());
      }
    );
  }

  clearImage(){
    this.imgSrc = this.defaultImg;
    jQuery(this.imgCtrl.nativeElement).val(null);
  }

  readImage(event){
    const file = event.target.files[0];

    if(file){
      const reader = new FileReader();

      if(file.type.indexOf('image') !== -1) {
        reader.onload = (e: any) => {
          if(e.target.result !== this.defaultImg) {
            this.imgSrc = e.target.result;
            this.uploadFile = file;
          }
        }

        reader.readAsDataURL(file);
      }
    }
  }
}
