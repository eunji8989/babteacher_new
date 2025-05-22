// 예시 레시피 데이터 (실제로는 서버나 DB에서 받아올 수 있음)
const recipes = [
  { id: 1, name: "된장찌개", url: "https://example.com/recipe/1" },
  { id: 2, name: "김치볶음밥", url: "https://example.com/recipe/2" },
  { id: 3, name: "불고기", url: "https://example.com/recipe/3" },
  { id: 4, name: "비빔밥", url: "https://example.com/recipe/4" },
  { id: 5, name: "감자조림", url: "https://example.com/recipe/5" },
  { id: 6, name: "계란찜", url: "https://example.com/recipe/6" }
];

// 랜덤하게 3개 레시피만 뽑아서 보여주기 (페이지 로드 시마다 바뀜)
function getRandomRecipes(arr, count) {
  const copy = [...arr];
  const result = [];
  for (let i = 0; i < count; i++) {
    if (copy.length === 0) break;
    const idx = Math.floor(Math.random() * copy.length);
    result.push(copy[idx]);
    copy.splice(idx, 1);
  }
  return result;
}

function renderRecipes() {
  const recipeList = document.getElementById("recipe-list");
  recipeList.innerHTML = "";

  const randomRecipes = getRandomRecipes(recipes, 3);
  randomRecipes.forEach((recipe) => {
    const btn = document.createElement("button");
    btn.className = "recipe-btn";
    btn.textContent = recipe.name;
    btn.onclick = () => {
      window.location.href = recipe.url;
    };
    recipeList.appendChild(btn);
  });
}

// 초기 실행
document.addEventListener("DOMContentLoaded", () => {
  renderRecipes();
});
