"use strict";
exports.__esModule = true;
var Shape = /** @class */ (function () {
    function Shape(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Shape.prototype.set_x = function () {
        return this._x;
    };
    Shape.prototype.set_y = function () {
        return this._y;
    };
    Shape.prototype.get_x = function () {
        return this._x;
    };
    Shape.prototype.get_y = function () {
        return this._y;
    };
    Shape.prototype.getInfo = function () {
        return "x = " + this._x + ", y = " + this._y;
    };
    return Shape;
}());
exports.Shape = Shape;
