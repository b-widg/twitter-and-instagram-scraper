import express from "express";
import cors from "cors";
import db from "./lib/db";
import "./lib/cron";
import { getTwitterCount, getInstagramCount } from "./lib/scraper";

const app = express();
app.use(cors());

app.get(`/scrape`, async (req, res, next) => {
  console.log(`Scraping!!`);
  const [iCount, tCount] = await Promise.all([
    getInstagramCount(),
    getTwitterCount()
  ]);
});

app.listen(2093, () => {
  console.log(`Example App running on port 2093`);
});
