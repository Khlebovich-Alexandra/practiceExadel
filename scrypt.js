"use strict";

let ApplicationModel  = function () {
    function compareDates(a, b) {
        return b.createdAt - a.createdAt;
    }

    return {
        user_authorized: 'Main Person',
        mapHash: [],
        photoPosts: [
            {
                id: 1,
                description: 'Beautiful Venice!',
                createdAt: new Date(2010, 1, 29, 14, 2, 21),
                author: 'Main Person',
                authorPhoto: './pictures/mainPhoto.png',
                photoLink: 'https://img3.goodfon.ru/original/2048x2048/b/ee/venice-italy-city-veneciya-3071.jpg',
                hashtags: ['Rome', 'Venice', '1', '2', '3434123413241323123213123123'],
                likes: ['Other Person', 'taxi', 'Main Person'],
                deleted: false
            },
            {
                id: 2,
                description: 'Prague',
                createdAt: new Date(2012, 2, 26, 15, 3, 41),
                author: 'Other Person',
                authorPhoto: './pictures/avaOther.png',
                photoLink: 'https://s1.1zoom.ru/big0/81/Russia_Mountains_Lake_469922.jpg',
                hashtags: ['Cheh Repablic', 'Prague', 'мечта'],
                likes: ['Other Person', 'arina'],
                deleted: false
            },
            {
                id: 3,
                description: 'Вода',
                createdAt: new Date(2019, 1, 29, 14, 2, 21),
                author: 'Other Person',
                authorPhoto: './pictures/avaOther.png',
                photoLink: 'https://img3.goodfon.ru/original/2048x2048/2/d4/deutschland-germany-germaniya-7557.jpg',
                hashtags: ['вода', 'Венеция'],
                likes: ['Main Person'],
                deleted: false
            },
            {
                id: 4,
                description: 'Le Miroir d\'eau',
                createdAt: new Date(2010, 7, 29, 14, 2, 21),
                author: 'Other Person',
                authorPhoto: './pictures/avaOther.png',
                photoLink: 'https://img3.akspic.com/image/92474-palace-reflection-reflecting_pool-garonne-tourism-1080x1080.jpg',
                hashtags: ['Miroir', 'France', 'Bordo'],
                likes: ['Other Person', 'taxi', 'Main Person', 'pipi'],
                deleted: false
            },
            {
                id: 5,
                description: 'Wow',
                createdAt: new Date(2016, 1, 29, 14, 2, 21),
                author: 'Main Person',
                authorPhoto: './pictures/mainPhoto.png',
                photoLink: 'https://img.goipadwallpapers.com/2014/11/04/f0937bc3f00cb7d4_1024x1024.jpg',
                hashtags: ['Germany', 'Herborn', 'town'],
                likes: ['Other Person', 'taxi', 'Main Person', 'taxi', 'remember'],
                deleted: false
            },
            {
                id: 6,
                description: 'Prague',
                createdAt: new Date(2010, 1, 9, 14, 2, 21),
                author: 'Main Person',
                authorPhoto: './pictures/mainPhoto.png',
                photoLink: 'https://greenappletravel.ae/wp-content/uploads/visa-page/czechrepublic/800x800/czechrepublic-800-005.jpg',
                hashtags: ['Cheh Repablic', 'Prague'],
                likes: ['Other Person'],
                deleted: false
            },
            {
                id: 7,
                description: 'Strasburg',
                createdAt: new Date(2018, 1, 29, 14, 2, 21),
                author: 'Main Person',
                authorPhoto: './pictures/mainPhoto.png',
                photoLink: 'https://turkagram.com/wp-content/uploads/2016/06/13392722_1641679832531424_67325698_n.jpeg',
                hashtags: ['Germany'],
                likes: ['mashinka', 'autos', 'Nethelands', 'Flowers'],
                deleted: false
            },
            {
                id: 8,
                description: 'Prague!!!!',
                createdAt: new Date(2000, 1, 29, 14, 2, 21),
                author: 'Main Person',
                authorPhoto: './pictures/mainPhoto.png',
                photoLink: 'http://1class.kg/wp-content/uploads/2018/12/shutterstock_103948190-1.jpg',
                hashtags: ['Prague', 'Cheh Repablic', 'ILoveThisTown'],
                likes: ['bojenka'],
                deleted: false
            },
            {
                id: 9,
                description: 'Любляна',
                createdAt: new Date(2009, 1, 29, 14, 2, 21),
                author: 'Other Person',
                authorPhoto: './pictures/avaOther.png',
                photoLink: 'https://st.depositphotos.com/1056393/4711/i/950/depositphotos_47114403-stock-photo-panorama-of-ljubljana-slovenia-europe.jpg',
                hashtags: ['Ferrari', 'F430', 'USA'],
                likes: ['Slovenia', 'chai', 'ss'],
                deleted: false
            },
            {
                id: 10,
                description: 'Amsterdam',
                createdAt: new Date(2010, 7, 29, 14, 2, 21),
                author: 'Other Person',
                authorPhoto: './pictures/avaOther.png',
                photoLink: 'https://wallbox.ru/resize/1024x1024/wallpapers/main2/201726/niderlandy1.jpg',
                hashtags: ['Amsterdam', 'Netherlands'],
                likes: ['cars', 'taxi'],
                deleted: false
            },
            {
                id: 11,
                description: 'Elsas',
                createdAt: new Date(2010, 2, 29, 14, 2, 21),
                author: 'Other Person',
                authorPhoto: './pictures/avaOther.png',
                photoLink: 'https://www.oboi.sale/upload/iblock/8bf/8bf4e504bf9fcb73796dc096f0fe8b19.jpg',
                hashtags: ['France'],
                likes: ['Other Person', 'taxi', 'Main Person', 'egor'],
                deleted: false
            },
            {
                id: 12,
                description: 'Hamburg',
                createdAt: new Date(2010, 1, 7, 14, 2, 21),
                author: 'Main Person',
                authorPhoto: './pictures/mainPhoto.png',
                photoLink: 'http://hintergrundbild.org/wallpaper/full/3/3/4/22781-top-hamburg-wallpapers-2048x2048-pc.jpg',
                hashtags: ['Germany', 'Car', 'Hamburg'],
                likes: ['pacani', 'Main Person'],
                deleted: false
            },
            {
                id: 13,
                description: 'I love this country!',
                createdAt: new Date(2010, 1, 7, 14, 2, 21),
                author: 'Other Person',
                authorPhoto: './pictures/avaOther.png',
                photoLink: 'https://img4.goodfon.ru/original/1024x1024/2/ff/travel-city-europe-italy-panorama-view-italiia-gorod-rome--3.jpg',
                hashtags: ['love', 'лето', 'Italy', 'Rome'],
                likes: [],
                deleted: false
            },
            {
                id: 14,
                description: 'Germany!',
                createdAt: new Date(2018, 1, 7, 14, 2, 21),
                author: 'Other Person',
                authorPhoto: './pictures/avaOther.png',
                photoLink: 'https://f.vividscreen.info/soft/ca386a371865290370cad22c496dc6ef/Dresden-on-Elbe-River-near-Zwinger-Palace-2048x2048.jpg',
                hashtags: ['Dresden', 'Germany'],
                likes: ['kekochka', 'life', 'sport'],
                deleted: false
            },
            {
                id: 15,
                description: 'Amsterdam is beautiful!',
                createdAt: new Date(2010, 6, 7, 14, 2, 21),
                author: 'Other Person',
                authorPhoto: './pictures/avaOther.png',
                photoLink: 'https://f.vividscreen.info/soft/2807fef18c35bf0bc6de1dd4fd4cadb0/Amsterdam-2048x2048.jpg',
                hashtags: ['Amsterdam', 'Netherlands'],
                likes: ['brother', 'syster'],
                deleted: false
            },
            {
                id: 16,
                description: 'Brugge',
                createdAt: new Date(2012, 1, 7, 14, 2, 21),
                author: 'Other Person',
                authorPhoto: './pictures/avaOther.png',
                photoLink: 'http://free4kwallpaper.com/wp-content/uploads/2016/02/Popular-2016-Bruges-Belgium-4K-Wallpaper-2048x2048.jpg',
                hashtags: ['Brugge', 'Belgum'],
                likes: ['Other Person'],
                deleted: false
            },
            {
                id: 17,
                description: 'Найди меня',
                createdAt: new Date(2015, 1, 7, 14, 2, 21),
                author: 'Other Person',
                authorPhoto: './pictures/avaOther.png',
                photoLink: 'https://img4.goodfon.ru/original/2048x2048/0/74/frantsiia-bretan-gorod-dinan-ulitsa-doma-mostovaia.jpg',
                hashtags: ['Dinan', 'France'],
                likes: ['lubov', 'zhizhn'],
                deleted: false
            },
            {
                id: 18,
                description: 'My town <3',
                createdAt: new Date(2016, 1, 7, 14, 2, 21),
                author: 'Other Person',
                authorPhoto: './pictures/avaOther.png',
                photoLink: 'https://turkagram.com/wp-content/uploads/2015/12/Colmar-France.jpg',
                hashtags: ['Colmar', 'France'],
                likes: [],
                deleted: false
            },
            {
                id: 19,
                description: 'Portugal',
                createdAt: new Date(2015, 1, 8, 14, 2, 21),
                author: 'Other Person',
                authorPhoto: './pictures/avaOther.png',
                photoLink: 'https://img2.goodfon.ru/original/1024x1024/3/6e/portugaliya-gorod-doma-evropa.jpg',
                hashtags: ['Lissabon', 'Portugal'],
                likes: ['shmonka', 'dashka'],
                deleted: false
            },
            {
                id: 20,
                description: 'Austria',
                createdAt: new Date(2015, 1, 27, 14, 2, 21),
                author: 'Other Person',
                authorPhoto: './pictures/avaOther.png',
                photoLink: 'https://f.vividscreen.info/soft/97a7b7204bf6449aa273d0a1c1ba6387/Hallstatt-Salzkammergut-2048x2048.jpg',
                hashtags: ['Hallstatt', 'Austria'],
                likes: ['arts', 'draws', 'films'],
                deleted: false
            }
        ],
        begOfVisiblePosts: 0,

        addHashTagsInMapHash: function (post) {
            let indexOfFoundHashtag;

            //if this adding hashtag exists in container, we just add 1 to "count", else we're pushing this hashtag.
            post.hashtags.forEach(
                (hashtag) => {
                    indexOfFoundHashtag = ApplicationModel.mapHash.map(function (elem) {
                        return elem.word;
                    }).indexOf(hashtag);
                    if (indexOfFoundHashtag === -1) {
                        ApplicationModel.mapHash.push({word: hashtag, count: 1});
                    } else {
                        ApplicationModel.mapHash[indexOfFoundHashtag].count += 1;
                    }
                })
        },

        getPhotoPosts: function (skip, top, filterConfing) {
            let result = ApplicationModel.photoPosts;

            result = result.filter(function (post) {
                return !post.deleted;
            });

            if (filterConfing) {
                if (filterConfing.author) {
                    result = result.filter(function (post) {
                        return post.author === filterConfing.author;
                    });
                }

                if (filterConfing.createdAt) {
                    result = result.filter(function (post) {
                        return post.createdAt >= filterConfing.createdAt;
                    });
                }

                if (filterConfing.hashtags && filterConfing.hashtags.length !== 0) {
                    result = result.filter(function (post) {
                        for (let i = 0; i < filterConfing.hashtags.length; i++) {
                            let condition = post.hashtags.some(function (tag) {
                                return tag === filterConfing.hashtags[i];
                            });
                            if (!condition) {
                                return false;
                            }
                        }
                        return true;
                    })
                }
            }

            if(result.length === 0){
                return [];
            }

            result.sort(compareDates);

            return result.slice(skip, skip + top);
        },

        getPhotoPost: function (id) {
            return ApplicationModel.photoPosts.find(function (elem) {
                return String(elem.id) === String(id);
            })
        },

        validatePhotoPost: function (post) {
            if (isNaN(post.id)) {
                return false;
            }

            if (String(post.id) === '0') {
                return false;
            }

            let isNotUniqueID = post.hashtags.some(function (idTemp) {
                return String(idTemp) === String(post.id);
            });

            if (!isNotUniqueID) {
                if (typeof post.description !== "string" || post.description.length > 200 || post.description.length < 0) {
                    return false;
                }

                if (typeof(post.author) !== "string") {
                    return false;
                }

                if (!(post.createdAt instanceof Date)) {
                    return false;
                }

                if (typeof(post.photoLink) !== "string") {
                    return false;
                }

                if (!(post.id && post.description && post.createdAt && post.author && post.photoLink)) {
                    return false;
                }

                return true;
            }
        },

        addPhotoPost: function (post) {
            if (ApplicationModel.validatePhotoPost(post)) {
                ApplicationModel.photoPosts.push(post);
                ApplicationModel.addHashTagsInMapHash(post);
                return true;
            }
            return false;
        },

        removePhotoPost: function (id) {
            let post = ApplicationModel.getPhotoPost(id);
            if(post) {
                post.deleted = true;
            }
            return !!post;
        },

        editPost: function (id, post) {
            if (post.description && post.description.length > 200) {
                return false;
            }

            let getTemp = ApplicationModel.getPhotoPost(id);
            if (post.description) {
                getTemp.description = post.description;
            }
            if (post.photoLink) {
                getTemp.photoLink = post.photoLink;
            }
            if (post.hashtags) {
                getTemp.hashtags = post.hashtags.slice();
            }

            return getTemp || null;
        },

        fillMapHash: function () {
            for(let i = 0; i < ApplicationModel.photoPosts.length; i++){
                ApplicationModel.addHashTagsInMapHash(ApplicationModel.photoPosts[i]);
            }
        }
    }
}();

let ViewModule = function() {
    //we're using compareHash to sort hashMap to get the most popular posts
    function compareHash(a, b) {
        return b.count - a.count;
    }

    let containerPosts = document.querySelector('.posts');

    return {
        printOnScreen: function (skip, top, filterConfing) {
            let arrPosts = document.querySelectorAll(".post");
            arrPosts.forEach((post)=>{
                post.remove();
            })
            let arrForPrint = ApplicationModel.getPhotoPosts(skip, top, filterConfing);

            arrForPrint.forEach((post)=> {
                ViewModule.addDomPhotoPost(post);
            });
        },
        makeStringForHashtags: function (hashtags) {
            if (hashtags.length !== 0) {
                let resultString = "";
                for (let i = 0; i < hashtags.length; i++) {
                    resultString += "#" + hashtags[i];
                }
                return resultString;
            }
            return 0;
        },

        addDomPhotoPost: function (post) {
            let classForLikes;
            if(ApplicationModel.user_authorized === null){
                classForLikes = "likePostUnAuth";
            } else {
                classForLikes = "likePost";
            }
            let newDiv = document.createElement("div");
            newDiv.className = "post";
            newDiv.id = post.id;
            newDiv.innerHTML = `
                    <img src="${post.authorPhoto}" alt="Photo" class="avaPost">
                    <p class="postUser">${post.author}</p>
                    <p class="dataUser">${post.createdAt.getDate()}.${post.createdAt.getMonth()}.${post.createdAt.getFullYear()}</p>
                    <p class="dataUser">${post.createdAt.getHours()}:${post.createdAt.getUTCMinutes()}:${post.createdAt.getSeconds()}</p>
                    <p class="posts"><img alt="Photo post" src="${post.photoLink}" class="photoPost"></p>
                    <p class = "${classForLikes}"><alt="Like""></p>
                    <p class="textLike">${post.likes.length.toString()}</p>
                    <p class="textComment">${post.description}</p>
                    <p class="textHashTag">${ViewModule.makeStringForHashtags(post.hashtags) || 0}</p>
            `;
            if(post.author === ApplicationModel.user_authorized){
                newDiv.innerHTML += `
                    <img src="./pictures/edit.png" class="editPost" alt="Изменить пост">
                    <img src="./pictures/delete.png" class="editPost" alt="Удалить пост">
            `
            }
            containerPosts.appendChild(newDiv);
        },

        deleteDomPhotoPost: function (post) {
            let deletedPost = document.getElementById(post.id);
            containerPosts.removeChild(deletedPost);
        },

        editDomPhotoPost: function (post, newPost) {
            let editedPost = document.getElementById(post.id);
            let result = document.createElement("div");

            result.innerHTML = editedPost.innerHTML;
            result.id = post.id;
            result.className = "post";
            if (newPost.description) {
                let re = result.querySelector(".textComment");
                re.textContent = newPost.description;
            }
            if (newPost.photoLink) {
                result.querySelector(".photoPost").src = newPost.photoLink;
            }
            if (newPost.hashtags) {
                result.querySelector(".textHashTag").textContent = ViewModule.makeStringForHashtags(newPost.hashtags);
            }
            containerPosts.replaceChild(result, editedPost);
        },

        createMenuForUser: function () {
            let menu = document.querySelector(".menu");
            menu.innerHTML = `
                <div class="menu-block-picture">
                    <img src="./pictures/home.png" class="menu-picture">
                </div>
                <div class="menu-block-picture">
                    <img src="./pictures/exit.png" class="menu-picture"></div>
                <div class="menu-block-picture">
                    <img src="./pictures/mainPhoto.png" class="menu-picture-margin" title="Main Person">
                </div>
                <div class="name-of-user"><label>Main Person</label></div>
                <div class="menu-block-add"><img src="./pictures/add.png" class="menu-picture-margin-add"></div>
            `
        },

        createMenuNotForUser: function () {
            let menu = document.querySelector(".menu");
            menu.innerHTML = `<img src="./pictures/exit.png" class="menu-picture" alt="Войти">`
        },

        propHash: function () {
            //here we're printing the most popular hashtags (we get 4 the most popular)
            ApplicationModel.mapHash.sort(compareHash);
            let proposition = document.querySelectorAll("option");
            for (let i = 0; i < 4; i++) {
                proposition[i + 1].innerText = ApplicationModel.mapHash[i].word;
            }
        }
    }
}();

if (ApplicationModel.user_authorized === null) {
    ViewModule.createMenuNotForUser();
} else {
    ViewModule.createMenuForUser();
}

ViewModule.printOnScreen(ApplicationModel.begOfVisiblePosts, ApplicationModel.begOfVisiblePosts + 10);


function addPhotoPost(post){
    if(ApplicationModel.addPhotoPost(post)){
        ViewModule.printOnScreen(ApplicationModel.begOfVisiblePosts, ApplicationModel.begOfVisiblePosts +  10);
    }
}

function deletePhotoPost(id){
    let post = ApplicationModel.getPhotoPost(id);
    if(ApplicationModel.removePhotoPost(post.id)){
        ViewModule.deleteDomPhotoPost(post);
    }
}

function editPhotoPost(idOLd, postNew){
    let postOld = ApplicationModel.getPhotoPost(idOLd);
    if(ApplicationModel.editPost(postOld.id, postNew)){
        ViewModule.editDomPhotoPost(postOld, postNew);
    }
}

ApplicationModel.fillMapHash();
ViewModule.propHash();

