// 로그인 상태에 따른 화면 변화 //
// window.onload를 사용해 해당 페이지가 모두 로드된 후에 checkLogin 함수가 실행되도록 세팅
window.onload = async function checkLogin() {
    var payload = localStorage.getItem("payload")
    var parsed_payload = await JSON.parse(payload)

    const username = document.getElementById("username")
    const loginoutButton = document.getElementById("loginout")

    if (parsed_payload) {
        username.innerText = parsed_payload.username
        loginoutButton.innerText = "로그아웃"
        loginoutButton.setAttribute("onclick", "handleLogout()")
    } else {
        username.innerText = "로그인해주세요"
        loginoutButton.innerText = "로그인"
        loginoutButton.setAttribute("onclick", "location.href='/login.html'")
    }
}


// 작성한 게시글 불러오기 //
window.onload = async function loadArticles() {
    articles = await getArticles()
    const article_list = document.getElementById("articles")

    articles.forEach(article => {
        const newArticle = document.createElement("div")
        const articleImage = document.createElement("img")
        articleImage.setAttribute("src", `${backend_base_url}${article.image}`)
        newArticle.setAttribute("id", article._id)
        newArticle.innerText = article.title
        newArticle.setAttribute("onclick", "articleDetail(this.id)")
        newArticle.appendChild(articleImage)
        article_list.appendChild(newArticle)
    });
}