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

  console.log('distX:', distX)
  console.log('distY:', distY)

  //Min top = 0
  //Max top = 100
  //Min left = -55
  //Max left = 55
  const angle = coordsToPosition(distX, distY)
  console.log('coordsToPosition: ', coordsToPosition(distX, distY))
  console.log('coords: ', coords)
  const eyeball = document.getElementsByClassName('eyeball')
  console.log('eyeball: ', eyeball)
  for( eye of eyeball) {
    const tp = Math.cos(angle) * 100
    const lf = Math.sin(angle) * 50
    eye.style.top = tp.toString() + "px"
    eye.style.left = lf.toString() + "px"
  };

})

function coordsToPosition(x, y) {
  const rad = Math.atan2(y, x)
  return rad * 180 / Math.PI
}