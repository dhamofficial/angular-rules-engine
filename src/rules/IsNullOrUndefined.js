"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Index_1 = require('./Index');
var Index_2 = require('./Index');
var IsNullOrUndefined = (function (_super) {
    __extends(IsNullOrUndefined, _super);
    function IsNullOrUndefined(name, message, target, isDisplayable) {
        if (isDisplayable === void 0) { isDisplayable = false; }
        _super.call(this, name, message, isDisplayable);
        this.target = target;
    }
    IsNullOrUndefined.prototype.render = function () {
        this.isValid = true;
        if (this.target !== null || typeof this.target === "undefined") {
            this.isValid = false;
        }
        return new Index_2.RuleResult(this, this.target);
    };
    return IsNullOrUndefined;
}(Index_1.SimpleRule));
exports.IsNullOrUndefined = IsNullOrUndefined;
