var road = parseInt(readline()); // the length of the road before the gap.
var gap = parseInt(readline()); // the length of the gap.
var platform = parseInt(readline()); // the length of the landing platform.

var hasJumped = '';

// game loop
while (true) {
    var speed = parseInt(readline()); // the motorbike's speed.
    var coordX = parseInt(readline()); // the position on the road of the motorbike.
    var jumpHere = gap+1;

    if(speed > jumpHere) {
        print('SLOW');
    } else if(speed != jumpHere && hasJumped!='Yes') {
        print('SPEED');
    } else if (coordX+speed > road && hasJumped!='Yes') {
        print('JUMP');
        hasJumped = 'Yes';
    } else if (hasJumped!='') {
        print('SLOW')
    } else {
        print('WAIT');
    }
}
