
'use strict';


var Proto = require('./Proto');


/**
 * Optional: compatibility with constructor functions
 */
Function.prototype.extend = function(subProps) {
    var constrFunc = this;
    // Let a prototype-as-class extend a constructor function constrFunc.
    // Step 1: tmpClass is Proto, but as a sub-prototype of constrFunc.prototype
    var tmpClass = Proto.extend.call(constrFunc.prototype, Proto);
    // Step 2: tmpClass is a prototype-as-class => use as such
    return tmpClass.extend(subProps);
};
