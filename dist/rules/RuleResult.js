/**
 * This class defines the result of a single rule evaluation.
 */
var /**
 * This class defines the result of a single rule evaluation.
 */
RuleResult = (function () {
    function RuleResult(rulePolicy, target) {
        this.isValid = false;
        if (rulePolicy != null) {
            this.rulePolicy = rulePolicy;
            this.isValid = rulePolicy.isValid;
            this.message = rulePolicy.message;
        }
        this.target = target;
    }
    return RuleResult;
}());
/**
 * This class defines the result of a single rule evaluation.
 */
export { RuleResult };
//# sourceMappingURL=RuleResult.js.map