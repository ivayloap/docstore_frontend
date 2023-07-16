import { Component } from '@angular/core';
import { DocumentService } from '../services/document.service';

@Component({
  selector: 'document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.less']
})
export class DocumentComponent {
  selectedFile: File | null = null;

  constructor(private documentService: DocumentService) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
  }

  uploadFile() {
    if (this.selectedFile) {
      this.documentService.uploadFile(this.selectedFile).subscribe(
        (response) => {
          // Handle the response after the file upload is successful
          console.log('File uploaded successfully!', response);
        },
        (error) => {
          // Handle any errors that occurred during the file upload
          console.error('Error uploading file:', error);
        }
      );
    } else {
      console.warn('No file selected.');
    }
  }
}
