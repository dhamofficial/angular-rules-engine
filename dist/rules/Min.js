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
 * Use the [Min] rule to determine if the target value is equal to or greater than the minimum
 * allowed value [comparison].
 */
var Min = (function (_super) {
    __extends(Min, _super);
    function Min(name, message, target, comparison, isDisplayable) {
        if (isDisplayable === void 0) { isDisplayable = false; }
        var _this = _super.call(this, name, message, isDisplayable) || this;
        _this.target = target;
        _this.comparison = comparison;
        return _this;
    }
    Min.prototype.render = function () {
        var compareResult = Compare.compare(this.target, this.comparison, true);
        if (compareResult === -1 /* Less */) {
            this.isValid = false; //must be equal to or greater than the comparison value;
        }
        return new index_2.RuleResult(this, this.target);
    };
    return Min;
}(index_1.SimpleRule));
exports.Min = Min;
//# sourceMappingURL=/rules/Min.js.map