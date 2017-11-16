import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  FileSelectDirective,
  FileDropDirective
  ],
  exports: [
FileSelectDirective,
FileDropDirective
]
}
)
export class SharedModuleModule { }
