//berg2
let berg;
let vid;
let vid2;


//Data
let table;
let url = "https://raw.githubusercontent.com/Princeton-CDH/playingwithdata/master/data/climate/annual_temperature.csv";

function preload() {
  berg = loadModel("berg13.obj", true);

  table = loadTable(url,"csv","header");

}

function setup() {
  createCanvas(550, 500, WEBGL);
   strokeWeight(.1);
  //fill (0);
  
  print(table.getRowCount() + ' total rows in table');
  print(table.getColumnCount() + ' total columns in table');

  vid = createVideo('Sila2_2_1_1.mp4');
  vid.loop();
  vid.elt.muted = true;
  vid.hide();
  
  
  vid2 =  createVideo('vid3_2.mp4');
  vid2.loop();
  vid2.elt.muted = true;
  vid2.hide();
  
   
}

let maxYear = 0;
  


function draw() {
  background(0);
  //ambientLight(100);
  
    scale(1.6);
  rotateY(frameCount * 0.0004);

  model(berg);
  orbitControl(5);
  rotateZ(PI);
  normalMaterial();
  texture(vid2);
  textureMode(NORMAL);


  
   translate(-30, -30, -30);
  //push(); 
  box(1400, 1300, 1500);
  //scale(2);
    textureMode(NORMAL);
  texture(vid);
 //pop(); 
  
  
  
    let temperatures = table.getColumn(2);
  drawColor(temperatures.slice(1,maxYear));
  
  if (maxYear < temperatures.length) {
  	maxYear = maxYear + 1; 
  }
}

function drawColor(data) {
  let x = 0;
  
  // loop through temperatures
  for(let t of data) {
    
    // map temperature to color
    let col = map(t, min(data), max(data), 0,  255);

        stroke(col, 0, 60, (255-col)); 
    //line(x,0,x,600);

    x = x + 3;
  }

}

//bring in live data; learn material properties; rerender video to shift between arctic & antarctica; move vertices; smooth the cursur movement; lighting; camera
