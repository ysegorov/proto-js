/* jshint node:true */

/**!
 * Copyright (c) 2012 Axel Rauschmayer
 * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * Copyright notice and license must remain intact for legal use
 *
 */

// see https://github.com/rauschma/proto-js/issues/4 for license info


'use strict';


var getDescriptors = require('object.getownpropertydescriptors');


/**
 * The root of all classes that adhere to "the prototypes as classes" protocol.
 * The neat thing is that the class methods "new" and "extend" are automatically
 * inherited by subclasses of this class (because Proto is in their prototype chain).
 */
var Proto = {
    /**
     * Class method: create a new instance and let instance method constructor() initialize it.
     * "this" is the prototype of the new instance.
     */
    new: function () {
        var instance = Object.create(this);
        if (instance.constructor) {
            instance.constructor.apply(instance, arguments);
        }
        return instance;
    },

    /**
     * Class method: subclass "this" (a prototype object used as a class)
     */
    extend: function (subProps) {
        // We cannot set the prototype of "subProps"
        // => copy its contents to a new object that has the right prototype
        var subProto = Object.create(this, getDescriptors(subProps));
        subProto.super = this; // for super-calls
        return subProto;
    },
};


module.exports = Proto;
