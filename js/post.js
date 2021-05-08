

const API_URL = "http://localhost:3000/api/posts/";
const API_BASE_URL = "http://localhost:3000/";

window.onload = () => {
    getPost();
}

const getPostIdParam = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get("id");
}

const getPost = () => {
    const postId = getPostIdParam();
    const url = `${API_URL}${postId}`;
    fetch(url, {
        method: 'GET'
    }).then((response) => {
        return response.json();
    }).then((data) => {
        buildPost(data);
    })
}

const buildPost = (data) => {
    document.querySelector("header").style.backgroundImage = `url(${API_BASE_URL}${data.post_image})`
    const postDate = new Date(parseInt(data.added_date)).toDateString();
    document.getElementById("individual-post-title").innerText = data.title;
    document.getElementById("individual-post-content").innerText = data.content;
    document.getElementById("individual-post-date").innerText = `Published on ${postDate}`
}

