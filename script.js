// clean run
slowMath.add(6, 2)
    .then((a) => {
        console.log(a);
        slowMath.multiply(a, 2)
            .then((m) => {
                console.log(m);
                slowMath.divide(m, 4)
                    .then((d) => {
                        console.log(d);
                        slowMath.subtract(d, 3)
                            .then((s) => {
                                console.log(s);
                                slowMath.add(s, 98)
                                    .then((aa) => {
                                        console.log(aa);
                                        slowMath.remainder(aa, 2)
                                            .then((d) => {
                                                console.log(d);
                                                slowMath.multiply(d, 50)
                                                    .then((mm) => {
                                                        console.log(mm);
                                                        slowMath.remainder(mm, 40)
                                                            .then((rr) => {
                                                                console.log(rr);
                                                                slowMath.add(rr, 32)
                                                                    .then((aaaa) => {
                                                                        console.log(aaaa);
                                                                    });
                                                            });
                                                    });
                                            });
                                    });
                            });
                    });
            });
    }).catch((e) => {
        console.log(e)
    });

// error run
// slowMath.add(1, 1)
//     .then((a) => {
//         console.log(a);
//         slowMath.multiply(a, 2)
//             .then((m) => {
//                 console.log(m);
//                 slowMath.divide(m, 4)
//                     .then((d) => {
//                         console.log(d);
//                         slowMath.subtract(d, 3)
//                             .then((s) => {
//                                 console.log(s);
//                                 slowMath.add(s, 98)
//                                     .then((aa) => {
//                                         console.log(aa);
//                                         slowMath.remainder(aa, 2)
//                                             .then((d) => {
//                                                 console.log(d);
//                                                 slowMath.multiply(d, 50)
//                                                     .then((mm) => {
//                                                         console.log(mm);
//                                                         slowMath.remainder(mm, 40)
//                                                             .then((rr) => {
//                                                                 console.log(rr);
//                                                                 slowMath.add(rr, 32)
//                                                                     .then((aaaa) => {
//                                                                         console.log(aaaa);
//                                                                     });
//                                                             });
//                                                     });
//                                             });
//                                     });
//                             });
//                     });
//             });
//     }).catch((e) => {
//         console.log(e)
//     });

let doMath = async (x, y) => {
    try {
        let a = await slowMath.add(x, y);
        let b = await slowMath.multiply(a, 2);
        let c = await slowMath.divide(b, 4);
        let d = await slowMath.subtract(c, 3)
        let e = await slowMath.add(d, 98)
        let f = await slowMath.remainder(e, 2)
        let g = await slowMath.multiply(f, 50)
        let h = await slowMath.remainder(g, 40)
        let i = await slowMath.add(h, 32)
        console.log(i);
    } catch (e) {
        console.log(e);
    }
}


doMath(6, 2);
doMath(1, 1);
