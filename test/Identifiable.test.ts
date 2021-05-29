import { fail } from "assert";
import { assert } from "console";
import { Identifiable } from "../src/Lib/Types/Identifiable";

export function Test_Identifiable(data: Identifiable) {
  if (Identifiable.is(data)) {
    assert(data.id.length > 0, `Not a length on ID: ${JSON.stringify(data)}`);
  } else {
    fail(`Not a propery Identifiable: ${JSON.stringify(data)}`);
  }
}

export function Check_Identifiable(data: (Identifiable | string)[]): void {
  data.forEach((item) => {
    assert(count(data, item) === 1, "found duplicate items");
  });
}

function count(data: (Identifiable | string)[], id: Identifiable | string): number {
  var out = 0;

  var find = typeof id === "string" ? id : id.id;

  data.forEach((item) => {
    if (typeof item !== "string") item = item.id;

    if (item === find) out++;
  });

  return out;
}