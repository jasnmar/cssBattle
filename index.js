function d(e) {
  console.log("hello")
}
document.addEventListener("click", (e) => {
  //Click Coordinates
  const x = e.clientX
  const y = e.clientY
  const coords = x + " " + y
  //Window Dimensions
  const w = window.innerWidth
  const h = window.innerHeight
  const cX = w / 2
  const cY = h / 2

  const distX = x - cX
  const distY = cY - y
  console.log('X:', x)
  console.log('Y:', y)
  console.log('distX:', distX)
  console.log('distY:', distY)
  const maxDist = Math.sqrt(w * w + h * h) / 2
  const totDist = Math.sqrt(distX * distX + distY * distY)
  //Min top = 0
  //Max top = 100
  //Min left = -55
  //Max left = 55
  const angle = coordsToPosition(distX, distY)
  console.log('angle: ', angle)
  console.log('coords: ', coords)
  const eyeball = document.getElementsByClassName('eyeball')
  const offsetDistance = 50 * totDist / maxDist
  for( eye of eyeball) {
    console.log('Math.cos(angle): ', Math.cos(angle))
    const tp = -Math.sin(angle) * offsetDistance + 50
    const lf = Math.cos(angle) * offsetDistance
    console.log('tp: ', tp)
    console.log('lf: ', lf)
    eye.style.top = tp.toString() + "px"
    eye.style.left = lf.toString() + "px"
  };

})

function coordsToPosition(x, y) {
  const rad = Math.atan2(y, x)
  return rad
}