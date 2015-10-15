$(document).ready(function() {
    var data_movie = load_movie();
    var data_tv = load_tv();
    showlist_movie(data_movie)
    showlist_tv(data_tv)

});

function showlist_movie(json) {
    var posters = new Array(),
        titles = new Array(),
        element, movie;
    for (i = 0; i < 6; i++) {
        posters[i] = "http://image.tmdb.org/t/p/w500" + json.results[i].poster_path;
        titles[i] = json.results[i].original_title;
    }
    for (i = 0; i < 6; i++) {
        element = "#movie".concat((i + 1).toString());
        movie = "#mtitle".concat((i + 1).toString());
        $("#listMovies").append(
            $("<div/>", {
                "class": "col-md-4 col-sm-6 movie-item"
            }).append($("<a/>", {
                href: "#",
                "class": "movie-link",
                id: "detalle" + [i + 1]
            }).append($("<div/>", {
                "class": "movie-hover"
            }).append(
                $("<div/>", {
                    "class": "movie-hover-content"
                }).append(
                    $("<button/>", {
                        id: "show" + [i + 1],
                        type: "button",
                        "class": "btn btn-danger"
                    }).text("Ver mas ")
                )
            ), $("<div/>").append(
                $("<img/>", {
                    "class": "embed-responsive-item",
                    src: posters[i],
                }).css({
                    width: "300px",
                    height: "390px"
                })
            )), $("<div/>", {
                "class": "movie-caption"
            }).append(
                $("<h4/>", {
                    id: "detail" + [i + 1]
                }).text(titles[i])
            ))
        );
    }
}

function showlist_tv(json) {
    var posters = new Array(),
        titles = new Array(),
        element, movie;
    for (i = 0; i < 6; i++) {
        posters[i] = "http://image.tmdb.org/t/p/w500" + json.results[i].poster_path;
        titles[i] = json.results[i].original_name;
    }
    for (i = 0; i < 6; i++) {
        element = "#tvshow".concat((i + 1).toString());
        tvshow = "#tvtitle".concat((i + 1).toString());

        $("#listtvshow").append(
            $("<div/>", {
                "class": "col-md-4 col-sm-6 movie-item"
            }).append($("<a/>", {
                href: "#",
                "class": "movie-link",
            }).append($("<div/>", {
                "class": "movie-hover"
            }).append(
                $("<div/>", {
                    "class": "movie-hover-content"
                }).append(
                    $("<button/>", {
                        id: "showtv" + [i + 1],
                        type: "button",
                        "class": "btn btn-danger"
                    }).append(
                        $("<i/>", {
                            "class": "glyphicon glyphicon-plus"
                        })
                    ).text("Ver mas")
                )
            ), $("<div/>").append(
                $("<img/>", {
                    "class": "embed-responsive-item",
                    src: posters[i],
                }).css({
                    width: "300px",
                    height: "390px"
                })
            )), $("<div/>", {
                "class": "tvshow-caption"
            }).append(
                $("<h4/>").text(titles[i])
            ))


        );
    }
}

function show_movie(json) {
    var id = json.results[2].id;
    poster = "http://image.tmdb.org/t/p/w500" + json.results[2].poster_path;
    $("#photo").append($("<img/>", {
        "class": "embed-responsive-item",
        src: poster,
    }).css({
        width: "300px",
        height: "450px"
    }));

    $("#titulo").text(json.results[2].title);
    $("#release_date").text(json.results[1].release_date);
    $("#rating").text(json.results[1].vote_average);
    overview(id);
}

function load_movie() {
    var data = {
        "page": 1,
        "results": [{
            "adult": false,
            "backdrop_path": "/wJucnFxFbxD9rugz9aJ6GvG8HOn.jpg",
            "genre_ids": [28, 18, 10752],
            "id": 331214,
            "original_language": "en",
            "original_title": "Band of Brothers",
            "overview": "Drawn from interviews with survivors of Easy Company, as well as their journals and letters, Band of Brothers chronicles the experiences of these men from paratrooper training in Georgia through the end of the war. As an elite rifle company parachuting into Normandy early on D-Day morning, participants in the Battle of the Bulge, and witness to the horrors of war, the men of Easy knew extraordinary bravery and extraordinary fear - and became the stuff of legend. Based on Stephen E. Ambrose's acclaimed book of the same name.",
            "release_date": "2001-09-09",
            "poster_path": "/yRXTVpDRBA3983C3HjoY0SO4dV6.jpg",
            "popularity": 2.023138,
            "title": "Band of Brothers",
            "video": false,
            "vote_average": 8.6,
            "vote_count": 81
        }, {
            "adult": false,
            "backdrop_path": "/6bbZ6XyvgfjhQwbplnUh1LSj1ky.jpg",
            "genre_ids": [18],
            "id": 244786,
            "original_language": "en",
            "original_title": "Whiplash",
            "overview": "Under the direction of a ruthless instructor, a talented young drummer begins to pursue perfection at any cost, even his humanity.",
            "release_date": "2014-10-10",
            "poster_path": "/lIv1QinFqz4dlp5U4lQ6HaiskOZ.jpg",
            "popularity": 8.306033,
            "title": "Whiplash",
            "video": false,
            "vote_average": 8.4,
            "vote_count": 1222
        }, {
            "adult": false,
            "backdrop_path": "/cqn1ynw78Wan37jzs1Ckm7va97G.jpg",
            "genre_ids": [16, 10749, 10751],
            "id": 140420,
            "original_language": "en",
            "original_title": "Paperman",
            "overview": "An urban office worker finds that paper airplanes are instrumental in meeting a girl in ways he never expected.",
            "release_date": "2012-11-02",
            "poster_path": "/3TpMBcAYH4cxCw5WoRacWodMTCG.jpg",
            "popularity": 2.239225,
            "title": "Paperman",
            "video": false,
            "vote_average": 8.3,
            "vote_count": 236
        }, {
            "adult": false,
            "backdrop_path": "/vFJ31Mp68hwtlB4opsAP29gFqhr.jpg",
            "genre_ids": [18, 878],
            "id": 157336,
            "original_language": "en",
            "original_title": "Interstellar",
            "overview": "Interstellar chronicles the adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
            "release_date": "2014-11-05",
            "poster_path": "/nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg",
            "popularity": 17.873618,
            "title": "Interstellar",
            "video": false,
            "vote_average": 8.3,
            "vote_count": 3426
        }, {
            "adult": false,
            "backdrop_path": "/sFQ10h9DnjOYIF4HjtLQuZ8pnb4.jpg",
            "genre_ids": [16, 10751],
            "id": 13042,
            "original_language": "en",
            "original_title": "Presto",
            "overview": "Dignity. Poise. Mystery. We expect nothing less from the great turn-of-the-century magician, Presto. But when Presto neglects to feed his rabbit one too many times, the magician finds he isn't the only one with a few tricks up his sleeve!",
            "release_date": "2008-06-26",
            "poster_path": "/A2rxR8g3y6kcjIoR2fcwtq9eppc.jpg",
            "popularity": 1.590951,
            "title": "Presto",
            "video": false,
            "vote_average": 8.3,
            "vote_count": 187
        }, {
            "adult": false,
            "backdrop_path": "/xBKGJQsAIeweesB79KC89FpBrVr.jpg",
            "genre_ids": [18, 80],
            "id": 278,
            "original_language": "en",
            "original_title": "The Shawshank Redemption",
            "overview": "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
            "release_date": "1994-09-14",
            "poster_path": "/9O7gLzmreU0nGkIB6K3BsJbzvNv.jpg",
            "popularity": 4.204153,
            "title": "The Shawshank Redemption",
            "video": false,
            "vote_average": 8.2,
            "vote_count": 4121
        }, {
            "adult": false,
            "backdrop_path": "/szytSpLAyBh3ULei3x663mAv5ZT.jpg",
            "genre_ids": [35, 16, 10751],
            "id": 150540,
            "original_language": "en",
            "original_title": "Inside Out",
            "overview": "Growing up can be a bumpy road, and it's no exception for Riley, who is uprooted from her Midwest life when her father starts a new job in San Francisco. Like all of us, Riley is guided by her emotions - Joy, Fear, Anger, Disgust and Sadness. The emotions live in Headquarters, the control center inside Riley's mind, where they help advise her through everyday life. As Riley and her emotions struggle to adjust to a new life in San Francisco, turmoil ensues in Headquarters. Although Joy, Riley's main and most important emotion, tries to keep things positive, the emotions conflict on how best to navigate a new city, house and school.",
            "release_date": "2015-06-19",
            "poster_path": "/aAmfIX3TT40zUHGcCKrlOZRKC7u.jpg",
            "popularity": 18.041776,
            "title": "Inside Out",
            "video": false,
            "vote_average": 8.2,
            "vote_count": 1308
        }, {
            "adult": false,
            "backdrop_path": "/6xKCYgH16UuwEGAyroLU6p8HLIn.jpg",
            "genre_ids": [18, 80],
            "id": 238,
            "original_language": "en",
            "original_title": "The Godfather",
            "overview": "The story spans the years from 1945 to 1955 and chronicles the fictional Italian-American Corleone crime family. When organized crime family patriarch Vito Corleone barely survives an attempt on his life, his youngest son, Michael, steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
            "release_date": "1972-03-15",
            "poster_path": "/d4KNaTrltq6bpkFS01pYtyXa09m.jpg",
            "popularity": 4.015568,
            "title": "The Godfather",
            "video": false,
            "vote_average": 8.1,
            "vote_count": 2657
        }, {
            "adult": false,
            "backdrop_path": "/mQwpjcFzQpZOZWqyyNKsdhjDCxF.jpg",
            "genre_ids": [18, 10402],
            "id": 277216,
            "original_language": "en",
            "original_title": "Straight Outta Compton",
            "overview": "In 1987, five young men, using brutally honest rhymes and hardcore beats, put their frustration and anger about life in the most dangerous place in America into the most powerful weapon they had: their music. Taking us back to where it all began, Straight Outta Compton tells the true story of how these cultural rebels-armed only with their lyrics, swagger, bravado and raw talent-stood up to the authorities that meant to keep them down and formed the world's most dangerous group, N.W.A. And as they spoke the truth that no one had before and exposed life in the hood, their voice ignited a social revolution that is still reverberating today. Straight Outta Compton stars O’Shea Jackson Jr., Corey Hawkins and Jason Mitchell as Ice Cube, Dr. Dre and Eazy-E, and is directed by F. Gary Gray.",
            "release_date": "2015-08-14",
            "poster_path": "/X7S1RtotXOZNV7OlgCfh5VKZSB.jpg",
            "popularity": 6.110446,
            "title": "Straight Outta Compton",
            "video": false,
            "vote_average": 8.1,
            "vote_count": 278
        }, {
            "adult": false,
            "backdrop_path": "/bHarw8xrmQeqf3t8HpuMY7zoK4x.jpg",
            "genre_ids": [878, 14, 12],
            "id": 118340,
            "original_language": "en",
            "original_title": "Guardians of the Galaxy",
            "overview": "Light years from Earth, 26 years after being abducted, Peter Quill finds himself the prime target of a manhunt after discovering an orb wanted by Ronan the Accuser.",
            "release_date": "2014-08-01",
            "poster_path": "/9gm3lL8JMTTmc3W4BmNMCuRLdL8.jpg",
            "popularity": 12.11038,
            "title": "Guardians of the Galaxy",
            "video": false,
            "vote_average": 8.1,
            "vote_count": 3540
        }, {
            "adult": false,
            "backdrop_path": "/lH2Ga8OzjU1XlxJ73shOlPx6cRw.jpg",
            "genre_ids": [18],
            "id": 389,
            "original_language": "en",
            "original_title": "12 Angry Men",
            "overview": "The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent of murdering his father. What begins as an open and shut case soon becomes a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, and each other.",
            "release_date": "1957-04-10",
            "poster_path": "/qcL1YfkCxfhsdO6sDDJ0PpzMF9n.jpg",
            "popularity": 2.798235,
            "title": "12 Angry Men",
            "video": false,
            "vote_average": 8.1,
            "vote_count": 759
        }, {
            "adult": false,
            "backdrop_path": "/60cvl34Go8dvtDiHs9L82a79VXm.jpg",
            "genre_ids": [10749, 35, 16, 18, 10751],
            "id": 293299,
            "original_language": "en",
            "original_title": "Feast",
            "overview": "This Oscar-winning animated short film tells the story of one man's love life is seen through the eyes of his best friend and dog, Winston, and revealed bite by bite through the meals they share.",
            "release_date": "2014-11-07",
            "poster_path": "/qJ9ouIj4wN24asvKTUSAcJnSfrT.jpg",
            "popularity": 1.56478,
            "title": "Feast",
            "video": false,
            "vote_average": 8.1,
            "vote_count": 163
        }, {
            "adult": false,
            "backdrop_path": "/ihWaJZCUIon2dXcosjQG2JHJAPN.jpg",
            "genre_ids": [18, 35],
            "id": 77338,
            "original_language": "fr",
            "original_title": "Intouchables",
            "overview": "A true story of two men who should never have met - a quadriplegic aristocrat who was injured in a paragliding accident and a young man from the projects.",
            "release_date": "2011-11-02",
            "poster_path": "/4mFsNQwbD0F237Tx7gAPotd0nbJ.jpg",
            "popularity": 3.954226,
            "title": "The Intouchables",
            "video": false,
            "vote_average": 8.1,
            "vote_count": 1739
        }, {
            "adult": false,
            "backdrop_path": "/pmzR5Q8W0wbxpBV3lp548hBESiE.jpg",
            "genre_ids": [16, 10751, 14],
            "id": 110416,
            "original_language": "en",
            "original_title": "Song of the Sea",
            "overview": "The story of the last Seal Child’s journey home. After their mother’s disappearance, Ben and Saoirse are sent to live with Granny in the city. When they resolve to return to their home by the sea, their journey becomes a race against time as they are drawn into a world Ben knows only from his mother’s folktales. But this is no bedtime story; these fairy folk have been in our world far too long. It soon becomes clear to Ben that Saoirse is the key to their survival.",
            "release_date": "2014-12-19",
            "poster_path": "/uvNv23Arf2ZYtimiStSB2c1DAEX.jpg",
            "popularity": 2.879454,
            "title": "Song of the Sea",
            "video": false,
            "vote_average": 8.1,
            "vote_count": 117
        }, {
            "adult": false,
            "backdrop_path": "/tsix4gtq4lx28I8vTuCH2BAy0A.jpg",
            "genre_ids": [16, 12, 35, 10751, 14],
            "id": 24480,
            "original_language": "en",
            "original_title": "Partly Cloudy",
            "overview": "Everyone knows that the stork delivers babies, but where do the storks get the babies from? The answer lies up in the stratosphere, where cloud people sculpt babies from clouds and bring them to life. Gus, a lonely and insecure grey cloud, is a master at creating \"dangerous\" babies. Crocodiles, porcupines, rams and more - Gus's beloved creations are works of art, but more than a handful for his loyal delivery stork partner, Peck. As Gus's creations become more and more rambunctious, Peck's job gets harder and harder. How will Peck manage to handle both his hazardous cargo and his friend's fiery temperament?",
            "release_date": "2009-05-28",
            "poster_path": "/5M5bg79OV96Vb4O0fDjX5clxASG.jpg",
            "popularity": 1.556077,
            "title": "Partly Cloudy",
            "video": false,
            "vote_average": 8.0,
            "vote_count": 127
        }, {
            "adult": false,
            "backdrop_path": "/fii9tPZTpy75qOCJBulWOb0ifGp.jpg",
            "genre_ids": [36, 18, 53, 10752],
            "id": 205596,
            "original_language": "en",
            "original_title": "The Imitation Game",
            "overview": "Based on the real life story of legendary cryptanalyst Alan Turing, the film portrays the nail-biting race against time by Turing and his brilliant team of code-breakers at Britain's top-secret Government Code and Cypher School at Bletchley Park, during the darkest days of World War II.",
            "release_date": "2014-11-14",
            "poster_path": "/noUp0XOqIcmgefRnRZa1nhtRvWO.jpg",
            "popularity": 11.154989,
            "title": "The Imitation Game",
            "video": false,
            "vote_average": 8.0,
            "vote_count": 1927
        }, {
            "adult": false,
            "backdrop_path": "/mnpRKVSXBX6jb56nabvmGKA0Wig.jpg",
            "genre_ids": [14, 12, 16, 10751],
            "id": 129,
            "original_language": "ja",
            "original_title": "千と千尋の神隠し",
            "overview": "Spirited Away is an Oscar winning Japanese animated film about a ten year old girl who wanders away from her parents along a path that leads to a world ruled by strange and unusual monster-like animals. Her parents have been changed into pigs along with others inside a bathhouse full of these creatures. Will she ever see the world how it once was?",
            "release_date": "2001-07-20",
            "poster_path": "/dL11DBPcRhWWnJcFXl9A07MrqTI.jpg",
            "popularity": 3.852773,
            "title": "Spirited Away",
            "video": false,
            "vote_average": 8.0,
            "vote_count": 1369
        }, {
            "adult": false,
            "backdrop_path": "/mrbTLFsYup7iIXgJzxJVLaitcwZ.jpg",
            "genre_ids": [35, 18],
            "id": 637,
            "original_language": "it",
            "original_title": "La vita è bella",
            "overview": "A touching story of an Italian book seller of Jewish ancestry who lives in his own little fairy tale. His creative and happy life would come to an abrupt halt when his entire family is deported to a concentration camp during World War II. While locked up he tries to convince his son that the whole thing is just a game.",
            "release_date": "1997-12-20",
            "poster_path": "/f7DImXDebOs148U4uPjI61iDvaK.jpg",
            "popularity": 2.81342,
            "title": "Life Is Beautiful",
            "video": false,
            "vote_average": 8.0,
            "vote_count": 995
        }, {
            "adult": false,
            "backdrop_path": "/9qTnj9MHAkNojW1Rlv3GAGfQJo7.jpg",
            "genre_ids": [80, 18],
            "id": 240,
            "original_language": "en",
            "original_title": "The Godfather: Part II",
            "overview": "The continuing saga of the Corleone crime family tells the story of a young Vito Corleone growing up in Sicily and in 1910s New York; and follows Michael Corleone in the 1950s as he attempts to expand the family business into Las Vegas, Hollywood and Cuba",
            "release_date": "1974-12-20",
            "poster_path": "/tHbMIIF51rguMNSastqoQwR0sBs.jpg",
            "popularity": 2.021663,
            "title": "The Godfather: Part II",
            "video": false,
            "vote_average": 8.0,
            "vote_count": 1382
        }, {
            "adult": false,
            "backdrop_path": "/8bxjRFqFztBoXdVEx6q2u66a0s1.jpg",
            "genre_ids": [878, 12],
            "id": 313106,
            "original_language": "en",
            "original_title": "Doctor Who: The Day of the Doctor",
            "overview": "In 2013, something terrible is awakening in London's National Gallery; in 1562, a murderous plot is afoot in Elizabethan England; and somewhere in space an ancient battle reaches its devastating conclusion. All of reality is at stake as the Doctor's own dangerous past comes back to haunt him.",
            "release_date": "2013-11-23",
            "poster_path": "/lQy2QVcacuH55k37K9Ox0gw3YpZ.jpg",
            "popularity": 1.807298,
            "title": "Doctor Who: The Day of the Doctor",
            "video": false,
            "vote_average": 8.0,
            "vote_count": 101
        }],
        "total_pages": 193,
        "total_results": 3857
    }
    return data;
}

function load_tv() {
    var data = {
        "page": 1,
        "results": [{
            "backdrop_path": "/A4IxNKZYkyIF02vK6NIE4W2qTrp.jpg",
            "first_air_date": "2006-10-06",
            "genre_ids": [18, 16, 10765, 10759],
            "id": 31724,
            "original_language": "ja",
            "original_name": "コードギアス 反逆の",
            "overview": "The Empire of Britannia has invaded Japan using giant robot weapons called Knightmare Frames. Japan is now referred to as Area 11, and its people the 11's. A Britannian who was living in Japan at the time, Lelouch, vowed to his Japanese friend Suzaku that he'd destroy Britannia. Years later, Lelouch is in high school, but regularly skips out of school to go play chess and gamble on himself. One day, he stumbles on terrorists 11's who've stolen a military secret and is caught by a member of the Britannian task force sent after them, who is Suzaku. As the rest of the squad arrives, Suzaku is shot for disobeying orders, while the military secret, a young girl, gives Lelouch the power of Geass, which makes anyone obey any order. While Suzaku is secretly made the pilot of Britannia's brand new prototype Knightmare, Lancelot, Lelouch becomes the masked Zero to lead the rebellion to destroy Britannia once and for all.",
            "origin_country": ["JP"],
            "poster_path": "/tOhtLKYZTHv6iJdpINxHeXJdzm8.jpg",
            "popularity": 2.701984,
            "name": "Code Geass: Lelouch of the Rebellion",
            "vote_average": 9.4,
            "vote_count": 6
        }, {
            "backdrop_path": "/lzibeUYh2iZkbG2y8LMnoIavbyC.jpg",
            "first_air_date": "2011-10-02",
            "genre_ids": [12, 16, 35, 80, 99, 10751, 27, 53, 10759],
            "id": 46298,
            "original_language": "ja",
            "original_name": "ハンターｘハンター",
            "overview": "Twelve-year-old Gon Freecss one day discovers that the father he had always been told was dead was alive and well. His Father, Ging, is a Hunter—a member of society's elite with a license to go anywhere or do almost anything. Gon, determined to follow in his father's footsteps, decides to take the Hunter Examination and eventually find his father to prove himself as a Hunter in his own right. But on the way, he learns that there is more to becoming a Hunter than previously thought, and the challenges that he must face are considered the toughest in the world.",
            "origin_country": ["JP"],
            "poster_path": "/l5CLmiz0yPwusw3D10XaQDuSFTm.jpg",
            "popularity": 2.345499,
            "name": "Hunter x Hunter",
            "vote_average": 9.3,
            "vote_count": 5
        }, {
            "backdrop_path": "/55Vuc2uYHUsZzP8rYYUyeowGbJ3.jpg",
            "first_air_date": "2013-10-21",
            "genre_ids": [35],
            "id": 62718,
            "original_language": "en",
            "original_name": "Upstairs",
            "overview": "Joe, Matt, Sarah and Francine are four college students. The girls are roommates downstairs while the boys are roommates... Upstairs. This bunch could not be more different. You'll find out not only their choice of majors, but by their drastically different cultural backgrounds too. It can cause friction to say the least, but hilarity will always ensue. Will opposites attract?",
            "origin_country": ["IT"],
            "poster_path": "/4XFBM8FlA7FidB3ZxMLNeM6KJH1.jpg",
            "popularity": 1.005709,
            "name": "Upstairs",
            "vote_average": 9.2,
            "vote_count": 31
        }, {
            "backdrop_path": "/wlyojNIEbQwWUlA1ekhxiQT3zcF.jpg",
            "first_air_date": "2015-09-24",
            "genre_ids": [878, 14],
            "id": 60858,
            "original_language": "en",
            "original_name": "Heroes Reborn",
            "overview": "The supernatural phenomenon begins again with a fresh crop of inspiring heroes who take on the ultimate struggle between those with extraordinary abilities and those with nefarious motives to hunt and harness their powers. Epic adventures await these newly empowered allies as they cross paths with some of the original characters, unlocking the mysterious fate of the universe and their place within it.",
            "origin_country": ["US"],
            "poster_path": "/9bFo4UeIc1hRAKslrVVDBDEoFtS.jpg",
            "popularity": 12.047287,
            "name": "Heroes Reborn",
            "vote_average": 9.2,
            "vote_count": 12
        }, {
            "backdrop_path": "/y6LnE2qJIZ52V5wkS0VY3NFTM92.jpg",
            "first_air_date": "1940-02-10",
            "genre_ids": [16, 35],
            "id": 3936,
            "original_language": "en",
            "original_name": "Tom and Jerry",
            "overview": "Tom and Jerry is a series of theatrical animated cartoon films created by William Hanna and Joseph Barbera for Metro-Goldwyn-Mayer, centering on a rivalry between a cat and a mouse whose chases include slapstick comedy. Hanna and Barbera ultimately wrote, produced, and directed 114 Tom and Jerry shorts at MGM cartoon studios in Hollywood from 1940 to 1957. The original series is notable for having won seven Academy Awards, tying with Walt Disney's Silly Symphonies as the theatrical animated series with the most Oscars. A longtime television staple, Tom and Jerry has a worldwide audience and has been recognized as one of the most famous and longest-lived rivalries in American cinema.\n\nMGM released an additional 13 entries in 1961 produced by Rembrandt Films led by Gene Deitch in central Europe. Chuck Jones' Sib-Tower 12 Productions produced another 34 entries between 1963–1967, creating a total of 161 theatrical entries.\n\nTom and Jerry resurfaced in made-for-television series produced by Hanna-Barbera Productions and Filmation Studios starting in the 1970s. The feature-length film Tom and Jerry: The Movie was released in 1992, and was followed by their first made-for-television short Tom and Jerry: The Mansion Cat for Boomerang. The most recent Tom and Jerry theatrical short, The Karate Guard, was written and co-directed by Barbera.",
            "origin_country": ["US"],
            "poster_path": "/2Hfse2hCuQiRGannilc4Peh6PwZ.jpg",
            "popularity": 2.549515,
            "name": "Tom and Jerry",
            "vote_average": 8.8,
            "vote_count": 6
        }, {
            "backdrop_path": "/aKz3lXU71wqdslC1IYRC3yHD6yw.jpg",
            "first_air_date": "2011-04-17",
            "genre_ids": [10765, 18],
            "id": 1399,
            "original_language": "en",
            "original_name": "Game of Thrones",
            "overview": "Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits, the Night's Watch, is all that stands between the realms of men and icy horrors beyond.\n\n",
            "origin_country": ["US"],
            "poster_path": "/jIhL6mlT7AblhbHJgEoiBIOUVl1.jpg",
            "popularity": 24.386634,
            "name": "Game of Thrones",
            "vote_average": 8.8,
            "vote_count": 380
        }, {
            "backdrop_path": "/w0LSB0POet7MR91nOQCXTOetia2.jpg",
            "first_air_date": "2004-03-21",
            "genre_ids": [37, 18],
            "id": 1406,
            "original_language": "en",
            "original_name": "Deadwood",
            "overview": "Deadwood is the story of the early days of Deadwood, South Dakota; woven around actual historic events with most of the main characters based on real people. Deadwood starts as a gold mining camp and gradually turns from a lawless wild-west community into an organized wild-west civilized town. The story focuses on the real-life characters Seth Bullock and Al Swearengen.",
            "origin_country": ["US"],
            "poster_path": "/M8HjXeXQy4Ta4MOrCmMHLr8pBl.jpg",
            "popularity": 2.862272,
            "name": "Deadwood",
            "vote_average": 8.8,
            "vote_count": 23
        }, {
            "backdrop_path": "/6u4YG0oNzhFaFJs080ljlpSgpfD.jpg",
            "first_air_date": "2008-01-19",
            "genre_ids": [18],
            "id": 1396,
            "original_language": "en",
            "original_name": "Breaking Bad",
            "overview": "Breaking Bad is an American crime drama television series created and produced by Vince Gilligan. Set and produced in Albuquerque, New Mexico, Breaking Bad is the story of Walter White, a struggling high school chemistry teacher who is diagnosed with inoperable lung cancer at the beginning of the series. He turns to a life of crime, producing and selling methamphetamine, in order to secure his family's financial future before he dies, teaming with his former student, Jesse Pinkman. Heavily serialized, the series is known for positioning its characters in seemingly inextricable corners and has been labeled a contemporary western by its creator.",
            "origin_country": ["US"],
            "poster_path": "/1yeVJox3rjo2jBKrrihIMj7uoS9.jpg",
            "popularity": 11.566455,
            "name": "Breaking Bad",
            "vote_average": 8.7,
            "vote_count": 331
        }, {
            "backdrop_path": "/14gsRCWC3rb2dUiZSht7t2pQNQm.jpg",
            "first_air_date": "1999-01-10",
            "genre_ids": [18],
            "id": 1398,
            "original_language": "en",
            "original_name": "The Sopranos",
            "overview": "The Sopranos is an American television drama created by David Chase. The series revolves around the New Jersey-based Italian-American mobster Tony Soprano and the difficulties he faces as he tries to balance the conflicting requirements of his home life and the criminal organization he heads. Those difficulties are often highlighted through his ongoing professional relationship with psychiatrist Jennifer Melfi. The show features Tony's family members and Mafia associates in prominent roles and story arcs, most notably his wife Carmela and his cousin and protégé Christopher Moltisanti.",
            "origin_country": ["US"],
            "poster_path": "/u0cLcBQITrYqfHsn06fxnQwtqiE.jpg",
            "popularity": 4.127162,
            "name": "The Sopranos",
            "vote_average": 8.7,
            "vote_count": 48
        }, {
            "backdrop_path": "/1LrtAhWPSEetJLjblXvnaYtl7eA.jpg",
            "first_air_date": "2001-09-09",
            "genre_ids": [28, 10752, 18, 10759, 10768],
            "id": 4613,
            "original_language": "en",
            "original_name": "Band of Brothers",
            "overview": "Drawn from interviews with survivors of Easy Company, as well as their journals and letters, Band of Brothers chronicles the experiences of these men from paratrooper training in Georgia through the end of the war. As an elite rifle company parachuting into Normandy early on D-Day morning, participants in the Battle of the Bulge, and witness to the horrors of war, the men of Easy knew extraordinary bravery and extraordinary fear - and became the stuff of legend. Based on Stephen E. Ambrose's acclaimed book of the same name.",
            "origin_country": ["GB", "US"],
            "poster_path": "/bUrt6oeXd04ImEwQjO9oLjRguaA.jpg",
            "popularity": 4.806665,
            "name": "Band of Brothers",
            "vote_average": 8.7,
            "vote_count": 38
        }, {
            "backdrop_path": "/yRIrZTRiyv6bdGI45xGHGTWS1L8.jpg",
            "first_air_date": "1971-01-12",
            "genre_ids": [35],
            "id": 1922,
            "original_language": "en",
            "original_name": "All in the Family",
            "overview": "All in the Family is an American sitcom that was originally broadcast on the CBS television network from January 12, 1971, to April 8, 1979. In September 1979, a new show, Archie Bunker's Place, picked up where All in the Family had ended. That sitcom lasted another four years, ending its run in 1983.\n\nProduced by Norman Lear and Bud Yorkin, the original pilot was entitled Justice for All and was developed for ABC. Tom Bosley, Jack Warden and Jackie Gleason were all considered for the role of Archie Bunker. In fact, CBS wanted to buy the rights to the original British show Till Death Us Do Part and retool it specifically for Gleason, who was under contract to them, but producer Norman Lear beat out CBS for the rights and offered the show to ABC.\n\nCarroll O'Connor and Jean Stapleton played Archie and Edith Justice. Kelly Jean Peters played Gloria and Tim McIntire played her husband, Richard. It was taped in October 1968 in New York City. After screening the first pilot, ABC gave the producers more money to shoot a second pilot entitled Those Were the Days, which was taped in February 1969 in Hollywood. Candice Azzara played Gloria and Chip Oliver played Richard. D'Urville Martin played Lionel Jefferson in both pilots. After ABC turned down the second pilot, CBS developed the third pilot, entitled All in the Family. This pilot had the final cast and was the series' first episode.",
            "origin_country": ["US"],
            "poster_path": "/xEpPEfMuQvTO0EGT70Mh30Vv9nk.jpg",
            "popularity": 2.44019,
            "name": "All in the Family",
            "vote_average": 8.7,
            "vote_count": 5
        }, {
            "backdrop_path": "/qlJB8bkK1JXAQ0m02OYS1ArS6DZ.jpg",
            "first_air_date": "2002-12-20",
            "genre_ids": [878, 18, 12],
            "id": 1437,
            "original_language": "en",
            "original_name": "Firefly",
            "overview": "Firefly is set in the year 2517, after the arrival of humans in a new star system and follows the adventures of the renegade crew of Serenity, a \"Firefly-class\" spaceship. The ensemble cast portrays the nine characters who live on Serenity.",
            "origin_country": ["US"],
            "poster_path": "/mWNadwBZIx8NyEw4smGftYtHHrE.jpg",
            "popularity": 5.051704,
            "name": "Firefly",
            "vote_average": 8.7,
            "vote_count": 102
        }, {
            "backdrop_path": "/137KZSsLYr4iLRngVFpHybr91jJ.jpg",
            "first_air_date": "2014-03-09",
            "genre_ids": [99],
            "id": 58474,
            "original_language": "en",
            "original_name": "Cosmos: A Spacetime Odyssey",
            "overview": "Cosmos: A Spacetime Odyssey invents new modes of scientific storytelling to reveal the grandeur of the universe and re-invent celebrated elements of the original series, including the Cosmic Calendar and the Ship of the Imagination. \n\nUniting scepticism and wonder, and weaving rigorous science with visual, emotional and spiritual elements, it is a transcendent experience – a vision of the cosmos on the grandest scale we know.",
            "origin_country": ["US"],
            "poster_path": "/jViSxrU3NBvmNsQBpf37sPBmBOq.jpg",
            "popularity": 1.866683,
            "name": "Cosmos: A Spacetime Odyssey",
            "vote_average": 8.7,
            "vote_count": 22
        }, {
            "backdrop_path": "/tE2a0hQhHRCNzCUsr94GtQ2BukU.jpg",
            "first_air_date": "1993-09-18",
            "genre_ids": [16, 10765, 35],
            "id": 657,
            "original_language": "en",
            "original_name": "Rocko's Modern Life",
            "overview": "Rocko's Modern Life is an American animated series created by Joe Murray. The show aired for four seasons between 1993 and 1996 on Nickelodeon. Rocko's Modern Life is based around the surreal, parodic adventures of an anthropomorphic, Australian-immigrant wallaby named Rocko, and his new life in the city of O-Town. The show explores his American life as well as the lives of his friends: the gluttonous steer Heffer, the neurotic turtle Filburt, and Rocko's faithful dog, Spunky. The show is laden with adult humor, including double entendres, innuendos, and satirical social commentary.\n\nJoe Murray initially created the title character for an unpublished comic book series in the late 1980s, and later reluctantly pitched the series to Nickelodeon, who were looking for edgier cartoonists for their new Nicktoons block. The network gave the staff a large amount of creative freedom, the writers targeting both children and adults. The show's animation stylistically features crooked architecture. In addition, Murray picked many newcomer voice actors, such as Tom Kenny and Carlos Alazraqui, who have gone on to become very popular. The show was the fourth Nicktoon to premiere. Kenny described the show's impact in an interview, saying, \"Rocko's Modern Life was just one of those shows that were the first break for a lot of people who went on to do other stuff in the business.\"",
            "origin_country": ["US"],
            "poster_path": "/mIflMMmR8dmKK3WqVQDmTXpHvwz.jpg",
            "popularity": 1.77898,
            "name": "Rocko's Modern Life",
            "vote_average": 8.7,
            "vote_count": 6
        }, {
            "backdrop_path": "/2haokMQ2dFQK2z1R9gZrH9qAeqk.jpg",
            "first_air_date": "2014-10-03",
            "genre_ids": [28, 12, 16, 878],
            "id": 60554,
            "original_language": "en",
            "original_name": "Star Wars Rebels",
            "overview": "Set between the events of Star Wars: Episodes III and IV, the story unfolds during a dark time when the evil Galactic Empire is tightening its grip of power on the galaxy. Imperial forces have occupied a remote planet and are ruining the lives of its people. The motley but clever crew of the starship Ghost — cowboy Jedi Kanan, ace pilot Hera, street-smart teenager Ezra, the “muscle” Zeb, warrior firebrand Sabine, and cantankerous old astromech droid Chopper — is among a select few who are brave enough to stand against the Empire. Together, they will face threatening new villains, encounter colorful adversaries, embark on thrilling adventures, and become heroes with the power to ignite a rebellion.",
            "origin_country": ["US"],
            "poster_path": "/dfzbkhKMnkdwiG1AAIJnrc9SDdY.jpg",
            "popularity": 3.065631,
            "name": "Star Wars Rebels",
            "vote_average": 8.7,
            "vote_count": 9
        }, {
            "backdrop_path": "/e25yuYcaLtUQo7GCIAceSr642uZ.jpg",
            "first_air_date": "2010-07-25",
            "genre_ids": [9648, 18, 80],
            "id": 19885,
            "original_language": "en",
            "original_name": "Sherlock",
            "overview": "Sherlock is a British television crime drama that presents a contemporary update of Sir Arthur Conan Doyle's Sherlock Holmes detective stories. Created by Steven Moffat and Mark Gatiss, it stars Benedict Cumberbatch as Sherlock Holmes and Martin Freeman as Doctor John Watson. Six episodes have been produced, the first three of which aired in 2010. Series two aired in 2012, and a third series began production in March 2013. The series has been sold to over 180 territories.",
            "origin_country": ["GB"],
            "poster_path": "/vHXZGe5tz4fcrqki9ZANkJISVKg.jpg",
            "popularity": 4.190394,
            "name": "Sherlock",
            "vote_average": 8.7,
            "vote_count": 138
        }, {
            "backdrop_path": "/smn7CYcuxafow7RaxoKSuArC28R.jpg",
            "first_air_date": "2003-09-11",
            "genre_ids": [35],
            "id": 1554,
            "original_language": "en",
            "original_name": "QI",
            "overview": "QI is a British comedy panel game television quiz show created and co-produced by John Lloyd, hosted by Stephen Fry, and featuring permanent panellist Alan Davies. Most of the questions are extremely obscure, making it unlikely that the correct answer will be given. To compensate, points are awarded not only for right answers, but also for interesting ones, regardless of whether they are right or even relate to the original question. Conversely, points are deducted from a panellist who gives \"answers which are not only wrong, but pathetically obvious,\" typically answers that are generally believed to be true but in fact are misconceptions. Points are also often deducted if an obvious joke answer is given. These answers are known as forfeits, usually indicated by a loud siren, flashing lights, and the incorrect answer being displayed on screen as a form of humiliation. In addition, bonus points are often awarded or deducted for various challenges or incorrect references to a certain thing or place, varying from show to show.\n\nFor its first five series episodes premièred on BBC Four and received their first analogue airing on BBC Two a week later, with syndicated episodes of previous series shown on UKTV G2/Dave. QI has the highest viewing figures for any show on BBC Four and Dave. From series F in 2008 the show moved to BBC One, with extended-length repeats on BBC Two. For series G, the regular show moved to a pre-watershed slot, with the extended edition still shown after the watershed. In March 2011 though, it was announced that the ninth series would see the show return to a post-watershed slot on BBC Two. The eleventh series began on 6 September 2013 and is currently being broadcast on BBC Two.",
            "origin_country": ["GB"],
            "poster_path": "/k0fu4ZRMufUy7aOFOAqaQWD8y43.jpg",
            "popularity": 0.831219,
            "name": "QI",
            "vote_average": 8.6,
            "vote_count": 7
        }, {
            "backdrop_path": "/1XbXbuBHtfxj8a6o6YuEmZ8yofa.jpg",
            "first_air_date": "2008-01-24",
            "genre_ids": [18, 9648],
            "id": 12786,
            "original_language": "en",
            "original_name": "Murdoch Mysteries",
            "overview": "Murdoch Mysteries is a Canadian drama television series aired on both City and CBC Television, featuring Yannick Bisson as William Murdoch, a police detective working in Toronto, Ontario, in the 1890s. The television series is based on the series of novels by Maureen Jennings. The fifth season was announced in May 2011. On September 27, 2011, Rogers Media announced that it would not be continuing the series beyond its fifth season. On November 15, 2011, it was reported that CBC had picked up the show and ordered a sixth season, which premiered on January 7, 2013. On April 2, 2013, CBC renewed the show for a seventh season, with 18 episodes, to start on September 30, 2013.",
            "origin_country": ["CA"],
            "poster_path": "/zORjElk9KSMtbaqWYc5qnYltUs6.jpg",
            "popularity": 1.930211,
            "name": "Murdoch Mysteries",
            "vote_average": 8.6,
            "vote_count": 7
        }, {
            "backdrop_path": "/gCWhn0HqQcxCaw1TDypja7CPXTJ.jpg",
            "first_air_date": "2007-01-07",
            "genre_ids": [80, 9648, 18],
            "id": 32368,
            "original_language": "da",
            "original_name": "Forbrydelsen",
            "overview": "The Killing is a Danish police procedural set in the Copenhagen main police department and revolves around Detective Inspector Sarah Lund and her team, with each season series following a different murder case day-by-day and a one-hour episode covering twenty-four hours of the investigation. The series is noted for its plot twists, season-long storylines, dark tone and for giving equal emphasis to the story of the murdered victim's family alongside the police investigation. It has also been singled out for the photography of its Danish setting, and for the acting ability of its cast.",
            "origin_country": ["DK"],
            "poster_path": "/Al172OkeZmC7dy4PfobC7cFGVOV.jpg",
            "popularity": 2.674592,
            "name": "The Killing",
            "vote_average": 8.6,
            "vote_count": 16
        }, {
            "backdrop_path": "/qWn6tVTvR47o0HuqPoPTgMhLsQv.jpg",
            "first_air_date": "2011-01-09",
            "genre_ids": [16, 35],
            "id": 32726,
            "original_language": "en",
            "original_name": "Bob's Burgers",
            "overview": "Bob's Burgers is an American animated sitcom created by Loren Bouchard for the Fox Broadcasting Company. The series centers on the Belchers – parents Bob and Linda, and their children Tina, Gene, and Louise – who run a hamburger restaurant. The family was conceived by Bouchard after developing Home Movies for UPN Kids.\n\nSince its debut on January 9, 2011, the series has broadcast 45 episodes. While reviews for the first season were mixed, subsequent reviews have been positive. The series premiere, \"Human Flesh\", drew in 9.38 million viewers, making it the highest-rated series premiere of the season and also finished 9th in the ratings for the week it aired. The first season received an average of approximately 5 million viewers, and it ranked 59th in ratings share, tied with 60 Minutes, The Middle, and Outsourced.\n\nOn October 16, 2012, Fox renewed Bob's Burgers for a fourth season consisting of 22 episodes. The series started airing in reruns in syndication on Cartoon Network's late night programming block Adult Swim on June 23, 2013. On September 26, 2013, Fox renewed the series for a fifth season ordering 22 additional episodes.",
            "origin_country": ["US"],
            "poster_path": "/Ao5xQ9siHvT9lO7jBFnmtWCKllL.jpg",
            "popularity": 3.56051,
            "name": "Bob's Burgers",
            "vote_average": 8.6,
            "vote_count": 12
        }],
        "total_pages": 37,
        "total_results": 733
    }
    return data;
}
