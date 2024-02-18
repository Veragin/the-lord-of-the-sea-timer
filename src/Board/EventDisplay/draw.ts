import { colorMain } from 'Components/globalCss';
import { biomColor, hexs } from './Const';

const hexagonAngle = 0.523598776; // 30 degrees in radians
const sideLength = 36;

const MAP_TILE_WIDTH = 62;
const MAP_TILE_HEIGHT = 53;

const hexHeight = Math.sin(hexagonAngle) * sideLength;
const hexRadius = Math.cos(hexagonAngle) * sideLength;
const hexRectangleHeight = sideLength + 2 * hexHeight;
const hexRectangleWidth = 2 * hexRadius;

const hexagon = [
    [0, 0, 1, 2, 3, 4, 0],
    [0, 5, 6, 7, 8, 9, 0],
    [0, 10, 11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20, 21, 22],
    [0, 23, 24, 25, 26, 27, 28],
    [0, 29, 30, 31, 32, 33, 0],
    [0, 0, 34, 35, 36, 37, 0],
];

export const renderTiles = (
    ctx: CanvasRenderingContext2D,
    selected: number,
    selectedHex: number
) => {
    ctx.strokeStyle = '#000';

    ctx.lineWidth = 2;

    let hexIndex = 0;
    for (let i = 0; i < hexagon.length; i++) {
        for (let j = 0; j < hexagon[i].length; j++) {
            if (hexagon[i][j] === 0) continue;

            tilePath(ctx, i, j);

            if (hexagon[i][j] === selected) {
                ctx.fillStyle = colorMain;
            } else {
                ctx.fillStyle = biomColor[hexs[selectedHex][hexIndex]];
            }

            ctx.fill();
            ctx.stroke();
            hexIndex++;
        }
    }
};

const tilePath = (ctx: CanvasRenderingContext2D, i: number, j: number) => {
    const x =
        j * MAP_TILE_WIDTH +
        MAP_TILE_WIDTH / 2 +
        ((i % 2) * MAP_TILE_WIDTH) / 2 -
        hexRectangleWidth / 2;
    const y = i * MAP_TILE_HEIGHT + MAP_TILE_HEIGHT / 2 - hexRectangleHeight / 2;

    ctx.beginPath();
    ctx.moveTo(x + hexRadius, y);
    ctx.lineTo(x + hexRectangleWidth, y + hexHeight);
    ctx.lineTo(x + hexRectangleWidth, y + (hexHeight + sideLength));
    ctx.lineTo(x + hexRadius, y + hexRectangleHeight);
    ctx.lineTo(x, y + (sideLength + hexHeight));
    ctx.lineTo(x, y + hexHeight);
    ctx.closePath();
};
