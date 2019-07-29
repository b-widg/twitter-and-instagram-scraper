import cron from "node-cron";
import { runCron } from "./scraper";

cron.schedule(`* * * * *`, () => {
  console.log(`Timer running the cron!`);
  runCron();
});
