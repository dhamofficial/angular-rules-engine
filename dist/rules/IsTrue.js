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
var index_1 = require("./index");
var index_2 = require("./index");
var IsTrue = (function (_super) {
    __extends(IsTrue, _super);
    function IsTrue(name, message, target, isDisplayable) {
        if (isDisplayable === void 0) { isDisplayable = true; }
        var _this = _super.call(this, name, message, isDisplayable) || this;
        _this.target = target;
        return _this;
    }
    IsTrue.prototype.render = function () {
        this.isValid = true;
        if (this.target === false) {
            this.isValid = false;
        }
        return new index_2.RuleResult(this, this.target);
    };
    return IsTrue;
}(index_1.SimpleRule));
exports.IsTrue = IsTrue;
//# sourceMappingURL=/rules/IsTrue.js.map