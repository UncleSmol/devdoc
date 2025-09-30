import React, { useRef, useEffect } from "react";

const SpaceBackground = () => {
  // 1. Refs for the two main animated canvases
  const starsCanvasRef = useRef(null);
  const milkyWayCanvasRef = useRef(null);

  useEffect(() => {
    const canvas = starsCanvasRef.current;
    const ctx = canvas.getContext("2d");
    const canvasMw = milkyWayCanvasRef.current;
    const ctxMw = canvasMw.getContext("2d");

    if (!canvas || !canvasMw) return;

    // To ensure we use native resolution of screen
    const dpr = window.devicePixelRatio || 1;
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Set canvas dimensions with DPR scaling for crisp graphics
    const setCanvasSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      canvasMw.width = width * dpr;
      canvasMw.height = height * dpr;
      ctxMw.scale(dpr, dpr);

      // Re-initialize stars and redraw milky way on resize
      init();
    };

    // Constants for the behavior of the model (from original JS)
    const sNumber = 600; // number of Stars
    const sSize = 0.3; // minimum size of Star
    const sSizeR = 0.6; // randomness of the size of Stars
    const sAlphaR = 0.5; // randomness of alpha for stars
    const shootingStarDensity = 0.01;
    const shootingStarBaseXspeed = 30;
    const shootingStarBaseYspeed = 15;
    const shootingStarBaseLength = 8;
    const shootingStarBaseLifespan = 60;
    const shootingStarsColors = ["#a1ffba", "#a1d2ff", "#fffaa1", "#ffa1a1"];

    // Milky Way constants
    const mwStarCount = 100000;
    const mwRandomStarProp = 0.2;
    const mwClusterCount = 300;
    const mwClusterStarCount = 1500;
    const mwClusterLayers = 10;
    const mwClusterSize = 120;
    const mwClusterSizeR = 80;
    const mwAngle = 0.6;
    const mwHueMin = 150;
    const mwHueMax = 300;
    const mwWhiteProportionMin = 50;
    const mwWhiteProportionMax = 65;

    // Global arrays and iterators
    let randomArray;
    const randomArrayLength = 1000;
    let randomArrayIterator = 0;
    let hueArray;
    const hueArrayLength = 1000;
    let StarsArray = [];
    let ShootingStarsArray = [];

    // --- Classes Refactored to be local to useEffect ---

    // Star creation for the foreground canvas
    class Star {
      constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.alpha = size / (sSize + sSizeR);
        this.baseHue = hueArray[Math.floor(Math.random() * hueArrayLength)];
        this.baseHueProportion = Math.random();
        this.randomIndexa = Math.floor(Math.random() * randomArrayLength);
        this.randomIndexh = this.randomIndexa;
        this.randomValue = randomArray[this.randomIndexa];
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        let rAlpha =
          this.alpha + Math.min((this.randomValue - 0.5) * sAlphaR, 1);
        let rHue =
          randomArray[this.randomIndexh] > this.baseHueProportion
            ? hueArray[this.randomIndexa]
            : this.baseHue;
        this.color = "hsla(" + rHue + ",100%,85%," + rAlpha + ")";
        ctx.fillStyle = this.color;
        ctx.fill();
      }
      update() {
        this.randomIndexh = this.randomIndexa;
        this.randomIndexa =
          this.randomIndexa >= 999 ? 0 : this.randomIndexa + 1;
        this.randomValue = randomArray[this.randomIndexa];
        this.draw();
      }
    }

    // Shooting Star creation
    class ShootingStar {
      constructor(x, y, speedX, speedY, color) {
        this.x = x;
        this.y = y;
        this.speedX = speedX;
        this.speedY = speedY;
        this.framesLeft = shootingStarBaseLifespan;
        this.color = color;
      }
      goingOut() {
        return this.framesLeft <= 0;
      }
      ageModifier() {
        let halfLife = shootingStarBaseLifespan / 2.0;
        return Math.pow(
          1.0 - Math.abs(this.framesLeft - halfLife) / halfLife,
          2
        );
      }
      draw() {
        let am = this.ageModifier();
        let endX = this.x - this.speedX * shootingStarBaseLength * am;
        let endY = this.y - this.speedY * shootingStarBaseLength * am;
        let gradient = ctx.createLinearGradient(this.x, this.y, endX, endY);
        gradient.addColorStop(0, "#fff");
        gradient.addColorStop(Math.min(am, 0.7), this.color);
        gradient.addColorStop(1, "rgba(0,0,0,0)");

        ctx.strokeStyle = gradient;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(endX, endY);
        ctx.stroke();
      }
      update() {
        this.framesLeft--;
        this.x += this.speedX;
        this.y += this.speedY;
        this.draw();
      }
    }

    // star cluster in the milky way
    class MwStarCluster {
      constructor(x, y, size, hue, baseWhiteProportion, brigthnessModifier) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.hue = hue;
        this.baseWhiteProportion = baseWhiteProportion;
        this.brigthnessModifier = brigthnessModifier;
      }
      draw() {
        let starsPerLayer = Math.floor(mwClusterStarCount / mwClusterLayers);
        for (let layer = 1; layer < mwClusterLayers; layer++) {
          let layerRadius = (this.size * layer) / mwClusterLayers;
          for (let i = 1; i < starsPerLayer; i++) {
            let posX = this.x + 2 * layerRadius * (Math.random() - 0.5);
            let posY =
              this.y +
              2 *
                Math.sqrt(
                  Math.pow(layerRadius, 2) - Math.pow(this.x - posX, 2)
                ) *
                (Math.random() - 0.5);
            let size = 0.05 + Math.random() * 0.15;
            let alpha = 0.3 + Math.random() * 0.4;
            let whitePercentage =
              this.baseWhiteProportion +
              15 +
              15 * this.brigthnessModifier +
              Math.floor(Math.random() * 10);

            ctxMw.beginPath();
            ctxMw.arc(posX, posY, size, 0, Math.PI * 2, false);
            ctxMw.fillStyle =
              "hsla(" +
              this.hue +
              ",100%," +
              whitePercentage +
              "%," +
              alpha +
              ")";
            ctxMw.fill();
          }
        }
        // adding an extra gradient
        let gradient = ctx.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          this.size
        );
        gradient.addColorStop(
          0,
          "hsla(" + this.hue + ",100%," + this.baseWhiteProportion + "%,0.002)"
        );
        gradient.addColorStop(
          0.25,
          "hsla(" +
            this.hue +
            ",100%," +
            (this.baseWhiteProportion + 30) +
            "%," +
            (0.01 + 0.01 * this.brigthnessModifier) +
            ")"
        );
        gradient.addColorStop(
          0.4,
          "hsla(" +
            this.hue +
            ",100%," +
            (this.baseWhiteProportion + 15) +
            "%,0.005)"
        );
        gradient.addColorStop(1, "rgba(0,0,0,0)");

        ctxMw.beginPath();
        ctxMw.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctxMw.fillStyle = gradient;
        ctxMw.fill();
      }
    }

    // --- Utility Functions ---

    // to get x position of a star or cluster in the milky way
    const MilkyWayX = () => {
      return Math.floor(Math.random() * width);
    };

    // to get y position of a star or cluster in the milky way depending on x position
    const MilkyWayYFromX = (xPos, mode) => {
      let offset = (width / 2 - xPos) * mwAngle;
      if (mode === "star") {
        return (
          Math.floor(
            Math.pow(Math.random(), 1.2) * height * (Math.random() - 0.5) +
              height / 2 +
              (Math.random() - 0.5) * 100
          ) + offset
        );
      }
      return (
        Math.floor(
          Math.pow(Math.random(), 1.5) * height * 0.6 * (Math.random() - 0.5) +
            height / 2 +
            (Math.random() - 0.5) * 100
        ) + offset
      );
    };

    // To draw the milkyWay (static drawing)
    const DrawMilkyWayCanvas = () => {
      // Clear before redraw on resize
      ctxMw.clearRect(0, 0, width, height);

      // 1. Draw unclustered stars
      for (let i = 0; i < mwStarCount; i++) {
        ctxMw.beginPath();
        let xPos = MilkyWayX();
        let yPos =
          Math.random() < mwRandomStarProp
            ? Math.floor(Math.random() * height)
            : MilkyWayYFromX(xPos, "star");
        let size = Math.random() * 0.27;
        ctxMw.arc(xPos, yPos, size, 0, Math.PI * 2, false);
        let alpha = 0.4 + Math.random() * 0.6;
        ctxMw.fillStyle = "hsla(0,100%,100%," + alpha + ")";
        ctxMw.fill();
      }
      // 2. Draw clusters
      for (let i = 0; i < mwClusterCount; i++) {
        let xPos = MilkyWayX();
        let yPos = MilkyWayYFromX(xPos, "cluster");
        let distToCenter =
          (1 - Math.abs(xPos - width / 2) / (width / 2)) *
          (1 - Math.abs(yPos - height / 2) / (height / 2));
        let size = mwClusterSize + Math.random() * mwClusterSizeR;
        let hue =
          mwHueMin +
          Math.floor(
            (Math.random() * 0.5 + distToCenter * 0.5) * (mwHueMax - mwHueMin)
          );
        let baseWhiteProportion =
          mwWhiteProportionMin +
          Math.random() * (mwWhiteProportionMax - mwWhiteProportionMin);
        new MwStarCluster(
          xPos,
          yPos,
          size,
          hue,
          baseWhiteProportion,
          distToCenter
        ).draw();
      }
    };

    // create Star array, positions are randomized
    const init = () => {
      // init random array
      randomArray = [];
      for (let i = 0; i < randomArrayLength; i++) {
        randomArray[i] = Math.random();
      }
      // init hueArray
      hueArray = [];
      for (let i = 0; i < hueArrayLength; i++) {
        let rHue = Math.floor(Math.random() * 160);
        if (rHue > 60) rHue += 110;
        hueArray[i] = rHue;
      }

      StarsArray = [];
      // Note: Using width/height from the outer scope, which are the un-scaled values (window.innerWidth/Height)
      for (let i = 0; i < sNumber; i++) {
        let size = Math.random() * sSizeR + sSize;
        let x = Math.random() * (width - size * 2 - size * 2) + size * 2;
        let y = Math.random() * (height - size * 2 - size * 2) + size * 2;
        StarsArray.push(new Star(x, y, size));
      }

      ShootingStarsArray = [];
      DrawMilkyWayCanvas();
    };

    // --- Animation Loop ---
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Clear only the stars canvas (Milky Way is static)
      ctx.clearRect(0, 0, width, height);

      // Update and draw blinking stars
      for (let i = 0; i < StarsArray.length; i++) {
        StarsArray[i].update();
      }

      // Shooting stars logic
      if (randomArray[randomArrayIterator] < shootingStarDensity) {
        let posX = Math.floor(Math.random() * width);
        let posY = Math.floor(Math.random() * 150);
        let speedX = Math.floor((Math.random() - 0.5) * shootingStarBaseXspeed);
        let speedY = Math.floor(Math.random() * shootingStarBaseYspeed);
        let color =
          shootingStarsColors[
            Math.floor(Math.random() * shootingStarsColors.length)
          ];
        ShootingStarsArray.push(
          new ShootingStar(posX, posY, speedX, speedY, color)
        );
      }

      // removing out of frame or dead shooting stars
      let arrayIterator = ShootingStarsArray.length - 1;
      while (arrayIterator >= 0) {
        if (ShootingStarsArray[arrayIterator].goingOut() === true) {
          ShootingStarsArray.splice(arrayIterator, 1);
        } else {
          ShootingStarsArray[arrayIterator].update();
        }
        arrayIterator--;
      }

      // moving through random array
      if (randomArrayIterator + 1 >= randomArrayLength) {
        randomArrayIterator = 0;
      } else {
        randomArrayIterator++;
      }
    };

    // --- Start & Cleanup ---
    setCanvasSize(); // Initial setup
    animate(); // Start the animation

    window.addEventListener("resize", setCanvasSize);

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []); // Empty dependency array ensures it runs once on mount

  // Inline CSS based on the original structure (using three canvases)
  const canvasStyle = {
    top: 0,
    left: 0,
    position: "fixed", // Use fixed instead of absolute for viewport coverage
    width: "100%",
    height: "100%",
    objectFit: "contain",
    overflow: "hidden",
    backgroundColor: "transparent",
    pointerEvents: "none", // Important: Ensures content behind is clickable
  };

  return (
    // The three canvases, styled as in the original CSS
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        background: "radial-gradient(#100826,#060212)",
      }}
    >
      {/* Background Canvas is replaced by the div background gradient */}

      {/* Milky Way Canvas (static, layer 1) */}
      <canvas
        ref={milkyWayCanvasRef}
        style={{ ...canvasStyle, zIndex: 1 }}
        aria-hidden="true"
      />

      {/* Stars Canvas (animated stars and shooting stars, layer 2) */}
      <canvas
        ref={starsCanvasRef}
        style={{ ...canvasStyle, zIndex: 2 }}
        aria-hidden="true"
      />
    </div>
  );
};

export default SpaceBackground;
