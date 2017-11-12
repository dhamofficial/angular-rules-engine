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
import { RulePolicy } from './RulePolicy';
import { RuleResult } from './RuleResult';
/**
 * Use the [CompositeRule] as a base class for a complex rule - a rule that contains
 * other rules.
 */
var /**
 * Use the [CompositeRule] as a base class for a complex rule - a rule that contains
 * other rules.
 */
CompositeRule = (function (_super) {
    __extends(CompositeRule, _super);
    /**
     *
     * @param name The name of the rule.
     * @param message The message to display if the rule is violated.
     * @param isDisplayable Indicates if the rule is displayable.
     */
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
        return new RuleResult(this);
    };
    return CompositeRule;
}(RulePolicy));
/**
 * Use the [CompositeRule] as a base class for a complex rule - a rule that contains
 * other rules.
 */
export { CompositeRule };
//# sourceMappingURL=CompositeRule.js.map