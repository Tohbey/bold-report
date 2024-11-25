import { Component, OnInit, Renderer2 } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  serviceUrl: string =
    "http://13.49.141.154:8085/reporting/reportservice/api/Designer";
  reportServerUrl: string =
    "http://13.49.141.154:8085/reporting/api/site/site1";
  serverServiceAuthorizationToken: string =
    "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Impvc2VwaC5vZ2lvbHVAamFsb2RlLmNvbSIsIm5hbWVpZCI6IjEiLCJ1bmlxdWVfbmFtZSI6IjIxYmQ2MGYzLWRmZjEtNGY2Zi05NzRmLTc2Y2IyZDUzNWMxNCIsIklQIjoiMTMuNDkuMTQxLjE1NCIsImlzc3VlZF9kYXRlIjoiMTczMjE5ODY2NiIsIm5iZiI6MTczMjE5ODY2NiwiZXhwIjoxNzM2MDg2NjY2LCJpYXQiOjE3MzIxOTg2NjYsImlzcyI6Imh0dHA6Ly8xMy40OS4xNDEuMTU0OjgwODUvcmVwb3J0aW5nL3NpdGUvc2l0ZTEiLCJhdWQiOiJodHRwOi8vMTMuNDkuMTQxLjE1NDo4MDg1L3JlcG9ydGluZy9zaXRlL3NpdGUxIn0.F4asIDxAGRl2KhM95iaevm2Do5ReuNImtZ7reVHyunM";

  title: string;
  constructor(

    public titleService: Title
  ) {}

  ngOnInit(): void {

  }
}
