import * as fs from "node:fs";

const ADVICE =
  "When I was seventeen and wanted a loan for a car I could not afford, my father said never borrow money to look rich, because the people you are trying to impress will be gone long before the debt is.";

function checkAdvice(line: string): void {
  const trimmed = line.trim();
  if (trimmed.length === 0) {
    throw new Error("advice is empty");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("advice must be exactly one line");
  }
  if (line.length > 200) {
    throw new Error(
      `advice is ${line.length} characters, over the 200 limit`,
    );
  }
  const sentences = trimmed.split(/[.!?]+/).filter((part) => part.trim().length > 0);
  if (sentences.length !== 1) {
    throw new Error("advice must be exactly one sentence");
  }
}

checkAdvice(ADVICE);
fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", ADVICE, "utf8");
