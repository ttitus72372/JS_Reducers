function nuclearLaunchDetected(){
  var rockets = [
      { country:'Russia', launches:32 },
      { country:'US', launches:23 },
      { country:'China', launches:16 },
      { country:'Europe(ESA)', launches:7 },
      { country:'India', launches:4 },
      { country:'Japan', launches:3 }
  ];

  var sum = rockets.reduce(function(y, x) {
      return y + x.launches;
  }, 0);

  var average = sum / rockets.length;

  document.getElementById('rockets').innerHTML = Math.round(average)
}
