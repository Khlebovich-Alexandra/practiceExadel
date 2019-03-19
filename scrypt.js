"use strict";

let photoPosts = [
    {
        id: 1,
        description: 'Beautiful Rome!',
        createdAt: new Date(2010, 1, 29, 14, 2, 21),
        author: 'Main Person',
        authorPhoto: './pictures/menu/mainPhoto.png',
        photoLink: 'http://i.artfile.ru/1920x1080_663213_%5Bwww.ArtFile.ru%5D.jpg',
        hashtags: ['Rome', 'Italy', '1', '2', '3434123413241323123213123123'],
        likes: ['Other Person', 'taxi', 'Main Person'],
        deleted: false
    },
    {
        id: 2,
        description: 'В горах',
        createdAt: new Date(2012, 2, 26, 15, 3, 41),
        author: 'Other Person',
        authorPhoto: './pictures/post/post1/avaOther.png',
        photoLink: 'https://s1.1zoom.ru/big0/81/Russia_Mountains_Lake_469922.jpg',
        hashtags: ['горы', 'Кавказ', 'мечта'],
        likes: ['Other Person', 'arina'],
        deleted: false
    },
    {
        id: 3,
        description: 'Вода',
        createdAt: new Date(2019, 1, 29, 14, 2, 21),
        author: 'Other Person',
        authorPhoto: './pictures/post/post1/avaOther.png',
        photoLink: 'https://i.ytimg.com/vi/9NKyArdusj8/maxresdefault.jpg',
        hashtags: ['вода', 'Венеция'],
        likes: ['Main Person'],
        deleted: false
    },
    {
        id: 4,
        description: 'Дерево',
        createdAt: new Date(2010, 7, 29, 14, 2, 21),
        author: 'Other Person',
        authorPhoto: './pictures/post/post1/avaOther.png',
        photoLink: 'http://www.fonstola.ru/download.php?file=201506/1920x1200/fonstola.ru-187130.jpg',
        hashtags: ['дерево', 'Rome', 'Italy'],
        likes: ['Other Person', 'taxi', 'Main Person', 'pipi'],
        deleted: false
    },
    {
        id: 5,
        description: 'Водопад',
        createdAt: new Date(2016, 1, 29, 14, 2, 21),
        author: 'Main Person',
        authorPhoto: './pictures/menu/mainPhoto.png',
        photoLink: 'https://s1.1zoom.ru/big3/137/371625-svetik.jpg',
        hashtags: ['водопад', 'пейзаж', 'Russia'],
        likes: ['Other Person', 'taxi', 'Main Person', 'taxi', 'remember'],
        deleted: false
    },
    {
        id: 6,
        description: 'Paris',
        createdAt: new Date(2010, 1, 9, 14, 2, 21),
        author: 'Main Person',
        authorPhoto: './pictures/menu/mainPhoto.png',
        photoLink: 'http://desktopwallpapers.org.ua/pic/201211/2560x1600/desktopwallpapers.org.ua-21746.jpg',
        hashtags: ['France', 'Paris'],
        likes: ['Other Person'],
        deleted: false
    },
    {
        id: 7,
        description: 'Цветы',
        createdAt: new Date(2018, 1, 29, 14, 2, 21),
        author: 'Main Person',
        authorPhoto: './pictures/menu/mainPhoto.png',
        photoLink: 'https://s1.1zoom.ru/big0/328/252677-svetik.jpg',
        hashtags: ['цветы'],
        likes: ['mashinka', 'autos', 'Nethelands', 'Flowers'],
        deleted: false
    },
    {
        id: 8,
        description: 'Paris!!!!',
        createdAt: new Date(2000, 1, 29, 14, 2, 21),
        author: 'Main Person',
        authorPhoto: './pictures/menu/mainPhoto.png',
        photoLink: 'https://storge.pic2.me/c/1360x800/981/584872400b299.jpg',
        hashtags: ['Paris', 'MeInParis', 'France'],
        likes: ['bojenka'],
        deleted: false
    },
    {
        id: 9,
        description: 'F430',
        createdAt: new Date(2009, 1, 29, 14, 2, 21),
        author: 'Other Person',
        authorPhoto: './pictures/post/post1/avaOther.png',
        photoLink: 'http://oboi-na-stol.com/pub/original_images/oboi-na-stol.com-98967-mashiny-ferrari-f430-avto-mashiny-avtomobili.jpg',
        hashtags: ['Ferrari', 'F430', 'USA'],
        likes: ['tachki', 'chai', 'ss'],
        deleted: false
    },
    {
        id: 10,
        description: 'Ламборгини',
        createdAt: new Date(2010, 7, 29, 14, 2, 21),
        author: 'cars',
        authorPhoto: 'http://skachat-kartinki.ru/img/picture/Oct/04/417e63b46e74be245aca2a969133b567/4.jpg',
        photoLink: 'https://w-dog.ru/wallpapers/1/4/497672376362454/lamborghini-aventador-lp700-4-avto-superkar-doroga-zelnyj-green-nebo.jpg',
        hashtags: ['Машины', 'USA'],
        likes: ['cars', 'taxi'],
        deleted: false
    },
    {
        id: 11,
        description: '59',
        createdAt: new Date(2010, 2, 29, 14, 2, 21),
        author: 'cars',
        authorPhoto: 'http://skachat-kartinki.ru/img/picture/Oct/04/417e63b46e74be245aca2a969133b567/4.jpg',
        photoLink: 'http://skachat-kartinki.ru/img/picture/Oct/04/417e63b46e74be245aca2a969133b567/4.jpg',
        hashtags: ['59'],
        likes: ['Other Person', 'taxi', 'Main Person', 'egor'],
        deleted: false
    },
    {
        id: 12,
        description: 'Lamborghini',
        createdAt: new Date(2010, 1, 7, 14, 2, 21),
        author: 'Main Person',
        authorPhoto: './pictures/menu/mainPhoto.png',
        photoLink: 'https://autowall.ru/wallpapers/original/29402.jpg',
        hashtags: ['USA', 'Car', 'Lamborghini'],
        likes: ['pacani', 'Main Person'],
        deleted: false
    },
    {
        id: 13,
        description: 'I love this country!',
        createdAt: new Date(2010, 1, 7, 14, 2, 21),
        author: 'Other Person',
        authorPhoto: './pictures/post/post1/avaOther.png',
        photoLink: 'http://lolopepe.kg/wp-content/uploads/2017/08/body_src_1021.jpg',
        hashtags: ['love', 'лето', 'Italy', 'Rome'],
        likes: [],
        deleted: false
    },
    {
        id: 14,
        description: 'Poland!',
        createdAt: new Date(2018, 1, 7, 14, 2, 21),
        author: 'trener',
        authorPhoto: 'https://onsport.by/upload/resize_cache/iblock/23a/540_350_187651f930238ae42a94b52b10d934176/23a8370963af42ff33de0d9ef78f6c60.jpg',
        photoLink: 'https://onsport.by/upload/resize_cache/iblock/23a/540_350_187651f930238ae42a94b52b10d934176/23a8370963af42ff33de0d9ef78f6c60.jpg',
        hashtags: ['Poland', 'Warsaw'],
        likes: ['kekochka', 'life', 'sport'],
        deleted: false
    },
    {
        id: 15,
        description: 'Minsk is beautiful!',
        createdAt: new Date(2010, 6, 7, 14, 2, 21),
        author: 'trener',
        authorPhoto: 'https://onsport.by/upload/resize_cache/iblock/23a/540_350_187651f930238ae42a94b52b10d934176/23a8370963af42ff33de0d9ef78f6c60.jpg',
        photoLink: 'https://onsport.by/upload/resize_cache/iblock/fcf/540_350_187651f930238ae42a94b52b10d934176/fcf7286441ab8fd5ed140c65282a35ec.png',
        hashtags: ['Minsk', 'Belarus'],
        likes: ['brother', 'syster'],
        deleted: false
    },
    {
        id: 16,
        description: 'crupo7',
        createdAt: new Date(2012, 1, 7, 14, 2, 21),
        author: 'films',
        authorPhoto: 'https://static.kinoafisha.info/k/movie_posters/1920x1080/upload/movie_posters/7/8/9/8143987/804fe6d00e2cfb98841de815d5a3fce0.jpg',
        photoLink: 'https://static.kinoafisha.info/k/movie_posters/1920x1080/upload/movie_posters/7/8/9/8143987/804fe6d00e2cfb98841de815d5a3fce0.jpg',
        hashtags: ['Antonio', 'USA'],
        likes: ['Other Person'],
        deleted: false
    },
    {
        id: 17,
        description: 'Найди меня',
        createdAt: new Date(2015, 1, 7, 14, 2, 21),
        author: 'films',
        authorPhoto: 'https://static.kinoafisha.info/k/movie_posters/1920x1080/upload/movie_posters/7/8/9/8143987/804fe6d00e2cfb98841de815d5a3fce0.jpg',
        photoLink: 'https://www.kinocitymall.ru/images/posters/fdad9ac238d6034e.jpg',
        hashtags: ['Бумажные города', 'Belarus'],
        likes: ['lubov', 'zhizhn'],
        deleted: false
    },
    {
        id: 18,
        description: 'Без компромиссов',
        createdAt: new Date(2016, 1, 7, 14, 2, 21),
        author: 'films',
        authorPhoto: 'https://static.kinoafisha.info/k/movie_posters/1920x1080/upload/movie_posters/7/8/9/8143987/804fe6d00e2cfb98841de815d5a3fce0.jpg',
        photoLink: 'http://glass-kino.ucoz.ru/_nw/15/46383748.jpg',
        hashtags: ['стэтхем', 'USA'],
        likes: [],
        deleted: false
    },
    {
        id: 19,
        description: 'Смертельная гонка',
        createdAt: new Date(2015, 1, 8, 14, 2, 21),
        author: 'cars',
        authorPhoto: 'http://skachat-kartinki.ru/img/picture/Oct/04/417e63b46e74be245aca2a969133b567/4.jpg',
        photoLink: 'http://hdrezka.me/i/2014/5/6/x3a2391d33a7fry78q63d.jpg',
        hashtags: ['гонка', 'USA'],
        likes: ['shmonka', 'dashka'],
        deleted: false
    },
    {
        id: 20,
        description: 'Лучшее во мне',
        createdAt: new Date(2015, 1, 27, 14, 2, 21),
        author: 'films',
        authorPhoto: 'https://static.kinoafisha.info/k/movie_posters/1920x1080/upload/movie_posters/7/8/9/8143987/804fe6d00e2cfb98841de815d5a3fce0.jpg',
        photoLink: 'https://disput.azstatic.com/uploads/monthly_2017_06/596362.jpg.80fcd483cdbed4a9572f79ce745fd097.jpg',
        hashtags: ['InMe', 'Me', 'Poland'],
        likes: ['arts', 'draws', 'films'],
        deleted: false
    }
];
let filerFound = {
    author: 'Main Person',
    hashtags: ['Italy', 'Rome']
};

let forEdit = {
    author: 'Main Person',
    hashtags: ['Italy', 'Rome']
};

let OnePost = {
    id: 22,
    description: '1',
    createdAt: new Date(),
    author: '1',
    photoLink: '2',
    hashtags: ['3'],
    likes: ['4', '5', '6']
};

class ClassForApplicationModule {
    compareDates(a, b) {
        return b.createdAt - a.createdAt;
    }

    constructor(posts) {
        this._photoPosts = posts;
    }

    getPhotoPosts(skip, top, filterConfig) {
        let result = this._photoPosts;
        if (filterConfig) {
            if (filterConfig.author) {
                result = result.filter(function (post) {
                    return post.author === filterConfig.author;
                });
            }

            if (filterConfig.createdAt) {
                result = result.filter(function (post) {
                    return post.createdAt >= filterConfig.createdAt;
                });
            }

            if (filterConfig.hashtags && filterConfig.hashtags.length !== 0) {
                result = result.filter(function (post) {
                    for (var i = 0; i < filterConfig.hashtags.length; i++) {
                        let condition = post.hashtags.some(function (tag) {
                            return tag === filterConfig.hashtags[i];
                        });
                        if (!condition) {
                            return false;
                        }
                    }
                    return true;
                })
            }
            result.filter(function (post) {
                return !post.deleted;
            });
        }

        result.sort(this.compareDates);
        if (result.length < top) {
            return result;
        }
        return result.slice(skip, top);
    };

    getPhotoPost(id) {
        return this._photoPosts.find(function (elem) {
            return parseInt(elem.id) === id;
        })
    };

    validatePhotoPost(post) {
        if (typeof parseInt(post.id) === "number" && parseInt(post.id) !== NaN) {
            if (post.id !== 0) {
                let condition = post.hashtags.some(function (idTemp) {
                    return idTemp === post.id;
                });
                if (!condition) {
                    if (typeof post.description === "string") {
                        if (post.description && post.description.length > 200 || post.description.length < 0) {
                            return false;
                        }
                    } else {
                        return false;
                    }
                    if (post.createdAt instanceof Date && typeof (post.author) === "string" && typeof (post.photoLink) === "string") {
                        if (!(post.id && post.description && post.createdAt && post.author && post.photoLink)) {
                            return false;
                        }
                        return true;
                    } else {
                        return false;
                    }
                }
                return false;
            }
            return false;
        }
        return false;
    }

    addPhotoPost(post) {
        if (this.validatePhotoPost(post) === true) {
            this._photoPosts.push(post);
            return true;
        }
        return false;
    };

    removePhotoPost(id) {
        let post = this.getPhotoPost(id);
        post.deleted = true;
        return !!post;
    };

    editPost(postID, post) {
        let tmp = Object.assign({}, this.getPhotoPost(postID));
        if (post.id) tmp.id = post.id;
        if (post.description) tmp.description = post.description;
        if (post.createdAt) tmp.createdAt = post.createdAt;
        if (post.hashtags) tmp.hashtags = post.hashtags;
        if (post.author) tmp.author = post.author;
        if (post.authorPhoto) tmp.authorPhoto = post.authorPhoto;
        if (post.photoLink) tmp.photoLink = post.photoLink;
        if (post.likes) tmp.likes = post.likes;
        if (this.validatePhotoPost(tmp)) {
            for (let i = 0; i < this._photoPosts.length; i++) {
                if (this._photoPosts[i].id === postID) {
                    this._photoPosts[i] = tmp;
                    return true;
                }
            }
        } else return false;
    }
}

let application = new ClassForApplicationModule(photoPosts);
console.log(application.getPhotoPost(1));
console.log(application.validatePhotoPost(OnePost));
console.log(application.validatePhotoPost(forEdit));
application.editPost(1, forEdit);
console.log(application.getPhotoPost(1));
application.addPhotoPost(OnePost);
console.log(application.photoPosts);
console.log(application.getPhotoPosts(0, 10));
console.log(application.getPhotoPosts(0, 10, filerFound));
console.log(application.getPhotoPosts(0, 10, {author: 'Main Person'}));
console.log(application.getPhotoPosts(0, 10, {hashtags: ['Italy']}));
application.removePhotoPost(1);
console.log(application.getPhotoPost(1));

