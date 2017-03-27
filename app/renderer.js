
var tmp = function(){

    const {dialog} = require('electron').remote
    var fileList = dialog.showOpenDialog({properties: ['openFile', 'openDirectory', 'multiSelections']})
    console.log('fileList1 : ', fileList)

}

module.exports = tmp;
