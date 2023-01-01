let btnNext = document.querySelector(".btn-next").classList.add("hidden");
let btnBack = document.querySelector(".btn-back").classList.add("hidden");
console.log()
function getPosts(userId, y)
{
    let requestPosts = new XMLHttpRequest();
    requestPosts.open("GET", "https://jsonplaceholder.typicode.com/posts?userId=" + userId);
    requestPosts.responseType = "json";
    requestPosts.send();
    
    requestPosts.onload = function () 
    {
        let posts = requestPosts.response;
        if (requestPosts.status >= 200 && requestPosts.status < 300)
        {
            document.getElementById("posts").innerHTML = "";
            for (let i = 0; i < posts.length/2; i++)
            {
                // let body = ;
                let content1of5 = `
                    <!-- post content start-->
                    <div class="content">
                    <div class="text" id="text">
                    <h1>${posts[i].title}</h1>
                    <p>${posts[i].body.slice(0, 50)}<span class="click" onclick="redMore(this);"> ...</span><span class="red-more hidden">${posts[i].body.slice(50)}</span></p>
                    </div>
                    <div class="num">
                    <p>(${posts[i].userId})</p>
                    <p>(${posts[i].id})</p>
                    </div>
                    </div>
                    <!-- post content End-->`;
                    document.getElementById("posts").innerHTML += content1of5;
                    
                }
                document.querySelector(".btn-next").addEventListener("click", () => 
                {
                        document.getElementById("posts").innerHTML = "";
                        for (let i = 5; i < posts.length; i++)
                        {
                    let content1of5 = `
                    <!-- post content start-->
                    <div class="content">
                    <div class="text">
                    <h1>${posts[i].title}</h1>
                    <p>${posts[i].body.slice(0, 50)}<span class="click" onclick="redMore(this);"> ...</span><span class="red-more hidden">${posts[i].body.slice(50)}</span></p>
                    </div>
                    <div class="num">
                    <p>(${posts[i].userId})</p>
                    <p>(${posts[i].id})</p>
                    </div>
                    </div>
                    <!-- post content End-->`;
                        document.getElementById("posts").innerHTML += content1of5;
                }
            })
            document.querySelector(".btn-back").addEventListener("click", () => 
            {
                    document.getElementById("posts").innerHTML = "";
                    for (let i = 0; i < posts.length/2; i++)
                    {
                        let content1of5 = `
                        <!-- post content start-->
                        <div class="content">
                        <div class="text">
                        <h1>${posts[i].title}</h1>
                        <p>${posts[i].body.slice(0, 50)}<span class="click" onclick="redMore(this);"> ...</span><span class="red-more hidden">${posts[i].body.slice(50)}</span></p>
                        </div>
                        <div class="num">
                        <p>(${posts[i].userId})</p>
                        <p>(${posts[i].id})</p>
                        </div>
                        </div>
                        <!-- post content End-->`;
                        document.getElementById("posts").innerHTML += content1of5;
                }
            })
        }
    }
}


function getUsers()
{
    let requestUsers = new XMLHttpRequest();
    requestUsers.open("GET", "https://jsonplaceholder.typicode.com/users");
    requestUsers.responseType = "json";
    requestUsers.send();
    
    requestUsers.onload = function () 
    {
        if (requestUsers.status >= 200 && requestUsers.status < 300)
        {
            let users = requestUsers.response;
            for (user of users)
            {
                let content = `
                <!-- user content start-->
                <div class="content" onclick="userClickd(${user.id}, this)">
                <h1>${user.name}</h1>
                <p class="hidden">${user.email}</p>
                </div>
                <!-- user content End-->`;
                let parentUsers = document.getElementById("users");
                parentUsers.innerHTML += content;
                console.log()
            }
        }
    }
}
getPosts();
getUsers();

function userClickd(id, el)
{
    // btnBack
    document.querySelector(".btn-back").classList.remove("hidden");
    document.querySelector(".btn-next").classList.remove("hidden");
    getPosts(id)
    let selectedElement = document.getElementsByClassName("active");
    for (selected of selectedElement)
    {
        selected.classList.remove("active")
    }
    el.classList.add("active");
    let email = document.querySelectorAll(".content p")
    for (none of email)
    {
        none.classList.add("hidden")
    }
    el.children[1].classList.remove("hidden")
}
function redMore(e)
{
    let redMore = document.querySelectorAll(".red-more");
    for (red of redMore)
    {
        red.classList.add("hidden")
    }
    e.nextElementSibling.classList.remove("hidden");


    let clicked = document.querySelectorAll(".click");
    for (click of clicked)
    {
        click.classList.remove("hidden")
    }
    e.classList.add("hidden");
}
// let email = document.querySelector(".users")

// console.log(email.nextElementSibling);
