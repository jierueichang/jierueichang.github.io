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

Vue.component('item-showcase', {
    props: ['items'],
    template: `
    <div class="showcase-grid">
        <div v-for="(item, index) in items" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            <div class="showcase-item" v-bind:class="{'reverse': index % 2 == 1}">
                <div class="showcase-img" v-if="item.image" v-bind:style="'background-image:url(img/' + item.image + ')'"></div>
                <div class="showcase-body">
                    <a v-bind:href="'http://'+item.link" target="_blank" v-if="item.link"><h3>{{ item.name }}</h3></a>
                    <a v-if="!item.link"><h3>{{ item.name }}</h3></a>
                    <p v-if="item.subtitle" style="color: gray; margin: 5px 0px">{{ item.subtitle }}</p>
                    <p v-html = "item.description"></p>
                    <div v-if="item.links">
                        <a v-for="link in item.links" v-bind:href="'http://'+link.link" target="_blank" class="showcase-link">
                            {{ link.name }}
                            <span>&#8599;</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>`
});

let proj_showcase = new Vue(
{
    el: '#projects-showcase',
    data:
    {
        items: [
            // {
            //     name: "Flying Programmable Gate Array",
            //     subtitle: "FPGA on a drone",
            //     description: "I'm designing and building a custom flight computer based around a Xilinx Spartan-7 FPGA. The system features onboard sensor fusion, closed-loop control, and optical flow for lateral position tracking. The FPGA architecture is optimized for low-latency real-time processing, with dedicated hardware modules for sensor interfacing and control algorithms.",
            //     link: "github.com/knosmos/fpga-drone",
            //     image: "fpga-drone.jpg",
            // },
            {
                name: "An Image is Worth 16×16 Tiles",
                subtitle: "Multicore parallel computer vision accelerator",
                description: "We developed a quadcore processor specialized for computer vision workloads. It uses parallel processor cores, takes advantage of massively parallel combinational memory reads, and exploits parallelizable properties of image processing tasks. We implemented this system on a Spartan-7 FPGA and validated performance on multiple computer vision pipelines, demonstrating ~17x speedup.",
                link: "github.com/knosmos/peep",
                image: "peep.png",
                links: [
                    {
                        name: "Project Repository",
                        link: "github.com/knosmos/peep"
                    },
                    {
                        name: "Technical Paper",
                        link: "jierueichang.github.io/assets/peep.pdf"
                    }
                ]
            },
            {
                name: "MapIT",
                subtitle: "Mapping MIT's many labyrinths",
                description: "As part of the AppDev@MIT initiative, I lead development of a room-scale searchable indoor map of the entire MIT campus. It's used by hundreds of members of the MIT community, leveraging computer vision to analyze 900 floorplans and 40000+ rooms. We built it with Vite/Express/React, and deployed it with Jenkins and Docker on AWS EC2.",
                link: "mitmapit.org",
                image: "mapit-2.png",
                links: [
                    {
                        name: "Project Website",
                        link: "mitmapit.org"
                    },
                    {
                        name: "Developer Blog",
                        link: "appdev-blog.vercel.app/posts/mapit-labeling"
                    }
                ]
            },
            {
                name: "Wirehead",
                subtitle: "2nd Place, HackMIT",
                description: "Built in 24 hours, Wirehead is an end-to-end PCB design automation tool with LLM RAG datasheet analyses and an AI-informed constrained mixed-integer linear programming layout engine. It's designed to drastically reduce the time required to design simple custom PCBs for hardware hackers and embedded systems engineers.",
                link: "plume.hackmit.org/project/wmcby-lozhz-hqeuj-njzoc",
                image: "hackmit_win.jpg",
                links: [
                    {
                        name: "Project Page",
                        link: "plume.hackmit.org/project/wmcby-lozhz-hqeuj-njzoc"
                    },
                    {
                        name: "Project Repository",
                        link: "github.com/knosmos/wirehead"
                    }
                ]
            },
            {
                name: "Poser",
                subtitle: "Robotic manipulation of jointed objects",
                description: "We developed a bimanual robotic system capable of manipulating jointed objects, such as articulated humanoid mannequins. It runs RGBD pose estimation, antipodal grasp computation, compliant controllers, and trajectory optimization algorithms to execute precise manipulation tasks.",
                image: "poser.png",
                links: [
                    {
                        name: "Technical Paper",
                        link: "jierueichang.github.io/assets/poser.pdf"
                    },
                    {
                        name: "Project Video",
                        link: "youtube.com/watch?v=0zt8CV0h6kI"
                    }
                ]
            },
            {
                name: "TESS is LIT",
                subtitle: "Exoplanet triage with few-shot transformers",
                description: "Vision transformers typically require millions of training examples. This makes them difficult to apply to tasks like TESS exoplanet detection, where only a tiny fraction of the training data may contain objects of interest. We propose Loss Informed Tuning (LIT), a novel fine-tuning method that leverages reconstruction loss as a signal to improve few-shot learning performance.",
                image: "tess-data.png",
                links: [
                    {
                        name: "Writeup",
                        link: "knosmos.github.io/tess-is-lit"
                    }
                ]
            },
            {
                name: "Radian Mk II",
                subtitle: "2nd Place, Robocup World Championships",
                description: "An autonomous soccer robot with realtime omnidirectional infrared ball tracking, precision scoring algorithms, and Bluetooth-enabled multi-agent strategizing and coordination.",
                image: "radian_2023.jpg",
                link: "soccer-robotics.github.io",
                links: [
                    {
                        name: "Team Website",
                        link: "soccer-robotics.github.io"
                    },
                    {
                        name: "Technical Paper",
                        link: "soccer-robotics.github.io/assets/Radian_2023_TDP.pdf"
                    }
                ]
            },
        ]
    }
});

let proj = new Vue(
{
    el: '#projects-grid',
    data:
    {
        projects: [
            {
                name: "CPT Practice Platform",
                description: "Platform for hosting Kahoot-style competitive programming tournaments with custom problems, 1000+ solution submissions, and 15k+ monthly page views",
                link: "phscpt.pythonanywhere.com",
                image: "cptplatform.png"
            },
            {
                name: "Robowordle",
                description: "Using computer vision and a 3D printer to robotically play a phone-based word game",
                link: "github.com/knosmos/robowordle",
                image: "wordle_thumb.png"
            },
            // {
            //     name: "Ready Set Solve",
            //     description: "Playing the card game SET with computer vision, using homography perspective correction, contour moments, and Sobel edge detection",
            //     link: "github.com/knosmos/set-solve",
            //     image: "setsolve.png"
            // },
            {
                name: "CMDPXL",
                description: "Terminal-based image and pixel art editor, featured by GitHub",
                link: "github.com/knosmos/cmdpxl",
                image: "cmdpxl.png"
            },
            // {
            //     name: "a-phrase-ia",
            //     description: "HackMIT Best Use of Open-Source GenAI: natural language communication board for speech-impaired patients",
            //     link: "ballot.hackmit.org/project/jeorl-ozixh-eoobu-dsmir",
            //     image: "hackmit.jpg"
            // },
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
            /*{
                name: "Brownian Motion",
                description: "A collection of questionable pseudorandom creative writings",
                link: "knosmos.github.io/brownian",
                image: "brownian2.png"
            },*/
            {
                name: "Stack Overflow",
                description: "Self-driving block-stacking robot: winner of MIT Mobile Autonomous Systems Laboratory 2025",
                link: "maslab.mit.edu/2025/wiki/team08",
                image: "maslab.png"
            },
            /* {
                name: "TL;DS",
                description: "Winner of HackPHS 2021: Math solver with OCR and handwriting capability",
                link: "github.com/knosmos/tlds",
                image: "tlds.jpg"
            }, */
            {
                name: "Rhythmvision",
                description: "Rhythm game with browser ML-driven pose estimation",
                link: "knosmos.github.io/rhythmvision",
                image: "rhythmvision3.png"
            },
            {
                name: "Hummingbird",
                description: "A custom STM32-based flight controller for autonomous gliders",
                link: "github.com/knosmos/hummingbird",
                image: "hummingbird-pcb.jpg"
            },
            {
                name: "Flow Freer",
                description: "World's first browser-based Flow Free solver: built using computer vision, SAT, and heuristic search",
                link: "knosmos.github.io/flowfreer",
                image: "flowfree.png"
            },
            {
                name: "DC3Modifier",
                description: "One-click machine learning crystal classification for atomistic simulations",
                link: "github.com/DC3-Freitas/DC3-package",
                image: "dc3-ovito.png"
            },
            /*{
                name: "USACO",
                description: "Solutions and explanations for USA Computing Olympiad contest and training page problems",
                link: "knosmos.github.io/usaco",
                image: "usaco.png"
            },*/
            /*{
                name: "Scribblebot",
                description: "Contour-detecting autodraw bot to better mimic human drawing",
                link: "github.com/knosmos/scribblebot",
                image: "scribblebot.png"
            },*/
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
            /* {
                name: "REXplorer",
                description: "Timeline viewer for MIT Residence Exploration 2024 with MiniLM AI-powered search",
                link: "knosmos.github.io/rexplorer",
                image: "rex.jpg"
            }, */
            /*
            {
                name: "Arbiter",
                description: "Hackathon judging system with ranking algorithm based on minimum feedback arc set problem and topological sorting",
                link: "github.com/knosmos/arbiter",
                image: "arbiter.png"
            },
            */
        ]
    }
});

let exp_showcase = new Vue(
{
    el: '#experience-showcase',
    data:
    {
        items: [
            {
                name: 'Freitas Research Group',
                subtitle: 'Undergraduate Researcher',
                description: "I leverage E(3)-equivariant graph convolutional neural networks to characterize chromium diffusion rates in advanced metal 3D printing, and wield SLURM to run large-scale simulations on high-performance compute clusters. Pictured is a visualization of our GNN-based phase prediction and interface tracking system. Our prior work on graph neural networks for crystal structure classification ran 10x faster and with 11% higher accuracy than existing data-driven methods.",
                link: 'freitas.mit.edu',
                image: 'freitas-crystal-growth.gif',
                links: [
                    {
                        name: "Group Website",
                        link: "freitas.mit.edu"
                    },
                ]
            },
            {
                name: "Space Propulsion Laboratory",
                subtitle: "Software Engineer",
                description: "I develop mission control software for STEP-1, a CubeSat demonstrator of a novel electrospray propulsion engine. Closer to the hardware, I'm developing high-redundancy firmware for STEP-1's onboard payload controller to interface with sensors and propulsion systems.",
                link: "spl.mit.edu",
                image: "step1.png"
            },
            {
                name: 'World Wildlife Fund',
                subtitle: 'AI/ML Intern',
                description: "I worked with WWF's Senior Director of Innovation Startups to build the world's first ML model for projecting climate impacts on global livestock production. Alongside WWF's lead data scientist, I also developed GCP cloud infrastructure with Terraform, pipelining underwater sensor data from across Mexico for a Google-backed mangrove monitoring project.",
                link: 'wwf.panda.org/',
                image: 'wwf2.jpg',
                links: [
                    {
                        name: "Article in MIT PKG Center",
                        link: "pkgcenter.mit.edu/2025/09/19/social-impact-internships-jieruei-chang-28/"
                    },
                    {
                        name: "Technical Report",
                        link: "jierueichang.github.io/assets/cattlelogue.pdf"
                    }
                ]
            },
            {
                name: 'MIT Rocket Team',
                subtitle: 'Avionics Lead',
                description: "I lead a team of four in the development of an STM32 flight computer and firmware for SPHINX, an autonomous VTVL propulsive lander pathfinder. I also design distributed extensible CANbus sensor/actuator networks for control and instrumentation on a thrust-vectoring liquid-fueled engine.",
                link: 'rocketry.mit.edu',
                image: 'rocket-team-TEMP.webp'
            },
            {
                name: 'Appier',
                subtitle: 'Software Engineering Intern (Backend)',
                description: "On Appier's AIXON Backend Engineering team, I leveraged zero-shot machine learning, computer vision, and retrieval-augmented generation pipelines to build website characterization systems. I gained lots of free snacks and a taste of work in a fast-paced industry environment.",
                link: 'www.appier.com/en/products/aixon',
                image: 'appier2.jpg',
                links: [
                    {
                        name: "Final Presentation",
                        link: "jierueichang.github.io/assets/appier.pdf"
                    }
                ]
            },
            {
                name: 'Applied Computing and Multimedia Lab',
                subtitle: 'Research Intern',
                description: 'I worked on semi-supervised techniques to help diagnose respiratory diseases under the guidance of Prof. Ching-Chun Huang. Leveraging time-series RNNs and twin-network cross supervision, my model could produce accurate respiratory sound classifications even if only 1/16 of its dataset was labeled. "Semi-Supervised Pulmonary Auscultation Analysis with Cross Pseudo Supervision" was a best paper finalist at the 2023 IEEE MIT Undergraduate Research Technology Conference.',
                link: 'jierueichang.github.io/assets/PulmonaryAuscultationPaper.pdf',
                image: 'research.png',
                links: [
                    {
                        name: "Paper",
                        link: "ieeexplore.ieee.org/document/10535006"
                    },
                ]
            }
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
                name: 'MIT Arcturus',
                subtitle: 'Software Engineer',
                description: "On the autonomy team, I led the development of a LiDAR-based autonomous boat docking system using point cloud registration, with ROS integration and Gazebo simulations.",
                link: 'arcturus.mit.edu',
                image: 'arcturus.jpg'
            },
            {
                name: 'Design Build Fly',
                subtitle: 'Avionics Lead',
                description: "On MIT's aircraft build team, I worked on avionics systems, designed a custom STM32-based flight controller for autonomous navigation, and got carbon fiber dust all over the shop floor.",
                link: 'web.mit.edu/dbf/www/',
                image: 'dbf_proto2.jpg'
            },
            // {
            //     name: 'Appier',
            //     subtitle: 'Software Engineering Intern',
            //     description: "On Appier's AIXON Backend Engineering team, I leveraged zero-shot machine learning, computer vision, and retrieval-augmented generation pipelines to build website characterization systems. I gained lots of free snacks and a taste of work in a fast-paced industry environment.",
            //     link: 'www.appier.com/en/products/aixon',
            //     image: 'appier2.jpg'
            // },
            // {
            //     name: 'Princeton Soccer Robotics',
            //     subtitle: 'Captain',
            //     description: "As captain of PSR and its Lightweight Division team Radian, I integrated intelligent sensing and movement algorithms with real-world hardware to build autonomous soccer robots. We won 2nd place at the international Robocup World Championships, the best result for a USA team in at least five years.",
            //     link: 'soccer-robotics.github.io/',
            //     image: 'radian_team_2.jpg'
            // },
            // {
            //     name: 'Applied Computing and Multimedia Lab',
            //     subtitle: 'Research Intern',
            //     description: 'I worked on semi-supervised techniques to help diagnose respiratory diseases with the guidance of Prof. Ching-Chun Huang. "Semi-Supervised Pulmonary Auscultation Analysis with Cross Pseudo Supervision" was a best paper finalist at the 2023 IEEE MIT URTC.',
            //     link: 'jierueichang.github.io/assets/PulmonaryAuscultationPaper.pdf',
            //     image: 'research.png'
            // },
            // {
            //     name: 'Princeton Competitive Programming Team',
            //     subtitle: 'Co-Founder',
            //     description: "At PHSCPT, I taught competitive programming to over 30 members each week in preparation for national and international coding tournaments. At the Lockheed Martin Code Quest we won 1st place in NY/NJ and placed 3rd internationally.",
            //     link: 'phscpt.github.io',
            //     image: 'cpt2.png'
            // },
            {
                name: 'Princeton Autonomous Vehicle Engineering',
                subtitle: 'GPS/RC + Computer Vision Specialist',
                description: 'On Princeton University\'s PAVE team, I built GPS/remote-control systems and designed high-performance computer vision models for autonomous electric boat navigation.',
                link: 'princetonelectricspeedboating.com',
                image: 'pave_splash2.png'
            },
            // {
            //     name: 'PHS Math Team',
            //     subtitle: 'Captain',
            //     description: "In Math Team, I taught combinatorics, worked on challenging problems in individual and team settings, and participated in national competitions including ARML, HMMT, AMC, CMIMC and PUMaC. We placed 1st in the Team Round at PUMaC 2022.",
            //     link: 'sites.google.com/view/phsmathteam/home',
            //     image: 'math.jpg'
            // },
            // {
            //     name: 'The Tower Newspaper',
            //     subtitle: 'Software Architect',
            //     description: 'I built and maintained PHS\'s online student newspaper with over 15k monthly views, and developed an automatic article uploading system to expedite publication turnaround.',
            //     image: 'tower_splash.png',
            //     link: 'towerphs.com'
            // },
            // {
            //     name: 'HackPHS 2022',
            //     subtitle: 'Tech Officer',
            //     description: "After winning HackPHS 2021, I served on the Organizing Committee for HackPHS 2022. I developed a judging system based on graph theory to create an unbiased ranking with a limited number of judges.",
            //     link: 'hackprincetonhs.github.io/hackphs2022/',
            //     image: 'hackphs.jpg'
            // },
            // {
            //     name: 'Program in Algebraic and Combinatorial Thinking',
            //     subtitle: 'Mentor',
            //     description: "I served as a mentor in PACT, a series of courses in theoretical computer science sponsored by the NSF. I graded problem sets and mentored students in combinatorics and graph theory.",
            //     link: 'algorithmicthinking.org/',
            //     image: 'pact.png'
            // },
            /*
            {
                name: 'Maker Faire',
                description: "Demoed electronics projects at Maker Faire New York in <a href='https://makerfaire.com/maker/entry/63428/' style='display:inline-block;font-size:14pt'>2017</a> and <a href='https://makerfaire.com/maker/entry/67542/' style='display:inline-block;font-size:14pt'>2018</a>",
                link: 'makerfaire.com'
            },*/
            /*{
                name: 'Music After School',
                subtitle: 'Mentor',
                description: "I'm interested in the arts as well as the sciences, and I've tried to use my musical skills to help my community. For the past three years I mentored violin for Music After School, an outreach program designed to give low-income students better access to music education.",
                image: 'music.jpg',
                link: 'princetonk12.org/academics/the-arts/music-after-school'
            },*/
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

let classes = new Vue(
    {
        el: '#classes',
        data: {
            classes: [{
                num: "6.2080",
                name: "Semiconductor Electronic Circuits",
                desc: "Chip design class. Design, analysis, and layout of analog circuits. Diodes, transistors, amplifiers, op-amps."
            },
            {
                num: "6.2600",
                name: "Micro/Nano Processing Technology",
                desc: "Wet and dry etching, chemical and physical deposition, lithography, thermal processes, and device and materials characterization. You get to work in the MIT.nano cleanroom omg."
            },
            {
                num: "6.5951",
                name: "Secure Hardware Design",
                desc: "Microarchitectural timing side channels, speculative execution attacks, Rowhammer, Trusted Execution Environment, physical attacks, hardware support for software security, and verification of digital systems."
            },
            {
                num: "6.8300",
                name: "Advances in Computer Vision",
                desc: "Image formation, representation theory for vision, classic multi-view geometry, multi-view geometry in the age of deep learning, differentiable rendering, neural scene representations, correspondence estimation, optical flow computation, and point tracking."
            },
            {
                num: "3.985",
                name: "Archaeological Science",
                desc: "Archaeology as an anthropological science. 14C dating, ice core and palynological analysis, GIS and other remote sensing techniques for site location, organic residue analysis."
            }]
        },
    }
)

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
let textHidden = false;

document.addEventListener("scroll", function() {
    if ((document.getElementById("about").getBoundingClientRect().bottom < 0 
        || document.getElementById("mit-text").getBoundingClientRect().top > window.innerHeight)
    ) {
        if (!textHidden) {
            updateMITText();
            textHidden = true;
        }
    }
    else {
        textHidden = false;
    }
});