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
var RulePolicy_1 = require("./RulePolicy");
var RuleResult_1 = require("./RuleResult");
var CompositeRule = (function (_super) {
    __extends(CompositeRule, _super);
    function CompositeRule(name, message, isDisplayable) {
        var _this = _super.call(this, name, message, isDisplayable) || this;
        _this.hasErrors = false;
        _this.results = new Array();
        _this.rules = new Array();
        return _this;
    }
    CompositeRule.prototype.render = function () {
        var _this = this;
        this.rules.sort(function (s) { return s.priority; }).forEach(function (r) { return _this.results.push(r.execute()); });
        return this.processResults();
    };
    CompositeRule.prototype.hasRules = function () {
        if (this.rules && this.rules.length > 0) {
            return true;
        }
        return false;
    };
    CompositeRule.prototype.processResults = function () {
        if (this.results.filter(function (r) { return (r.isValid === false); }).length > 0) {
            this.isValid = false;
            this.hasErrors = true;
        }
        return new RuleResult_1.RuleResult(this);
    };
    return CompositeRule;
}(RulePolicy_1.RulePolicy));
exports.CompositeRule = CompositeRule;
//# sourceMappingURL=/rules/CompositeRule.js.map