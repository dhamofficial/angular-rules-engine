/**
 * Use to indicate the severity if the rule is violated.
 */
/**
 * Use to indicate the severity if the rule is violated.
 */
export var Severity;
/**
 * Use to indicate the severity if the rule is violated.
 */
(function (Severity) {
    /**
     * Indicates the rule violation is an [Exception].
     */
    Severity[Severity["Exception"] = 0] = "Exception";
    /**
       * Indicates the rule violation is an [Warning].
       */
    Severity[Severity["Warning"] = 1] = "Warning";
    /**
    * Indicates the rule violation is an [Information].
    */
    Severity[Severity["Information"] = 2] = "Information";
})(Severity || (Severity = {}));
//# sourceMappingURL=Severity.js.map