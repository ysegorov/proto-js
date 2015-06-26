
'use strict';

var Proto = require('./Proto');


// Superclass
var Person = Proto.extend({
    constructor: function (name) {
        this.name = name;
    },
    describe: function() {
        return "Person called "+this.name;
    },
});


// Subclass
var Employee = Person.extend({
    constructor: function (name, title) {
        Employee.super.constructor.call(this, name);
        this.title = title;
    },
    describe: function () {
        return Employee.super.describe.call(this)+" ("+this.title+")";
    },
});


/***** Interaction *****
var jane = Employee.new("Jane", "CTO"); // normally: new Employee(...)
> Employee.isPrototypeOf(jane) // normally: jane instanceof Employee
true
> jane.describe()
'Person called Jane (CTO)'
*/
