const fs = require('fs')

var rootPath = '.'


var appendResult = (data) => {
    fs.appendFile('./_scanner_result.txt', `${process.argv[2] ? process.argv[2] : '.'}${data}${process.argv[3] ? `${process.argv[3]}\r\n` : '\r\n'}`, () => { })
}

var scan = (path) => {
    fs.readdir(`${rootPath}/${path}/`, (err, files) => {
        if (err) {
            console.error(err)
        } else {
            files.forEach((value) => {
                fs.stat(`${rootPath}/${path}/${value}`, (err, state) => {
                    if (err) {
                        console.error(err)
                    } else {
                        if (state.isDirectory()) {
                            scan(`${path}/${value}`)
                        } else {
                            for (const i in process.argv) {
                                if (i >= 4 && value.match(process.argv[i])) {
                                    appendResult(`${path}/${value}`)
                                    break
                                }
                            }
                        }
                    }
                })
            })
        }
    })
}

scan('')
