function card(title, cname, views, months, duration, thumbnail) {

    let viewstr
    if (views < 1000000) {
        viewstr = views / 1000 + "k";

    }
    else if (views > 1000000) {
        viewstr = views / 1000000 + "M";
    }
    else {
        viewstr = views / 1000 + "k";
    }

    let html = `<div class="card">
                <div class="image">
                    <img src="${thumbnail}"
                        alt="">
                    <div class="capsule">${duration}</div>    
                </div>
                <div class="text">
                    <h1>${title}</h1>
                    <p>${cname} . ${viewstr} views . ${months} months ago</p>
                </div>
            </div>
        </div>`
    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}

card("Introduction to backend | sigma web dev video #2", "codewithharry", 272000, 5, "31:16", "https://i.ytimg.com/vi/9JaDBYPmiJ0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD2F1t93-iBW0-yJJptKjyJhXXFhA")

card("Introduction to react.js | sigma web dev video #3", "codewithharry", 322000, 3, "51:16", "https://i.ytimg.com/vi/9JaDBYPmiJ0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD2F1t93-iBW0-yJJptKjyJhXXFhA")