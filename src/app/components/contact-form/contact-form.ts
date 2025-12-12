import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'contact-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-form.html',
  styleUrls: ['./contact-form.scss']
})
export class ContactFormComponent {
  form = {
    firstName: '',
    lastName: '',
    subject: '',
    message: '',
  };
}
