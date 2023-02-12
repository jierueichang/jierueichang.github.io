Vue.component('panel-list', {
    props: ['panels'],
    template: `
    <div class="card-grid">
        <div class="card" v-for="panel in panels">
            <div class="card-img" v-if="panel.image" v-bind:style="'background-image:url(img/' + panel.image + ')'"></div>
            <div class="card-body">
                <a v-bind:href="'http://'+panel.link" target="_blank" v-if="panel.link">{{ panel.name }}</a>
                <a v-if="!panel.link">{{ panel.name }}</a>
                <p v-if="panel.subtitle" style="color: gray; margin: 5px 0px">{{ panel.subtitle }}</p>
                <p v-html = "panel.description"></p>
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
                name: "CPT Practice Platform",
                description: "Platform for practicing competitive programming with 1000+ solution submissions and 15k+ monthly page views",
                link: "phscpt.pythonanywhere.com",
                image: "cptplatform.png"
            },
            {
                name: "Radian",
                description: "2nd Place at Robocup Junior USA: autonomous soccer robot with IR ball tracking, PID angle correction, scoring algorithms, line avoidance, and computer vision-based goal detection",
                image: "radian.png"
            },
            {
                name: "USACO",
                description: "Solutions and explanations for USA Computing Olympiad contest and training page problems",
                link: "knosmos.github.io/usaco",
                image: "usaco.png"
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
                name: "Daybreak",
                description: "Play an AI hacking yourself out of a computer",
                link: "knosmos.github.io/daybreak",
                image: "daybreak.png"
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
                name: "Scribblebot",
                description: "contour-detecting autodraw bot",
                link: "github.com/knosmos/scribblebot",
                image: "scribblebot.png"
            },
            {
                name: "CMDPXL",
                description: "Terminal-based image editor, featured by GitHub",
                link: "github.com/knosmos/cmdpxl",
                image: "cmdpxl.png"
            },
            {
                name: "Tres",
                description: "The classic online multiplayer card game ripoff",
                link: "knosmos.github.io/tres",
                image: "tres.png"
            },
            {
                name: "SudokuGen",
                description: "Sudoku puzzle PDF generator",
                link: "github.com/knosmos/sudoku-gen",
                image: "sudoku2.png"
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
                name: 'PHS Competitive Programming Team',
                subtitle: 'Co-Founder',
                description: "Teach competitive programming to 15 members weekly and compete in national tournaments",
                link: 'phscpt.github.io'
            },
            /*
            {
                name: 'Applied Computing and Multimedia Lab',
                subtitle: 'Special Research Group Member',
                description: 'Research and develop models for anomaly detection in audio data using normalizing flow- and autoencoder-based neural network architectures at National Yang Ming Chiao Tung University',
                link: 'acm.cs.nctu.edu.tw/'
            },
            {
                name: 'Princeton Autonomous Vehicle Engineering',
                subtitle: 'Computer Vision Specialist, Systems Engineer',
                description: 'Design computer vision models for autonomous electric boat navigation at Princeton University',
            },*/
            {
                name: 'Princeton Soccer Robotics',
                subtitle: 'Vice President, Software Lead',
                description: "Integrate complex hardware and software, design intelligent robot sensor and movement algorithms",
                link: 'soccer-robotics.github.io/'
            },
            {
                name: 'PHS Math Team',
                description: "Solve challenging problems in individual and team settings and participate in national competitions including MMATHS, AMC, CMIMC and PUMaC",
                link: 'sites.google.com/view/phsmathteam/home'
            },
            {
                name: 'HackPHS 2022',
                subtitle: 'Tech Officer',
                description: "Created website to attract 200+ hackathon participants from New Jersey, New York, and Maryland; developed minimum arc feedback set and topological-sort based judging system to create an unbiased ranking with a limited number of judges",
                link: 'hackphs.tech'
            },
            {
                name: 'Program in Algebraic and Combinatorial Thinking',
                subtitle: 'Student, Mentor',
                description: "Accepted to PACT, a series of courses in theoretical computer science sponsored by the NSF; graded problem sets and mentored students",
                link: 'algorithmicthinking.org/'
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
                description: "Teach music theory and violin to elementary school students"
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
                description: "In 2021 and 2022, I qualified for the American Invitational Mathematics Examination (offered to top 2.5% of students)",
            },
            {
                name: "Lockheed Martin CodeQuest",
                description: "2nd Place in the advanced division, out of 200+ teams",
            },
            {
                name: "U.S. Robocup Junior",
                description: "2nd Place in the 2022 Robocup Junior National Championship (Soccer Lightweight Division)",
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