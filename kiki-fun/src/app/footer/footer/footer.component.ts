import { Component, OnInit } from '@angular/core';
import { Meme } from 'src/app/interfaces/meme';
import { MemeService } from 'src/app/services/memeservice';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  memes: Meme[];
  

  responsiveOptions;

  constructor(private memeService: MemeService) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit(): void {
    this.memeService.getMeme().then(memes => {
      this.memes = memes;
      console.log(memes);
      console.log("hi");
    });
  }

}


