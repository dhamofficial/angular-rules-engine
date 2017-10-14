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
/**
 * Use the [Max] rule to determine if the target value is equal to or less than
 * the comparison value.
 */
var Max = (function (_super) {
    __extends(Max, _super);
    function Max(name, message, target, comparison, isDisplayable) {
        if (isDisplayable === void 0) { isDisplayable = false; }
        var _this = _super.call(this, name, message, isDisplayable) || this;
        _this.target = target;
        _this.comparison = comparison;
        return _this;
    }
    Max.prototype.render = function () {
        var compareResult = Compare.compare(this.target, this.comparison, true);
        if (compareResult === 1 /* Greater */) {
            this.isValid = false;
        }
        return new index_2.RuleResult(this, this.target);
    };
    return Max;
}(index_1.SimpleRule));
exports.Max = Max;
//# sourceMappingURL=/rules/Max.js.map