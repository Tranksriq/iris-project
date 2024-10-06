let song;
let playing = false; 
let fft; 
let a = 0; 
let b = 0; 
let fr = 60;

function setup() {
  let canvas = createCanvas(500, 500); 
  canvas.parent('canvasContainer'); 
  background('black');
  layer = createGraphics(width, height);
  fft = new p5.FFT(0, 256); 
  frameRate(fr);

  let fileInput = document.getElementById('fileInput');
  fileInput.addEventListener('change', function(event) { 
    handleFile(event.target.files[0]); 
  });
}

function draw() {
  if (song && song.isLoaded()) { 
    background(0);
    
    layer.noFill(); 
    layer.colorMode(RGB);
    
    let spectrumA = fft.analyze(); 
    let spectrumB = spectrumA.reverse();
    spectrumB.splice(0, 40); 
    
    push(); 
    translate(250, 250);
    noFill(); 
    stroke('white');
    
    beginShape();
    for (let i = 0; i < spectrumB.length; i++) { 
      let amplitude = spectrumB[i];
      let x = map(amplitude, 0, 256, -2, 2);
      let y = map(i, 0, spectrumB.length, 30, 215);
      vertex(x, y);
    }
    endShape();
    
    pop(); 
    push(); 
    translate(width / 2, height / 2); 
    rotate(radians(a)); 
    
    layer.push();
    layer.translate(width / 2, height / 2); 
    layer.rotate(radians(-a)); 
    
    for (let i = 0; i < spectrumB.length; i++) { 
      layer.strokeWeight(0.018 * spectrumB[i]); 
      layer.stroke(255, 255, 255, spectrumB[i] / 20); 
      layer.line(0, i, 0, i); 
    }
    
    layer.pop(); 
    
    image(layer, -width / 2, -height / 2);
    pop(); 
    if (playing) a += b; 
  }
}

function handleFile(file) {
  const supportedAudioTypes = ['audio/mpeg', 'audio/mp3', 'audio/wav', 'audio/mp4'];
  
  if (supportedAudioTypes.includes(file.type)) {  
    song = loadSound(URL.createObjectURL(file), () => { 
      fft.setInput(song); 
      a = 360 / (song.duration() * fr); 
      b = a; 
    });
  } else {
    alert("Formato de arquivo não suportado. Por favor, escolha um arquivo de áudio válido.");
  }
}

function toggleAudio() {
  if (song && song.isLoaded()) { 
    if (!playing) { 
      song.play();
      document.getElementById("audio").innerText = "Pausar"; 
    } else { 
      song.pause(); 
      document.getElementById("audio").innerText = "Play"; 
    }
    playing = !playing; 
  }
}

function saveSketch() {
  saveCanvas('iris', 'png');
}