/**
 * Created by careerBox on 2014-11-11.
 */

if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define([
    'classes/Util',
    'classes/Enums/ItemType',
    'classes/LayoutComponents/LayoutComponent'
], function (Util, ItemType, LayoutComponent) {

    function Item(props) {
        LayoutComponent.call(this, props);

        this.itemType = ItemType.shape;

        if (props) {
            this.itemType = props.itemType ? props.itemType : this.itemType;
        }
    };

    Util.inherit(Item, LayoutComponent);

    return Item;
});