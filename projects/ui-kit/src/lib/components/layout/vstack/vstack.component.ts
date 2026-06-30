import { Component } from "@angular/core";
import { StackComponent, StackDirection } from "../stack";
import { NgStyle } from "@angular/common";

@Component({
  selector: "ui-vstack",
  standalone: true,
  imports: [NgStyle],
  templateUrl: "./vstack.component.html",
  styleUrls: [],
})
export class VStackComponent extends StackComponent {
  override direction: StackDirection = "column";
}
