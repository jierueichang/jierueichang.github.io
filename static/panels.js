Vue.component('panel-list', {
    props: ['panels'],
    template: `
    <div class="card-grid">
        <div class="card" v-for="panel in panels">
            <div class="card-img" v-if="panel.image" v-bind:style="'background-image:url(img/' + panel.image + ')'"></div>
            <div class="card-body">
                <a v-bind:href="'https://'+panel.link" target="_blank">{{ panel.name }}</a>
                <p>{{ panel.description }}</p>
            </div>
        </div>
    </div>`
});

let app1 = new Vue(
{
    el: '#projects-grid',
    data:
    {
        projects: [
            {
                name: "USACO",
                description: "Solutions and explanations for competitive programming problems",
                link: "knosmos.github.io/usaco",
                image: "usaco.png"
            },
            {
                name: "Set-Solve",
                description: "Playing the card game SET with computer vision",
                link: "github.com/knosmos/set-solve",
                image: "setsolve.png"
            },
            {
                name: "SudokuGen",
                description: "Sudoku puzzle PDF generator",
                link: "github.com/knosmos/sudoku-gen",
                image: "sudoku2.png"
            },
            {
                name: "TL;DS",
                description: "Math solver with OCR and handwriting capability",
                link: "github.com/knosmos/tlds",
                image: "tlds.jpg"
            },
            {
                name: "Rhythmvision",
                description: "Rhythm game with pose estimation",
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
                description: "Terminal-based image editor",
                link: "github.com/knosmos/cmdpxl",
                image: "cmdpxl.png"
            },
            {
                name: "Tres",
                description: "The classic online multiplayer card game ripoff",
                link: "knosmos.github.io/tres",
                image: "tres.png"
            }
        ]
    }
});

let app2 = new Vue(
{
    el: '#experience-grid',
    data:
    {
        items: [
            {
                name: 'PHS Algorithms Club',
                description: "Teach competitive programming to 15 members weekly and compete in national tournaments"
            },
            {
                name: 'Princeton Soccer Robotics',
                description: "Integrate complex hardware and software, design intelligent robot sensor and movement algorithms"
            },
            {
                name: 'PHS Math Team',
                description: "As a member of the Math Team, I solve challenging problems in individual and team settings and participate in national competitions including MMATHS, AMC and CMIMC"
            },
            {
                name: 'Program in Algebraic and Combinatorial Thinking',
                description: "I was selected for PACT, a series of courses in theoretical computer science. I also mentored beginner students on problem sets."
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