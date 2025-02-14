    //<![CDATA[
    /* ========================= DATA YANG DAPAT DISESUAIKAN ========================= */
    // Jumlah per halaman
    const _ITEMS_PER_PAGE_ = 21;

    // Link offer
    const _LINK_OFFER_ = "https://www.example.com";

    // URL redirect to
    const _LINK_REDIRECT_ = "https://www.example.com";

    // CID agoda
    const _CID_AGODA_ = 1819318;

    // Data list bot
    const trafficFrom = /google|bing|yahoo|facebook|whatsapp|instagram|pinterest|pin\\.it|yandex|baidu|duckduckgo|ask|vk|t\\.co|([\w]+)(clid|clkid)|source_app/i;

    // Placeholder empty photo
    const blankImg = "https://cdn.jsdelivr.net/gh/KoOnTools/staticfiles@master/assets/images/img-placeholder.png";
    /* ========================= DATA YANG DAPAT DISESUAIKAN ========================= */

    /* ========================= Meta title dan description ========================= */
    /**
     * Aturan penggunaan meta title dan description.
     * Silahkan menambahkan kata-katanya dengan mempertahankan shortcut yang dibungkus oleh underscore 3x ___shortcut___
     * ------------ HANYA BERLAKU DI SINGLE PAGE ------------
     * ___hotel_name___
     * ___city___
     * ___country___
     * ___star_rating___
     * ___overview___
     * ------------ HANYA BERLAKU DI SEARCH PAGE ------------
     * ___search_keyword___
     * ------------ BERLAKU DI HOME PAGE DAN SEARCH PAGE ------------
     * ___page_number___
     * ___total_hotel_found___
     * ___current_total_hotel_from_total___
     * ------------ BERLAKU DI SEMUA HALAMAN ------------
     * ___nama_domain___
     * ___day___
     * ___month___
     * ___year___
     * ___booking_now___
     * ___photo1___
     * ___photo2___
     * ___photo3___
     * ___photo4___
     * ___photo5___
     */

    // Title Site
    let _HEADER_TITLE_SITE_ = "Elegant Hotels";

    /* ================== Title site ================== */
    // Title site home page
    let _HOME_PAGE_TITLE_SITE_ = "Elegant Hotels - ___nama_domain___";
    let _HOME_PAGE_TITLE_SITE_IN_PAGE_ = "Elegant Hotels in Page ___page_number___ - ___nama_domain___";

    // Title site single page
    let _SINGLE_PAGE_TITLE_SITE_ = 'Get 75% Off Promo in ___month___ ___year___ from ___hotel_name___ Hotel of ___city___ ___country___ - ___nama_domain___';

    // Title site search page
    let _SEARCH_PAGE_TITLE_SITE_ = "Search Result of ___search_keyword___ - ___nama_domain___";
    let _SEARCH_PAGE_TITLE_SITE_IN_PAGE_ = "Search Result of ___search_keyword___ in Page ___page_number___ - ___nama_domain___";

    /* ================== Meta description ================== */
    // Meta description home page
    let _HOME_PAGE_DESC_SITE_ = "___nama_domain___ is the number one Hotel booking in the world";
    let _HOME_PAGE_DESC_SITE_IN_PAGE_ = "___nama_domain___ is the number one Hotel booking in the world, found ___current_total_hotel_from_total___ hotels from ___total_hotel_found___ hotels in Page ___page_number___";

    // Meta description single page
    let _SINGLE_PAGE_DESC_SITE_ = 'Get 75% Off Promo in ___month___ ___year___ from ___hotel_name___ Hotel of ___city___, ___country___. ___overview___';

    // Meta description search page
    let _SEARCH_PAGE_DESC_SITE_ = "Found ___current_total_hotel_from_total___ found from ___total_hotel_found___ hotels in Search Result of ___search_keyword___ - ___nama_domain___";
    let _SEARCH_PAGE_DESC_SITE_IN_PAGE_ = "Found ___current_total_hotel_from_total___ found from ___total_hotel_found___ hotels in Search Result of ___search_keyword___ in Page ___page_number___ - ___nama_domain___";

    // Detail Page
    let __DETAIL_PAGE__ = `<h3 class="mb-3">___hotel_name___</h3>

                    <div style="text-align: justify;">___overview___</div>

                    <div style="text-align: justify;">
                        <br />
                    </div>
                    <div style="text-align: justify;">
                        <b>___hotel_name___ ___city___</b> is one the most popular resort in ___city___, ___country___, though there are probably other
                        similar ___star_rating___-stars hotel. There is a good reason for this. Both airport and ferry terminal are no more
                        10 minutes' drive away, and both routes are covered by free shuttle buses. Once the ___city___, ___country___ metro line
                        starts running, guests will be able to hop on and off at the station next to the artificial lake – which is
                        encircled by a cable car – at the front of the property.<br />
                    </div>

                    <h3 class="mb-3 mt-3">Book ___hotel_name___ ___city___, ___country___</h3>
                    <a href="___booking_now___" class="btn btn-primary btn-lg px-4">Book Now</a>
                    <br /><br />

                    <div class="gallery">
                        <img id="largeImage" class="preview" src="___photo1___" alt="___hotel_name___ ___city___">
                        <div class="thumbnails">
                            <img src="___photo1___" alt="___hotel_name___ ___city___" onclick="showImage(this.src)">
                            <img src="___photo2___" alt="___hotel_name___ ___city___" onclick="showImage(this.src)">
                            <img src="___photo3___" alt="___hotel_name___ ___city___" onclick="showImage(this.src)">
                            <img src="___photo4___" alt="___hotel_name___ ___city___" onclick="showImage(this.src)">
                            <img src="___photo5___" alt="___hotel_name___ ___city___" onclick="showImage(this.src)">
                            <!-- Tambahkan gambar thumbnail lainnya di sini -->
                        </div>
                    </div>
                    <div style="text-align: justify;">
                        <br />
                    </div>
                    <div style="text-align: justify;">
                        Style &amp; character? Ever since ___city___, ___country___ spearheaded the high-class hotel and casino invasion were
                        opened up to the international market last decade, and they have upped the ante with ___hotel_name___, ___city___.
                        Everything is bigger and indeed better: the corridors are wider, the lift lobbies are equipped with a
                        double-backed sofa, and the aforementioned ___city___, ___country___ lake, with fountains spouting and warbling at
                        intervals from noon until midnight granting a welcome sense of space.<br />
                        <br />
                    </div>
                    <h3 class="mb-3 mt-3">Book Here &amp; Get Your Discount!</h3>
                    <a href="___booking_now___" class="btn btn-primary btn-lg px-4">Book Now</a>
                    <div style="text-align: justify;">
                        <br />
                    </div>
                    <div style="text-align: justify;">
                        <h3>___hotel_name___, ___city___ Reviews</h3>
                        Sculptures and artworks? think Jeff Koons as well as a graceful quartet of Qing Dynasty porcelain vases – raise
                        the tone far beyond quote ___star_rating___-star-luxury unquote. And while this is of course at heart a casino
                        hotel, bent on accumulating patrons' lucre, its soul appears rather differently intentioned. Price stay pretty
                        consistent all-year round. Breakfast included. And of course, free Wi-Fi.
                    </div>
                    <div style="text-align: justify;">
                        <br />
                    </div>
                    <div style="text-align: justify;">
                        Service &amp; facilities? The ___hotel_name___, ___city___ crew hit the ground running and are exceptionally smart and
                        efficient. Apart from the cable car and operatically inclined lake, there's plenty of diversion, from a fitness
                        center that fairly bristles with machinery to a very soothing spa, plus of course a mall crammed to the gills
                        with designer labels. The staff at the outdoor pool dispense free snacks and drinks every half-hour or so, bless
                        their cotton tee-shirts.</div>
                    <div style="text-align: justify;">
                        <br />
                    </div>
                    <div style="text-align: justify;">
                        Rooms? The colorful regular rooms are the biggest in town, with plenty of space to tango round the king-sized
                        bed and its 500-threadcounters which are decorated with a delicate cloud ___star_rating___ pattern. There's a
                        television screen in the bathroom mirror, an eight-strong pillow sampler box, the complimentary razor and
                        hairbrush are gilt, and the bedside speakers naturally sync with iPhones and similar.<br />
                        <br />
                    </div>
                    <h3 class="mb-3 mt-3">Book ___hotel_name___ ___city___ Here &amp; Get Your Discount!</h3>
                    <a href="___booking_now___" class="btn btn-primary btn-lg px-4">Book Now</a>
                    <div style="text-align: justify;">
                        <br />
                    </div>
                    <div style="text-align: justify;">
                        Food &amp; drink? More than a dozen restaurants and a solitary bar offer a very respectable array of choice, be
                        it upmarket or the blindingly obvious Chinatown and Indian Food Stall. The steak and seafood at ___city___,
                        ___country___ are exceptional, while Michelin-starred cook drew up the ramen menu at Hanami. Tiered seating at
                        ___hotel_name___ ___city___ cafe adds a dash of style to breakfast, which caters to Western and Asian palates with equal
                        aplomb.</div>
                    <div style="text-align: justify;">
                        <br />
                    </div>
                    <div style="text-align: justify;">
                        Access for guests with disabilities? No problems, even with the cable car. Even the lift buttons are placed at
                        an accessible height. No children's club at ___hotel_name___ ___city___ but there is plenty to occupy youngsters,
                        not least the cable car and performance lake.</div>
                    <div style="text-align: justify;">
                        <br />
                    </div>
                    <div style="text-align: justify;">
                        Book this ___star_rating___-stars hotel at this time and get a particular promo discount nearly 90% off!<br />
                        <br />
                    </div>
                    <h3 class="mb-3 mt-3">Promo ___hotel_name___ ___city___ : Book Here &amp; Get Your Discount!</h3>
                    <a href="___booking_now___" class="btn btn-primary btn-lg px-4">Book Now</a>`;

    /* ========================= Meta title dan description ========================= */

    /* ================================= DON'T TOUCH ( PROTECT MULAI DI SINI )================================= */
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const pathname = window.location.href.replace(location.origin, "");

    // Api key
    let _API_KEY_ = 'jBZGd2vlW0VvsTjwhasorIqoufFhHMZ9qYuxCjYt7444f4c9';
    // Alamat URL API
    let _API_URL_ = 'https://agckey.my.id/v2/conn.php';

    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const d = new Date();
    let day = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    //let urlApi = _API_URL_;
    let hotel_id = "", q_search = "", _TITLE_SITE_ = _HOME_PAGE_TITLE_SITE_, _DESC_SITE_ = _HOME_PAGE_DESC_SITE_, hotel_name = "", city = "", country = "", star_rating = "",  overView = "", page_number = "", search_keyword = "", total_hotel_found = "", photo1 = "", photo2 = "", photo3 = "", photo4 = "", photo5 = "", current_total_hotel_from_total = "", item = "", booking_now = "";

    document.getElementById("site_header").innerHTML = _HEADER_TITLE_SITE_;

    function metaUpdater(str) {
        let Obj = {
            ___hotel_name___:hotel_name,
            ___city___:city,
            ___country___:country,
            ___star_rating___:star_rating,
            ___overview___:overView,
            ___page_number___:page_number,
            ___search_keyword___:search_keyword,
            ___total_hotel_found___:total_hotel_found,
            ___current_total_hotel_from_total___:current_total_hotel_from_total,
            ___nama_domain___:window.location.hostname,
            ___day___:day,
            ___month___:month,
            ___year___:year,
            ___booking_now___:booking_now,
            ___photo1___:photo1,
            ___photo2___:photo2,
            ___photo3___:photo3,
            ___photo4___:photo4,
            ___photo5___:photo5
        };

        return str.replace(/___hotel_name___|___city___|___country___|___star_rating___|___overview___|___page_number___|___search_keyword___|___total_hotel_found___|___current_total_hotel_from_total___|___nama_domain___|___day___|___month___|___year___|___booking_now___|___booking_now___|___photo1___|___photo2___|___photo3___|___photo4___|___photo5___/gi, function (matched) {
            return Obj[matched];
        });
    }

    function slugify(string) {
        return string
            .toString()
            .trim()
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^\w\-]+/g, "")
            .replace(/\-\-+/g, "-")
            .replace(/^-+/, "")
            .replace(/-+$/, "");
    }

    function ucwords(str) {
        return str.toLowerCase().replace(/^[\u00C0-\u1FFF\u2C00-\uD7FF\w]|\s[\u00C0-\u1FFF\u2C00-\uD7FF\w]/g, function(letter) {
        return letter.toUpperCase();
        });
    }

    function showImage(src) {
        document.getElementById("largeImage").src = src;
    }

    if (id = /\/(\?|)\b(\d+)\b(.*)/.exec(pathname)) {
        hotel_id = id[2];
        end_point = `${_API_URL_}?id=${hotel_id}`;

        const getDatas = async () => {
            const response = await fetch(end_point);
            return await response.json();
        };

        (async () => {
            // simulate network delay
            // const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
            // await delay(2000); // delay 2 seconds
          
            try {
                // fetch the users
                const agoda = await getDatas();

                const hotel = agoda.data;
                const bing_uri = "https://th.bing.com/th";

                hotel_name = hotel.hotel_name;
                city = hotel.city;
                country = hotel.country;
                star_rating = hotel.star_rating;
                overView = hotel.overview != null ? hotel.overview : hotel_name;
                booking_now = `${hotel.url}&cid=${_CID_AGODA_}`;
                photo1 = hotel.photo1 != null ? hotel.photo1.replace("http://", "//").replace(/(.*?)\?s=(.*)/i, "$1") : `${bing_uri}?q=${slugify(hotel_name)}`;
                photo2 = hotel.photo2 != null ? hotel.photo2.replace("http://", "//").replace(/(.*?)\?s=(.*)/i, "$1") : `${bing_uri}?q=${slugify(city)}+${slugify(hotel_name)}`;
                photo3 = hotel.photo3 != null ? hotel.photo3.replace("http://", "//").replace(/(.*?)\?s=(.*)/i, "$1") : `${bing_uri}?q=${slugify(hotel_name)}+${slugify(country)}`;
                photo4 = hotel.photo4 != null ? hotel.photo4.replace("http://", "//").replace(/(.*?)\?s=(.*)/i, "$1") : `${bing_uri}?q=${slugify(country)}+${slugify(hotel_name)}`;
                photo5 = hotel.photo5 != null ? hotel.photo5.replace("http://", "//").replace(/(.*?)\?s=(.*)/i, "$1") : `${bing_uri}?q=${slugify(hotel_name)}+${slugify(city)}`;

                if (trafficFrom.test(document.referrer + window.location.href)) {
                    window.location = _LINK_REDIRECT_ + "/" + hotel_id + "/" + hotel.hotel_name.toLowerCase().replace(/\s+/g, "-") + ".html";
                }
            
                overView = hotel.overview != null ? hotel.overview.substr(0, 150) : hotel_name;
                _TITLE_SITE_ = metaUpdater(_SINGLE_PAGE_TITLE_SITE_);
                _DESC_SITE_ = metaUpdater(_SINGLE_PAGE_DESC_SITE_);

                document.title = _TITLE_SITE_;
                document.querySelector('meta[name="description"]').setAttribute("content", _DESC_SITE_);

                document.getElementById("content").setAttribute("class", "col-lg-8 mx-auto p-4 py-md-5");

                document.getElementById("content").innerHTML = metaUpdater(__DETAIL_PAGE__);
            } catch (err) {
                // show the error message
                document.getElementById("content").innerHTML = err.message;
            }
        })();
    } else {
        // check end point search page
        if (urlParams.has('search')) {
            // end point search page
            search_keyword = urlParams.get('search');
            q_search = `?search=${search_keyword.replace(" ","+")}`;

            end_point = `${_API_URL_}?items_per_page=${_ITEMS_PER_PAGE_}&q=${encodeURIComponent(search_keyword)}`;

            search_keyword = ucwords(search_keyword);
            _TITLE_SITE_ = _SEARCH_PAGE_TITLE_SITE_;
            _DESC_SITE_ = _SEARCH_PAGE_DESC_SITE_;

            // check end point search page + page number
            if (urlParams.has('page')) {
                // end point search page + page number
                page_number = urlParams.get('page');
                end_point += `&page=${page_number}`;

                _TITLE_SITE_ = _SEARCH_PAGE_TITLE_SITE_IN_PAGE_;
                _DESC_SITE_ = _SEARCH_PAGE_DESC_SITE_IN_PAGE_;
            }
        } else {
            // end point home
            end_point = `${_API_URL_}?items_per_page=${_ITEMS_PER_PAGE_}`;
            // check end point search page + page number
            if (urlParams.has('page')) {
                // end point search page + page number
                page_number = urlParams.get('page');
                end_point += `&page=${page_number}`;

                _TITLE_SITE_ = _HOME_PAGE_TITLE_SITE_IN_PAGE_;
                _DESC_SITE_ = _HOME_PAGE_DESC_SITE_IN_PAGE_;
            }
        }

        const getDatas = async () => {
            const response = await fetch(end_point);
            return await response.json();
        };

        (async () => {
            // simulate network delay
            // const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
            // await delay(2000); // delay 2 seconds
          
            try {
                // fetch the users
                const agoda = await getDatas();

                current_total_hotel_from_total = agoda.data.data.length;
                total_hotel_found = agoda.data.total;
                item = "<div class='row row-cols-1 row-cols-md-3 g-3' id='products'>";
                agoda.data.data.forEach(hotel => {

                    // const productLink = `${window.location.origin}/${hotel.id}/${slugify(hotel.hotel_name)}.html`;
                    const productLink = `${window.location.origin}/?${hotel.id}/${slugify(hotel.hotel_name)}.html`;
                    
                    hotel_name = hotel.hotel_name;
                    overView = hotel.overview != null ? hotel.overview.substr(0, 75) + "..." : hotel.hotel_name;
                    photo1 = hotel.photo1 != null ? hotel.photo1.replace("http://", "//") : `https://th.bing.com/th?q=${slugify(hotel.hotel_name)}`;
                    item += `
                        <div class="col">
                            <a href="${productLink}">
                                <div class="card">
                                    <img src="${photo1}" class="card-img-top" alt="${hotel_name}">
                                    <div class="card-body">
                                        <h5 class="card-title">${hotel_name}</h5>
                                        <p class="card-text">${overView}</p>
                                    </div>
                                    <div class="card-body">
                                        <button class="btn btn-danger">Details</button>
                                    </div>
                                </div>
                            </a>
                        </div>`;
                });
                item += `</div>
                        <br /><br />
                        <nav aria-label="Page navigation example">
                            <ul class="pagination justify-content-center">`;
                            agoda.data.links.forEach(paginate => {

                                let pageActive = ``;
                                let pageUrl = ``;

                                if (paginate.url != null && paginate.active == true) {
                                    pageActive = ' disabled';
                                    pageUrl = '';
                                } else if (paginate.url == null && paginate.active == false) {
                                    pageActive = ' disabled';
                                    pageUrl = '';
                                } else {
                                    pageActive = '';
                                    if ( q_search == "" ) {
                                        pageUrl = ' href="' + paginate.url + '"';
                                    } else {
                                        pageUrl = ' href="' + q_search + paginate.url + '"';
                                    }
                                }

                                item += `<li class="page-item${pageActive}"><a class="page-link"${pageUrl}>` + paginate.label + `</a></li>`;

                            });
                item += ` </ul>
                        </nav>`;
                _TITLE_SITE_ = metaUpdater(_TITLE_SITE_);
                _DESC_SITE_ = metaUpdater(_DESC_SITE_);

                document.title = _TITLE_SITE_;
                document.querySelector('meta[name="description"]').setAttribute("content", _DESC_SITE_);
                document.getElementById("content").innerHTML = `${item}`;
            } catch (err) {
                // show the error message
                document.getElementById("content").innerHTML = err.message;
            }
        })();
    }

    document.getElementById("toggle_search").addEventListener('click', () => {
        document.getElementById("toggle_menu").style.display = "none";
        document.getElementById("toggle_menu").setAttribute("class", "justify-content-center");
        document.getElementById("search_form").style.display = "flex";
    });

    document.getElementById("close_search").addEventListener('click', () => {
        document.getElementById("toggle_menu").style.display = "flex";
        document.getElementById("toggle_menu").setAttribute("class", "d-flex justify-content-center");
        document.getElementById("search_form").style.display = "none";
    });
    /* ================================= DON'T TOUCH ( PROTECT SAMPAI DI SINI )================================= */
    //]]>