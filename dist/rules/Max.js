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
import { SimpleRule } from './SimpleRule';
import { RuleResult } from './RuleResult';
/**
 * Use the [Max] rule to determine if the target value is equal to or less than
 * the comparison value.
 */
var /**
 * Use the [Max] rule to determine if the target value is equal to or less than
 * the comparison value.
 */
Max = (function (_super) {
    __extends(Max, _super);
    /**
    * The constructor for the [Max] rule.
    * @param name: The name of the rule.
    * @param message: The message to display when the rule is violated.
    * @param target: The target that the rules are evaluated against.
    * @param comparison: The comparison target the rules are evaluated against.
    * @param isDisplayable: Indicates if the rule violation is displayble. Default value is [false].
   */
    function Max(name, message, target, comparison, isDisplayable) {
        if (isDisplayable === void 0) { isDisplayable = false; }
        var _this = _super.call(this, name, message, isDisplayable) || this;
        _this.target = target;
        _this.comparison = comparison;
        return _this;
    }
    Max.prototype.render = function () {
        var compareResult = compare(this.target, this.comparison, true);
        if (compareResult === 1 /* Greater */) {
            this.isValid = false;
        }
        return new RuleResult(this, this.target);
    };
    return Max;
}(SimpleRule));
/**
 * Use the [Max] rule to determine if the target value is equal to or less than
 * the comparison value.
 */
export { Max };
//# sourceMappingURL=Max.js.map