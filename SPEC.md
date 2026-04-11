# spec.md
# Logic Gate Simulator - Specification Document

## 1. Project Overview
- **Project Name**: Logic Gate Simulator
- **Version**: 1.0
- **Author**: JasonSun2009CN
- **Purpose**: A web-based visual tool for designing, simulating, and testing logic circuits.
- **Target Users**: Computer science students, beginners learning digital logic, IGCSE/IB CS learners.

---

## 2. Core Functions
1. **Circuit Builder**
   - Drag-and-drop logic gates onto canvas
   - Click pins to connect wires
   - Move/delete gates and wires
2. **Real-time Simulation**
   - Toggle input values (0/1)
   - Instant output display
3. **Truth Table Generator**
   - Automatically generate truth tables for built circuits
4. **Boolean Expression Parser**
   - Input logic expression → auto-generate circuit
5. **Canvas Control**
   - Clear canvas / Reset simulation

---

## 3. Supported Logic Gates
- INPUT
- OUTPUT
- NOT
- AND
- OR
- XOR
- NAND
- NOR
- XNOR

---

## 4. Input/Output Rules
- Maximum 6 input variables: A, B, C, D, E, F
- Each gate output can connect to multiple inputs
- Each input can only receive one signal
- No loop circuits allowed (may cause unstable output)

---

## 5. User Interface
- Left: Toolbox (gates + input controls)
- Middle: Canvas (grid-based workspace)
- Right/Bottom: Output display + truth table area
- Tab for Circuit Builder / Expression Editor

---

## 6. Technical Specification
- **Language**: HTML5 + CSS3 + Vanilla JavaScript (ES6+)
- **Rendering**: SVG for wires & gate icons
- **No frameworks or libraries**
- **No server/backend required**
- Runs in all modern desktop browsers

---

## 7. File Structure
```
/
├── index.html       # Main program
├── README.md        # Project description
└── spec.md		     # This specification
```

---

## 8. Limitations
- Desktop browser only (not optimized for mobile)
- Max 6 input variables
- Does not support clock/flip-flop/memory circuits
- Does not support saving/loading files

---

## 9. License
MIT License

---