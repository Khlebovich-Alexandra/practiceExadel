"use strict";

let ApplicationModel = function () {
    function compareDates(a, b) {
        return b.createdAt - a.createdAt;
    }
    function writeInLocalStoragePhotoPosts(){
        localStorage.setItem('photoPosts', JSON.stringify(ApplicationModel.photoPosts));
    }

    return {
        userAuthorized: null,
        mapHash: [],
        users: [
            {
                author: "user1",
                authorPhoto: "./pictures/post/mainPhoto.png",
                password: "12345678"
            },
            {
                author: "user2",
                authorPhoto: "./pictures/post/avaOther.png",
                password: "12345"
            },
            {
                author: "user3",
                authorPhoto: "./pictures/post/user3.png",
                password: "123"
            },
            {
                author: "user4",
                authorPhoto: "./pictures/post/user4.png",
                password: "1234",
            }
        ],
        photoPosts: [],
        begOfVisiblePosts: 0,

        //we're using compareHash to sort hashMap to get the most popular posts

        compareHash: function (a, b) {
            return b.count - a.count;
        },

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

            if(!result)
                return [];
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
                    let date = new Date(filterConfing.createdAt.replace(/(\d+)[-.,;: ](\d+)[-.,;: ](\d+)/, '$3/$2/$1'))
                    result = result.filter(function (post) {
                        return post.createdAt >= date;
                    });
                }

                if (filterConfing.hashtags && filterConfing.hashtags.length !== 0) {
                    let hashtags = filterConfing.hashtags;
                    result = result.filter((post) =>
                        hashtags.every((tag) => (post.hashtags || []).includes(tag))
                    );
                }
            }

            if (result.length === 0) {
                return [];
            }

            result.sort(compareDates);

            return result.slice(skip, skip + top);
        },

        getUrlAva: function (name) {
            let index = ApplicationModel.users.map((elem) => {
                return elem.author;
            }).indexOf(name);
            if (index === -1) {
                return 0
            } else {
                return ApplicationModel.users[index].authorPhoto;
            }
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
            }
            return true;
        },

        addPhotoPost: function (post) {
            if (ApplicationModel.validatePhotoPost(post)) {
                ApplicationModel.photoPosts.push(post);
                ApplicationModel.addHashTagsInMapHash(post);

                ViewModule.propHash('selectFilter');
                writeInLocalStoragePhotoPosts();
                return true;
            }
            return false;
        },

        removePhotoPost: function (id) {
            let post = ApplicationModel.getPhotoPost(id);
            if (post) {
                post.deleted = true;
            }
            writeInLocalStoragePhotoPosts();
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
            for (let i = 0; i < ApplicationModel.photoPosts.length; i++) {
                ApplicationModel.addHashTagsInMapHash(ApplicationModel.photoPosts[i]);
            }
        },

        fillInformation: function(){
            ApplicationModel.photoPosts = JSON.parse(localStorage.getItem('photoPosts'), (key, value)=>{
                if(key === 'createdAt'){
                    return new Date(value);
                }
                return value;
            }) || [];
            // we have array of users for authorization
           // ApplicationModel.users = JSON.parse(localStorage.getItem('users')) || [];

            ApplicationModel.userAuthorized = JSON.parse(localStorage.getItem('userAuthorized'));
        },

        // this function has added our posts and users in LocalStorage
        putPostsAnsUsersInLocalStorage : function() {
            let mydata = JSON.parse('[{"id":1,"description":"Beautiful Venice!","createdAt":"2010-03-01T12:02:21.000Z","author":"Main Person","authorPhoto":"./pictures/post/post/mainPhoto.png","photoLink":"https://img3.goodfon.ru/original/2048x2048/b/ee/venice-italy-city-veneciya-3071.jpg","hashtags":["Rome","Venice","1","2","3434123413241323123213123123"],"likes":["Other Person","taxi","Main Person"],"deleted":false},{"id":2,"description":"Prague","createdAt":"2012-03-26T12:03:41.000Z","author":"Other Person","authorPhoto":"./pictures/post/avaOther.png","photoLink":"https://s1.1zoom.ru/big0/81/Russia_Mountains_Lake_469922.jpg","hashtags":["Cheh Repablic","Prague","мечта"],"likes":["Other Person","arina"],"deleted":false},{"id":3,"description":"Вода","createdAt":"2019-03-01T11:02:21.000Z","author":"Other Person","authorPhoto":"./pictures/post/avaOther.png","photoLink":"https://img3.goodfon.ru/original/2048x2048/2/d4/deutschland-germany-germaniya-7557.jpg","hashtags":["вода","Венеция"],"likes":["Main Person"],"deleted":false},{"id":4,"description":"Le Miroir d\'eau","createdAt":"2010-08-29T11:02:21.000Z","author":"Other Person","authorPhoto":"./pictures/post/avaOther.png","photoLink":"https://img3.akspic.com/image/92474-palace-reflection-reflecting_pool-garonne-tourism-1080x1080.jpg","hashtags":["Miroir","France","Bordo"],"likes":["Other Person","taxi","Main Person","pipi"],"deleted":false},{"id":5,"description":"Wow","createdAt":"2016-02-29T11:02:21.000Z","author":"Main Person","authorPhoto":"./pictures/post/mainPhoto.png","photoLink":"https://img.goipadwallpapers.com/2014/11/04/f0937bc3f00cb7d4_1024x1024.jpg","hashtags":["Germany","Herborn","town"],"likes":["Other Person","taxi","Main Person","taxi","remember"],"deleted":false},{"id":6,"description":"Prague","createdAt":"2010-02-09T12:02:21.000Z","author":"Main Person","authorPhoto":"./pictures/post/mainPhoto.png","photoLink":"https://greenappletravel.ae/wp-content/uploads/visa-page/czechrepublic/800x800/czechrepublic-800-005.jpg","hashtags":["Cheh Repablic","Prague"],"likes":["Other Person"],"deleted":false},{"id":7,"description":"Strasburg","createdAt":"2018-03-01T11:02:21.000Z","author":"Main Person","authorPhoto":"./pictures/post/mainPhoto.png","photoLink":"https://turkagram.com/wp-content/uploads/2016/06/13392722_1641679832531424_67325698_n.jpeg","hashtags":["Germany"],"likes":["mashinka","autos","Nethelands","Flowers"],"deleted":false},{"id":8,"description":"Prague!!!!","createdAt":"2000-02-29T12:02:21.000Z","author":"Main Person","authorPhoto":"./pictures/post/mainPhoto.png","photoLink":"http://1class.kg/wp-content/uploads/2018/12/shutterstock_103948190-1.jpg","hashtags":["Prague","Cheh Repablic","ILoveThisTown"],"likes":["bojenka"],"deleted":false},{"id":9,"description":"Любляна","createdAt":"2009-03-01T12:02:21.000Z","author":"Other Person","authorPhoto":"./pictures/post/avaOther.png","photoLink":"https://st.depositphotos.com/1056393/4711/i/950/depositphotos_47114403-stock-photo-panorama-of-ljubljana-slovenia-europe.jpg","hashtags":["Ferrari","F430","USA"],"likes":["Slovenia","chai","ss"],"deleted":false},{"id":10,"description":"Amsterdam","createdAt":"2010-08-29T11:02:21.000Z","author":"Other Person","authorPhoto":"./pictures/post/avaOther.png","photoLink":"https://wallbox.ru/resize/1024x1024/wallpapers/main2/201726/niderlandy1.jpg","hashtags":["Amsterdam","Netherlands"],"likes":["cars","taxi"],"deleted":false},{"id":11,"description":"Elsas","createdAt":"2010-03-29T11:02:21.000Z","author":"Other Person","authorPhoto":"./pictures/post/avaOther.png","photoLink":"https://www.oboi.sale/upload/iblock/8bf/8bf4e504bf9fcb73796dc096f0fe8b19.jpg","hashtags":["France"],"likes":["Other Person","taxi","Main Person","egor"],"deleted":false},{"id":12,"description":"Hamburg","createdAt":"2010-02-07T12:02:21.000Z","author":"Main Person","authorPhoto":"./pictures/post/mainPhoto.png","photoLink":"http://hintergrundbild.org/wallpaper/full/3/3/4/22781-top-hamburg-wallpapers-2048x2048-pc.jpg","hashtags":["Germany","Car","Hamburg"],"likes":["pacani","Main Person"],"deleted":false},{"id":13,"description":"I love this country!","createdAt":"2010-02-07T12:02:21.000Z","author":"Other Person","authorPhoto":"./pictures/post/avaOther.png","photoLink":"https://img4.goodfon.ru/original/1024x1024/2/ff/travel-city-europe-italy-panorama-view-italiia-gorod-rome--3.jpg","hashtags":["love","лето","Italy","Rome"],"likes":[],"deleted":false},{"id":14,"description":"Germany!","createdAt":"2018-02-07T11:02:21.000Z","author":"Other Person","authorPhoto":"./pictures/post/avaOther.png","photoLink":"https://f.vividscreen.info/soft/ca386a371865290370cad22c496dc6ef/Dresden-on-Elbe-River-near-Zwinger-Palace-2048x2048.jpg","hashtags":["Dresden","Germany"],"likes":["kekochka","life","sport"],"deleted":false},{"id":15,"description":"Amsterdam is beautiful!","createdAt":"2010-07-07T11:02:21.000Z","author":"Other Person","authorPhoto":"./pictures/post/avaOther.png","photoLink":"https://f.vividscreen.info/soft/2807fef18c35bf0bc6de1dd4fd4cadb0/Amsterdam-2048x2048.jpg","hashtags":["Amsterdam","Netherlands"],"likes":["brother","syster"],"deleted":false},{"id":16,"description":"Brugge","createdAt":"2012-02-07T11:02:21.000Z","author":"Other Person","authorPhoto":"./pictures/post/avaOther.png","photoLink":"https://i.pinimg.com/originals/f1/0e/f0/f10ef0d430e1d16a515cd9b6b668fa10.jpg","hashtags":["Brugge","Belgum"],"likes":["Other Person"],"deleted":false},{"id":17,"description":"Найди меня","createdAt":"2015-02-07T11:02:21.000Z","author":"Other Person","authorPhoto":"./pictures/post/avaOther.png","photoLink":"https://img4.goodfon.ru/original/2048x2048/0/74/frantsiia-bretan-gorod-dinan-ulitsa-doma-mostovaia.jpg","hashtags":["Dinan","France"],"likes":["lubov","zhizhn"],"deleted":false},{"id":18,"description":"My town <3","createdAt":"2016-02-07T11:02:21.000Z","author":"Other Person","authorPhoto":"./pictures/post/avaOther.png","photoLink":"https://turkagram.com/wp-content/uploads/2015/12/Colmar-France.jpg","hashtags":["Colmar","France"],"likes":[],"deleted":false},{"id":19,"description":"Portugal","createdAt":"2015-02-08T11:02:21.000Z","author":"Other Person","authorPhoto":"./pictures/post/avaOther.png","photoLink":"https://img2.goodfon.ru/original/1024x1024/3/6e/portugaliya-gorod-doma-evropa.jpg","hashtags":["Lissabon","Portugal"],"likes":["shmonka","dashka"],"deleted":false},{"id":20,"description":"Austria","createdAt":"2015-02-27T11:02:21.000Z","author":"Other Person","authorPhoto":"./pictures/post/avaOther.png","photoLink":"https://f.vividscreen.info/soft/97a7b7204bf6449aa273d0a1c1ba6387/Hallstatt-Salzkammergut-2048x2048.jpg","hashtags":["Hallstatt","Austria"],"likes":["arts","draws","films"],"deleted":false}]');
            for (let i = 0 ;i < mydata.length; i++){
                mydata[i].createdAt = new Date(mydata[i].createdAt)
                ApplicationModel.addPhotoPost(mydata[i])
            }
            // ApplicationModel.photoPosts.concat(mydata)
            // ApplicationModel.photoPosts = JSON.parse(localStorage.getItem('photoPosts'))
            // console.log(ApplicationModel.photoPosts);
            // localStorage.setItem('photoPosts', JSON.stringify(ApplicationModel.photoPosts));
            //localStorage.setItem('users', JSON.stringify(ApplicationModel.users));
        }
    }
}();

let ViewModule = function () {
    let containerPosts = document.querySelector('.posts');

    return {
        printOnScreen: function (skip, top, filterConfing) {
            let arrPosts = document.querySelectorAll(".post");
            arrPosts.forEach((post) => {
                post.remove();
            });
            let arrForPrint = ApplicationModel.getPhotoPosts(skip, top, filterConfing);

            arrForPrint.forEach((post) => {
                ViewModule.addDomPhotoPost(post);
            });

            if (ApplicationModel.userAuthorized !== null) {
                EventsModule.initializeLikeButtons();
                EventsModule.initializeButtonsPost();
            }
        },

        loginView: function (name) {
            ApplicationModel.userAuthorized = name || null;
            if (name) {
                document.getElementById("menu").innerHTML = '';
                ViewModule.createMenuForUser();
            }
        },

        makeStringForHashtags: function (hashtags) {
            return (hashtags || []).map((ht) => '#' + ht).join(' ');
        },

        addDomPhotoPost: function (post) {
            let imgForLike;
            if (ApplicationModel.userAuthorized !== null && post.likes.indexOf(ApplicationModel.userAuthorized) !== -1) {
                imgForLike = './pictures/post/like.png';
            } else {
                imgForLike = './pictures/post/NotPressed.png';
            }
            let newDiv = document.createElement("div");
            newDiv.className = "post";
            newDiv.id = post.id;
            newDiv.innerHTML = `
                    <img src="${post.authorPhoto}" alt="User photo" class="avaPost">
                    <p class="postUser">${post.author}</p>
                    <p class="dataUser">${post.createdAt.getDate()}.${post.createdAt.getMonth()}.${post.createdAt.getFullYear()}</p>
                    <p class="dataUser">${post.createdAt.getHours()}:${post.createdAt.getUTCMinutes()}:${post.createdAt.getSeconds()}</p>
                    <p class="dataUser"><img alt="Photo" src="${post.photoLink}" class="photoPost"></p>
                    <img src="${imgForLike}" alt="Like" class="likePost" id="like-${post.id}">
                    <p class="textLike" id="textLike-${post.id}">${post.likes.length.toString()}</p>
                    <p class="textComment">${post.description}</p>
                    <p class="textHashTag">${ViewModule.makeStringForHashtags(post.hashtags) || 0}</p>
            `;
            if (post.author === ApplicationModel.userAuthorized) {
                newDiv.innerHTML += `
                    <img src="./pictures/post/edit.png" class="editPost" alt="Edit" id="edit-${post.id}">
                    <img src="./pictures/post/delete.png" class="deletePost" alt="Delete" id="delete-${post.id}">
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
            <div class="menu-block-picture"><img src="./pictures/menu/exit.png" class="menu-picture" alt="Выход" id="exitBtn"></div>
            <div class="menu-block-picture"><img src="./pictures/menu/home.png" class="menu-picture" alt="На главную" id="home"></div>
            <div class="menu-block-avatar"><img src="${ApplicationModel.getUrlAva(ApplicationModel.userAuthorized)}" class="menu-picture-margin" title="${ApplicationModel.userAuthorized}" alt="Ава авторизованного пользователя"></div>
            <div class="menu-block-add"><img src="./pictures/menu/add.png" id ="add" class="menu-picture-margin" alt="Добавить пост"></div> 
`
        },

        createMenuNotForUser: function () {
            let menu = document.querySelector(".menu");
            menu.innerHTML = `<img src="./pictures/menu/exit.png" class="menu-picture" alt="Войти" id="enterMenu">
           `
        },

        propHash: function (name) {
            //here we're printing the most popular hashtags (we get 4 the most popular)
            if (ApplicationModel.mapHash.length !== 0) {
                ApplicationModel.mapHash.sort(ApplicationModel.compareHash);
                let sF = document.getElementById(name);
                for (let i = 0; i < 4; i++)
                    if (ApplicationModel.mapHash[i]) {
                        sF.children[i + 2].innerText = ApplicationModel.mapHash[i].word;
                    }
            }
        }
    }
}();

let EventsModule = function () {
    //по частям
    let inputLogin = document.getElementById('login');
    let inputData = document.getElementById('date');
    let inputHashtag = document.getElementById('hash');
    let inputLoginAuth = document.getElementById('logAuth');
    let inputPassword = document.getElementById('passAuth');
    let grayBackground = document.getElementById('grayBckd');
    let formAuth = document.getElementById('formAuth');
    let formAdding = document.getElementById('formAddPost');
    let dropArea = document.getElementById('addPhotoDrop');
    let dropAreaEdit = document.getElementById('editPhotoDrop');
    let userAdd = document.getElementById('userAdding');
    let dataAdd = document.getElementById('dataAdding');
    let hashAdd = document.getElementById('inputHashtags');
    let selectFilter = document.getElementById('selectFilter');
    let selectAdd = document.getElementById('selectAdd');
    let gallery = document.getElementById('gallery');
    let inputDescription = document.getElementById('inputDescription');
    let formEdit = document.getElementById('editFormPostId');
    let userEdit = document.getElementById('userEdit');
    let dataEdit = document.getElementById('dataEdit');
    let hashEdit = document.getElementById('inputHashtagsEdit');
    let selectEdit = document.getElementById('selectEdit');
    let inputHastagsEdit = document.getElementById('inputHashtagsEdit');
    let inputDescriptionEdit = document.getElementById('inputDescriptionEdit');
    let galleryEdit = document.getElementById('galleryEdit');
    let error = document.getElementById('error');
    let textError = document.getElementById('textError');
    let photoLnkEdit;
    let photoLnk;
    let edittingPostId;
    let indexEditPost;

    //DOM
    function highlight() {
        dropArea.classList.add('highlight')
    }

    //DOM
    function unHighLight() {
        dropArea.classList.remove('highlight')
    }

    function handleFiles(files) {
        files = [...files];
        files.forEach(uploadFile);
        files.forEach(previewFile);
    }

    function handleFilesEdit(files) {
        files = [...files];
        files.forEach(uploadFileEdit);
        files.forEach(previewFileEdit);
    }

    function previewFileEdit(file) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function () {
            let img = document.createElement('img');
            img.src = reader.result;
            galleryEdit.innerHTML = '';
            galleryEdit.appendChild(img);
            photoLnkEdit = reader.result;
        }
    }

    function uploadFileEdit(file) {
        // let url = 'ВАШ URL ДЛЯ ЗАГРУЗКИ ФАЙЛОВ'
        //let formData = new FormData()
        //formData.append('file', file)
        // fetch(url, {
        //     method: 'POST',
        //     body: formData
        // })
    }

    function handleDrop(e) {
        let dt = e.dataTransfer;
        let files = dt.files;
        if(files.length === 1){
            handleFiles(files);
        }
        else{

        }
    }

    function handleDropEdit(e) {
        let dt = e.dataTransfer;
        let files = dt.files;
        if(files.length === 1){
            handleFilesEdit(files);
        }
        else{
//
        }
    }

    function uploadFile(file) {
        // let url = 'ВАШ URL ДЛЯ ЗАГРУЗКИ ФАЙЛОВ'
        //let formData = new FormData()
        //formData.append('file', file)
        // fetch(url, {
        //     method: 'POST',
        //     body: formData
        // })
    }

    function previewFile(file) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function () {
            let img = document.createElement('img');
            img.src = reader.result;
            gallery.appendChild(img);
            photoLnk = reader.result;
        }
    }

    function preventDefaults (e) {
        e.preventDefault();
        e.stopPropagation();
    }

    return {
        filterPosts: function () {
            let arrHashtags = [];
            if(inputHashtag.value) {
                arrHashtags = inputHashtag.value.replace('#', ' ').trim().split(/[#, ]+/);
            }
            //user didn't choose the empty string
            if(selectFilter.selectedIndex !== 1){
                //user didn't choose the equal hashatgs
                if(arrHashtags.indexOf(selectFilter.options[selectFilter.selectedIndex].value) === -1) {
                    arrHashtags.push(selectFilter.options[selectFilter.selectedIndex].value);
                }
            }
            ViewModule.printOnScreen(0, 30,
                {
                    createdAt: 0 || inputData.value,
                    hashtags:  arrHashtags.length === 0 ? 0 : arrHashtags,
                    author: (0 || inputLogin.value)
                });
        },

        getMorePosts: function () {
            ApplicationModel.begOfVisiblePosts += 10;
            ViewModule.printOnScreen(ApplicationModel.begOfVisiblePosts, ApplicationModel.begOfVisiblePosts + 10);
        },

        closeForms: function () {
            grayBackground.style.display = 'none';
            formAuth.style.display = 'none';
            formAdding.style.display = 'none';
            formEdit.style.display = 'none';
            error.style.display = 'none';
        },

        enter: function () {
            grayBackground.style.display = 'block';
            formAuth.style.display = 'block';
        },

        addPost: function () {
            inputDescription.value = '';
            hashAdd.value = '';
            userAdd.innerText = 'Пользователь: ';
            dataAdd.innerText = 'Дата: ';
            gallery.innerHTML = '';
            ViewModule.propHash('selectAdd');
            grayBackground.style.display = 'block';
            formAdding.style.display = 'block';
            userAdd.innerText += ApplicationModel.userAuthorized;
            dataAdd.innerText += new Date();
        },

        editPost: function(e) {
            inputDescriptionEdit.value = '';
            inputHastagsEdit.value = '';
            userEdit.innerText = 'Пользователь: ';
            dataEdit.innerText = 'Дата: ';
            galleryEdit.innerHTML = '';
            edittingPostId = e.target.id.substring(5);
            let imgEdit = document.createElement('img');
            indexEditPost = ApplicationModel.photoPosts.map((post)=>{
                return post.id;
            }).indexOf(edittingPostId);
            grayBackground.style.display = 'block';
            formEdit.style.display = 'block';
            //new object for edit post
            userEdit.innerText += ApplicationModel.userAuthorized;
            dataEdit.innerText += ApplicationModel.photoPosts[indexEditPost].createdAt;
            inputHastagsEdit.value = ViewModule.makeStringForHashtags(ApplicationModel.photoPosts[indexEditPost].hashtags);
            inputDescriptionEdit.value = ApplicationModel.photoPosts[indexEditPost].description;
            imgEdit.src = ApplicationModel.photoPosts[indexEditPost].photoLink;
            galleryEdit.appendChild(imgEdit);
        },

        pressLike: function(e){
            if(ApplicationModel.userAuthorized !== null) {
                 let indexToAction = ApplicationModel.photoPosts.map((post) => {
                     return post.id;
                 }).indexOf(parseInt(e.target.id.substr(5)));
                if (indexToAction !== -1) {
                    console.log('hi')
                    let indexLike =  ApplicationModel.photoPosts[indexToAction].likes.indexOf(ApplicationModel.userAuthorized);
                    console.log(")))")
                    if (indexLike === -1){
                        console.log(")))))))")
                        ApplicationModel.photoPosts[indexToAction].likes.push(ApplicationModel.userAuthorized);
                        localStorage.setItem('photoPosts', JSON.stringify(ApplicationModel.photoPosts));
                        document.getElementById(e.target.id.replace('like', 'textLike')).innerText = ApplicationModel.photoPosts[indexToAction].likes.length;
                        document.getElementById(e.target.id).src = './pictures/post/like.png';
                    } else {
                        ApplicationModel.photoPosts[indexToAction].likes.splice(indexLike, 1);
                        document.getElementById(e.target.id).src = './pictures/post/NotPressed.png';
                        document.getElementById(e.target.id.replace('like', 'textLike')).innerText = ApplicationModel.photoPosts[indexToAction].likes.length;
                        localStorage.setItem('photoPosts', JSON.stringify(ApplicationModel.photoPosts));
                    }
                }

            }
        },

        logIn: function () {
            let name = inputLoginAuth.value;
            let pass = inputPassword.value;

            if (pass && name) {
                let index = ApplicationModel.users.map((elem) => {
                    return elem.author;
                }).indexOf(name);
                if (index !== -1) {
                    if (ApplicationModel.users[index].password === pass) {
                        ViewModule.loginView(name);
                        document.getElementById('exitBtn').addEventListener('click', EventsModule.unAuthorization);
                        document.getElementById('add').addEventListener('click', EventsModule.addPost);
                        document.getElementById('home').addEventListener('click', EventsModule.homePosts);
                        localStorage.setItem('userAuthorized', JSON.stringify(ApplicationModel.userAuthorized));
                        EventsModule.closeForms();
                        ViewModule.printOnScreen(ApplicationModel.begOfVisiblePosts, ApplicationModel.begOfVisiblePosts + 10);
                        inputLoginAuth.value = 'Логин';
                        inputPassword.value = 'Пароль';
                        //after login we get new edit buttons
                    } else {
                        textError.innerText = 'Неправильный пароль';
                        EventsModule.closeForms();
                        grayBackground.style.display = 'block';
                        error.style.display = 'block';
                    }
                }  else {
                    textError.innerText = 'Такого пользователя не найдено';
                    EventsModule.closeForms();
                    grayBackground.style.display = 'block';
                    error.style.display = 'block';
                }
            }
        },

        homePosts: function(){
            ApplicationModel.begOfVisiblePosts = 0;
            ViewModule.printOnScreen(ApplicationModel.begOfVisiblePosts, ApplicationModel.begOfVisiblePosts + 10);
        },

        unAuthorization: function () {
            document.getElementById("menu").innerHTML = '';
            ViewModule.createMenuNotForUser();
            ApplicationModel.userAuthorized = null;
            localStorage.setItem('userAuthorized', JSON.stringify(ApplicationModel.userAuthorized));
            ViewModule.printOnScreen(ApplicationModel.begOfVisiblePosts, ApplicationModel.begOfVisiblePosts + 10);
            document.getElementById('enterMenu').addEventListener('click', EventsModule.enter);
        },

        addingPost: function () {
            let arrayHashtags = [];
            if(hashAdd.value){
                arrayHashtags = hashAdd.value.trim().split(/[,# ]+/);
            }
            if(selectAdd.selectedIndex !== 1){
                if(arrayHashtags.indexOf(selectAdd.options[selectAdd.selectedIndex].value) === -1) {
                    arrayHashtags.push(selectAdd.options[selectAdd.selectedIndex].value);
                }
            }

            ApplicationModel.begOfVisiblePosts = 0;
            let user = {
                id: (ApplicationModel.photoPosts.length + 1),
                description: inputDescription.value,
                createdAt: new Date(),
                author: ApplicationModel.userAuthorized,
                authorPhoto: ApplicationModel.users[ApplicationModel.users.map((user) => {
                    return user.author;
                }).indexOf(ApplicationModel.userAuthorized)].authorPhoto || 0,
                photoLink: photoLnk,
                hashtags:  arrayHashtags.length === 0 ? 0 : arrayHashtags,
                likes: [],
                deleted: false
            };
            if (ApplicationModel.addPhotoPost(user)) {
                ViewModule.printOnScreen(ApplicationModel.begOfVisiblePosts, ApplicationModel.begOfVisiblePosts + 10);
            } else {
                textError.innerText = 'Неверные данные';
                EventsModule.closeForms();
                grayBackground.style.display = 'block';
                error.style.display = 'block';

            }
            EventsModule.closeForms();
        },

        edittingPost: function() {
            let arrayHashtags = [];
            if (hashEdit.value) {
                arrayHashtags = hashEdit.value.replace('#', ' ').trim().split(/[,# ]+/);
            }
            if (selectEdit.selectedIndex !== 1) {
                if (arrayHashtags.indexOf(selectEdit.options[selectEdit.selectedIndex].value) === -1) {
                    arrayHashtags.push(selectEdit.options[selectEdit.selectedIndex].value);
                }
            }
            let user = {
                id: 1,
                description: inputDescriptionEdit.value,
                author: ApplicationModel.userAuthorized,
                authorPhoto: ApplicationModel.photoPosts[indexEditPost].authorPhoto,
                photoLink: photoLnkEdit,
                hashtags: arrayHashtags.length === 0 ? 0 : arrayHashtags,
                likes: ApplicationModel.photoPosts[indexEditPost].likes,
                deleted: false
            };

            let postOld = ApplicationModel.getPhotoPost(edittingPostId);
            if (ApplicationModel.editPost(postOld.id, user)) {
                ViewModule.editDomPhotoPost(postOld, user);
                document.getElementById('edit-'+edittingPostId).addEventListener('click', EventsModule.editPost);
                document.getElementById('delete-'+edittingPostId).addEventListener('click', EventsModule.delettingPost);
                document.getElementById('like-'+edittingPostId).addEventListener('click', EventsModule.pressLike);
                localStorage.setItem('photoPosts', JSON.stringify(ApplicationModel.photoPosts));
                EventsModule.closeForms();
            } else {
                textError.innerText = 'Неверные данные';
                EventsModule.closeForms();
                grayBackground.style.display = 'block';
                error.style.display = 'block';
            }

        },

        delettingPost: function(e) {
            let post = ApplicationModel.getPhotoPost(e.target.id.substring(7));
            if (ApplicationModel.removePhotoPost(post.id)) {
                ViewModule.deleteDomPhotoPost(post);
            } else
            {
                textError.innerText = 'Неправильный пароль';
                EventsModule.closeForms();
                grayBackground.style.display = 'block';
                error.style.display = 'block';
            }
        },

        initializeLikeButtons: function(){
            let likeButtons = document.querySelectorAll('.likePost');
            for(let i = 0; i < likeButtons.length; i++){
                likeButtons[i].addEventListener('click', EventsModule.pressLike);
            }
        },

        initializeButtonsPost: function(){
            let editButtons = document.querySelectorAll('.editPost');
            let deleteButtons = document.querySelectorAll('.deletePost');
            for(let i = 0; i < editButtons.length; i++){
                editButtons[i].addEventListener('click', EventsModule.editPost);
                deleteButtons[i].addEventListener('click', EventsModule.delettingPost);
            }
        },

        initialization: function(){
            document.getElementById('downMore').addEventListener('click', EventsModule.getMorePosts);
            document.getElementById('filtersPicture').addEventListener('click', EventsModule.filterPosts);
            document.getElementById('grayBckd').addEventListener('click', EventsModule.closeForms);
            if(ApplicationModel.userAuthorized === null) {
                document.getElementById('enterMenu').addEventListener('click', EventsModule.enter);
            } else {
                document.getElementById('exitBtn').addEventListener('click', EventsModule.unAuthorization);
                document.getElementById('add').addEventListener('click', EventsModule.addPost);
                document.getElementById('home').addEventListener('click', EventsModule.homePosts);
                EventsModule.initializeButtonsPost();
             }
            document.getElementById('loginBtn').addEventListener('click', EventsModule.logIn);
            ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
                dropArea.addEventListener(eventName, preventDefaults, false);
                dropAreaEdit.addEventListener(eventName, preventDefaults, false);
            });
            dropArea.addEventListener('drop', handleDrop, false);
            dropAreaEdit.addEventListener('drop', handleDropEdit, false);
            ['dragenter', 'dragover'].forEach(eventName => {
                dropArea.addEventListener(eventName, highlight, false);
                dropAreaEdit.addEventListener(eventName, highlight, false);
            });
            ['dragleave', 'drop'].forEach(eventName => {
                dropArea.addEventListener(eventName, unHighLight, false);
                dropAreaEdit.addEventListener(eventName, unHighLight, false);
            });
            document.getElementById('addingFormAdd').addEventListener('click', EventsModule.addingPost);
            document.getElementById('editFormAdd').addEventListener('click', EventsModule.edittingPost);
        }
    }
}();
// localStorage.clear()
// ApplicationModel.putPostsAnsUsersInLocalStorage();
ApplicationModel.fillInformation();
ViewModule.printOnScreen(ApplicationModel.begOfVisiblePosts, ApplicationModel.begOfVisiblePosts + 10);
if (ApplicationModel.userAuthorized === null) {
    ViewModule.createMenuNotForUser();
} else {
    ViewModule.createMenuForUser();
}
// ApplicationModel.fillMapHash();
// ViewModule.propHash('selectFilter');
EventsModule.initialization();