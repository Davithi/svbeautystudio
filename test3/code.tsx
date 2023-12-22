// "use strict";
// // This file holds the main code for plugins. Code in this file has access to
// // the *figma document* via the figma global object.
// // You can access browser APIs in the <script> tag inside "ui.html" which has a
// // full browser environment (See https://www.figma.com/plugin-docs/how-plugins-run).
// // Runs this code if the plugin is run in Figma
// if (figma.editorType === 'figma') {
//     // This plugin will open a window to prompt the user to enter a number, and
//     // it will then create that many rectangles on the screen.
//     // This shows the HTML page in "ui.html".
//     figma.showUI(__html__);
//     // Calls to "parent.postMessage" from within the HTML page will trigger this
//     // callback. The callback will be passed the "pluginMessage" property of the
//     // posted message.
//     figma.ui.onmessage = msg => {
//         // One way of distinguishing between different types of messages sent from
//         // your HTML page is to use an object with a "type" property like this.
//         if (msg.type === 'create-shapes') {
//             const nodes = [];
//             for (let i = 0; i < msg.count; i++) {
//                 const rect = figma.createRectangle();
//                 rect.x = i * 150;
//                 rect.fills = [{ type: 'SOLID', color: { r: 1, g: 0.5, b: 0 } }];
//                 figma.currentPage.appendChild(rect);
//                 nodes.push(rect);
//             }
//             figma.currentPage.selection = nodes;
//             figma.viewport.scrollAndZoomIntoView(nodes);
//         }
//         // Make sure to close the plugin when you're done. Otherwise the plugin will
//         // keep running, which shows the cancel button at the bottom of the screen.
//         figma.closePlugin();
//     };
// }
// // Runs this code if the plugin is run in FigJam
// if (figma.editorType === 'figjam') {
//     // This plugin will open a window to prompt the user to enter a number, and
//     // it will then create that many shapes and connectors on the screen.
//     // This shows the HTML page in "ui.html".
//     figma.showUI(__html__);
//     // Calls to "parent.postMessage" from within the HTML page will trigger this
//     // callback. The callback will be passed the "pluginMessage" property of the
//     // posted message.
//     figma.ui.onmessage = msg => {
//         // One way of distinguishing between different types of messages sent from
//         // your HTML page is to use an object with a "type" property like this.
//         if (msg.type === 'create-shapes') {
//             const numberOfShapes = msg.count;
//             const nodes = [];
//             for (let i = 0; i < numberOfShapes; i++) {
//                 const shape = figma.createShapeWithText();
//                 // You can set shapeType to one of: 'SQUARE' | 'ELLIPSE' | 'ROUNDED_RECTANGLE' | 'DIAMOND' | 'TRIANGLE_UP' | 'TRIANGLE_DOWN' | 'PARALLELOGRAM_RIGHT' | 'PARALLELOGRAM_LEFT'
//                 shape.shapeType = 'ROUNDED_RECTANGLE';
//                 shape.x = i * (shape.width + 200);
//                 shape.fills = [{ type: 'SOLID', color: { r: 1, g: 0.5, b: 0 } }];
//                 figma.currentPage.appendChild(shape);
//                 nodes.push(shape);
//             }
//             ;
//             for (let i = 0; i < (numberOfShapes - 1); i++) {
//                 const connector = figma.createConnector();
//                 connector.strokeWeight = 8;
//                 connector.connectorStart = {
//                     endpointNodeId: nodes[i].id,
//                     magnet: 'AUTO',
//                 };
//                 connector.connectorEnd = {
//                     endpointNodeId: nodes[i + 1].id,
//                     magnet: 'AUTO',
//                 };
//             }
//             ;
//             figma.currentPage.selection = nodes;
//             figma.viewport.scrollAndZoomIntoView(nodes);
//         }
//         // Make sure to close the plugin when you're done. Otherwise the plugin will
//         // keep running, which shows the cancel button at the bottom of the screen.
//         figma.closePlugin();
//     };
// }
// ;

figma.showUI(__html__, { width: 400, height: 600 });

figma.ui.onmessage = (msg) => {
  console.log(msg, "asd");
  switch (msg.type) {
    case "createPolygon":
      const polygon = figma.createPolygon();
      polygon.x = 50;
      polygon.y = 50;
      polygon.resize(200, 200);
      polygon.pointCount = 8;
      polygon.fills = [{ type: "SOLID", color: { r: 0.3, g: 0, b: 0 } }];
      break;
    case "createRectangle":
      const rect = figma.createRectangle();
      rect.x = 50;
      rect.y = 50;
      rect.resize(200, 100);
      rect.fills = [{ type: "SOLID", color: { r: 1, g: 0, b: 0 } }];
      break;
    case "createLine":
      const line = figma.createLine();
      line.x = 50;
      line.y = 50;
      line.resize(200, 0);
      line.strokeWeight = 4;
      line.strokes = [{ type: "SOLID", color: { r: 1, g: 0, b: 0 } }];
      line.strokeCap = "ARROW_LINES";
      break;

    case "createEllipse":
      const ellipse = figma.createEllipse();
      ellipse.x = 50;
      ellipse.y = 50;
      ellipse.resize(200, 100);
      // Set solid red fill
      ellipse.fills = [{ type: "SOLID", color: { r: 1, g: 0, b: 0 } }];
      // Arc from 0° to 180° clockwise
      ellipse.arcData = {
        startingAngle: 0,
        endingAngle: Math.PI,
        innerRadius: 0.5,
      };
      break;

    case "createStar":
      const star = figma.createStar();
      star.x = 50;
      star.y = 50;
      star.resize(200, 200);
      star.pointCount = 7;
      // Set solid red fill
      star.fills = [{ type: "SOLID", color: { r: 1, g: 0, b: 0 } }];
      // Make the angles of each point less acute
      star.innerRadius = 0.6;
      break;
    case "createText":
      (async () => {
        const text = figma.createText();
        console.log(text, "text");
        text.x = 50;
        text.y = 50;
        // Load the font in the text node before setting the characters
        await figma.loadFontAsync(text.fontName);
        text.characters = "Hello world!";
        // Set bigger font size and red color
        text.fontSize = Number(msg.size);

        text.fills = [{ type: "SOLID", color: { r: 1, g: 0, b: 0 } }];
      })();

      break;

    case "createFrame":
      const frame = figma.createFrame();
      frame.x = 50;
      frame.y = 50;
      frame.resize(200, 250);
      break;
    case "createComponent":
      const component = figma.createComponent();
      component.resizeWithoutConstraints(frame.width, frame.height);
      for (const child of frame.children) {
        component.appendChild(child);
      }
    // Note: also copy over other properties of the frame
    // such as clipsContent, backgrounds, layoutGrids, etc if desired.
    case "createSlice":
      (async () => {
        const slice = figma.createSlice();
        slice.x = 50;
        slice.y = 50;
        slice.resize(500, 500);
        // Export a PNG of this region of the canvas
        const bytes = await slice.exportAsync();
        // Add the image onto the canvas as an image fill in a frame
        const image = figma.createImage(bytes);
        const frame = figma.createFrame();
        frame.resize(500, 500);
        frame.fills = [
          {
            imageHash: image.hash,
            scaleMode: "FILL",
            scalingFactor: 1,
            type: "IMAGE",
          },
        ];
      })();
      break;
    case "createSticky":
      (async () => {
        const sticky = figma.createSticky();

        // Load the font before setting characters
        await figma.loadFontAsync(sticky.text.fontName);
        sticky.text.characters = "Hello world!";
      })();
      break;
    case "createTable":
      (async () => {
        // Create a table with 2 rows and 3 columns
        const table = figma.createTable(2, 3);

        // Load the font before setting characters
        await figma.loadFontAsync(table.cellAt(0, 0).text.fontName);

        // Sets characters for the table cells:
        // A B C
        // 1 2 3
        table.cellAt(0, 0).text.characters = "A";
        table.cellAt(0, 1).text.characters = "B";
        table.cellAt(0, 2).text.characters = "C";
        table.cellAt(1, 0).text.characters = "1";
        table.cellAt(1, 1).text.characters = "2";
        table.cellAt(1, 2).text.characters = "3";
      })();
      break
    case 'createNodeFromJSXAsync':
      (
        async () => {
          const { Image, AutoLayout } = figma.widget;
          // const node = await figma.createNodeFromJSXAsync(
          const node = await figma.createNodeFromJSXAsync(
            <AutoLayout fill="#F00" padding={200}>
              <Image src="https://picsum.photos/200" width={3300} height={2800} />
            </AutoLayout>
          )
        }

      )()
      break;
    default:
      console.log("errrroroororor");
      break;
  }
};

figma.createNodeFromJSXAsync(
  <figma.widget.Image
    src="https://picsum.photos/200/300"
    width={200}
    height={300}
  />
)




// async function invertImages(node) {
//   const newFills = []
//   for (const paint of node.fills) {
//     if (paint.type === 'IMAGE') {
//       // Get the (encoded) bytes for this image.
//       const image = figma.getImageByHash(paint.imageHash)
//       const bytes = await image.getBytesAsync()

//       // Create an invisible iframe to act as a "worker" which
//       // will do the task of decoding and send us a message
//       // when it's done.
//       figma.showUI(__html__, { visible: false })

//       // Send the raw bytes of the file to the worker.
//       figma.ui.postMessage(bytes)

//       // Wait for the worker's response.
//       const newBytes = await new Promise((resolve, reject) => {
//         figma.ui.onmessage = value => resolve(value)
//       })

//       // Create a new paint for the new image.
//       const newPaint = JSON.parse(JSON.stringify(paint))
//       newPaint.imageHash = figma.createImage(newBytes).hash
//       newFills.push(newPaint)
//     }
//   }
//   node.fills = newFills
// }