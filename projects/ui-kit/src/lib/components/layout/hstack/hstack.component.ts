import { Component } from "@angular/core";
import { StackComponent, StackDirection } from "../stack";
import { NgStyle } from "@angular/common";

@Component({
  selector: "ui-hstack",
  standalone: true,
  imports: [NgStyle],
  templateUrl: "./hstack.component.html",
  styleUrls: [],
})
export class HStackComponent extends StackComponent {
  override direction: StackDirection = "row";
}
