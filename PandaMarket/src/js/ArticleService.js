const SERVER = 'https://sprint-mission-api.vercel.app/articles';

async function getArticleList(params = {}) {
  const url = new URL(SERVER);
  for (let key in params) {
    url.searchParams.append(key, params[key]);
  }

  const res = await fetch(url);
  const data = await res.json();

  return data;
}

async function getArticle(id) {
  const url = new URL(SERVER + `${id}`);

  const res = await fetch(url);
  const data = await res.json();

  return data;
}

async function createArticle(article) {
  const url = new URL(SERVER);

  const res = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(article),
    headers: { 'Content-Type': 'application/json' }
  });
  const data = await res.json();

  return data;
}
