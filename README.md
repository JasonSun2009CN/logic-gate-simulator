# 🧠 LOGIC GATE SIMULATOR
A visual drag-and-drop logic circuit designer and simulator. Build circuits with logic gates, connect them with wires, and see real-time output. Also generates truth tables automatically.

![Logic](https://img.shields.io/badge/Logic-Gate-blue)
![HTML5](https://img.shields.io/badge/HTML5-CSS%2BJS-orange)
![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-brightgreen)


## ✨ Features
- Drag & drop gate builder
- Real-time circuit simulation
- Boolean expression ↔ circuit conversion
- Auto-generate truth tables
- Support for AND/OR/NOT/XOR/NAND/NOR/XNOR
- Pure HTML + CSS + JavaScript, no backend
- Clean responsive UI for desktop

## 🚀 Quick Start
### Local Run
```bash
git clone https://github.com/JasonSun2009CN/logic-gate-simulator.git
cd logic-gate-simulator
open index.html
```

### GitHub Pages
https://JasonSun2009CN.github.io/logic-gate-simulator

## 📌 How to Use
1. **Add Gates** – Drag from toolbox to canvas
2. **Connect Wires** – Click output pin → click input pin
3. **Toggle Inputs** – Switch 0/1 to run simulation
4. **View Output** – Real-time logic result
5. **Generate Truth Table** – Auto-generate all combinations
6. **Expression Input** – Type `A AND B = Y` to build circuit

## 🧩 Supported Gates
- INPUT / OUTPUT
- NOT
- AND / OR
- XOR
- NAND / NOR
- XNOR

## 📊 Truth Tables

### NOT
| A | Y |
| --- | --- |
| 0 | 1 |
| 1 | 0 |

### AND
| A | B | Y |
| --- | --- | --- |
| 0 | 0 | 0 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

### OR
| A | B | Y |
| --- | --- | --- |
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 1 |

### XOR
| A | B | Y |
| --- | --- | --- |
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

### NAND
| A | B | Y |
| --- | --- | --- |
| 0 | 0 | 1 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

### NOR
| A | B | Y |
| --- | --- | --- |
| 0 | 0 | 1 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 0 |

### XNOR
| A | B | Y |
| --- | --- | --- |
| 0 | 0 | 1 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

## 📁 Project Structure
```
logic-gate-simulator/
├── index.html          # Main entry
├── README.md           # Project documentation
└── spec.md             # Reserved for specification files
```

## 🔧 Tech Stack
- HTML5
- CSS3
- Vanilla JavaScript (ES6+)
- SVG for wires & gates
- No frameworks

## ⚠️ Notes
- Single file app, open directly in browser
- No installation or dependencies
- Avoid circuit loops (may cause unstable output)
- Best viewed on desktop

## 📄 License
MIT

---
Built with ❤️ for digital logic learning.

---
