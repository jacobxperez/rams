import {el} from './rams.js';

function carousel(
    carouselSelector = '[data-carousel]',
    intervalTime = 5000,
    lazyLoadThreshold = 2
) {
    const carousel = document.querySelector(carouselSelector);
    if (!carousel) {
        throw new Error('Carousel element not found in the DOM');
    }
    const slides = carousel.querySelectorAll('[data-slide]');
    const controls =
        carousel.querySelector('[data-controls]') ?? createControls();
    const tabs = Array.from(controls.querySelectorAll('[data-tab]'));
    const button = document.createElement('button');
    let time = intervalTime;
    let currentIndex = 0;
    let indicators = false;

    // Initialization methods
    async function initialize() {
        await preloadImages();
        cycleSlides();
        controls.addEventListener('click', handleControls.bind(this));
        tabs.forEach((tab, index) => el(tab).setData('index', index));
    }

    function createControls() {
        const controls = document.createElement('nav');
        el(controls).setData('controls', '');
        carousel.appendChild(controls);
        return controls;
    }

    async function preloadImages() {
        const promises = Array.from(slides)
            .slice(0, lazyLoadThreshold)
            .map((slide) => {
                const image = slide.querySelector('img');

                if (!image) return;
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.src = image.src;
                    img.onload = resolve;
                    img.onerror = reject;
                });
            });
        await Promise.all(promises);
    }

    // Slide cycling methods
    function cycleTabs() {
        const currentTab = controls.querySelector(
            `[data-index="${currentIndex}"]`
        );
        const prevTab = controls.querySelector(`[data-state="active"]`);

        el(currentTab).setData('state', 'active');
        prevTab?.removeAttribute('data-state');
        requestAnimationFrame(() => {
            tabs.filter((tab) => ![currentTab, prevTab].includes(tab)).forEach(
                (tab) => el(tab).removeData('state')
            );
        });
    }

    function cycleSlides() {
        const currentSlide = slides[currentIndex];

        el(currentSlide).setData('state', 'current');
        requestAnimationFrame(() => {
            Array.from(slides)
                .filter((slide) => slide !== currentSlide)
                .forEach((slide) => el(slide).removeData('state'));
        });
        if (indicators) {
            cycleTabs();
        }
    }

    function changeSlide(direction) {
        if (direction === 'next') {
            currentIndex++;

            if (currentIndex > slides.length - 1) {
                currentIndex = 0;
            }
        } else if (direction === 'prev') {
            currentIndex--;

            if (currentIndex < 0) {
                currentIndex = slides.length - 1;
            }
        }
        cycleSlides();
    }

    // Control and indicator methods
    function handleControls(e) {
        const target = e.target;

        if (el(target).matchData('button', 'next-slide')) {
            changeSlide('next');
            resume();
        } else if (el(target).matchData('button', 'prev-slide')) {
            changeSlide('prev');
            resume();
        } else if (el(target).matchData('index', '')) {
            pause();
            currentIndex = Number(el(target).getData('index'));
            cycleSlides();
        }
    }

    function addControls() {
        const prev = button.cloneNode(true);
        const next = button.cloneNode(true);

        el(prev).setData('button', 'prev-slide');
        el(next).setData('button', 'next-slide');
        controls.appendChild(prev);
        controls.appendChild(next);

        return this;
    }

    function addIndicators() {
        const indicator = document.createElement('div');
        el(indicator).setData('indicator', 'tabs');

        for (let i = 0; i < slides.length; i++) {
            const indicatorButton = button.cloneNode(true);

            el(indicatorButton).setData('index', i);
            el(indicatorButton).setData('tab', 'indicator');
            indicator.appendChild(indicatorButton);
        }

        controls.appendChild(indicator);
        indicators = true;

        return this;
    }

    // Touch control methods
    function addTouchControls() {
        function handleTouchStart(e) {
            touchstartX = e.touches[0].clientX;
            touchEndX = touchstartX;
        }

        function handleTouchMove(e) {
            touchEndX = e.touches[0].clientX;
        }

        function handleTouchEnd() {
            if (
                typeof touchstartX !== 'undefined' &&
                typeof touchEndX !== 'undefined'
            ) {
                const touchDistance = touchEndX - touchstartX;

                if (touchDistance > 0) {
                    changeSlide('prev');
                    resume();
                } else if (touchDistance < 0) {
                    changeSlide('next');
                    resume();
                }
            }
        }

        el(carousel).addEvent('touchstart', handleTouchStart(e));
        el(carousel).addEvent('touchmove', handleTouchMove(e));
        el(carousel).addEvent('touchend', handleTouchEnd);

        return this;
    }

    // Keyboard control methods
    function addKeyboardControls() {
        function handleKeyDown(e) {
            switch (e.key) {
                case 'ArrowLeft':
                    changeSlide('prev');
                    resume();
                    break;
                case 'ArrowRight':
                    changeSlide('next');
                    resume();
                    break;
                default:
                    break;
            }
        }

        el(document).addEvent('keydown', handleKeyDown(e));

        return this;
    }

    // Play/pause/stop methods
    function play(time = intervalTime) {
        interval = setInterval(() => {
            changeSlide('next');
        }, time);

        return this;
    }

    function pause() {
        clearInterval(interval);

        return this;
    }

    function resume() {
        pause();
        play();

        return this;
    }

    initialize();
    play();
    addControls();
    addIndicators();

    return this;
}

export {carousel};
