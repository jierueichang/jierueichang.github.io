Vue.component('panel-list', {
    props: ['years'],
    template: `
    <div>
        <div v-for="year in years">
            <h2 data-aos="zoom-in">{{ year.year }}</h2>
            <div class="card-grid">
                <div v-for="panel in year.projects" data-aos="flip-up" data-aos-anchor-placement="center-bottom">
                    <div class="card">
                        <div class="card-img" v-if="panel.image" v-bind:style="'background-image:url(img/' + panel.image + ')'"></div>
                        <div class="card-body">
                            <a v-bind:href="'http://'+panel.link" target="_blank" v-if="panel.link">{{ panel.name }}</a>
                            <a v-if="!panel.link">{{ panel.name }}</a>
                            <p v-if="panel.subtitle" style="color: gray; margin: 5px 0px">{{ panel.subtitle }}</p>
                            <p v-html = "panel.description"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`
});

let proj = new Vue({
    el: '#projects-grid',
    data: {
        items: [
            {
                year: "2025",
                projects: [
                    {
                        name: "Stack Overflow",
                        description: "Self-driving block-stacking robot: winner of MIT Mobile Autonomous Systems Laboratory 2025",
                        link: "maslab.mit.edu/2025/wiki/team08",
                        image: "maslab.png"
                    },
                    {
                        name: "Please Drink Responsibly",
                        description: "Five underage freshmen build a CoreXY ball-tracking robotic beer pong table",
                        link: "github.com/knosmos/drinkresponsibly",
                        image: "drinkresponsibly.png"
                    },
                    {
                        name: "Hummingbird",
                        description: "A custom STM32-based flight controller for autonomous gliders",
                        link: "web.mit.edu/dbf/www/",
                        image: "hummingbird-pcb.jpg"
                    },
                    {
                        name: "Signal Lamp",
                        description: "Capacitive-touch telegraph lamp that relays Morse code over the internet",
                        link: "github.com/knosmos/signal-lamp",
                        image: "signallamp.png"
                    },
                    {
                        name: "Spinny Hologram of Death",
                        description: "Volumetric display with custom ESP32-based spinning LED matrix",
                        image: "hologram.png"
                    },
                    {
                        name: "Ytterbium",
                        description: "Custom periodic table-inspired NFC puzzle boards",
                        image: "ytterbium.jpg"
                    },
                    /*{
                        name: "Undyner",
                        description: "CV bot for solving Undertale's Undyne the Undying fight",
                        link: "knosmos.github.io/undyner",
                        image: "undyner.png"
                    },*/
                    {
                        name: "Tachigurasu",
                        description: "An AI tamagotchi to fix your posture, built with ESP32",
                        link: "github.com/knosmos/tachigurasu",
                        image: "tachi-cover.png"
                    },
                    {
                        name: "Brownian Motion",
                        description: "A collection of questionable pseudorandom creative writings",
                        link: "knosmos.github.io/brownian",
                        image: "brownian2.png"
                    },
                ]
            },
            {
                year: "2024",
                projects: [
                    {
                        name: "CPT Practice Platform",
                        description: "Platform for practicing competitive programming with 1000+ solution submissions and 15k+ monthly page views",
                        link: "phscpt.pythonanywhere.com",
                        image: "cptplatform.png"
                    },
                    {
                        name: "a-phrase-ia",
                        description: "HackMIT Best Use of Open-Source GenAI: natural language communication board for speech-impaired patients",
                        // link: "ballot.hackmit.org/project/jeorl-ozixh-eoobu-dsmir",
                        link: "github.com/knosmos/a.phrase.ia",
                        image: "hackmit.jpg"
                    },
                    {
                        name: "su-don't-ku",
                        description: "Lightweight realtime mobile-based computer vision Sudoku solver",
                        link: "knosmos.github.io/sudontku",
                        image: "sudontku.png"
                    },                    
                    {
                        name: "Eigensheep",
                        description: "Image-based Ovine Detection with Principal Component Analysis",
                        link: "github.com/knosmos/eigensheep",
                        image: "eigensheep.png"
                    },
                    {
                        name: "MNIST Clustering",
                        description: "Clustering handwritten digits with Kruskal's algorithm and K-means",
                        link: "github.com/knosmos/mnist-clustering",
                        image: "mnist.png"
                    },
                    {
                        name: "NN from Scratch",
                        description: "Neural network implementation from scratch with backpropagation to solve XOR problem",
                        link: "gist.github.com/knosmos/50a92dbc7840d4c1e088a3323334d20a",
                        image: "xor.png"
                    },
                    {
                        name: "nn-fizzbuzz",
                        description: "Attacking FizzBuzz with a browser-based neural network (and still getting it wrong sometimes)",
                        link: "knosmos.github.io/nn-fizzbuzz",
                        image: "fizzbuzz2.png"
                    },
                    {
                        name: "airhorn",
                        description: "Obnoxious fullscreen alert system with GCalendar integration",
                        link: "github.com/knosmos/airhorn",
                        image: "IMG_1124.png"
                    },
                    {
                        name: "Googly",
                        description: "Mechanized googly eyes with metal lasercut frame",
                        image: "googly.jpg"
                    },
                    {
                        name: "artbitrary",
                        description: "canvases of algorithmic dreams",
                        link: "knosmos.github.io/artbitrary",
                        image: "convex-spindle.png"
                    },
                    {
                        name: "REXplorer",
                        description: "Timeline viewer for MIT Residence Exploration 2024 with MiniLM AI-powered search",
                        link: "knosmos.github.io/rexplorer",
                        image: "rex.jpg"
                    },
                ]
            },
            {
                year: "2023",
                projects: [
                    {
                        name: "Radian 2023",
                        description: "2nd Place at Robocup World Championships, 1st Place at USA Robocup Junior: autonomous soccer robot with localization, PID-controlled movement, smart scoring and defense algorithms, solenoid driven kicker, and Bluetooth communication",
                        image: "radian_2023.jpg",
                        link: "soccer-robotics.github.io"
                    },
                    {
                        name: "USACO",
                        description: "Solutions and explanations for USA Computing Olympiad contest and training page problems",
                        link: "knosmos.github.io/usaco",
                        image: "usaco.png"
                    },
                    {
                        name: "The Tower Online",
                        description: "Online edition of the PHS student newspaper, built with Next.js and Supabase",
                        link: "towerphs.com",
                        image: "tower.png"
                    },
                    {
                        name: "Daybreak",
                        description: "Play an AI hacking yourself out of a computer",
                        link: "knosmos.github.io/daybreak",
                        image: "daybreak.png"
                    },
                    {
                        name: "Isotoma",
                        description: "Online TikZ GUI vector-based graphics editor",
                        link: "knosmos.github.io/isotoma",
                        image: "isotoma.png"
                    },
                    {
                        name: "YesYesGram",
                        description: "Automated Nonogram logic puzzle solver with Selenium",
                        link: "github.com/knosmos/yesyesgram",
                        image: "yesyesgram.png"
                    },
                    {
                        name: "Lexeme",
                        description: "Minimalist online word clock",
                        link: "knosmos.github.io/lexeme",
                        image: "lexeme.png"
                    }
                ]
            },
            {
                year: "2022",
                projects: [
                    {
                        name: "Radian 2022",
                        description: "2nd Place at Robocup Junior USA: autonomous soccer robot with IR ball tracking, PID angle correction, scoring algorithms, line avoidance, and computer vision-based goal detection",
                        image: "radian.png"
                    },
                    {
                        name: "Robowordle",
                        description: "Using computer vision and a 3D printer to play a phone-based word game",
                        link: "github.com/knosmos/robowordle",
                        image: "wordle_thumb.png"
                    },
                    {
                        name: "Ready Set Solve",
                        description: "Playing the card game SET with computer vision",
                        link: "github.com/knosmos/set-solve",
                        image: "setsolve.png"
                    },
                    {
                        name: "Arbiter",
                        description: "Hackathon judging system with graph theory based ranking algorithm",
                        link: "github.com/knosmos/arbiter",
                        image: "arbiter.png"
                    },
                    {
                        name: "HackPHS Website 2022",
                        description: "Website for HackPHS 2022, a 24-hour hackathon with 200+ participants",
                        link: "hackprincetonhs.github.io/hackphs2022/",
                        image: "hackphs.png"
                    },
                    {
                        name: "Wordle-Curses",
                        description: "wordle curses implementation in <60 lines of code",
                        link: "github.com/knosmos/wordle-curses",
                        image: "wordle_curses.png"
                    },
                    {
                        name: "EVT Modeling",
                        description: "Extreme Value Theory Modeling Demonstration with Generalized Pareto Distribution",
                        link: "github.com/NYCUitri/evt",
                        image: "evt.png"
                    },
                    {
                        name: "SudokuGen",
                        description: "Sudoku puzzle PDF generator",
                        link: "github.com/knosmos/sudoku-gen",
                        image: "sudoku2.png"
                    },
                ]
            },
            {
                year: "2021",
                projects: [
                    {
                        name: "TL;DS",
                        description: "Winner of HackPHS 2021: Math solver with OCR and handwriting capability",
                        link: "github.com/knosmos/tlds",
                        image: "tlds.jpg"
                    },
                    {
                        name: "Rhythmvision",
                        description: "Rhythm game with browser ML-driven pose estimation",
                        link: "knosmos.github.io/rhythmvision",
                        image: "rhythmvision3.png"
                    },
                    {
                        name: "CMDPXL",
                        description: "Terminal-based image editor, featured by GitHub",
                        link: "github.com/knosmos/cmdpxl",
                        image: "cmdpxl.png"
                    },
                    {
                        name: "Scribblebot",
                        description: "Contour-detecting autodraw bot with OpenCV and PyAutoGUI",
                        link: "github.com/knosmos/scribblebot",
                        image: "scribblebot.png"
                    },
                    {
                        name: "Wikipedia TUI",
                        description: "Terminal-based Wikipedia viewer",
                        link: "github.com/knosmos/wikipedia",
                        image: "wikipedia.png"
                    },
                    {
                        name: "Tres",
                        description: "The classic online multiplayer card game ripoff, built with Flask",
                        link: "knosmos.github.io/tres",
                        image: "tres.png"
                    },
                    {
                        name: "Minesweeper Captcha",
                        description: "CAPTCHA but it's Minesweeper",
                        link: "knosmos.github.io/mine-captcha",
                        image: "mine-captcha.png"
                    },
                    {
                        name: "Geometry Street",
                        description: "Solve geometry problems to control a \"self-driving\" car",
                        link: "knosmos.github.io/geometry",
                        image: "geometry.png"
                    },
                    {
                        name: "Emotilang",
                        description: "Emoji-based esoteric programming language",
                        link: "knosmos.github.io/emotilang",
                        image: "emotilang.png"
                    },
                    {
                        name: "Regui",
                        description: "Easy-to-use Regex generator",
                        link: "knosmos.github.io/regui",
                        image: "regui.png"
                    },
                    {
                        name: "Reaction Map",
                        description: "Express sentences as driving directions with fuzzy matching",
                        link: "github.com/knosmos/reaction-map",
                        image: "reaction.jpg"
                    },
                    {
                        name: "JCDOS",
                        description: "Portfolio as a simulated desktop interface in a web browser",
                        link: "knosmos.github.io/jcdos",
                        image: "jcdos3.png"
                    }
                ]
            },
            {
                year: "2020",
                projects: [
                    {
                        name: "Twobot",
                        description: "Puzzle game where one controls two players simultaneously",
                        link: "github.com/knosmos/twobot",
                        image: "twobot.png"
                    },
                    {
                        name: "Convex Hull",
                        description: "Convex hull visualization with Graham Scan",
                        link: "knosmos.github.io/convexhull",
                        image: "convexhull.png"
                    },
                    {
                        name: "Turtles Ad Infinitum",
                        description: "recursive game where you control a player who controls another player who controls...",
                        link: "knosmos.github.io/turtles",
                        image: "turtles.jpg"
                    },
                    {
                        name: "Twarble",
                        description: "Convert meaningful tweets and chat messages into verbose, nonsensical gibberish, by running them through a thesaurus for comedic effect.",
                        link: "devpost.com/software/twarble",
                        image: "twarble.png"
                    },
                    {
                        name: "Keymapper",
                        description: "Keyboard heatmap generation",
                        link: "knosmos.github.io/keymapper",
                        image: "keymapper.jpg"
                    },
                    {
                        name: "Petridish",
                        description: "Evolution simulator with genetic algorithm",
                        link: "knosmos.github.io/petridish",
                        image: "petridish.jpg"
                    },
                    {
                        name: "Bottlecaps",
                        description: "Online two-player checkers game",
                        link: "knosmos.github.io/checkers",
                        image: "checkers.png"
                    },
                    {
                        name: "Clearing the Skies",
                        link: "locus-lab.github.io/insertnamehere",
                        image: "clearingskies2.png",
                        description: "Rebuild civilization after a nuclear apocalypse"
                    }
                ]
            },
            {
                year: "2019",
                projects: [
                    {
                        name: "Remapper",
                        link: "github.com/knosmos/remapper",
                        image: "remapper.png",
                        description: "A web application that can generate an interactive map of paths traveled by foot or by bike, with embedded images and text descriptions that help record great moments of a trip"
                    }
                ]
            },
            {
                year: "2018",
                projects: [
                    {
                        name: "Kalictric",
                        link: "sites.google.com/view/kalictric",
                        image: "kalictric.png",
                        description: "Kalictric is a kalimba equipped with a capacitive touch sensor, which transforms it into a kalimba learning tool, a composition creator and countless other things, such as a gamepad that can be used to play Tetris and Minecraft"
                    }
                ]
            },
            {
                year: "2017",
                projects: [
                    {
                        name: "Cricket Pi",
                        link: "sites.google.com/view/cricketpi",
                        image: "cricketpi.png",
                        description: "a voice-controllable MIDI player with playback, tempo, and volume control"
                    }
                ]
            },
        ]
    }
});

let footer = new Vue({
    el: '#footer',
    data:
    {
        currentYear: new Date().getUTCFullYear()
    }
});