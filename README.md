# **Function Chain Calculator**

The **Function Chain Calculator** is an interactive tool that allows users to create and visualize chains of mathematical functions. Each function is represented as a node, and users can connect these nodes with edges to define the flow of operations. This approach provides a visual and intuitive way to perform complex calculations.

## **Features**
- Perform basic arithmetic operations:
  - **Addition**
  - **Subtraction**
  - **Multiplication**
  - **Division**
  - **Exponential (x^n)**
- Visualize the flow of calculations using connected nodes and edges.

## **Node-Based Approach**
The calculator is built using a **node-based approach**, where:
- **Nodes** represent individual functions or operations (e.g., `x^2`, `x + 4`).
- **Edges** define the flow of data between nodes, creating a directed graph structure.

Each node computes its output based on the input provided, and this output is passed to the connected node(s) as defined by the edges. This approach allows users to model complex calculations as a series of smaller, manageable steps.

## **Preview**
[Live Demo](https://function-chain-calculator-two.vercel.app/)

## Screenshot

https://github.com/user-attachments/assets/fcdca495-43a9-4203-901a-1d62dd880923

![Screenshot 2024-12-26 154015](https://github.com/user-attachments/assets/cac2a6e0-88a2-4c91-a267-7343bd7f0120)

## **How the Edges Are Rendered**
- The edges (connecting lines) between nodes are drawn using **SVG `<path>` elements**.
- When a new edge is added:
  - The source node's output is connected to the input of the target node.
  - A line is dynamically drawn between the two nodes.
- The positions of nodes are calculated based on their bounding rectangles, ensuring accurate connections.


## **Getting Started**
To run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/function-chain-calculator.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```


## **Technology Stack**
- **React**: For building the interactive user interface.
- **TypeScript**: Ensures type safety and better code maintainability.
- **Tailwind CSS**: For responsive and modern UI styling.
- **SVG**: Used for rendering connecting lines (edges) between nodes.



