import TestModule from "./Test.js";
const Test = new TestModule();

/**
Headline Hash Tags
Write a function that retrieves the top 3 longest words of a newspaper headline and transforms them into hashtags. If multiple words tie for the same length, retrieve the word that occurs first.

Examples
getHashTags("How the Avocado Became the Fruit of the Global Trade")
➞ ["#avocado", "#became", "#global"]
getHashTags("Why You Will Probably Pay More for Your Christmas Tree This Year")
➞ ["#christmas", "#probably", "#will"]
getHashTags("Hey Parents, Surprise, Fruit Juice Is Not Fruit")
➞ ["#surprise", "#parents", "#fruit"]
getHashTags("Visualizing Science")
➞ ["#visualizing", "#science"]
 */

function getHashTags(str) {
  const sortedStr = str
    .replace(",", "")
    .split(" ")
    .sort((a, b) => b.length - a.length);
  return sortedStr.map((word, idx) => {
    if (idx < 3) {
      return "#" + word.replace(",", "").toLowerCase();
    }
  });
}

Test.assertSimilar(
  getHashTags("How the Avocado Became the Fruit of the Global Trade"),
  ["#avocado", "#became", "#global"]
);
Test.assertSimilar(
  getHashTags(
    "Why You Will Probably Pay More for Your Christmas Tree This Year"
  ),
  ["#christmas", "#probably", "#will"]
);
Test.assertSimilar(
  getHashTags("Hey Parents, Surprise, Fruit Juice Is Not Fruit"),
  ["#surprise", "#parents", "#fruit"]
);
Test.assertSimilar(getHashTags("Visualizing Science"), [
  "#visualizing",
  "#science",
]);
Test.assertSimilar(
  getHashTags("Minecraft Stars on Youtube Share Secrets to Their Fame"),
  ["#minecraft", "#youtube", "#secrets"]
);
Test.assertSimilar(getHashTags("Are You an Elite Entrepreneur?"), [
  "#entrepreneur",
  "#elite",
  "#are",
]);
