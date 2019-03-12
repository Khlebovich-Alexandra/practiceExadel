"use strict";

(function () {
        function compareDates(a, b) {
            return b.createdAt - a.createdAt;
        }

        let photoPosts = [
            {
                id: '1',
                description: 'красота!',
                createdAt: new Date(2016, 1, 29, 14, 2, 21),
                author: 'Djadka.by',
                authorPhoto: './pictures/menu/mainPhoto.png',
                photoLink: 'http://i.artfile.ru/1920x1080_663213_%5Bwww.ArtFile.ru%5D.jpg',
                hashtags: ['природа', 'пейзаж', '1', '2', '3434123413241323123213123123'],
                likes: ['aadereiko', 'taxi', 'djadka.by'],
                deleted: false
            },
            {
                id: '2',
                description: 'В горах',
                createdAt: new Date(2016, 2, 26, 15, 3, 41),
                author: 'aadereiko',
                authorPhoto: './pictures/post/post1/avaOther.png',
                photoLink: 'https://s1.1zoom.ru/big0/81/Russia_Mountains_Lake_469922.jpg',
                hashtags: ['природа', 'пейзаж', 'горы'],
                likes: ['aadereiko', 'arina'],
                deleted: false
            },
            {
                id: '3',
                description: 'Вода',
                createdAt: new Date(),
                author: 'aadereiko',
                authorPhoto: './pictures/post/post1/avaOther.png',
                photoLink: 'https://i.ytimg.com/vi/9NKyArdusj8/maxresdefault.jpg',
                hashtags: ['вода', 'горы'],
                likes: ['djadka.by'],
                deleted: false
            },
            {
                id: '4',
                description: 'Дерево',
                createdAt: new Date(),
                author: 'aadereiko',
                authorPhoto: './pictures/post/post1/avaOther.png',
                photoLink: 'http://www.fonstola.ru/download.php?file=201506/1920x1200/fonstola.ru-187130.jpg',
                hashtags: ['дерево', 'пейзаж'],
                likes: ['aadereiko', 'taxi', 'djadka.by', 'pipi'],
                deleted: false
            },
            {
                id: '5',
                description: 'Водопад',
                createdAt: new Date(),
                author: 'Djadka.by',
                authorPhoto: './pictures/menu/mainPhoto.png',
                photoLink: 'https://s1.1zoom.ru/big3/137/371625-svetik.jpg',
                hashtags: ['водопад', 'пейзаж'],
                likes: ['aadereiko', 'taxi', 'djadka.by', 'taxi', 'remember'],
                deleted: false
            },
            {
                id: '6',
                description: 'На лугу',
                createdAt: new Date(),
                author: 'Djadka.by',
                authorPhoto: './pictures/menu/mainPhoto.png',
                photoLink: 'http://desktopwallpapers.org.ua/pic/201211/2560x1600/desktopwallpapers.org.ua-21746.jpg',
                hashtags: ['луг', 'лужок'],
                likes: ['aadereiko'],
                deleted: false
            },
            {
                id: '7',
                description: 'Цветы',
                createdAt: new Date(),
                author: 'Djadka.by',
                authorPhoto: './pictures/menu/mainPhoto.png',
                photoLink: 'https://s1.1zoom.ru/big0/328/252677-svetik.jpg',
                hashtags: ['цветы'],
                likes: ['mashinka', 'autos'],
                deleted: false
            },
            {
                id: '8',
                description: 'Одуванчики',
                createdAt: new Date(),
                author: 'Djadka.by',
                authorPhoto: './pictures/menu/mainPhoto.png',
                photoLink: 'https://storge.pic2.me/c/1360x800/981/584872400b299.jpg',
                hashtags: ['Одуваны', 'Машина'],
                likes: ['bojenka'],
                deleted: false
            },
            {
                id: '9',
                description: 'F430',
                createdAt: new Date(),
                author: 'aadereiko',
                authorPhoto: './pictures/post/post1/avaOther.png',
                photoLink: 'http://oboi-na-stol.com/pub/original_images/oboi-na-stol.com-98967-mashiny-ferrari-f430-avto-mashiny-avtomobili.jpg',
                hashtags: ['Ferrari', 'F430'],
                likes: ['tachki', 'chai', 'ss'],
                deleted: false
            },
            {
                id: '10',
                description: 'Ламборгини',
                createdAt: new Date(),
                author: 'cars',
                authorPhoto: 'http://skachat-kartinki.ru/img/picture/Oct/04/417e63b46e74be245aca2a969133b567/4.jpg',
                photoLink: 'https://w-dog.ru/wallpapers/1/4/497672376362454/lamborghini-aventador-lp700-4-avto-superkar-doroga-zelnyj-green-nebo.jpg',
                hashtags: ['Машины'],
                likes: ['cars', 'taxi'],
                deleted: false
            },
            {
                id: '11',
                description: '59',
                createdAt: new Date(),
                author: 'cars',
                authorPhoto: 'http://skachat-kartinki.ru/img/picture/Oct/04/417e63b46e74be245aca2a969133b567/4.jpg',
                photoLink: 'http://skachat-kartinki.ru/img/picture/Oct/04/417e63b46e74be245aca2a969133b567/4.jpg',
                hashtags: ['59'],
                likes: ['aadereiko', 'taxi', 'djadka.by', 'egor'],
                deleted: false
            },
            {
                id: '12',
                description: 'Lamborghini',
                createdAt: new Date(),
                author: 'Djadka.by',
                authorPhoto: './pictures/menu/mainPhoto.png',
                photoLink: 'https://autowall.ru/wallpapers/original/29402.jpg',
                hashtags: ['Одуваны', 'Детки', 'Lamborghini'],
                likes: ['pacani', 'djadka.by'],
                deleted: false
            },
            {
                id: '13',
                description: 'Тренажер',
                createdAt: new Date(),
                author: 'aadereiko',
                authorPhoto: './pictures/post/post1/avaOther.png',
                photoLink: 'http://lolopepe.kg/wp-content/uploads/2017/08/body_src_1021.jpg',
                hashtags: ['качаться', 'лето', 'Одуваны', 'Детки'],
                likes: [],
                deleted: false
            },
            {
                id: '14',
                description: 'Кач',
                createdAt: new Date(),
                author: 'trener',
                authorPhoto: 'https://onsport.by/upload/resize_cache/iblock/23a/540_350_187651f930238ae42a94b52b10d934176/23a8370963af42ff33de0d9ef78f6c60.jpg',
                photoLink: 'https://onsport.by/upload/resize_cache/iblock/23a/540_350_187651f930238ae42a94b52b10d934176/23a8370963af42ff33de0d9ef78f6c60.jpg',
                hashtags: ['тренажер'],
                likes: ['kekochka', 'life', 'sport'],
                deleted: false
            },
            {
                id: '15',
                description: 'Зал',
                createdAt: new Date(),
                author: 'trener',
                authorPhoto: 'https://onsport.by/upload/resize_cache/iblock/23a/540_350_187651f930238ae42a94b52b10d934176/23a8370963af42ff33de0d9ef78f6c60.jpg',
                photoLink: 'https://onsport.by/upload/resize_cache/iblock/fcf/540_350_187651f930238ae42a94b52b10d934176/fcf7286441ab8fd5ed140c65282a35ec.png',
                hashtags: ['ВЗале', 'Сидим'],
                likes: ['brother', 'syster'],
                deleted: false
            },
            {
                id: '16',
                description: 'crupo7',
                createdAt: new Date(),
                author: 'films',
                authorPhoto: 'https://static.kinoafisha.info/k/movie_posters/1920x1080/upload/movie_posters/7/8/9/8143987/804fe6d00e2cfb98841de815d5a3fce0.jpg',
                photoLink: 'https://static.kinoafisha.info/k/movie_posters/1920x1080/upload/movie_posters/7/8/9/8143987/804fe6d00e2cfb98841de815d5a3fce0.jpg',
                hashtags: ['Antonio'],
                likes: ['aadereiko'],
                deleted: false
            },
            {
                id: '17',
                description: 'Найди меня',
                createdAt: new Date(),
                author: 'films',
                authorPhoto: 'https://static.kinoafisha.info/k/movie_posters/1920x1080/upload/movie_posters/7/8/9/8143987/804fe6d00e2cfb98841de815d5a3fce0.jpg',
                photoLink: 'https://www.kinocitymall.ru/images/posters/fdad9ac238d6034e.jpg',
                hashtags: ['Бумажные города'],
                likes: ['lubov', 'zhizhn'],
                deleted: false
            },
            {
                id: '18',
                description: 'Без компромиссов',
                createdAt: new Date(),
                author: 'films',
                authorPhoto: 'https://static.kinoafisha.info/k/movie_posters/1920x1080/upload/movie_posters/7/8/9/8143987/804fe6d00e2cfb98841de815d5a3fce0.jpg',
                photoLink: 'http://glass-kino.ucoz.ru/_nw/15/46383748.jpg',
                hashtags: ['стэтхем'],
                likes: [],
                deleted: false
            },
            {
                id: '19',
                description: 'Смертельная гонка',
                createdAt: new Date(),
                author: 'cars',
                authorPhoto: 'http://skachat-kartinki.ru/img/picture/Oct/04/417e63b46e74be245aca2a969133b567/4.jpg',
                photoLink: 'http://hdrezka.me/i/2014/5/6/x3a2391d33a7fry78q63d.jpg',
                hashtags: ['гонка'],
                likes: ['shmonka', 'dashka'],
                deleted: false
            },
            {
                id: '20',
                description: 'Лучшее во мне',
                createdAt: new Date(),
                author: 'films',
                authorPhoto: 'https://static.kinoafisha.info/k/movie_posters/1920x1080/upload/movie_posters/7/8/9/8143987/804fe6d00e2cfb98841de815d5a3fce0.jpg',
                photoLink: 'https://disput.azstatic.com/uploads/monthly_2017_06/596362.jpg.80fcd483cdbed4a9572f79ce745fd097.jpg',
                hashtags: ['InMe'],
                likes: ['arts', 'draws', 'films'],
                deleted: false
            }
        ];

        function getPhotoPosts(skip, top, filterConfing) {
            let result = photoPosts;
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
                        for (var i = 0; i < filterConfing.hashtags.length; i++) {
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
                result.filter(function (post) {
                    return !post.deleted;
                });
            }

            result.sort(compareDates);
            if (result.length < top) {
                return result;
            }
            return result.slice(skip, top);
        }

        function getPhotoPost(id) {
            return photoPosts.find(function (elem) {
                return parseInt(elem.id) === id;
            })
        }

        function validatePhotoPost(post) {
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
                        if (post.createdAt instanceof Date && typeof(post.author) === "string" && typeof(post.photoLink) === "string") {
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

        function addPhotoPost(post) {
            if (validatePhotoPost(post) === true) {
                photoPosts.push(post);
                return true;
            }
            return false;
        }

        function removePhotoPost(id) {
            var post = getPhotoPost(id);
            post.deleted = true;
            return !!post;
        }


        function editPost(id, post) {
            if (post.description && post.description.length > 200) {
                return false;
            }

            var getTemp = getPhotoPost(id);
            if (post.description) {
                getTemp.description = post.description;
            }
            if (post.photoLink) {
                getTemp.photoLink = post.photoLink;
            }
            if (post.hashtags) {
                getTemp.hashtags = post.hashtags.slice();
            }

            return getTemp || 0;
        }

        let filerFound = {
            author: 'Djadka.by',
            hashtags: ['Одуваны', 'Детки']
        };

        let pp = getPhotoPost(20);
        console.log(pp);
        validatePhotoPost(filerFound);
        let OnePost = {
            id: '22',
            description: '1',
            // createdAt: new Date(),
            author: '1',
            photoLink: '2',
            hashtags: ['3'],
            likes: ['4', '5', '6']
        }
        editPost(20, OnePost);
        addPhotoPost(OnePost);
        console.log(getPhotoPosts(10, 20, filerFound));


    }


)();

