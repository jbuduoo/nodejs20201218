var log = {
    info: function (info) {
        console.log('Info: ' + info);
    },
    warning:function (warning) {
        console.log('Warning: ' + warning);
    },
    error:function (error) {
        console.log('Error: ' + error);
    }
};

module.exports = log  //這一部很重要，只要，模組(程式)要給別的模組(程式)使用，必須加這個！！