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
import { SimpleRule } from './index';
import { RuleResult } from './index';
/**
 * Use to determine if the target is NOT [null] or [undefined].
 */
var /**
 * Use to determine if the target is NOT [null] or [undefined].
 */
IsNotNullOrUndefined = (function (_super) {
    __extends(IsNotNullOrUndefined, _super);
    /**
    * The constructor for the [IsNotNullOrUndefined] rule.
    * @param name: The name of the rule.
    * @param message: The message to display when the rule is violated.
    * @param target: The target that the rules are evaluated against.
    * @param isDisplayable: Indicates if the rule violation is displayble. Default value is [false].
    */
    function IsNotNullOrUndefined(name, message, target, isDisplayable) {
        if (isDisplayable === void 0) { isDisplayable = false; }
        var _this = _super.call(this, name, message, isDisplayable) || this;
        _this.target = target;
        return _this;
    }
    /**
     * If the target is null or undefined, the result will be false.
     */
    /**
         * If the target is null or undefined, the result will be false.
         */
    IsNotNullOrUndefined.prototype.render = /**
         * If the target is null or undefined, the result will be false.
         */
    function () {
        if (this.target == null || this.target === null || typeof this.target === "undefined") {
            this.isValid = false;
        }
        return new RuleResult(this, this.target);
    };
    return IsNotNullOrUndefined;
}(SimpleRule));
/**
 * Use to determine if the target is NOT [null] or [undefined].
 */
export { IsNotNullOrUndefined };
//# sourceMappingURL=IsNotNullOrUndefined.js.map