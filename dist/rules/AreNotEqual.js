"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var dCompare = require("typescript-dotnet-commonjs/System/Compare");
var Compare = dCompare;
var index_1 = require("./index");
var index_2 = require("./index");
var AreNotEqual = (function (_super) {
    __extends(AreNotEqual, _super);
    function AreNotEqual(name, message, target, comparison, isDisplayable) {
        if (isDisplayable === void 0) { isDisplayable = true; }
        var _this = _super.call(this, name, message, isDisplayable) || this;
        _this.target = target;
        _this.comparison = comparison;
        return _this;
    }
    AreNotEqual.prototype.render = function () {
        if (Compare.compare(this.target, this.comparison, true) === 0 /* Equal */) {
            this.isValid = false;
        }
        return new index_2.RuleResult(this, this.target);
    };
    return AreNotEqual;
}(index_1.SimpleRule));
exports.AreNotEqual = AreNotEqual;
//# sourceMappingURL=/rules/AreNotEqual.js.map