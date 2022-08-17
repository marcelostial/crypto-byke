import axios from "axios";

let RANKING_BUCKET =
  "https://cb-back-buckets-dev-backrankingbucket-1o72r4129wc4b.s3.amazonaws.com/REPLACE_WITH_ISO/ranking.json";

const RANKING_API =
  "https://h6cifwdcaa.execute-api.us-east-1.amazonaws.com/dev/ranking";

const CONFIG = { headers: { "Content-Type": "application/json" } };
const EMPTY_RANKS = { data: { ranking: [], total: 0 } };

// Getting latest bucket data (from yesterday)
const yesterdayDate = new Date();
yesterdayDate.setDate(yesterdayDate.getDate() - 1);
const [lastBucketISO] = yesterdayDate.toISOString().split("T");

RANKING_BUCKET = RANKING_BUCKET.replace("REPLACE_WITH_ISO", lastBucketISO);

export async function getStaticRankings() {
  return axios.get(RANKING_BUCKET, CONFIG).catch((error) => {
    console.log(error);
    return EMPTY_RANKS;
  });
}

export async function getRankings() {
  return axios.get(RANKING_API, CONFIG).catch((error) => {
    console.log(error);
    return EMPTY_RANKS;
  });
}

export async function findRankings(param, value) {
  return axios
    .get(`${RANKING_API}?${param}=${value}`, CONFIG)
    .catch((error) => {
      console.log(error);
      return EMPTY_RANKS;
    });
}
