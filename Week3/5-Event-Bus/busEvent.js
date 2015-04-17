

var busEvent = (function() {
    var type = {};

    return{
        "on":function(){

            var fnArray = [];

            if (arguments.length <= 2){
                type[arguments[0]] = [ arguments[1] ];
            } else {
                for (i = 1; i < arguments.length; i++) {
                    fnArray.push(arguments[i]);
                }


                type[arguments[0]] = fnArray;
            }

        },
        "remove": function(ev){


            delete type[ev];

        },
        "trigger": function(ev){
            if (ev in type){
                type[ev].forEach(function(el){
                    el();
                });
            } else{
                console.log('there is no such event');
            }
        }
    };

}());


var a = busEvent;
a.on('log', function(){console.log('log 1'); }, function(){console.log('log 1 second')} );
a.on('log3', function(){console.log('log'); }, function(){console.log('some other log')} );

a.trigger('log');
a.trigger('log3');
a.remove('log');
a.trigger('log');