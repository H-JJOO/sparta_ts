// enums
import { Color, Direction } from "../types";

// interface
import type { ThingsInLife } from "../types";

function printRGB(color: Color): Color {
  return color;
}

console.log(printRGB(Color.RED));
console.log(printRGB(Color.GREEN));

function printThngsInLife(things: ThingsInLife): string {
  return `color of pen: ${things.colorOfPen} keyboard arrow: ${things.keyboardArrow}`;
}

console.log(
  printThngsInLife({ colorOfPen: Color.BLUE, keyboardArrow: Direction.Left })
); // color of pen: Blue keyboard arrow: Left
