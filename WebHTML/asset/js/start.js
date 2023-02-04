// Index
fetch("../asset/json/index.json")
    .then(function (response) {
    return response.json();
    })
    .then(function (data) {
        // Post Box
        pbindex = data.postbox;
        for (var i = 0; i < pbindex.length; i++) {
            url = "tpage/" + pbindex[i].id + ".html";
            img_url = "img/" + pbindex[i].id + "/" + pbindex[i].id + "-1.jpg";
            postbox = document.createElement("div");
            postbox.classList.add('post-box');
            postbox.classList.add(pbindex[i].category);
            a = document.createElement("a");
            a.href = url;
            image = document.createElement("img");
            image.src = img_url;
            image.classList.add("post-img");
            category = document.createElement("h2");
            category.classList.add("category");
            category.innerHTML += pbindex[i].category.slice(0, -1);
            post_name = document.createElement("p");
            post_name.classList.add("post-title");
            post_name.innerHTML += pbindex[i].name;
            aff = document.createElement("span");
            aff.classList.add(".aff-with")
            aff.innerHTML += pbindex[i].aff;
            a.appendChild(image);
            a.appendChild(category);
            a.appendChild(post_name);
            isactive = document.createElement("a");
            if (pbindex[i].active == true) {
                isactive.innerHTML = '<i class="fa-solid fa-circle" style="color: lime;"></i> ';
            } else {
                isactive.innerHTML = '<i class="fa-solid fa-circle" style="color: red;"></i> ';
            }
            postbox.appendChild(a);
            postbox.appendChild(isactive);
            postbox.appendChild(aff);
            document.getElementById("js-postbox").appendChild(postbox);
        }
    })
    .catch(function (err) {
        console.log(err);
    });

// Page
fetch("../asset/json/main.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        // Check ID == filename
        var url = window.location.pathname;
        var filename = url.substring(url.lastIndexOf("/") + 1).slice(0, -5);
        for (var i = 0; i < data.artist.length; i++) {
            if (data.artist[i].id == filename) {
                // Title
                document.getElementById("js-page-title").innerHTML +=
                    data.artist[i].page_name + " | T-pop wiki";
                document.getElementById("js-title").innerHTML += data.artist[i].page_name;
                document.getElementById("js-subtitle").innerHTML += data.artist[i].page_name;
                // Image
                img = document.getElementById("js-image");
                img.src = data.artist[i].img_url;
                // Paragraph
                for (var j = 0; j < data.artist[i].par.length; j++) {
                    document.getElementById("js-post-text").innerHTML +=
                        data[i].par[j] + "<br />";
                }
                // Member
                for (var j = 0; j < data.artist[i].member.length; j++) {
                    memberbox = document.createElement("div");
                    memberbox.classList.add("member-box");
                    a = document.createElement("a");
                    a.href = data.artist[i].member[j].href;
                    image = document.createElement("img");
                    image.src = data.artist[i].member[j].img;
                    image.classList.add("member-img");
                    member_nickname = document.createElement("p");
                    member_nickname.classList.add("member-nickname");
                    member_nickname.innerHTML += data.artist[i].member[j].nickname;
                    member_name = document.createElement("p");
                    member_name.classList.add("member-name");
                    member_name.innerHTML += data.artist[i].member[j].name;
                    a.appendChild(image);
                    a.appendChild(member_nickname);
                    a.appendChild(member_name);
                    social = document.createElement("div");
                    social.classList.add("share");
                    social.classList.add("member-container");
                    s = document.createElement("div");
                    s.classList.add("member-social");
                    twitter = document.createElement("a");
                    twitter.href = data.artist[i].member[j].social.twitter;
                    twitter.innerHTML = '<i class="fa-brands fa-twitter"></i>';
                    facebook = document.createElement("a");
                    facebook.href = data.artist[i].member[j].social.tiktok;
                    facebook.innerHTML = '<i class="fa-brands fa-facebook-f"></i>';
                    instagram = document.createElement("a");
                    instagram.href = data.artist[i].member[j].social.instagram;
                    instagram.innerHTML = '<i class="fa-brands fa-instagram"></i>';
                    tiktok = document.createElement("a");
                    tiktok.href = data.artist[i].member[j].social.tiktok;
                    tiktok.innerHTML = '<i class="fa-brands fa-tiktok"></i>';
                    youtube = document.createElement("a");
                    youtube.href = data.artist[i].member[j].social.youtube;
                    youtube.innerHTML = '<i class="fa-brands fa-youtube"></i>';
                    if (data.artist[i].member[j].social.twitter != "") {
                        s.appendChild(twitter);
                    }
                    if (data.artist[i].member[j].social.facebook != "") {
                        s.appendChild(facebook);
                    }
                    if (data.artist[i].member[j].social.instagram != "") {
                        s.appendChild(instagram);
                    }
                    if (data.artist[i].member[j].social.tiktok != "") {
                        s.appendChild(tiktok);
                    }
                    if (data.artist[i].member[j].social.youtube != "") {
                        s.appendChild(youtube);
                    }
                    social.appendChild(s);
                    memberbox.appendChild(a);
                    memberbox.appendChild(social);
                    document.getElementById("member-container").appendChild(memberbox);
                }
            }
        }
    })
    .catch(function (err) {
        console.log(err);
    });
