import { Component } from '@angular/core';
import * as QRCode from 'qrcode';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.scss']
})
export class QrComponent {
  qrData: string = ''; // Input data for the QR code
  qrImageUrl: string = '';

  constructor() {}

  ngOnInit(): void {
    this.generateQRCode(); // Generate QR code on component initialization
  }

  onInputChanged(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value;
    this.qrData = inputValue;  // Regenerate QR code when input data changes
    this.generateQRCode();
  }

  generateQRCode(): void {
    if (this.qrData.trim() !== '') {
      QRCode.toDataURL(this.qrData, (err, url) => {
        if (err) {
          console.error(err);
          return;
        }
        this.qrImageUrl = url;
      });
    } else {
      this.qrImageUrl = ''; 
    }
  }
}
