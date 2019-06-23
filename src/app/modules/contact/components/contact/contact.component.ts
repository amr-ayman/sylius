import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {

  private contactForm: FormGroup;
  private submitted = false;
  constructor(private fb: FormBuilder, private toastr: ToastrService, private translate: TranslateService) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.contactForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (!this.contactForm.valid) {
      return;
    } else {
      this.submitted = true;
      this.translate.get(['messages.contact', 'messages.success']).subscribe(translateValue => {
        this.toastr.success(translateValue['messages.contact'], translateValue['messages.success']);
      });
      console.log(this.contactForm.value);
      this.contactForm.reset();
      setTimeout(() => {
        this.submitted = false;
      }, 3000);
    }
  }
}
