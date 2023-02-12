Vue.component('panel-list', {
    props: ['years'],
    template: `
    <div>
        <div v-for="year in years">
            <h2>{{ year.year }}</h2>
            <div class="card-grid">
                <div class="card" v-for="panel in year.projects">
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
    </div>`
});

let proj = new Vue({
    el: '#projects-grid',
    data: {
        items: [
            {
                year: "2023",
                projects: [
                    {
                        name: "CPT Practice Platform",
                        description: "Platform for practicing competitive programming with 1000+ solution submissions and 15k+ monthly page views",
                        link: "phscpt.pythonanywhere.com",
                        image: "cptplatform.png"
                    },
                    {
                        name: "USACO",
                        description: "Solutions and explanations for USA Computing Olympiad contest and training page problems",
                        link: "knosmos.github.io/usaco",
                        image: "usaco.png"
                    },
                    {
                        name: "Daybreak",
                        description: "Play an AI hacking yourself out of a computer",
                        link: "knosmos.github.io/daybreak",
                        image: "daybreak.png"
                    },
                ]
            },
            {
                year: "2022",
                projects: [
                    {
                        name: "Radian",
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
                        description: "Website for HackPHS 2022, a 24-hour hackathon with 300+ participants",
                        link: "hackphs.tech",
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
                        description: "contour-detecting autodraw bot",
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
                        description: "The classic online multiplayer card game ripoff",
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
                        link: "https://github.com/knosmos/reaction-map",
                        image: "reaction.jpg"
                    },
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
                        name: "Clearing the Skies",
                        link: "locus-lab.github.io/insertnamehere",
                        image: "clearingskies.jpg",
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