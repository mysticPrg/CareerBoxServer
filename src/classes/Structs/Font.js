/**
 * Created by careerBox on 2014-11-11.
 */

if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(['classes/Structs/Color'], function (Color) {

    function Font(props) {
        this.color = Color.BLACK;
        this.size = 11;
        this.family = 'dotum';

        this.italic = false;
        this.bold = false;

        if (props) {
            this.color = props.color ? props.color : this.color;
            this.size = props.size ? props.size : this.size;
            this.family = props.family ? props.family : this.family;
            this.italic = props.italic ? props.italic : this.italic;
            this.bold = props.bold ? props.bold : this.bold;
        }
    };

    return Font;
});