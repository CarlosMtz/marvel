export default {
  title: 'Footer',
};


export const FooterLegal = () => `
<div class="c-footer__legal">
    <nav class="c-footer__legal__container" aria-label="Legal footer navigtion">
        <a class="c-footer__legal__link" target="_self" href="#">Terms of Use</a>
        <a class="c-footer__legal__link" target="_self" href="#">Privacy Policy</a>
        <a class="c-footer__legal__link" target="_self" href="#">Your California Privacy Rights</a>
        <a class="c-footer__legal__link" target="_self" href="#">Do Not Sell My Info</a>
        <a class="c-footer__legal__link" target="_self" href="#">Children's Online Privacy Policy</a>
        <a class="c-footer__legal__link" target="_self" href="#">License Agreement</a>
        <a class="c-footer__legal__link" target="_self" href="#">Interest-Based Ads</a>
        <a class="c-footer__legal__link" target="_self" href="#">Marvel Insider Terms</a>

        <span class="c-footer__legal__text">©2020 MARVEL</span>
    </nav>
</div>
`

export const FooterLinks = () => `
    <footer class="c-footer">
        <div class="c-footer__container">
            <section class="c-footer__content">
                <div class="c-footer__links">
                    <a class="c-footer__logo" href="/">
                        <span class="c-footer__logo--svg" aria-hidden="true">
                            <svg viewBox="0 0 36 52" xmlns="http://www.w3.org/2000/svg">
                                <rect fill="#EC1D24" width="100%" height="100%"></rect>
                                <path fill="#FEFEFE"
                                    d="M31.5 48V4H21.291l-3.64 22.735L14.102 4H4v44h8V26.792L15.577 48h4.229l3.568-21.208V48z">
                                </path>
                            </svg>
                        </span>
                    </a>
                    <nav class="c-footer__primary-links" aria-label="Primary footer navigtion">
                        <ul>
                            <li class="c-footer__link"><a href="https://www.marvel.com/corporate/about">About Marvel</a>
                            </li>
                            <li class="c-footer__link"><a href="https://www.marvel.com/help">Help/FAQs</a></li>
                            <li class="c-footer__link"><a href="https://jobs.disneycareers.com/search-jobs?orgIds=391-1635-24091&amp;ascf=[{%22key%22:%22custom_fields%252EIndustryCustomField%22,%22value%22:%22Marvel%20Entertainment%22}]">Careers</a></li>
                            <li class="c-footer__link"><a href="https://www.marvel.com/corporate/interns">Internships</a></li>
                        </ul>
                    </nav>
                    <nav class="c-footer__secondary-links" aria-label="Secondary footer navigtion">
                        <ul>
                            <li class="c-footer__link"><a href="https://www.marvel.com/corporate/advertising">Advertising</a></li>
                            <li class="c-footer__link"><a href="https://www.marvelhq.com">Marvelhq.com</a></li>
                            <li class="c-footer__link"><a href="https://www.marvel.com/redeem">Redeem Digital Comics</a></li>
                        </ul>
                    </nav>
                </div>

                <nav class="c-footer__promo-links" aria-label="Promotional footer navigtion">
                    <div class="c-footer__promotion">
                        <a class="c-footer__promotion-link" href="https://www.marvel.com/insider?start_location=footer">
                            <div class="c-footer__promotion-image-wrapper">
                                <figure class="img__wrapper ">
                                    <img src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/marvel_insider-topnav-logo-large2x.png" srcset="https://terrigen-cdn-dev.marvel.com/content/prod/1x/marvel_insider-topnav-logo-large2x.png" alt="Marvel Insider Logo" class="c-footer__promotion-image">
                                </figure>
                            </div>
                            <div class="c-footer__promotion-info">
                                <h4 class="c-footer__promotion-title">Marvel Insider</h4>
                                <p class="c-footer__promotion-description">Get Rewarded for Being a Marvel Fan</p>
                            </div>
                        </a>
                    </div>
                    <div class="c-footer__promotion">
                        <a class="c-footer__promotion-link" href="https://www.marvel.com/creditcard?siteCode=MCMOFL&amp;Dcom=MCMOFL&amp;cid=MMCMDC&amp;clientCode=MARVEL">
                            <div class="c-footer__promotion-image-wrapper">
                                <figure class="img__wrapper ">
                                    <img src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/mastercard-crop_0-footer-v3.png" srcset="https://terrigen-cdn-dev.marvel.com/content/prod/1x/mastercard-crop_0-footer-v3.png" alt="Marvel Mastercard" class="c-footer__promotion-image">
                                </figure>
                            </div>
                            <div class="c-footer__promotion-info">
                                <h4 class="c-footer__promotion-title">Marvel Mastercard®</h4>
                                <p class="c-footer__promotion-description">6 Card Designs—Unlimited Cashback</p>
                            </div>
                        </a>
                    </div>
                </nav>

                <nav class="c-footer__follow" aria-label="Social footer navigtion">
                    <h4 class="c-footer__follow__title">Follow Marvel</h4>
                    <ul class="social-links c-footer__social">
                        <li class="c-footer__social__img">
                            <a target="_blank" href="http://facebook.com/marvel" aria-label="follow us on Facebook, opens a new window" class="">
                                <span class="c-footer__social__icon icon--facebook " aria-hidden="true">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path fill-rule="evenodd" d="M9.426 17.647H.974A.974.974 0 0 1 0 16.673V.974C0 .436.436 0 .974 0h15.7c.537 0 .973.436.973.974v15.699a.974.974 0 0 1-.974.974h-4.497v-6.834h2.294l.343-2.663h-2.637v-1.7c0-.772.214-1.297 1.32-1.297h1.41V2.77a18.853 18.853 0 0 0-2.055-.105c-2.033 0-3.425 1.241-3.425 3.52V8.15h-2.3v2.663h2.3v6.834z"></path></svg>
                                </span>
                            </a>
                        </li>
                        <li class="c-footer__social__img">
                            <a target="_blank" href="http://twitter.com/marvel" aria-label="follow us on Twitter, opens a new window" class="">
                                <span class="c-footer__social__icon icon--twitter" aria-hidden="true">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15"><path fill-rule="evenodd" d="M17.647 1.74a7.072 7.072 0 0 1-2.079.585A3.704 3.704 0 0 0 17.16.272a7.13 7.13 0 0 1-2.3.9A3.57 3.57 0 0 0 12.217 0C10.22 0 8.598 1.662 8.598 3.712c0 .291.031.574.093.846-3.009-.155-5.676-1.632-7.463-3.88a3.78 3.78 0 0 0-.49 1.868c0 1.287.64 2.424 1.611 3.09a3.555 3.555 0 0 1-1.64-.463v.045c0 1.8 1.248 3.3 2.905 3.64-.304.088-.624.131-.954.131-.233 0-.461-.022-.682-.066.461 1.475 1.798 2.549 3.382 2.577A7.149 7.149 0 0 1 0 13.04a10.08 10.08 0 0 0 5.55 1.666c6.66 0 10.3-5.656 10.3-10.562 0-.162-.002-.323-.008-.482a7.43 7.43 0 0 0 1.805-1.921"></path></svg>
                                </span>
                            </a>
                        </li>
                        <li class="c-footer__social__img">
                            <a target="_blank" href="http://instagram.com/marvel" aria-label="follow us on Instagram, opens a new window" class="">
                                <span class="c-footer__social__icon" aria-hidden="true">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path fill-rule="evenodd" d="M15.441 15.993H2.206a.552.552 0 0 1-.552-.552V7.17H3.86c-.287.414-.384 1.185-.384 1.675 0 2.953 2.408 5.356 5.368 5.356 2.96 0 5.368-2.403 5.368-5.356 0-.49-.069-1.25-.425-1.675h2.206v8.272a.552.552 0 0 1-.552.552M8.844 5.458a3.39 3.39 0 0 1 3.394 3.386 3.39 3.39 0 0 1-3.394 3.386A3.39 3.39 0 0 1 5.45 8.844a3.39 3.39 0 0 1 3.393-3.386m4.391-3.252h1.655c.304 0 .551.247.551.551v1.655a.552.552 0 0 1-.551.551h-1.655a.552.552 0 0 1-.551-.551V2.757c0-.304.247-.551.551-.551M15.55 0H2.098A2.095 2.095 0 0 0 0 2.093v13.461c0 1.156.94 2.093 2.098 2.093h13.451a2.095 2.095 0 0 0 2.098-2.093V2.093C17.647.937 16.707 0 15.549 0"></path></svg>
                                </span>
                            </a>
                        </li>
                        <li class="c-footer__social__img">
                            <a target="_blank" href="http://marvelentertainment.tumblr.com" aria-label="follow us on Tumblr, opens a new window" class="">
                                <span class="c-footer__social__icon" aria-hidden="true">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="18" viewBox="0 0 11 18"><path fill-rule="evenodd" d="M8.535 14.5c-1.532.038-1.83-1-1.842-1.751V7.217h3.844v-2.69h-3.83V0H3.904a.147.147 0 0 0-.138.133C3.602 1.518 2.904 3.949 0 4.922v2.295h1.937v5.806c0 1.988 1.58 4.812 5.749 4.745 1.407-.022 2.969-.569 3.314-1.04l-.92-2.535c-.356.158-1.037.295-1.545.307z"></path></svg>
                                </span>
                            </a>
                        </li>
                        <li class="c-footer__social__img">
                            <a target="_blank" href="http://youtube.com/marvel" aria-label="follow us on Youtube, opens a new window" class="">
                                <span class="c-footer__social__icon" aria-hidden="true">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="15" viewBox="0 0 21 15"><path fill-rule="evenodd" d="M8.109 9.73l-.001-5.679 5.522 2.85-5.521 2.83zm12.124-6.663s-.2-1.393-.812-2.006c-.778-.806-1.649-.81-2.048-.856C14.513 0 10.223 0 10.223 0h-.009s-4.29 0-7.15.205c-.4.046-1.27.05-2.048.856-.612.613-.812 2.006-.812 2.006S0 4.703 0 6.338v1.534c0 1.636.204 3.272.204 3.272s.2 1.392.812 2.006c.778.805 1.8.78 2.254.864 1.635.155 6.949.203 6.949.203s4.294-.006 7.154-.21c.4-.048 1.27-.052 2.048-.857.612-.614.812-2.006.812-2.006s.204-1.636.204-3.272V6.338c0-1.635-.204-3.271-.204-3.271z"></path></svg>
                                </span>
                            </a>
                        </li>

                        <li class="c-footer__social__img">
                            <a target="_blank" href="https://www.snapchat.com/add/marvelhq" aria-label="follow us on Snapchat, opens a new window" class="">
                                <span class="c-footer__social__icon" aria-hidden="true">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17"><path fill-rule="evenodd" d="M9.155.003C8.74.003 7.91.057 7.02.421c-.51.207-.968.488-1.363.834-.47.412-.853.92-1.138 1.51-.418.865-.319 2.322-.24 3.492.01.127.018.258.027.385a.784.784 0 0 1-.307.054c-.236 0-.516-.07-.833-.207a.798.798 0 0 0-.317-.06c-.188 0-.387.051-.56.145-.216.117-.356.283-.394.468-.025.121-.024.362.266.607.16.134.393.258.696.369.079.028.173.056.273.085.346.102.87.255 1.006.552.07.15.04.348-.088.587a5.67 5.67 0 0 1-.95 1.368c-.347.374-.73.686-1.136.928a4.386 4.386 0 0 1-1.594.575c-.221.033-.379.215-.366.421a.5.5 0 0 0 .045.176c.09.194.297.358.633.502.411.176 1.026.325 1.827.44.04.072.083.25.112.373.03.13.062.264.107.406.05.153.176.337.502.337.123 0 .265-.025.43-.055.24-.043.569-.103.98-.103.227 0 .463.019.7.055.459.07.853.328 1.31.626.669.436 1.425.93 2.582.93.031 0 .063 0 .094-.003.038.002.085.003.135.003 1.157 0 1.913-.494 2.581-.93.458-.299.852-.556 1.31-.626.238-.036.473-.055.701-.055.393 0 .703.046.98.096.182.033.322.049.43.049.26 0 .435-.12.502-.332.044-.139.076-.27.107-.402.027-.114.07-.298.111-.37.802-.116 1.417-.264 1.828-.44.335-.144.542-.308.632-.5a.485.485 0 0 0 .046-.177c.013-.206-.145-.388-.366-.422-2.498-.38-3.624-2.75-3.67-2.85-.138-.26-.167-.457-.098-.608.136-.296.66-.45 1.006-.551.1-.03.195-.057.273-.086.341-.124.585-.259.746-.412.192-.182.229-.357.227-.472-.006-.277-.236-.523-.6-.643a1.151 1.151 0 0 0-.407-.072.976.976 0 0 0-.378.071 2.267 2.267 0 0 1-.779.205.753.753 0 0 1-.258-.052l.023-.335.003-.05c.08-1.17.18-2.628-.238-3.493a4.731 4.731 0 0 0-1.144-1.515A4.822 4.822 0 0 0 11.66.415 5.836 5.836 0 0 0 9.523 0l-.368.003z"></path></svg>
                                </span>
                            </a>
                        </li>
                        <li class="c-footer__social__img">
                            <a target="_blank" href="https://www.pinterest.com/marvelofficial" aria-label="follow us on Pinterest, opens a new window" class="">
                                <span class="c-footer__social__icon" aria-hidden="true">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16"><path fill-rule="evenodd" d="M0 8c0 3.275 2.216 6.09 5.388 7.327-.025-.558-.004-1.23.156-1.837l1.158-4.359s-.287-.51-.287-1.266c0-1.185.774-2.07 1.736-2.07.818 0 1.214.546 1.214 1.2 0 .732-.525 1.826-.795 2.84-.226.849.478 1.54 1.42 1.54 1.705 0 2.854-1.946 2.854-4.253 0-1.753-1.329-3.065-3.745-3.065-2.73 0-4.43 1.809-4.43 3.83 0 .698.23 1.189.592 1.569.167.176.19.245.13.447-.043.146-.142.501-.184.641-.06.203-.244.276-.45.2-1.258-.456-1.843-1.68-1.843-3.056 0-2.272 2.156-4.998 6.432-4.998 3.436 0 5.698 2.212 5.698 4.583 0 3.139-1.962 5.483-4.857 5.483-.97 0-1.885-.466-2.198-.996 0 0-.523 1.843-.633 2.198-.19.617-.564 1.234-.906 1.714.81.212 1.665.328 2.55.328 4.97 0 9-3.582 9-8s-4.03-8-9-8-9 3.582-9 8z"></path></svg>
                                </span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </section>
        </div>
    </footer>
`