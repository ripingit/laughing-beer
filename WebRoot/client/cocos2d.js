
(function () {
    var d = document;
    var prefix = 'client/';
    var c = {
        COCOS2D_DEBUG:2, //0 to turn debug off, 1 for basic debug, and 2 for full debug
        box2d:false,
        chipmunk:false,
        showFPS:false,
        frameRate:60,
        loadExtension:false,
        tag:'gameCanvas', //the dom element to run cocos2d on
        //engineDir:'../cocos2d/',
        SingleEngineFile:prefix+'Cocos2d-html5-v2.1.1.min.js',
        appFiles:[
            prefix+'src/resource.js',
            prefix+'src/myApp.js',
            prefix+'src/Mediator.js',
            prefix+'src/Location.js',
            prefix+'src/TimerAndTurnsPanel.js',
            prefix+'src/Tools.js',
            prefix+'src/config.js',
            prefix+'src/DetailsPanel.js',
            prefix+'src/PostForm.js',
            prefix+'src/GameOver.js',
            prefix+'src/TipBox.js',
            prefix+'src/TipsManage.js',
        ]
    };
    window.addEventListener('DOMContentLoaded', function () {
        //first load engine file if specified
        var s = d.createElement('script');
        /*********Delete this section if you have packed all files into one*******/
        if (c.SingleEngineFile && !c.engineDir) {
            s.src = c.SingleEngineFile;
        }
        else if (c.engineDir && !c.SingleEngineFile) {
            s.src = c.engineDir + 'platform/jsloader.js';
        }
        else {
            alert('You must specify either the single engine file OR the engine directory in "cocos2d.js"');
        }
        /*********Delete this section if you have packed all files into one*******/

            //s.src = 'Packed_Release_File.js'; //IMPORTANT: Un-comment this line if you have packed all files into one

        document.ccConfig = c;
        s.id = 'cocos2d-html5';
        d.body.appendChild(s);
        //else if single file specified, load singlefile
    });
})();
