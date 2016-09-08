"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var dCompare = require('typescript-dotnet-commonjs/System/Compare');
var Compare = dCompare;
var Index_1 = require('./Index');
var Index_2 = require('./Index');
var Max = (function (_super) {
    __extends(Max, _super);
    function Max(name, message, target, comparison, isDisplayable) {
        if (isDisplayable === void 0) { isDisplayable = false; }
        _super.call(this, name, message, isDisplayable);
        this.target = target;
        this.comparison = comparison;
    }
    Max.prototype.render = function () {
        if (Compare.compare(this.target, this.comparison, true) === 1 /* Greater */) {
            this.isValid = false;
        }
        return new Index_2.RuleResult(this, this.target);
    };
    return Max;
}(Index_1.SimpleRule));
exports.Max = Max;
