!function(e,t){void 0===e&&void 0!==window&&(e=window),"function"==typeof define&&define.amd?define(["jquery"],function(e){return t(e)}):"object"==typeof module&&module.exports?module.exports=t(require("jquery")):t(e.jQuery)}(this,function(e){e.fn.selectpicker.defaults={noneSelectedText:"Valikut pole tehtud",noneResultsText:"Otsingule {0} ei ole vasteid",countSelectedText:function(e,t){return 1==e?"{0} item selected":"{0} items selected"},maxOptionsText:function(e,t){return["Limiit on {n} max","Globaalne limiit on {n} max"]},selectAllText:"Vali kõik",deselectAllText:"Tühista kõik",multipleSeparator:", "}});