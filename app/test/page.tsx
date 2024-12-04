export default function Home() {
    return (
      <>
<header
            className="lg:tw-justify-around tw-max-w-lg:tw-px-4 tw-max-w-lg:tw-mr-auto tw-absolute tw-top-0 tw-z-20 tw-flex tw-h-[60px] tw-w-full tw-bg-opacity-0 tw-px-[5%] 
                    tw-text-white"
        >
            <a className="tw-h-[50px] tw-w-[50px] tw-p-[4px]" href="">
                <img
                    src="./assets/logo/logo.png"
                    alt="logo"
                    className="tw-object tw-h-full tw-w-full"
                />
            </a>
            <div
                className="collapsible-header animated-collapse max-lg:tw-shadow-md"
                id="collapsed-header-items"
            >
                <div
                    className="tw-flex tw-h-full tw-w-max tw-gap-5 tw-text-base tw-text-white max-lg:tw-mt-[30px] max-lg:tw-flex-col max-lg:tw-place-items-end max-lg:tw-gap-5 lg:tw-mx-auto lg:tw-place-items-center"
                >
                    <a className="header-links" href=""> About us </a>
                    <a className="header-links" href="#pricing"> Pricing </a>
                    <a className="header-links" href=""> Features </a>
                    <a className="header-links" href=""> Company </a>
                </div>
                <div
                    className="tw-mx-4 tw-flex tw-place-items-center tw-gap-[20px] tw-text-base max-md:tw-w-full max-md:tw-flex-col max-md:tw-place-content-center"
                >
                    <a
                        href=""
                        aria-label="signup"
                        className="tw-rounded-full tw-bg-secondary tw-px-3 tw-py-2 tw-text-white tw-transition-transform tw-duration-[0.3s] hover:tw-translate-x-2"
                    >
                        <span>Get started</span>
                        <i className="bi bi-arrow-right"></i>
                    </a>
                </div>
            </div>
            <button
                className="bi bi-list tw-absolute tw-right-3 tw-top-3 tw-z-50 tw-text-3xl tw-text-white lg:tw-hidden"
                aria-label="menu"
                id="collapse-btn"
            ></button>
        </header>

        <section
            className="tw-relative tw-flex tw-min-h-[100vh] hero-section tw-w-full tw-max-w-[100vw] tw-flex-col tw-overflow-hidden max-md:tw-mt-[50px]"
            id="hero-section"
        >
            <div
                className="hero-bg-gradient tw-flex tw-h-full tw-min-h-[100vh] tw-w-full tw-flex-col tw-place-content-center tw-gap-6 tw-p-[5%] max-lg:tw-p-4  max-xl:tw-place-items-center"
            >
                <div
                    className="tw-flex tw-flex-col tw-place-content-center tw-items-center"
                >
                    <div
                        className="reveal-up tw-text-center gradient-text tw-text-6xl tw-font-semibold tw-uppercase tw-leading-[80px] max-lg:tw-text-4xl max-md:tw-leading-snug"
                    >
                        <span className=""> Ai powered </span>
                        <br />
                        <span className=""> Coding Simplified </span>
                    </div>
                    <div
                        className="reveal-up tw-mt-10 tw-max-w-[450px] tw-p-2 tw-text-center max-lg:tw-max-w-full"
                    >
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Error adipisci corrupti accusamus reiciendis
                        similique assumenda nostrum fuga dicta vitae ipsum.
                    </div>

                    <div
                        className="reveal-up tw-mt-4 tw-flex tw-place-items-center tw-gap-4 tw-overflow-hidden tw-p-2"
                    >
                        <a
                            className="btn tw-transition-transform tw-duration-[0.3s] hover:tw-scale-x-[1.03]"
                            href=""
                        >
                            Get started
                        </a>
                        <a
                            className="btn !tw-bg-white !tw-text-secondary tw-transition-transform tw-duration-[0.3s] hover:tw-scale-x-[1.03]"
                            href=""
                        >
                            <span>Learn more</span>
                        </a>
                    </div>

                </div>

                <div
                    className="reveal-up tw-flex tw-w-full tw-place-content-center tw-place-items-center"
                    id="dashboard-container">
                    
                    <div
                        className="tw-flex tw-max-h-[750px] tw-min-h-[450px] tw-w-full tw-min-w-[350px] tw-max-w-[950px] tw-rounded-2xl 
                                    tw-overflow-hidden tw-shadow-xl tw-shadow-[#443e437c]
                                    max-lg:tw-h-fit max-lg:tw-max-h-[320px] max-lg:tw-min-h-[150px] max-lg:tw-w-[320px]"
                    id="dashboard">
                        <img
                            src="./assets/images/home/dashboard.png"
                            alt="dashboard"
                            className="tw-h-full tw-w-full tw-object-cover  max-lg:tw-object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
        <section
            className="tw-relative tw-flex tw-flex-col tw-w-full tw-max-w-[100vw] 
                    tw-place-content-center tw-place-items-center tw-overflow-hidden tw-p-8"
        >

            <h2 className="reveal-up tw-text-3xl max-md:tw-text-xl">Trusted by brands you know</h2>

            <div className="reveal-up carousel-container">
                <div className="carousel tw-mt-6 tw-flex tw-w-full lg:w-place-content-center tw-gap-5 max-md:tw-gap-2">
                    <div className="carousel-img tw-h-[30px] tw-w-[150px]">
                        <img
                            src="./assets/images/brand-logos/google.svg"
                            alt="Google"
                            className="tw-h-full tw-w-full tw-object-contain tw-grayscale tw-transition-colors hover:tw-grayscale-0"
                        />
                    </div>
                    <div className="carousel-img tw-h-[30px] tw-w-[150px]">
                        <img
                            src="./assets/images/brand-logos/microsoft.svg"
                            alt="Microsoft"
                            className="tw-h-full tw-w-full tw-object-contain tw-grayscale tw-transition-colors hover:tw-grayscale-0"
                        />
                    </div>
                    <div className="carousel-img tw-h-[30px] tw-w-[150px]">
                        <img
                            src="./assets/images/brand-logos/adobe.svg"
                            alt="Adobe"
                            className="tw-h-full tw-w-full tw-object-contain tw-grayscale tw-transition-colors hover:tw-grayscale-0"
                        />
                    </div>
                    <div className="carousel-img tw-h-[30px] tw-w-[150px]">
                        <img
                            src="./assets/images/brand-logos/airbnb.svg"
                            alt="Adobe"
                            className="tw-h-full tw-w-full tw-object-contain tw-grayscale tw-transition-colors hover:tw-grayscale-0"
                        />
                    </div>
                    <div className="carousel-img tw-h-[30px] tw-w-[150px]">
                        <img
                            src="./assets/images/brand-logos/stripe.svg"
                            alt="Adobe"
                            className="tw-h-full tw-w-full tw-object-contain tw-grayscale tw-transition-colors hover:tw-grayscale-0"
                        />
                    </div>
                    <div className="carousel-img tw-h-[30px] tw-w-[150px]">
                        <img
                            src="./assets/images/brand-logos/reddit.svg"
                            alt="Adobe"
                            className="tw-h-full tw-w-full tw-object-contain tw-grayscale tw-transition-colors hover:tw-grayscale-0"
                        />
                    </div>
                </div>
            </div>
        </section>
        <section
            className="tw-relative tw-flex tw-w-full tw-min-h-[80vh] tw-max-w-[100vw] tw-flex-col tw-place-content-center 
            tw-place-items-center tw-overflow-hidden tw-p-6"
        >
            
            <div
                className="reveal-up tw-flex tw-min-h-[60vh] tw-place-content-center tw-place-items-center
                        tw-gap-[10%] max-lg:tw-flex-col max-lg:tw-gap-10"
            >
                <div className="tw-flex">
                    <div className="tw-max-h-[650px] tw-max-w-[850px] tw-overflow-hidden tw-rounded-lg 
                                tw-shadow-lg tw-shadow-[rgba(170,49,233,0.44021358543417366)]">
                        <img
                            src="./assets/images/home/coding.png"
                            alt="coding"
                            className="tw-h-full tw-w-full tw-object-cover"
                        />
                    </div>
                </div>
                <div
                    className="tw-mt-6 tw-flex tw-max-w-[450px] tw-flex-col tw-gap-4"
                >
                    <h3 className="tw-text-4xl max-md:tw-text-2xl tw-font-medium">Streamlined Coding</h3>

                    <div className="tw-mt-4 tw-flex tw-flex-col tw-gap-3">
                        <h4 className="tw-text-xl tw-font-medium">
                            <i className="bi bi-check-all !tw-text-2xl"></i>
                            AI powered
                        </h4>
                        <span className="tw-text-lg tw-text-gray-300">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Reiciendis commodi temporibus at? Aspernatur,
                            a necessitatibus?
                        </span>
                    </div>
                    <div className="tw-mt-4 tw-flex tw-flex-col tw-gap-3">
                        <h4 className="tw-text-xl tw-font-medium">
                            <i className="bi bi-check-all !tw-text-2xl"></i>
                            Locally run
                        </h4>
                        <span className="tw-text-lg tw-text-gray-300">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Reiciendis commodi temporibus at? Aspernatur,
                            a necessitatibus?
                        </span>
                    </div>
                </div>
            </div>
        
        </section>

        <section
            className="tw-relative tw-flex tw-w-full tw-min-h-[80vh] tw-max-w-[100vw] tw-flex-col tw-place-content-center 
            tw-place-items-center tw-overflow-hidden tw-p-6"
        >
            
            <div
                className="reveal-up tw-flex tw-min-h-[60vh] tw-place-content-center tw-place-items-center
                        tw-gap-[10%] max-lg:tw-flex-col max-lg:tw-gap-10"
            >
                
                <div
                    className="tw-mt-6 tw-flex tw-max-w-[450px] tw-flex-col tw-gap-4"
                >
                    <h3 className="tw-text-4xl max-md:tw-text-2xl tw-font-medium">Powerful Version control</h3>

                    <div className="tw-mt-4 tw-flex tw-flex-col tw-gap-3">
                        <h4 className="tw-text-xl tw-font-medium">
                            <i className="bi bi-check-all !tw-text-2xl"></i>
                            Git
                        </h4>
                        <span className="tw-text-lg tw-text-gray-300">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Reiciendis commodi temporibus at? Aspernatur,
                            a necessitatibus?
                        </span>
                    </div>
                    <div className="tw-mt-4 tw-flex tw-flex-col tw-gap-3">
                        <h4 className="tw-text-xl tw-font-medium">
                            <i className="bi bi-check-all !tw-text-2xl"></i>
                            Github
                        </h4>
                        <span className="tw-text-lg tw-text-gray-300">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Reiciendis commodi temporibus at? Aspernatur,
                            a necessitatibus?
                        </span>
                    </div>
                </div>

                <div className="tw-flex">
                    <div className="tw-max-h-[650px] tw-max-w-[850px] tw-overflow-hidden tw-rounded-lg 
                                tw-shadow-lg tw-shadow-[rgba(170,49,233,0.44021358543417366)]">
                        <img
                            src="./assets/images/home/git.png"
                            alt="coding"
                            className="tw-h-full tw-w-full tw-object-cover"
                        />
                    </div>
                </div>

            </div>
        
        </section>

        <section
            className="tw-relative tw-flex tw-w-full tw-max-w-[100vw] tw-min-h-[100vh] tw-flex-col tw-place-content-center tw-place-items-center tw-overflow-hidden tw-p-6"
        >
            <div
                className="tw-mt-8 tw-flex tw-flex-col tw-place-items-center tw-gap-5"
            >
                <div
                    className="reveal-up tw-mt-5 tw-flex tw-flex-col tw-gap-3 tw-text-center"
                >
                    <h3 className="tw-text-xl tw-text-primary">
                        Features loved by our clients
                    </h3>
                    <h2 className="tw-text-4xl tw-font-semibold">Core features</h2>
                </div>
                <div
                    className="tw-mt-6 tw-flex tw-max-w-[60%] tw-flex-wrap tw-place-content-center tw-gap-2 max-lg:tw-flex-col"
                >
                    <div
                        className="reveal-up tw-flex tw-h-[250px] tw-w-[350px] tw-flex-col tw-gap-2 tw-p-4 tw-text-center"
                    >
                        <i
                            className="bi bi-boombox-fill tw-text-5xl tw-text-primary"
                        ></i>
                        <h3 className="tw-text-2xl tw-font-semibold">Feature 1</h3>
                        <div className="tw-text-gray-300">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Quos, voluptates numquam quam expedita
                            mollitia possimus. Quos tempora placeat pariatur
                            est!
                        </div>
                    </div>
                    <div
                        className="reveal-up tw-flex tw-h-[250px] tw-w-[350px] tw-flex-col tw-gap-2 tw-p-4 tw-text-center"
                    >
                        <i
                            className="bi bi-award-fill tw-text-5xl tw-text-primary"
                        ></i>
                        <h3 className="tw-text-2xl tw-font-semibold">Feature 2</h3>
                        <div className="tw-text-gray-300">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Quos, voluptates numquam quam expedita
                            mollitia possimus. Quos tempora placeat pariatur
                            est!
                        </div>
                    </div>
                    <div
                        className="reveal-up tw-flex tw-h-[250px] tw-w-[350px] tw-flex-col tw-gap-2 tw-p-4 tw-text-center"
                    >
                        <i
                            className="bi bi-book-fill tw-text-5xl tw-text-primary"
                        ></i>
                        <h3 className="tw-text-2xl tw-font-semibold">Feature 3</h3>
                        <div className="tw-text-gray-300">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Quos, voluptates numquam quam expedita
                            mollitia possimus. Quos tempora placeat pariatur
                            est!
                        </div>
                    </div>
                    <div
                        className="reveal-up tw-flex tw-h-[250px] tw-w-[350px] tw-flex-col tw-gap-2 tw-p-4 tw-text-center"
                    >
                        <i
                            className="bi bi-briefcase-fill tw-text-5xl tw-text-primary"
                        ></i>
                        <h3 className="tw-text-2xl tw-font-semibold">Feature 4</h3>
                        <div className="tw-text-gray-300">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Quos, voluptates numquam quam expedita
                            mollitia possimus. Quos tempora placeat pariatur
                            est!
                        </div>
                    </div>
                    <div
                        className="reveal-up tw-flex tw-h-[250px] tw-w-[350px] tw-flex-col tw-gap-2 tw-p-4 tw-text-center"
                    >

                        <i
                            className="bi bi-credit-card-2-front-fill tw-text-5xl tw-text-primary"
                        ></i>
                        <h3 className="tw-text-2xl tw-font-semibold">Feature 5</h3>
                        <div className="tw-text-gray-300">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Quos, voluptates numquam quam expedita
                            mollitia possimus. Quos tempora placeat pariatur
                            est!
                        </div>
                    </div>
                    <div
                        className="reveal-up tw-flex tw-h-[250px] tw-w-[350px] tw-flex-col tw-gap-2 tw-p-4 tw-text-center"
                    >
                        <i className="bi bi-fire tw-text-5xl tw-text-primary"></i>
                        <h3 className="tw-text-2xl tw-font-semibold">Feature 6</h3>
                        <div className="tw-text-gray-300">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Quos, voluptates numquam quam expedita
                            mollitia possimus. Quos tempora placeat pariatur
                            est!
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section
            className="tw-mt-5 tw-flex tw-w-full tw-min-h-[100vh] tw-flex-col tw-place-content-center tw-place-items-center tw-p-[2%]"
        >
            <h3
                className="tw-text-3xl tw-font-medium tw-text-primary max-md:tw-text-2xl"
            >
                Loved by our clients
            </h3>
            <div
                className="tw-mt-8 tw-gap-10 tw-space-y-8 max-md:tw-columns-1 lg:tw-columns-2 xl:tw-columns-3"
            >
                <div
                    className="reveal-up tw-flex tw-border-[#333a44] tw-bg-[#1d2127] tw-border-[1px] tw-h-fit tw-w-[350px] tw-break-inside-avoid tw-flex-col tw-rounded-lg tw-p-4 max-lg:tw-w-[320px]"
                >
                    <div className="tw-flex tw-place-items-center tw-gap-3">
                        <div
                            className="tw-h-[50px] tw-w-[50px] tw-overflow-hidden tw-rounded-full tw-border-[2px] tw-border-solid tw-border-primary"
                        >
                            <img
                                src="./assets/images/people/women.jpg"
                                className="tw-h-full tw-w-full tw-object-cover"
                                alt="women"
                            />
                        </div>
                        <div className="tw-flex tw-flex-col tw-gap-1">
                            <div className="tw-font-semibold">Trich B</div>
                            <div className="tw-text-gray-400">AMI, ceo</div>
                        </div>
                    </div>
                    <p className="tw-mt-4  tw-text-gray-300">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Beatae, vero.
                    </p>
                </div>
                <div
                    className="reveal-up tw-flex tw-border-[#333a44] tw-bg-[#1d2127] tw-border-[1px] tw-h-fit tw-w-[350px] tw-break-inside-avoid tw-flex-col tw-rounded-lg tw-p-4 max-lg:tw-w-[320px]"
                >
                    <div className="tw-flex tw-place-items-center tw-gap-3">
                        <div
                            className="tw-h-[50px] tw-w-[50px] tw-overflow-hidden tw-rounded-full tw-border-[2px] tw-border-solid tw-border-primary"
                        >
                            <img
                                src="./assets/images/people/man.jpg"
                                className="tw-h-full tw-w-full tw-object-cover"
                                alt="man"
                            />
                        </div>
                        <div className="tw-flex tw-flex-col tw-gap-1">
                            <div className="tw-font-semibold">John B</div>
                            <div className="tw-text-gray-400">ABC, cto</div>
                        </div>
                    </div>
                    <p className="tw-mt-4 tw-text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Inventore deserunt delectus consectetur enim cupiditate
                        ab nemo voluptas repellendus qui quas..
                    </p>
                </div>
                <div
                    className="reveal-up tw-flex tw-border-[#333a44] tw-bg-[#1d2127] tw-border-[1px] tw-h-fit tw-w-[350px] tw-break-inside-avoid tw-flex-col tw-rounded-lg tw-p-4 max-lg:tw-w-[320px]"
                >
                    <div className="tw-flex tw-place-items-center tw-gap-3">
                        <div
                            className="tw-h-[50px] tw-w-[50px] tw-overflow-hidden tw-rounded-full tw-border-[2px] tw-border-solid tw-border-primary"
                        >
                            <img
                                src="./assets/images/people/man2.jpg"
                                className="tw-h-full tw-w-full tw-object-cover"
                                alt="man"
                            />
                        </div>
                        <div className="tw-flex tw-flex-col tw-gap-1">
                            <div className="tw-font-semibold">Mante</div>
                            <div className="tw-text-gray-400">xyz, cto</div>
                        </div>
                    </div>
                    <p className="tw-mt-4 tw-text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quidem, numquam.
                    </p>
                </div>
                <div
                    className="reveal-up tw-flex tw-border-[#333a44] tw-bg-[#1d2127] tw-border-[1px] tw-h-fit tw-w-[350px] tw-break-inside-avoid tw-flex-col tw-rounded-lg tw-p-4 max-lg:tw-w-[320px]"
                >
                    <div className="tw-flex tw-place-items-center tw-gap-3">
                        <div
                            className="tw-h-[50px] tw-w-[50px] tw-overflow-hidden tw-rounded-full tw-border-[2px] tw-border-solid tw-border-primary"
                        >
                            <img
                                src="./assets/images/people/women.jpg"
                                className="tw-h-full tw-w-full tw-object-cover"
                                alt="man"
                            />
                        </div>
                        <div className="tw-flex tw-flex-col tw-gap-1">
                            <div className="tw-font-semibold">Lara</div>
                            <div className="tw-text-gray-400">xz, cto</div>
                        </div>
                    </div>
                    <p className="tw-mt-4 tw-text-gray-300">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Soluta, saepe illum. Dicta quisquam praesentium
                        quod!
                    </p>
                </div>
                <div
                    className="reveal-up tw-flex tw-h-fit tw-border-[#333a44] tw-bg-[#1d2127] tw-border-[1px] tw-w-[350px] tw-break-inside-avoid tw-flex-col tw-rounded-lg tw-p-4 max-lg:tw-w-[320px]"
                >
                    <div className="tw-flex tw-place-items-center tw-gap-3">
                        <div
                            className="tw-h-[50px] tw-w-[50px] tw-overflow-hidden tw-rounded-full tw-border-[2px] tw-border-solid tw-border-primary"
                        >
                            <img
                                src="./assets/images/people/man.jpg"
                                className="tw-h-full tw-w-full tw-object-cover"
                                alt="man"
                            />
                        </div>
                        <div className="tw-flex tw-flex-col tw-gap-1">
                            <div className="tw-font-semibold">James</div>
                            <div className="tw-text-gray-400">app, cto</div>
                        </div>
                    </div>
                    <p className="tw-mt-4 tw-text-gray-300">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Fuga accusamus non enim debitis rem neque beatae
                        explicabo corrupti porro ullam?
                    </p>
                </div>
                <div
                    className="reveal-up tw-flex tw-border-[#333a44] tw-bg-[#1d2127] tw-border-[1px] tw-h-fit tw-w-[350px] tw-break-inside-avoid tw-flex-col tw-rounded-lg tw-p-4 max-lg:tw-w-[320px]"
                >
                    <div className="tw-flex tw-place-items-center tw-gap-3">
                        <div
                            className="tw-h-[50px] tw-w-[50px] tw-overflow-hidden tw-rounded-full tw-border-[2px] tw-border-solid tw-border-primary"
                        >
                            <img
                                src="./assets/images/people/man2.jpg"
                                className="tw-h-full tw-w-full tw-object-cover"
                                alt="man"
                            />
                        </div>
                        <div className="tw-flex tw-flex-col tw-gap-1">
                            <div className="tw-font-semibold">Ron</div>
                            <div className="tw-text-gray-400">
                                marketplace, cto
                            </div>
                        </div>
                    </div>
                    <p className="tw-mt-4 tw-text-gray-300">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Fuga accusamus non enim debitis rem neque beatae
                        explicabo corrupti porro ullam?
                    </p>
                </div>
            </div>
        </section>

        <section
            className="tw-mt-5 tw-flex tw-w-full tw-flex-col tw-place-items-center tw-p-[2%]"
            id="pricing"
        >
            <h3
                className="tw-text-3xl tw-font-medium tw-text-primary max-md:tw-text-2xl"
            >
                Simple pricing
            </h3>
            <div
                className="tw-mt-10 tw-flex tw-flex-wrap tw-place-content-center tw-gap-8 max-lg:tw-flex-col"
            >
                <div
                    className="reveal-up tw-flex tw-border-[#333a44] tw-bg-[#1d2127] tw-border-[1px] tw-w-[380px] tw-flex-col tw-place-items-center tw-gap-2 tw-rounded-lg tw-p-8 tw-shadow-xl max-lg:tw-w-[320px]"
                >
                    <h3 className="">
                        <span className="tw-text-5xl tw-font-semibold">$9</span>
                        <span className="tw-text-2xl tw-text-gray-400">/mo</span>
                    </h3>
                    <p className="tw-mt-3 tw-text-center tw-text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ab, explicabo!
                    </p>
                    <hr />
                    <ul
                        className="tw-mt-4 tw-flex tw-flex-col tw-gap-2 tw-text-center tw-text-lg tw-text-gray-200"
                    >
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem, ipsum.</li>
                        <li>Lorem, ipsum dolor.</li>
                        <li>Lorem ipsum dolor sit.</li>
                    </ul>
                    <a
                        href="http://"
                        className="btn tw-mt-8 !tw-w-full tw-transition-transform tw-duration-[0.3s] hover:tw-scale-x-[1.02]"
                    >
                        Get now
                    </a>
                </div>
                <div
                    className="reveal-up tw-flex tw-bg-[#1d2127] tw-w-[380px] tw-flex-col tw-place-items-center tw-gap-2 tw-rounded-lg tw-border-2 tw-border-primary tw-p-8 tw-shadow-xl max-lg:tw-w-[320px]"
                >
                    <h3 className="">
                        <span className="tw-text-5xl tw-font-semibold">$19</span>
                        <span className="tw-text-2xl tw-text-gray-400">/mo</span>
                    </h3>
                    <p className="tw-mt-3 tw-text-center tw-text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ab, explicabo!
                    </p>
                    <hr />
                    <ul
                        className="tw-mt-4 tw-flex tw-flex-col tw-gap-2 tw-text-center tw-text-lg tw-text-gray-200"
                    >
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem, ipsum.</li>
                        <li>Lorem, ipsum dolor.</li>
                        <li>Lorem ipsum dolor sit.</li>
                    </ul>
                    <a
                        href="http://"
                        className="btn tw-mt-8 !tw-w-full tw-transition-transform tw-duration-[0.3s] hover:tw-scale-x-[1.02]"
                    >
                        Get now
                    </a>
                </div>
                <div
                    className="reveal-up tw-flex tw-border-[#333a44] tw-bg-[#1d2127] tw-w-[380px] tw-flex-col tw-place-items-center tw-gap-2 tw-rounded-lg tw-p-8 tw-shadow-xl max-lg:tw-w-[320px]"
                >
                    <h3 className="">
                        <span className="tw-text-5xl tw-font-semibold">$49</span>
                        <span className="tw-text-2xl tw-text-gray-400">/mo</span>
                    </h3>
                    <p className="tw-mt-3 tw-text-center tw-text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ab, explicabo!
                    </p>
                    <hr />
                    <ul
                        className="tw-mt-4 tw-flex tw-flex-col tw-gap-2 tw-text-center tw-text-lg tw-text-gray-200"
                    >
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem, ipsum.</li>
                        <li>Lorem, ipsum dolor.</li>
                        <li>Lorem ipsum dolor sit.</li>
                    </ul>
                    <a
                        href="http://"
                        className="btn tw-mt-8 !tw-w-full tw-transition-transform tw-duration-[0.3s] hover:tw-scale-x-[1.02]"
                    >
                        Get now
                    </a>
                </div>
            </div>
        </section>

        <section
            className="tw-mt-5 tw-flex tw-w-full tw-min-h-[80vh] tw-flex-col tw-place-content-center tw-place-items-center tw-p-[2%] max-lg:tw-p-3"
        >
            <h3
                className="reveal-up tw-text-center tw-text-4xl tw-font-medium max-md:tw-text-2xl"
            >
                Read our articles ✨
            </h3>
            <div
                className="reveal-up tw-mt-10 tw-flex tw-flex-wrap tw-place-content-center tw-gap-10 max-lg:tw-flex-col"
            >
                <a
                    href=""
                    className="tw-flex tw-h-[400px] tw-w-[350px] tw-flex-col tw-gap-2 tw-overflow-clip tw-rounded-lg tw-border-[#333a44] tw-bg-[#1d2127] tw-border-[1px] tw-p-4 tw-shadow-xl max-lg:tw-w-[300px]"
                >
                    <div
                        className="tw-h-[200px] tw-w-full tw-overflow-hidden tw-rounded-md"
                    >
                        <img
                            src="./assets/images/home/forest.jpg"
                            alt="article image"
                            className="tw-h-full tw-w-full tw-object-cover"
                        />
                    </div>
                    <h3 className="tw-text-2xl tw-font-semibold max-md:tw-text-xl">
                        Article 1
                    </h3>
                    <p className="tw-mt-2 tw-text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ab, explicabo!
                    </p>
                    <span>
                        <span>Learn more</span>
                        <i className="bi bi-arrow-right"></i>
                    </span>
                </a>
                <a
                    href=""
                    className="tw-flex tw-h-[400px] tw-w-[350px] tw-flex-col tw-gap-2 tw-overflow-clip tw-rounded-lg tw-border-[#333a44] tw-bg-[#1d2127] tw-border-[1px] tw-p-4 tw-shadow-xl max-lg:tw-w-[300px]"
                >
                    <div
                        className="tw-h-[200px] tw-w-full tw-overflow-hidden tw-rounded-md"
                    >
                        <img
                            src="./assets/images/home/mountain.jpg"
                            alt="article image"
                            className="tw-h-full tw-w-full tw-object-cover"
                        />
                    </div>
                    <h3 className="tw-text-2xl tw-font-semibold max-md:tw-text-xl">
                        Article 2
                    </h3>
                    <p className="tw-mt-2 tw-text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ab, explicabo!
                    </p>
                    <span>
                        <span>Learn more</span>
                        <i className="bi bi-arrow-right"></i>
                    </span>
                </a>
                <a
                    href=""
                    className="tw-flex tw-h-[400px] tw-w-[350px] tw-flex-col tw-gap-2 tw-overflow-clip tw-rounded-lg tw-border-[#333a44] tw-bg-[#1d2127] tw-border-[1px] tw-p-4 tw-shadow-xl max-lg:tw-w-[300px]"
                >
                    <div
                        className="tw-h-[200px] tw-w-full tw-overflow-hidden tw-rounded-md"
                    >
                        <img
                            src="./assets/images/home/photography.jpg"
                            alt="article image"
                            className="tw-h-full tw-w-full tw-object-cover"
                        />
                    </div>
                    <h3 className="tw-text-2xl tw-font-semibold max-md:tw-text-xl">
                        Article 3
                    </h3>
                    <p className="tw-mt-2 tw-text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ab, explicabo!
                    </p>
                    <span>
                        <span>Learn more</span>
                        <i className="bi bi-arrow-right"></i>
                    </span>
                </a>
            </div>
        </section>


        <section
            className="tw-flex tw-w-full tw-flex-col tw-place-content-center tw-place-items-center tw-gap-[10%] tw-p-[5%] tw-px-[10%]"
        >
            <div
                className="tw-flex tw-w-full tw-flex-col tw-place-content-center tw-place-items-center tw-gap-3"
            >
                <h2 className="tw-text-2xl tw-text-primary max-md:tw-text-xl">
                    Special Newsletter signup
                </h2>
                <h2 className="tw-text-xl max-md:tw-text-lg">
                    Keep yourself updated
                </h2>

                <div
                    className="tw-flex tw-h-[60px] tw-place-items-center tw-gap-2 tw-overflow-hidden tw-p-2"
                >
                    <input
                        type="email"
                        className="input tw-h-full tw-w-full tw-p-2 tw-outline-none"
                        placeholder="email"
                    />
                    <a
                        className="btn tw-transition-colors tw-duration-[0.3s]"
                        href=""
                    >
                        Signup
                    </a>
                </div>
            </div>
        </section>

        <footer
            className="tw-mt-auto tw-flex tw-w-full tw-place-content-around tw-gap-3 tw-p-[5%] tw-px-[10%] tw-text-white max-md:tw-flex-col"
        >
            <div
                className="tw-flex tw-h-full tw-w-[250px] tw-flex-col tw-place-items-center tw-gap-6 max-md:tw-w-full"
            >
                <img
                    src="./assets/logo/logo.png"
                    alt="logo"
                    className="tw-max-w-[120px]"
                />
                <div>
                    2 Lord Edward St,
                    <br />
                    D02 P634,
                    <br />
                    United States
                </div>
                <div className="tw-mt-3 tw-text-lg tw-font-semibold">Follow us</div>
                <div className="tw-flex tw-gap-4 tw-text-2xl">
                    <a href="" aria-label="Facebook">
                        <i className="bi bi-facebook"></i>
                    </a>
                    <a
                        href="https://twitter.com/@pauls_freeman"
                        aria-label="Twitter"
                    >
                        <i className="bi bi-twitter"></i>
                    </a>
                    <a
                        href="https://instagram.com/"
                        className="tw-h-[40px] tw-w-[40px]"
                        aria-label="Instagram"
                    >
                        <i className="bi bi-instagram"></i>
                    </a>
                </div>
            </div>

            <div className="tw-flex tw-h-full tw-w-[250px] tw-flex-col tw-gap-4">
                <h2 className="tw-text-3xl max-md:tw-text-xl">Resources</h2>
                <div className="tw-flex tw-flex-col tw-gap-3 max-md:tw-text-sm">
                    <a href="" className="footer-link">About us</a>
                    <a href="" className="footer-link">FAQ</a>
                    <a href="" className="footer-link">Contact Us</a>
                    <a href="" className="footer-link">Blogs</a>
                    <a href="" className="footer-link">Privacy policy</a>
                </div>
            </div>
        </footer>
      </>
    );
  }
  