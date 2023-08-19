export default function calcWidth(diametr) {
    let width = 10
    if(diametr < 100) {
      width = 20+(diametr*0.5)
    }
    else if (diametr < 500) {
      width = 50+(diametr*0.15)
    }
    else if (diametr < 1000) {
      width = 55+(diametr*0.12)
    }
    else {
      width = 60+(diametr*0.10)
      if (width > 200 ) {
        width = 200
      }
    }
    return width
  }