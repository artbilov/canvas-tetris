const canvas = document.createElement('canvas')
const ctx = canvas.getContext('2d')
const size = 40
const pad = 10
const gap = 5
const border = 1

const dir = 'down'

canvas.width = innerWidth
canvas.height = innerHeight

document.body.append(canvas)

const figures = {
  O: [[0, 0], [0, 1], [1, 0], [1, 1]],
  L: [[0, 0], [0, 1], [0, 2], [1, 2]],
  J: [[1, 0], [1, 1], [1, 2], [0, 2]],
  S: [[1, 0], [2, 0], [0, 1], [1, 1]],
  Z: [[0, 0], [1, 0], [1, 1], [2, 1]],
  T: [[1, 0], [0, 1], [1, 1], [2, 1]],
  I: [[0, 0], [1, 0], [2, 0], [3, 0]],
}

renderGrid(20, 10)

renderFigure(0, 4, figures.O)

function renderGrid(rowCount, columnCount) {
  for (let j = 0; j < rowCount; j++) {
    for (let i = 0; i < columnCount; i++) {
      ctx.strokeRect(pad + i * size + i * gap, pad + j * size + j * gap, size, size)
    }
  }
}

function renderFigure(row, column, cells) {
  ctx.fillStyle = 'orange'

  for (const cell of cells) {
    const x = pad + (column + cell[0]) * (size + gap)
    const y = pad + (row + cell[1]) * (size + gap)
    const width = size
    const height = size
    ctx.fillRect(x + border, y + border, width - 2 * border, height - 2 * border)
  }
}


