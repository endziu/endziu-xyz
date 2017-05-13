const drawCircle = (ctx, r, p) => {
  ctx.fillStyle = '#fff'
  ctx.beginPath()
  ctx.arc(p.position.getX(), p.position.getY(), r, 0, Math.PI * 2, false)
  ctx.fill()
}

const drawLine = (context, p1, p2, line_width) => {
  context.lineWidth = line_width
  context.beginPath()
  context.moveTo(p1.position.getX(), p1.position.getY())
  context.lineTo(p2.position.getX(), p2.position.getY())
  context.strokeStyle = '#060'
  context.stroke()
}

const wrapBounds = (p, width, height) => {
  if (p.position.getX() < 0) p.position.setX(width)
  if (p.position.getX() > width) p.position.setX(0)
  if (p.position.getY() < 0) p.position.setY(height)
  if (p.position.getY() > height) p.position.setY(0)
}

module.exports = {
  drawCircle,
  drawLine,
  wrapBounds
}