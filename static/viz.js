let w = window.innerWidth * 0.97;
let h = window.innerHeight;

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

function draw() {
    background("#0e0118");

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
}