import { Component, OnInit } from '@angular/core';
import { filter, map, tap } from 'rxjs/operators';
import { makeSorter } from 'src/app/shared/make-sorter';
import { LinksService } from '../links.service';

@Component({
  selector: 'app-mockup-footer',
  templateUrl: './mockup-footer.component.html',
  styleUrls: ['./mockup-footer.component.scss'],
  host: { class: 'placeholder' },
})
export class MockupFooterComponent implements OnInit {
  links$ = this.linksService
    .getLinks()
    .pipe(
      map((links) =>
        links
          .filter((link) => !link.url.includes('facebook.com'))
          .sort(makeSorter('label'))
      )
    );

  constructor(private readonly linksService: LinksService) {}

  ngOnInit(): void {}
}
