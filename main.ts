import { mkdirSync, writeFileSync } from "node:fs";

// One line from a hopeless tech support agent to a desperate customer.
// The classic reboot, confessed as a stalling tactic: the agent's cheerful
// uselessness is the joke, the customer is never the butt of it.
// Gate: /output/entry.txt, UTF-8, 1-199 chars.
const SETUP = "Turning it off and on again has never fixed a thing,";
const PUNCH = "but it buys me 90 seconds to Google your problem.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", `${SETUP} ${PUNCH}`, "utf8");
