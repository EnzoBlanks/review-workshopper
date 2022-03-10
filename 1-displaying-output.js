let song = "so we living life like a video, when the sun is always ut and you never get old, and the champagne's always cold, and the music is alwys good, and the pretty girls just happen to stop by in the hood";
    // Jay Z
    // Forever Young
    console.log(song);

    let age = 36;
    console.log(age);

    let a = "I would like to thank my arms for always being by my side, my legs for always supporting me, and my fingers, because I can always count on them."
    a=a.split(" "); let str='';
    for(let i = 0; i < a.length; i++) {
        if((i + 1) % 5 == 0) str += '\n';
        str +=" " + a[i];
    } return(str);
