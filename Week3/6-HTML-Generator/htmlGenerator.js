


function Paragraph(text){

    this.text = text;

    return {
        "render": function(){
            return ['<p>', text, '</p>'].join('');
        }
    };

}

function Div(){
    var inner = [];

    return {
        "render": function(){

            console.log(inner);
            return ['<div>', text, '</div>'].join('');
        },

        "addChild": function(el){
            inner.push(el);
        }
    };
}

var div = new Div();
div.addChild(new Div());
console.log(div);
console.log(div.render());