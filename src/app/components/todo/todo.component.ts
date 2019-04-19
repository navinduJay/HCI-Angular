import { Component, OnInit } from "@angular/core";
import { ConfigService } from "../../config.service";
import { Config } from "protractor";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  todo = {};
  constructor(private config: ConfigService) {}

  ngOnInit() {
    this.todo = this.getTodo();
  }

  getTodo() {
    return this.config.getConfig().todo;
  }
}
