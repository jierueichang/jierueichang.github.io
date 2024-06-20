Vue.component('panel-list', {
    props: ['panels'],
    template: `
    <div class="card-grid">
        <div v-for="panel in panels" data-aos="flip-up" data-aos-anchor-placement="center-bottom">
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
    </div>`
});

let proj = new Vue(
{
    el: '#projects-grid',
    data:
    {
        projects: [
            {
                name: "Radian",
                description: "2nd Place at Robocup World Championships, 1st Place at USA Robocup Junior: autonomous soccer robot with localization, PID-controlled movement, smart scoring and defense algorithms, solenoid driven kicker, and Bluetooth communication",
                image: "radian_2023.jpg",
                link: "soccer-robotics.github.io"
                /*description: "2nd Place at Robocup Junior USA: autonomous soccer robot with IR ball tracking, PID angle correction, scoring algorithms, line avoidance, and computer vision-based goal detection",
                image: "radian.png"*/
            },
            {
                name: "CPT Practice Platform",
                description: "Platform for practicing competitive programming with custom-written problems, 1000+ solution submissions, and 15k+ monthly page views",
                link: "phscpt.pythonanywhere.com",
                image: "cptplatform.png"
            },
            {
                name: "Robowordle",
                description: "Using computer vision and a 3D printer to robotically play a phone-based word game",
                link: "github.com/knosmos/robowordle",
                image: "wordle_thumb.png"
            },
            {
                name: "Ready Set Solve",
                description: "Playing the card game SET with computer vision, using homography perspective correction, contour moments, and Sobel edge detection",
                link: "github.com/knosmos/set-solve",
                image: "setsolve.png"
            },
            {
                name: "CMDPXL",
                description: "Terminal-based image and pixel art editor, featured by GitHub",
                link: "github.com/knosmos/cmdpxl",
                image: "cmdpxl.png"
            },
            {
                name: "su-don't-ku",
                description: "Lightweight realtime mobile-based computer vision Sudoku solver",
                link: "knosmos.github.io/sudontku",
                image: "sudontku.png"
            },
            /*
            {
                name: "Daybreak",
                description: "Play an AI hacking yourself out of a computer",
                link: "knosmos.github.io/daybreak",
                image: "daybreak.png"
            },*/
            {
                name: "Brownian Motion",
                description: "A collection of questionable pseudorandom creative writings",
                link: "knosmos.github.io/brownian",
                image: "brownian2.png"
            },
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
                name: "USACO",
                description: "Solutions and explanations for USA Computing Olympiad contest and training page problems",
                link: "knosmos.github.io/usaco",
                image: "usaco.png"
            },
            {
                name: "Scribblebot",
                description: "Contour-detecting autodraw bot to better mimic human drawing",
                link: "github.com/knosmos/scribblebot",
                image: "scribblebot.png"
            },
            /*
            {
                name: "Tres",
                description: "The classic online multiplayer card game ripoff",
                link: "knosmos.github.io/tres",
                image: "tres.png"
            },
            /*
            {
                name: "SudokuGen",
                description: "Sudoku puzzle PDF generator",
                link: "github.com/knosmos/sudoku-gen",
                image: "sudoku2.png"
            },*/
            {
                name: "Arbiter",
                description: "Hackathon judging system with ranking algorithm based on minimum feedback arc set problem and topological sorting",
                link: "github.com/knosmos/arbiter",
                image: "arbiter.png"
            },
        ]
    }
});

let exp = new Vue(
{
    el: '#experience-grid',
    data:
    {
        items: [
            {
                name: 'Princeton Soccer Robotics',
                subtitle: 'Captain',
                description: "As captain of PSR and its Lightweight Division team Radian, I integrate intelligent sensing and movement algorithms with real-world hardware to build autonomous soccer robots. We won 2nd place at the international Robocup World Championships, the best result for a USA team in at least five years.",
                link: 'soccer-robotics.github.io/',
                image: 'radian_team_2.jpg'
            },
            {
                name: 'Applied Computing and Multimedia Lab',
                subtitle: 'Research Intern',
                description: 'I\'m working on using semi-supervised techniques to help the diagnosis of respiratory diseases with the guidance of Prof. Ching-Chun Huang. "Semi-Supervised Pulmonary Auscultation Analysis with Cross Pseudo Supervision" was a best paper finalist at the 2023 IEEE MIT URTC.',
                link: 'jierueichang.github.io/assets/PulmonaryAuscultationPaper.pdf',
                image: 'research.png'
            },
            {
                name: 'Princeton Competitive Programming Team',
                subtitle: 'Co-Founder',
                description: "At PHSCPT I teach competitive programming to over 30 members each week in preparation for national and international coding tournaments. At the Lockheed Martin Code Quest we won 1st place in NY/NJ and placed 3rd internationally.",
                link: 'phscpt.github.io',
                image: 'cpt2.png'
            },
            {
                name: 'Princeton Autonomous Vehicle Engineering',
                subtitle: 'GPS/RC + Computer Vision Specialist',
                description: 'In Princeton University\'s PAVE team I build GPS/remote-control systems and design high-performance computer vision models for autonomous electric boat navigation.',
                link: 'princetonelectricspeedboating.com',
                image: 'pave_splash2.png'
            },
            {
                name: 'PHS Math Team',
                subtitle: 'Captain',
                description: "In Math Team, I teach combinatorics, work on challenging problems in individual and team settings, and participate in national competitions including ARML, HMMT, AMC, CMIMC and PUMaC. We placed 1st in the Team Round at PuMAC 2022.",
                link: 'sites.google.com/view/phsmathteam/home',
                image: 'math_TEMP.jpg'
            },
            {
                name: 'The Tower Newspaper',
                subtitle: 'Software Architect',
                description: 'I built and maintained PHS\'s online student newspaper with over 15k monthly views, and developed an automatic article uploading system to expedite publication turnaround.',
                image: 'tower_splash.png',
                link: 'towerphs.com'
            },
            {
                name: 'HackPHS 2022',
                subtitle: 'Tech Officer',
                description: "After winning HackPHS 2021, I served on the Organizing Committee for HackPHS 2022. I developed a judging system based on graph theory to create an unbiased ranking with a limited number of judges.",
                link: 'hackprincetonhs.github.io/hackphs2022/',
                image: 'hackphs.jpg'
            },
            {
                name: 'Program in Algebraic and Combinatorial Thinking',
                subtitle: 'Mentor',
                description: "I served as a mentor in PACT, a series of courses in theoretical computer science sponsored by the NSF. I graded problem sets and mentored students in combinatorics and graph theory.",
                link: 'algorithmicthinking.org/',
                image: 'pact.png'
            },
            /*
            {
                name: 'Maker Faire',
                description: "Demoed electronics projects at Maker Faire New York in <a href='https://makerfaire.com/maker/entry/63428/' style='display:inline-block;font-size:14pt'>2017</a> and <a href='https://makerfaire.com/maker/entry/67542/' style='display:inline-block;font-size:14pt'>2018</a>",
                link: 'makerfaire.com'
            },*/
            {
                name: 'Music After School',
                subtitle: 'Mentor',
                description: "I'm interested in the arts as well as the sciences, and I've tried to use my musical skills to help my community. For the past three years I've mentored violin for Music After School, an outreach program designed to give low-income students better access to music education.",
                image: 'music.jpg',
                link: 'princetonk12.org/academics/the-arts/music-after-school'
            },
            /*
            {
                name: 'Kickside Martial Arts',
                subtitle: 'Instructor',
                description: "Taught classes in martial arts while emphasizing the importance of discipline and self-control; reached rank of 2nd Dan Black Belt",
                link: 'kicksidema.com/'
            }*/
        ]
    }
});

let achievements = new Vue({
    el: '#achievements-grid',
    data: {
        items: [
            {
                name: "USA Computing Olympiad",
                description: "USACO Gold (Top 5% pre-college)",
            },
            {
                name: "2x AIME Qualifier",
                description: "In 2021 and 2022, qualified for the American Invitational Mathematics Examination (offered to top 2.5% of students)",
            },
            {
                name: "Lockheed Martin CodeQuest",
                description: "1st Place in the advanced division internationally, out of 200+ teams",
            },
            {
                name: "U.S. Robocup Junior",
                description: "1st Place in the 2023 Robocup Junior National Championship; selected as USA representative in international competition (Soccer Lightweight Division)",
            },
            {
                name: "Philadelphia Classic",
                description: "2nd place in UPenn's Philadelphia Classic, a competitive programming tournament",
            },
            {
                name: "HackPHS 2021",
                description: "1st Place and Best Hardware Hack at HackPHS 2021 with 300+ competitors",
            },
            {
                name: "PUMaC 2021",
                description: "1st in Team division, 8th in Number Theory at Princeton University Mathematics Competition",
            },

            {
                name: "Violin",
                description: "Winner of Achievement (2022), Scholarship (2017) and Concerto (2019) competitions at Westminster Conservatory",
            }
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

let about = new Vue({
    el: '#mit-text',
    data:
    {
        mitText: ""
    }
})

function rand(a) {
    return a[Math.floor(Math.random() * a.length)];
}

function updateMITText() {
    let locations = ["Maine", "Missouri", "Montana", "Madrid", "Malaysia", "Mexico", "Mongolia", "Madagascar", "Martian", "Marsupial", "Minneapolis"];
    let buildings = ["Institute", "Igloo", "Icehouse", "Infirmary", "Incubator", "Incinerator", "Inquisition"];
    let specialties = ["Trucking", "Telemarketing", "Trombones", "Topography", "Trainspotting", "Trigonometry", "Tailors", "Tetris", "Tofu", "Tetrapods", "Tetrahedra", "Teacups"];
    about.mitText = `${rand(locations)} ${rand(buildings)} of ${rand(specialties)}`;
}

updateMITText();

document.addEventListener("scroll", function() {
    if (document.getElementById("mit-text").getBoundingClientRect().bottom < 0 
        || document.getElementById("mit-text").getBoundingClientRect().top > window.innerHeight) {
        updateMITText();
    }
});