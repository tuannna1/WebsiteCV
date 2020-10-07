import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joblist-component',
  templateUrl: './joblist-component.component.html',
  styleUrls: ['./joblist-component.component.css'],
})
export class JoblistComponentComponent implements OnInit {
  jobData: any = [
    {
      id: 1,
      title: 'VP Bank',
      logo:
        'https://cdn.itviec.com/employers/vpbank/logo/s65/9v9UBu116FjTcXz6TWDXM42k/vpbank-logo.png',
      description:
        'Chịu trách nhiệm phân tích yêu cầu, đề xuất giải pháp, ' +
        'thiết kế và phát triển các ứng dụng Micro-service/API ' +
        'dựa trên Domain Driven Design pattern để...',
      date: '1:57 PM',
    },
    {
      id: 2,
      title: 'Junior QA Automation Tester (Java/QA QC)',
      logo:
        'https://cdn.itviec.com/employers/geotech/logo/s65/5ZdMvAgPmUri3RAAfqXcUrrS/Screen%20Shot%202019-06-10%20at%204.18.59%20PM.png',
      description:
        '\n' +
        'We are looking for two (2) Junior QA Automation Testers to join ' +
        'our Ho Chi Minh City team! The Junior QA Automation Tester contributes to GeoGuard’s...',
      date: '8:15 AM',
    },
    {
      id: 3,
      title: 'Senior/ Team-lead Java',
      logo:
        'https://cdn.itviec.com/employers/ascend/logo/s65/1RHV9HaiwpFoD3CAis9hsqRH/ascend-logo.png',
      description:
        '\n' +
        'We will consider higher level (Lead) or lower level (Middle) based ' +
        "on the candidate's qualification & interview evaluation.  - Team management:  ...",
      date: '8:15 AM',
    },
    {
      id: 4,
      title: 'Senior Android Developer (Java, Kotlin)',
      logo:
        'https://cdn.itviec.com/employers/vien-nghien-cuu-du-lieu-lon-vinbigdata/logo/s65/aGjaaTNGaYt1mncHha14LCgt/Screen%20Shot%202020-07-03%20at%204.43.24%20PM.png',
      description:
        '\n' +
        'The Vingroup Big Data Institute (VinBigdata) was established by ' +
        'Vingroup in August 2018, aiming to conduct high-impact research on important areas of...',
      date: '8:15 AM',
    },
    {
      id: 5,
      title: 'Senior Java Developer (Spring)',
      logo:
        'https://cdn.itviec.com/employers/success-software-services/logo/s65/5KMXgoUfGuEtPVumAtXtndHT/@.png',
      description:
        '\n' +
        'Take responsibility for establishing, implementing, maintaining ' +
        'and improving the process compliance of each corresponding department Designer /...',
      date: '8:15 AM',
    },
    {
      id: 6,
      title: '02 Backend Java / Spring Developer',
      logo:
        'https://cdn.itviec.com/employers/tecomen-group/logo/s65/hAj59AP5gndGF44HE4o2yekD/tecomen-group-logo.png',
      description:
        '\n' +
        '- Tham gia và toàn bộ vòng đời của ứng dụng, tập trung và coding ' +
        'và debug các dự án website và hệ thống - Viết API kết nối giữa các hệ thống, và phục vụ...',
      date: '8:15 AM',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    console.log(this.jobData);
  }
}
