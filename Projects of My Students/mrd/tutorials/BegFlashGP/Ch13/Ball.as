class Ball extends MovieClip {

  var dx: Number;
  var dy: Number;

  function Ball(){
    _x = Math.random() * Stage.width;
    _y = Math.random() * Stage.height;
    dx = Math.random() * 20 - 10;
    dy = Math.random() * 20 - 10;  
  } // end constructor

  function onEnterFrame(){
    move();
    checkBounds();
  } // end function

  function move(){
    _x += dx;
    _y += dy;
  } // end move

  function checkBounds(){
    if (_x > Stage.width){
      dx *= -1;
    } // end if

    if (_x < 0){
      dx *= -1;
    } // end if

    if (_y > Stage.height){
      dy *= -1;
    } // end if

    if (_y < 0){
      dy *= -1;
    } // end if

  } // end checkBounds

  function onRelease(){
    //delete when clicked
    removeMovieClip(this);
  } // end if

} // end class def
