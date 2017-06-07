import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AppConfig} from '../../config';

@Injectable()
export class UploaderService {

  constructor() {}

  uploadImage(file: File, url: string, method: string = 'POST', fileName = 'image'){
    url = AppConfig.serverApi + url;
    console.log(fileName);

    return new Promise((resolve, reject) => {
      const formData: any = new FormData();
      const xhr = new XMLHttpRequest();

      formData.append(fileName, file, file.name);

      xhr.onreadystatechange = () => {
        {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
               resolve(JSON.parse(xhr.responseText));
            } else {
              reject(xhr.response);
            }
          }
        }
      }

      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
          const progress = Math.round(event.loaded / event.total * 100);

          console.log('progress:');
          console.log(event.loaded);
        }
      };

      xhr.open(method, url, true);
      xhr.send(formData);
    });
  }

}
