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
import { compare } from 'typescript-dotnet-commonjs/System/Compare';
import { SimpleRule, RuleResult } from './index';
/**
 * Use to determine if the target is equal to the comparison target.
 */
var /**
 * Use to determine if the target is equal to the comparison target.
 */
AreEqual = (function (_super) {
    __extends(AreEqual, _super);
    /**
     * The constructor for the [AreEqualRule] rule.
     * @param name: The name of the rule.
     * @param message: The message to display when the rule is violated.
     * @param target: The target that the rules are evaluated against.
     * @param comparison: The comparison target the rules are evaluated against.
     * @param isDisplayable: Indicates if the rule violation is displayble. Default value is [true].
    */
    function AreEqual(name, message, target, comparison, isDisplayable) {
        if (isDisplayable === void 0) { isDisplayable = true; }
        var _this = _super.call(this, name, message, isDisplayable) || this;
        _this.target = target;
        _this.comparison = comparison;
        return _this;
    }
    AreEqual.prototype.render = function () {
        if (compare(this.target, this.comparison, true) !== 0 /* Equal */) {
            this.isValid = false;
        }
        return new RuleResult(this, this.target);
    };
    return AreEqual;
}(SimpleRule));
/**
 * Use to determine if the target is equal to the comparison target.
 */
export { AreEqual };
//# sourceMappingURL=AreEqual.js.map