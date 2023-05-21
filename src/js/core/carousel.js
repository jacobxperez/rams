import {rams} from './rams.js';

class Carousel {
    constructor({carouselSelector, intervalTime, lazyLoadThreshold} = {}) {
        this.carousel = document.querySelector(carouselSelector);
        if (!this.carousel) {
            throw new Error('Carousel element not found in the DOM');
        }
        this.slides = this.carousel.querySelectorAll('[data-slide]');
        this.controls =
            this.carousel.querySelector('[data-controls]') ||
            this.createControls();
        this.tabs = Array.from(this.controls.querySelectorAll('[data-tab]'));
        this.button = document.createElement('button');
        this.intervalTime = intervalTime;
        this.lazyLoadThreshold = lazyLoadThreshold;
        this.currentIndex = 0;
        this.indicators = false;
        this.initialize();
    }

    // Initialization methods
    async initialize() {
        await this.preloadImages();
        this.cycleSlides();
        rams.e(this.controls).addEvent('click', this.handleControls.bind(this));
        rams.e(this.tabs).each((tab, index) =>
            rams.e(tab).setData('index', index)
        );
    }

    createControls() {
        const controls = document.createElement('nav');
        rams.e(controls).setData('controls', '');
        this.carousel.appendChild(controls);
        return controls;
    }

    async preloadImages() {
        const promises = Array.from(this.slides)
            .slice(0, this.lazyLoadThreshold)
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
    cycleTabs() {
        const currentTab = this.controls.querySelector(
            `[data-index="${this.currentIndex}"]`
        );
        const prevTab = this.controls.querySelector(`[data-state="active"]`);

        rams.e(currentTab).setData('state', 'active');
        if (prevTab) {
            rams.e(prevTab).removeData('state');
        }
        requestAnimationFrame(() => {
            this.tabs
                .filter((tab) => ![currentTab, prevTab].includes(tab))
                .forEach((tab) => rams.e(tab).removeData('state'));
        });
    }

    cycleSlides() {
        const currentSlide = this.slides[this.currentIndex];

        rams.e(currentSlide).setData('state', 'current');
        requestAnimationFrame(() => {
            Array.from(this.slides)
                .filter((slide) => slide !== currentSlide)
                .forEach((slide) => rams.e(slide).removeData('state'));
        });
        if (this.indicators) {
            this.cycleTabs();
        }
    }

    changeSlide(direction) {
        if (direction === 'next') {
            this.currentIndex++;

            if (this.currentIndex > this.slides.length - 1) {
                this.currentIndex = 0;
            }
        } else if (direction === 'prev') {
            this.currentIndex--;

            if (this.currentIndex < 0) {
                this.currentIndex = this.slides.length - 1;
            }
        }
        this.cycleSlides();
    }

    // Control and indicator methods
    handleControls(e) {
        const target = e.target;

        if (rams.e(target).matchData('button', 'next-slide')) {
            this.changeSlide('next');
            this.resume();
        } else if (rams.e(target).matchData('button', 'prev-slide')) {
            this.changeSlide('prev');
            this.resume();
        } else if (rams.e(target).matchData('index')) {
            this.pause();
            this.currentIndex = Number(rams.e(target).getData('index'));
            this.cycleSlides();
        }
    }

    addControls() {
        const prev = this.button.cloneNode(true);
        const next = this.button.cloneNode(true);

        rams.e(prev).setData('button', 'prev-slide');
        rams.e(next).setData('button', 'next-slide');
        this.controls.appendChild(prev);
        this.controls.appendChild(next);

        return this;
    }

    addIndicators() {
        const indicator = document.createElement('div');
        rams.e(indicator).setData('indicator', 'tabs');

        for (let i = 0; i < this.slides.length; i++) {
            const indicatorButton = this.button.cloneNode(true);

            rams.e(indicatorButton).setData('index', i);
            rams.e(indicatorButton).setData('tab', 'indicator');
            indicator.appendChild(indicatorButton);
        }

        this.controls.appendChild(indicator);
        this.indicators = true;

        return this;
    }

    // Touch control methods
    addTouchControls() {
        let touchstartX;
        let touchEndX;

        const handleTouchStart = (e) => {
            touchstartX = e.touches[0].clientX;
            touchEndX = touchstartX;
        };

        const handleTouchMove = (e) => {
            touchEndX = e.touches[0].clientX;
        };

        const handleTouchEnd = () => {
            if (
                typeof touchstartX !== 'undefined' &&
                typeof touchEndX !== 'undefined'
            ) {
                const touchDistance = touchEndX - touchstartX;

                if (touchDistance > 0) {
                    this.changeSlide('prev');
                    this.resume();
                } else if (touchDistance < 0) {
                    this.changeSlide('next');
                    this.resume();
                }
            }
        };

        rams.e(this.carousel).addEvent('touchstart', handleTouchStart);
        rams.e(this.carousel).addEvent('touchmove', handleTouchMove);
        rams.e(this.carousel).addEvent('touchend', handleTouchEnd);

        return this;
    }

    // Keyboard control methods
    addKeyboardControls() {
        const handleKeyDown = (e) => {
            switch (e.key) {
                case 'ArrowLeft':
                    this.changeSlide('prev');
                    this.resume();
                    break;
                case 'ArrowRight':
                    this.changeSlide('next');
                    this.resume();
                    break;
                default:
                    break;
            }
        };

        rams.e(document).addEvent('keydown', handleKeyDown);

        return this;
    }

    // Play/pause/stop methods
    play(intervalTime = this.intervalTime) {
        this.interval = setInterval(() => {
            this.changeSlide('next');
        }, intervalTime);

        return this;
    }

    pause() {
        clearInterval(this.interval);

        return this;
    }

    resume() {
        this.pause();
        this.play();

        return this;
    }

    stop() {
        this.pause();
        this.currentIndex = 0;
        this.cycleSlides();

        return this;
    }
}

function carousel(
    carouselSelector = '[data-carousel]',
    intervalTime = 5000,
    lazyLoadThreshold = 2
) {
    return new Carousel({
        carouselSelector,
        intervalTime,
        lazyLoadThreshold,
    });
}

export {Carousel, carousel};
