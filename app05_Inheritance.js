"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Parent = /** @class */ (function () {
    function Parent() {
    }
    Parent.prototype.car = function () {
        console.log("4 wheel car only no airbag");
    };
    Parent.prototype.bike = function () {
        console.log("one bikes");
    };
    return Parent;
}());
exports.Parent = Parent;
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.car = function () {
        console.log("4 wheel + 4 airbag car");
    };
    return Child;
}(Parent));
exports.Child = Child;
var child = new Child();
child.car();
child.bike();
