function d(e) {
  console.log("hello")
}

const clickDiv = document.getElementById("click")
clickDiv.addEventListener("click", (e) => {
  const checkBox = document.getElementById('switch')
  const [dist, ang] = clickConverter(e)
  if(checkBox.checked==false){
    
    const eyeball = document.getElementsByClassName('eyeball')
    const offsetDistance = 50 * dist
    for( eye of eyeball) {
      const tp = -Math.sin(ang) * offsetDistance + 50
      const lf = Math.cos(ang) * offsetDistance
      eye.style.top = tp.toString() + "px"
      eye.style.left = lf.toString() + "px"
    } 
  } else {
    const offset = ang > 0 ? dist * 45 : -dist * 45
    console.log('offset: ', offset)
    const openAngle = 45 + offset
    const mouth = document.getElementById('mouth')
    const rotate = `rotateX(${openAngle}deg)`
    console.log('rotate: ', rotate)
    mouth.style.transform = rotate
  }


})

function coordsToPosition(x, y) {
  const rad = Math.atan2(y, x)
  return rad
}


//This converter assumes we are looking for a normalized 
//distance and angle from the center of the element clicked
function clickConverter(event) {
  const debug = false

  //What element was clicked?
  const parentElement = event.target

  //Click coordinates
  const x = event.clientX
  const y = event.clientY
  //Size of element clicked
  const w = parentElement.offsetWidth
  const h = parentElement.offsetHeight
  //Coordinates at the center of the element clicked
  const cX = w / 2
  const cY = h / 2
  //Distance relative to center coordinates of the click.
  const distX = x - cX
  const distY = cY - y
  //Maximum possible distance away 
  const maxDist = Math.sqrt(cX * cX + cY * cY)
  //Distance away of click
  const clickDist = Math.sqrt(distX * distX + distY * distY)
  const normalizedDistance = clickDist / maxDist
  const angle = coordsToPosition(distX, distY)

  if(debug===true) {
    console.log('x: ', x)
    console.log('y: ', y)
    console.log('w: ', w)
    console.log('h: ', h)
    console.log('cX: ', cX)
    console.log('cY: ', cY)
    console.log('distX: ', distX)
    console.log('distY: ', distY)
    console.log('maxDist: ', maxDist)
    console.log('clickDist: ', clickDist)
    console.log('normalizedDistance: ', normalizedDistance)
    console.log('angle: ', angle)


  }

  return [normalizedDistance, angle]

}