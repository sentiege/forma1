async function loadJSON(path){
  const res = await fetch(path);
  return res.json();
}
function qs(name){
  return new URLSearchParams(window.location.search).get(name);
}
