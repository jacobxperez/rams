class Carousel extends Array {
    constructor({carousel, intervalTime, lazyLoadThreshold} = {}) {
        super();
        this.carousel = document.querySelectorAll(carousel);
        this.carousel.forEach((item) => {
            this.push(item);
            this.slides = Array.from(item.querySelectorAll('[data-slide]'));
            this.controls =
                item.querySelector('[data-controls]') ?? this.createControls();
            this.tabs = Array.from(item.querySelectorAll('[data-tab]'));
        });
        this.createButton = document.createElement('button');
        this.intervalTime = intervalTime;
        this.lazyLoadThreshold = lazyLoadThreshold;
        this.currentIndex = 0;
        this.indicators = false;
        this.paused = true;
        this.#init();
        this.play();
    }

    // Initialization methods
    async #init() {
        await this.preloadImages();
        this.cycleSlides();
        this.forEach((item) =>
            item.addEvent('click', this.handleControls.bind(this))
        );
        if (this.tabs) {
            this.tabs.forEach((tab, i) => tab.setDataAttr('index', i));
        }
    }

    createControls() {
        const controls = document.createElement('nav');
        controls.setDataAttr('controls');
        this.forEach((item) => item.appendChild(controls));
        return controls;
    }

    async preloadImages() {
        if (this.slides) {
            const promises = this.slides
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
    }

    // Slide cycling methods
    cycleTabs() {
        const currentTab = this.controls.querySelector(
            `[data-index="${this.currentIndex}"]`
        );
        const prevTab = this.controls.querySelector(`[data-state="active"]`);
        currentTab.setDataAttr('state', 'active');
        if (prevTab) prevTab.removeDataAttr('state');
        requestAnimationFrame(() => {
            this.tabs
                .filter((tab) => ![currentTab, prevTab].includes(tab))
                .forEach((tab) => tab.removeDataAttr('state'));
        });
    }

    cycleSlides() {
        if (this.slides) {
            const currentSlide = this.slides[this.currentIndex];
            currentSlide.setDataAttr('state', 'current');
            requestAnimationFrame(() => {
                this.slides
                    .filter((slide) => slide !== currentSlide)
                    .forEach((slide) => slide.removeDataAttr('state'));
            });
        }
        if (this.indicators) {
            this.cycleTabs();
        }
    }

    changeSlide(direction) {
        if (this.slides) {
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
        }
        this.cycleSlides();
    }

    // Control and indicator methods
    handleControls(e) {
        const target = e.target;
        if (target.matchDataAttr('button', 'next-slide')) {
            this.changeSlide('next');
            this.resume();
        } else if (target.matchDataAttr('button', 'prev-slide')) {
            this.changeSlide('prev');
            this.resume();
        } else if (target.matchDataAttr('index')) {
            this.pause();
            this.currentIndex = Number(target.getDataAttr('index'));
            this.cycleSlides();
        }
    }

    addControls() {
        if (this.controls) {
            const prev = this.createButton.cloneNode(true);
            const next = this.createButton.cloneNode(true);
            prev.setDataAttr('button', 'prev-slide');
            next.setDataAttr('button', 'next-slide');
            this.controls.appendChild(prev);
            this.controls.appendChild(next);
        }

        return this;
    }

    addIndicators() {
        if (this.slides) {
            const indicator = document.createElement('div');
            indicator.setDataAttr('indicator', 'tabs');

            for (let i = 0; i < this.slides.length; i++) {
                const indicatorButton = this.createButton.cloneNode(true);
                indicatorButton.setDataAttr('index', i);
                indicatorButton.setDataAttr('tab', 'indicator');
                indicator.appendChild(indicatorButton);
            }

            this.controls.appendChild(indicator);
            this.indicators = true;
        }

        return this;
    }

    // Touch control methods
    addTouchControls() {
        this.forEach((item) => {
            item.addEvent('touchstart', this.handleTouchStart.bind(this));
            item.addEvent('touchmove', this.handleTouchMove.bind(this));
            item.addEvent('touchend', this.handleTouchEnd.bind(this));
        });

        return this;
    }

    handleTouchStart(e) {
        this.touchStartX = e.touches[0].clientX;
        this.touchEndX = this.touchStartX;
    }

    handleTouchMove(e) {
        this.touchEndX = e.touches[0].clientX;
    }

    handleTouchEnd() {
        if (
            typeof this.touchStartX !== 'undefined' &&
            typeof this.touchEndX !== 'undefined'
        ) {
            const touchDistance = this.touchEndX - this.touchStartX;

            if (touchDistance > 0) {
                this.changeSlide('prev');
                this.resume();
            } else if (touchDistance < 0) {
                this.changeSlide('next');
                this.resume();
            }
        }
    }

    // Keyboard control methods
    addKeyboardControls() {
        document.addEvent('keydown', this.handleKeyDown.bind(this));
        return this;
    }

    handleKeyDown(e) {
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
    }

    // Play/pause/stop methods
    play(intervalTime = this.intervalTime) {
        this.paused = false;
        this.interval = setInterval(() => {
            this.changeSlide('next');
        }, intervalTime);

        return this;
    }

    pause() {
        this.paused = true;
        clearInterval(this.interval);

        return this;
    }

    resume() {
        this.pause().play();

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
    carousel = '[data-carousel]',
    intervalTime = 5000,
    lazyLoadThreshold = 2
) {
    return new Carousel({
        carousel,
        intervalTime,
        lazyLoadThreshold,
    });
}

export {carousel};
