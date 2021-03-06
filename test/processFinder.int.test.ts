import { spawn } from "child_process";
import findProcess from "../utils/processFinder";

it("should resolve to the first pid found for the process name given", async () => {
  const top = spawn("sleep", ["60"]);
  const pidFound = await findProcess("sleep");
  expect(pidFound).toBe(top.pid);
  top.kill();
});
it("should resolve to null if no process can be found", async () => {
  expect(await findProcess("sleep")).toBeNull();
});
