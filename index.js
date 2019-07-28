import {
  getHTML,
  getTwitterFollowers,
  getInstagramFollowers
} from "./lib/scraper";

async function go() {
  //   const html = await getHTML("https://twitter.com/wesbos");
  //   const twitterCount = await getTwitterFollowers(html);
  //   console.log(`You have ${twitterCount} followers`);

  const html = await getHTML("https://instagram.com/wesbos");
  const instagramCount = await getInstagramFollowers(html);
}

go();
