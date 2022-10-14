/* GENERAL */

let w = window.innerWidth * 0.97;
let h = window.innerHeight;

/* CONWAY */

let gridCntW = w > 800 ? 120:100;

let gridSize = Math.round(w/gridCntW);
let gridCntH = Math.round(h/gridSize);

function makeGrid() {
    let grid = new Array(gridCntH);
    for (var i = 0; i < grid.length; i++) {
        grid[i] = new Array(gridCntW).fill(0);
    }
    return grid;
}
let grid;

let pattern = bi;

let patternX = 40;
let patternY = 20;

function setPattern() {
    for (let y=0; y<pattern.length; y++) {
        for (let x=0; x<pattern[0].length; x++) {
            grid[y+patternY][x+patternX] = pattern[y][x];
        }
    }    
}

function setup() {
    let cvas = createCanvas(w, h);
    cvas.parent("canvas-container");
    fill("#084764");
    stroke("#001322");
    windowResized();
}

function conway() {
    //background("#0e0118");
    clear();
    stroke("#001322");
    strokeWeight(1);

    // draw
    for (let y = 3; y<gridCntH-3; y++) {
        for (let x = 3; x<gridCntW-3; x++) {
            if (grid[y][x] == 1) {
                rect(x*gridSize, y*gridSize, gridSize, gridSize);
            }
        }
    }

    // update
    newGrid = makeGrid();
    for (let y = 1; y<gridCntH-1; y++) {
        for (let x = 1; x<gridCntW-1; x++) {
            // count neighbors
            let neighbors = 0;
            for (let i=-1; i<=1; i++) {
                for (let j=-1; j<=1; j++) {
                    if (i != 0 || j != 0) {
                        if (grid[y+i][x+j] == 1) {
                            neighbors ++;
                        }
                    }
                }
            }
            
            // update new grid
            if (grid[y][x] == 1) {
                if (neighbors == 2 || neighbors == 3) {
                    newGrid[y][x] = 1;
                }
            }
            else if (neighbors == 3) {
                newGrid[y][x] = 1;
            }
        }
    }
    grid = newGrid;
    frameRate(30);
}

/* GRAPH */
let color = [8, 71, 100];
let init_pts = 25;
let pts = [];

function mitchell() {
    // mitchell best-candidate algorithm
    for (let i=0; i<init_pts; i++) {
        let candidates = [];
        for (let j=0; j<10; j++) {
            candidates.push([Math.random() * w, Math.random() * h, Math.random() * 10 - 5, Math.random() * 10 - 5]);
        }
        let best = candidates[0];
        let best_dist = 0;
        for (let j=0; j<candidates.length; j++) {
            let dist = Infinity;
            for (let pt of pts) {
                dist = Math.min(dist, Math.sqrt((candidates[j][0] - pt[0])**2 + (candidates[j][1] - pt[1])**2));
            }
            if (dist > best_dist) {
                best_dist = dist;
                best = candidates[j];
            }
        }
        pts.push(best);
    }
}

mitchell();

function graph() {
    clear();
    strokeWeight(w/500);
    // draw lines
    for (let i=0; i<pts.length; i++) {
        for (let j=i+1; j<pts.length; j++) {
            let dist = Math.sqrt((pts[i][0] - pts[j][0]) ** 2 + (pts[i][1] - pts[j][1]) ** 2);
            stroke(color[0], color[1], color[2], 255 / ((dist-1)/(w/10) + 0.0001));
            line(pts[i][0], pts[i][1], pts[j][0], pts[j][1]);
        }
    }
    // draw points
    for (let i=0; i<pts.length; i++) {
        stroke(color[0], color[1], color[2], 255);
        circle(pts[i][0], pts[i][1], w/100);
    }
    // update points
    for (let i=0; i<pts.length; i++) {
        pts[i][0] += pts[i][2];
        pts[i][1] += pts[i][3];
        if (pts[i][0] < 0 || pts[i][0] > w) {
            pts[i][2] *= -1;
        }
        if (pts[i][1] < 0 || pts[i][1] > h) {
            pts[i][3] *= -1;
        }
    }
    frameRate(30);
}

function mousePressed() {
    if (viz == -1) {
        pts.push([mouseX, mouseY, Math.random() * 10 - 5, Math.random() * 10 - 5]);
        pts.shift();
    }
}

let viz = -1;
function toggleViz() {
    viz *= -1;
    if (viz == 1) {
        document.getElementById("toggle-img").src = "img/graph.png";
    }
    else {
        document.getElementById("toggle-img").src = "img/conway.png";
    }
}

function draw() {
    if (viz == 1) {
        conway();
    }
    else {
        graph();
    }
}

function windowResized() {
    w = window.innerWidth * 0.97;
    h = window.innerHeight;
    resizeCanvas(w, h);

    gridCntW = w > 800 ? 120:80;
    gridSize = Math.round(w/gridCntW);
    gridCntH = Math.round(h/gridSize);
    grid = makeGrid();
    
    if (w > 1000) {
        pattern = bi;
        patternX = 40;
    }
    else {
        pattern = gosper;
        patternX = 10;
    }
    setPattern();

    pts = [];
    mitchell();
}