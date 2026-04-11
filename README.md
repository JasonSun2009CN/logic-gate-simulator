# 🧠 LOGIC GATE SIMULATOR

A visual drag-and-drop logic circuit designer and simulator. Build circuits with logic gates, connect them with wires, and see real-time output. Also generates truth tables automatically.

![Logic Designer](https://img.shields.io/badge/Logic-Gate-Simulator-blue) ![HTML5](https://img.shields.io/badge/HTML5-CSS3--JS-green) ![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-Ready-brightgreen)

## ✨ Features

- **Drag & Drop Interface** — Drag gates from toolbox onto canvas
- **Gate Library** — INPUT, OUTPUT, AND, OR, NOT, XOR, NAND, NOR, XNOR
- **Wire Connections** — Click and drag between pins to connect gates
- **Real-time Simulation** — Toggle INPUT nodes and see instant output
- **Truth Table Generation** — Auto-generate complete truth tables
- **Expression Input** — Type expressions like `A AND (B OR C) = Y`
- **No Backend Required** — Pure HTML + CSS + JavaScript

## 🚀 Getting Started

### Option 1: Local Development

```bash
# Clone the repository
git clone https://github.com/JasonSun2009CN/logic-gate-simulator.git
cd logic-gate-simulator

# Open in browser
open index.html
```

### Option 2: GitHub Pages

Visit: https://JasonSun2009CN.github.io/logic-gate-simulator


## 📖 How to Use

### 1. Add Gates
Drag gates from the **Toolbox** panel onto the **Canvas**.

### 2. Connect Gates
- Click an output pin (right side of a gate)
- Drag to an input pin (left side of another gate)
- Release to create a wire connection

### 3. Toggle Inputs
Click **INPUT** nodes to toggle between 0 and 1.

### 4. View Output
Outputs update in real-time. Click OUTPUT nodes to see their current value.

### 5. Generate Truth Table
Click **"Generate Truth Table"** button to create a complete truth table for all input combinations.

### 6. Expression Input (Optional)
Type a Boolean expression like:
```
A AND B = Y
(A OR B) AND C = Y
NOT A = Y
```
Then click **Generate** to auto-build the circuit.

## 🗂️ Project Structure

```
logic-gate-simulator.github.io/
├── index.html              # Main HTML file
├── styles/
│   └── main.css           # All styles
├── src/
│   ├── main.js            # Entry point
│   ├── core/
│   │   ├── Circuit.js    # Circuit management
│   │   ├── Gate.js       # Base gate class
│   │   ├── Wire.js       # Wire connections
│   │   └── Simulator.js  # Circuit evaluation
│   ├── gates/             # Individual gate logic
│   │   ├── AND.js
│   │   ├── OR.js
│   │   ├── NOT.js
│   │   ├── XOR.js
│   │   ├── NAND.js
│   │   ├── NOR.js
│   │   └── XNOR.js
│   ├── ui/
│   │   ├── Canvas.js     # Canvas rendering
│   │   ├── Toolbox.js    # Gate palette
│   │   ├── Drag.js       # Drag & drop
│   │   ├── WireDraw.js  # Wire drawing
│   │   └── TruthTable.js # Truth table
│   ├── parser/           # Expression parser
│   │   ├── Tokenizer.js
│   │   ├── Parser.js
│   │   └── AST.js
│   └── utils/
│       ├── ID.js         # Unique ID generation
│       └── Helpers.js   # Utility functions
└── assets/
    └── gates/            # Gate SVG icons
```

## 🎮 Gate Reference

| Gate | Inputs | Output |
|------|--------|--------|
| INPUT | 0 | 1 |
| OUTPUT | 1 | 0 |
| NOT | 1 | 1 |
| AND | 2–3 | 1 |
| OR | 2–3 | 1 |
| XOR | 2 | 1 |
| NAND | 2–3 | 1 |
| NOR | 2–3 | 1 |
| XNOR | 2 | 1 |

### Truth Tables

**NOT** (1 input)

| A | Y |
|:-:|:-:|
| 0 | 1 |
| 1 | 0 |

**AND** · **OR** · **XOR** · **NAND** · **NOR** · **XNOR** (2 inputs)

| A | B | AND | OR | XOR | NAND | NOR | XNOR |
|:-:|:-:|:---:|:--:|:---:|:----:|:---:|:----:|
| 0 | 0 |  0  |  0 |  0  |   1  |  1  |   1  |
| 0 | 1 |  0  |  1 |  1  |   1  |  0  |   0  |
| 1 | 0 |  0  |  1 |  1  |   1  |  0  |   0  |
| 1 | 1 |  1  |  1 |  0  |   0  |  0  |   1  |

**AND / OR / NAND / NOR** (3 inputs)

| A | B | C | AND | OR | NAND | NOR |
|:-:|:-:|:-:|:---:|:--:|:----:|:---:|
| 0 | 0 | 0 |  0  |  0 |   1  |  1  |
| 0 | 0 | 1 |  0  |  1 |   1  |  0  |
| 0 | 1 | 0 |  0  |  1 |   1  |  0  |
| 0 | 1 | 1 |  0  |  1 |   1  |  0  |
| 1 | 0 | 0 |  0  |  1 |   1  |  0  |
| 1 | 0 | 1 |  0  |  1 |   1  |  0  |
| 1 | 1 | 0 |  0  |  1 |   1  |  0  |
| 1 | 1 | 1 |  1  |  1 |   0  |  0  |

## 🔧 Tech Stack

- **HTML5** — Semantic structure
- **CSS3** — Grid layout, animations
- **JavaScript (ES6+)** — OOP design
- **SVG** — Gate rendering and wires
- **No frameworks** — Pure vanilla JS

## 📝 License

MIT License — See [LICENSE](LICENSE) file.

---

Built with ❤️ for learning digital logic design.