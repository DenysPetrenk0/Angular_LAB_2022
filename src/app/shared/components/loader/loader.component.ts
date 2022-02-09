import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/features/courses/services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  isLoading: boolean = false;

  constructor(private LoaderService: LoaderService) { }

  ngOnInit(): void {
    this.getLoadingState()
  }

  getLoadingState() {
    return this.LoaderService.loading$.subscribe((isLoading: boolean) => {
      this.isLoading = isLoading
    });

  }

}
