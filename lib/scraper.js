import axios from "axios";
import cheerio from "cheerio";

export async function getHTML(url) {
  const { data: html } = await axios.get("https://twitter.com/wesbos");
  return html;
}

export async function getTwitterFollowers(html) {
  const $ = cheerio.load(html);
  const span = $('[data-nav="followers"] .ProfileNav-value');
  return span.data("count");
}

export async function getInstagramFollowers(html) {
  const $ = cheerio.load(html);
  console.log($.html());
  //   const data = await axios.get(`https://instsgram.con/${username}/?__a=1`);
  //   console.log("data:", data);
}
