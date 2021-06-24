const fs = require('fs'); // thu vien

    // console.log('start');

    // // const data = fs.readFileSync('./data.txt', {encoding: 'utf-8'}); // doc file
    // // console.log(data);

    // fs.readFile('./data.txt', {encoding: 'utf-8'}, function (err, data) {
    //     console.log(data); //trong thoi gian doi doc file thi chuong trinh  chay cac lenh khac truoc
    // })

    // console.log('end');

function readFile(path) {
    return new Promise(function(resolve, reject) {
        fs.readFile(path, {encoding: 'utf-8'}, function(err, data){
            if (err){
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
}

readFile('/data.txt')
    .then(function(data) {
    console.log(data);
    })
    .catch(function(err) {
        console.log('loi', err);
    })
    .finally(function(){
        console.log('end');//luon luon hoat dong du loi hay khong
    })