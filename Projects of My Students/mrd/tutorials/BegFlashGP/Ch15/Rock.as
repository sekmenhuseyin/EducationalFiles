class Rock extends MovieClip{

  var dx: Number;
  var dy: Number;
  var spin: Number;

  function Rock(){
    reset();
  } // end constructor

  function reset(){
    _x = Math.random() * Stage.width;
    _y = Math.random() * Stage.height;
    dx = (Math.random() * 10) - 5;
    dy = (Math.random() * 10) - 5;
    spin = (Math.random() * 30) -15;
  } // end rock reset

  function move(){
    _x += dx;
    _y += dy;
    _rotation += spin;

  } // end move function def

  function checkBorders(){
    
    //check borders
    if (_x > Stage.width){
      reset();
    } // end if

    if (_x < 0){
      reset();
    } // end if

    if (_y > Stage.height){
      reset();
    } // end if

    if (_y < 0){
      reset();
    } // end if
  } // end checkBorders function def

  function onEnterFrame(){
    move();
    checkBorders();
  } //end enterframe def

  function onRelease(){
    removeMovieClip(this);
  } // end release

} // end class def