// game loop
while (true) {
    var inputs = readline().split(' ');
    var spaceX = parseInt(inputs[0]);
    var spaceY = parseInt(inputs[1]);
    var tallestMountain = 0;

    for (var i = 0; i < 8; i++) {
        var mountainH = parseInt(readline()); // represents the height of one mountain, from 9 to 0. Mountain heights are provided from left to right.
        if(mountainH > tallestMountain) {
            tallestMountain = i;
        }
    }
    if(spaceX == tallestMountain) {
        print('FIRE');
    } else {
        print('HOLD')
    }
}
