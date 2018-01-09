import retrunTrueOrFalse from 'my-lib';

const p1 = new Promise(function(resolve, reject) {
    if(retrunTrueOrFalse()) {
        resolve('Success!');
    }
    else {
        reject('Failure!');
    }
});
