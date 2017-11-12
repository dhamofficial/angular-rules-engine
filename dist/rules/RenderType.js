/**
 * Use to indicate how the rule-set is rendered.
 */
/**
 * Use to indicate how the rule-set is rendered.
 */
export var RenderType;
/**
 * Use to indicate how the rule-set is rendered.
 */
(function (RenderType) {
    /**
     * Use to indicate the rule rendering stops when a rule's evaluation is false - rule contains violations.
     */
    RenderType[RenderType["ExitOnFirstFalseEvaluation"] = 0] = "ExitOnFirstFalseEvaluation";
    /**
     * Use to indicate the rule rendering stops when a rule's evalution is true (no rule violations).
     */
    RenderType[RenderType["ExitOnFirstTrueEvaluation"] = 1] = "ExitOnFirstTrueEvaluation";
    /**
     * Use to indicate that all rules of the rule set are rendered - returns all rule results.
     */
    RenderType[RenderType["EvaluateAllRules"] = 2] = "EvaluateAllRules";
})(RenderType || (RenderType = {}));
//# sourceMappingURL=RenderType.js.map