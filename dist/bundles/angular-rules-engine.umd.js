(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('typescript-dotnet-commonjs/System/Compare')) :
	typeof define === 'function' && define.amd ? define(['exports', 'typescript-dotnet-commonjs/System/Compare'], factory) :
	(factory((global.angularRulesEngine = {}),global['typescript-dotnet-commonjs/System/prototype']));
}(this, (function (exports,Compare) { 'use strict';

/**
 * This class defines the result of a single rule evaluation.
 */
var RuleResult = (function () {
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
 * Use to indicate how the rule-set is rendered.
 */
/**
 * Use to indicate how the rule-set is rendered.
 */

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
})(exports.RenderType || (exports.RenderType = {}));

/**
 * Use to indicate the severity if the rule is violated.
 */
/**
 * Use to indicate the severity if the rule is violated.
 */

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
})(exports.Severity || (exports.Severity = {}));

/**
 * This is the base class for all rules. All rules will extend from this class. New rules
 * should extend [SimpleRule] or [CompositeRule] - these rule abstractions extend [RulePolicy].
 */
var RulePolicy = (function () {
    /**
     * Overloaded constructor for the [RulePolicy] class.
     * @param name: The name of the rule.
     * @param name: The name of the rule.
     * @param message: The message to display when the rule is violated.
     * @param isDisplayable: Indicates if the rule violation is displayble.
     * @param severity (Optional) Use to indicate the rule violation severity. Default is [Exception].
     * @param priority (Optional) Use to indciate the rule's evaluation priority. Higher numeric values are priority. 0 is default and lowest priority.
     */
    function RulePolicy(name, message, isDisplayable, severity, priority) {
        if (isDisplayable === void 0) { isDisplayable = false; }
        if (severity === void 0) { severity = exports.Severity.Exception; }
        if (priority === void 0) { priority = 0; }
        this.isValid = true;
        this.renderType = exports.RenderType.EvaluateAllRules;
        this.severity = exports.Severity.Exception;
        this.name = name;
        this.message = message;
        this.isDisplayable = isDisplayable;
        this.priority = priority;
        this.severity = severity;
    }
    RulePolicy.prototype.execute = function () {
        console.log('Begin execution of RulePolicy: ' + this.name);
        return this.render();
    };
    /**
     * Each rule must implement this function and return a valid [RuleResult].
     */
    /**
         * Each rule must implement this function and return a valid [RuleResult].
         */
    RulePolicy.prototype.render = /**
         * Each rule must implement this function and return a valid [RuleResult].
         */
    function () {
        throw new Error('Each concrete rule must implement this function and return a valid Result.');
    };
    return RulePolicy;
}());

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Use the [CompositeRule] as a base class for a complex rule - a rule that contains
 * other rules.
 */
var CompositeRule = (function (_super) {
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

var __extends$1 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Use this class as a base [extends] class for simple rules. A simple contains
 * a single rule and target to evaluate.
 *
 * If you require a rule that will contain more than one rule, you should
 * use extend the [CompositeRule] class.
 */
var SimpleRule = (function (_super) {
    __extends$1(SimpleRule, _super);
    /**
     * The constructor for the simple rule.
     * @param name: The name of the rule.
     * @param message: The message to display if the rule is violated.
     */
    function SimpleRule(name, message, isDisplayable) {
        return _super.call(this, name, message, isDisplayable) || this;
    }
    return SimpleRule;
}(RulePolicy));

var __extends$2 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Use to determine if the target is [null] or [undefined].
 */
var IsNullOrUndefined = (function (_super) {
    __extends$2(IsNullOrUndefined, _super);
    /**
     * The constructor for the [IsNullOrUndefined] rule.
     * @param name: The name of the rule.
     * @param message: The message to display when the rule is violated.
     * @param target: The target that the rules are evaluated against.
     * @param isDisplayable: Indicates if the rule violation is displayble. Default value is [false].
     */
    function IsNullOrUndefined(name, message, target, isDisplayable) {
        if (isDisplayable === void 0) { isDisplayable = false; }
        var _this = _super.call(this, name, message, isDisplayable) || this;
        _this.target = target;
        return _this;
    }
    IsNullOrUndefined.prototype.render = function () {
        if (this.target == null || typeof this.target === undefined || typeof this.target === "undefined") {
            this.isValid = true;
        }
        else {
            this.isValid = false;
        }
        return new RuleResult(this, this.target);
    };
    return IsNullOrUndefined;
}(SimpleRule));

var __extends$3 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Use to determine if the target is NOT [null] or [undefined].
 */
var IsNotNullOrUndefined = (function (_super) {
    __extends$3(IsNotNullOrUndefined, _super);
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

var __extends$4 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Use to determine if the target is truthy.
 */
var IsTrue = (function (_super) {
    __extends$4(IsTrue, _super);
    /**
     * The constructor for the [IsTrue] rule.
     * @param name: The name of the rule.
     * @param message: The message to display when the rule is violated.
     * @param target: The target that the rules are evaluated against.
     * @param isDisplayable: Indicates if the rule violation is displayble. Default value is [true].
     */
    function IsTrue(name, message, target, isDisplayable) {
        if (isDisplayable === void 0) { isDisplayable = true; }
        var _this = _super.call(this, name, message, isDisplayable) || this;
        _this.target = target;
        return _this;
    }
    IsTrue.prototype.render = function () {
        this.isValid = true;
        if (this.target === false) {
            //if(not true)-->false;
            this.isValid = false;
        }
        return new RuleResult(this, this.target);
    };
    return IsTrue;
}(SimpleRule));

var __extends$5 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Use to indicate if the value is falsy.
 */
var IsFalse = (function (_super) {
    __extends$5(IsFalse, _super);
    /**
    * The constructor for the [IsFalse] rule.
    * @param name: The name of the rule.
    * @param message: The message to display when the rule is violated.
    * @param target: The target that the rules are evaluated against.
    * @param isDisplayable: Indicates if the rule violation is displayble. Default value is [false].
    */
    function IsFalse(name, message, target, isDisplayable) {
        if (isDisplayable === void 0) { isDisplayable = false; }
        var _this = _super.call(this, name, message, isDisplayable) || this;
        _this.target = target;
        return _this;
    }
    IsFalse.prototype.render = function () {
        if (this.target) {
            //if(true)-->false;
            this.isValid = false;
        }
        return new RuleResult(this, this.target);
    };
    return IsFalse;
}(SimpleRule));

var __extends$6 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Use the [Min] rule to determine if the target value is equal to or greater than the minimum
 * allowed value [comparison].
 */
var Min = (function (_super) {
    __extends$6(Min, _super);
    /**
     * The constructor for the [Min] rule.
     * @param name: The name of the rule.
     * @param message: The message to display when the rule is violated.
     * @param target: The target that the rules are evaluated against.
     * @param comparison: The comparison target the rules are evaluated against.
     * @param isDisplayable: Indicates if the rule violation is displayble. Default value is [false].
    */
    function Min(name, message, target, comparison, isDisplayable) {
        if (isDisplayable === void 0) { isDisplayable = false; }
        var _this = _super.call(this, name, message, isDisplayable) || this;
        _this.target = target;
        _this.comparison = comparison;
        return _this;
    }
    Min.prototype.render = function () {
        var compareResult = Compare.compare(this.target, this.comparison, true);
        if (compareResult === -1 /* Less */) {
            this.isValid = false; //must be equal to or greater than the comparison value;
        }
        return new RuleResult(this, this.target);
    };
    return Min;
}(SimpleRule));

var __extends$7 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Use the [Max] rule to determine if the target value is equal to or less than
 * the comparison value.
 */
var Max = (function (_super) {
    __extends$7(Max, _super);
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
        var compareResult = Compare.compare(this.target, this.comparison, true);
        if (compareResult === 1 /* Greater */) {
            this.isValid = false;
        }
        return new RuleResult(this, this.target);
    };
    return Max;
}(SimpleRule));

var __extends$8 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Use this rule to determine if the specified target is within the specified range (start and end) values.
 *
 * The range values are inclusive.
 *
 * Ex: 1 is within 1 and 3. The target is valid.
 * Ex: 2 is within 1 and 3. The target is valid.
 * Ex: 0 is not within 1 and 3. The target is not valid.
 * Ex: 4 is not within 1 and 3. The target is not valid.
 */
var Range = (function (_super) {
    __extends$8(Range, _super);
    /**
     * Constructor for the [Range] rule.
     * @param name: The name of the rule.
     * @param message: A message to display if the rule is violated.
     * @param target: The target object that the rules will be applied to.
     * @param start: The start range value - the lowest allowed boundary value.
     * @param end: The end range value - the highest allowed boundary value.
     * @param isDisplayable: (Optional) Indicates if the rule violation may be displayed or visible to the caller or client. Default is [false].
     */
    function Range(name, message, target, start, end, isDisplayable) {
        if (isDisplayable === void 0) { isDisplayable = false; }
        var _this = _super.call(this, name, message, isDisplayable) || this;
        _this.target = target;
        _this.start = start;
        _this.end = end;
        _this.isDisplayable = isDisplayable;
        _this.rules.push(new IsNotNullOrUndefined('TargetIsNotNull', 'The target is null or undefined.', _this.target));
        if (_this.target != null) {
            _this.rules.push(new Min('MinValue', 'The value must be equal to or greater than the start range value.', _this.target, _this.start));
            _this.rules.push(new Max('MaxValue', 'The value must be equal to or less than the end range value.', _this.target, _this.end));
        }
        return _this;
    }
    return Range;
}(CompositeRule));

var __extends$9 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Use to determine if the target is equal to the comparison target.
 */
var AreEqual = (function (_super) {
    __extends$9(AreEqual, _super);
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
        if (Compare.compare(this.target, this.comparison, true) !== 0 /* Equal */) {
            this.isValid = false;
        }
        return new RuleResult(this, this.target);
    };
    return AreEqual;
}(SimpleRule));

var __extends$10 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Use to determine if the target is not equal to the comparison target.
 */
var AreNotEqual = (function (_super) {
    __extends$10(AreNotEqual, _super);
    /**
    * The constructor for the [AreNotEqualRule] rule.
    * @param name: The name of the rule.
    * @param message: The message to display when the rule is violated.
    * @param target: The target that the rules are evaluated against.
    * @param comparison: The comparison target the rules are evaluated against.
    * @param isDisplayable: (Optional) Indicates if the rule violation is displayble. Default is [true].
    */
    function AreNotEqual(name, message, target, comparison, isDisplayable) {
        if (isDisplayable === void 0) { isDisplayable = true; }
        var _this = _super.call(this, name, message, isDisplayable) || this;
        _this.target = target;
        _this.comparison = comparison;
        return _this;
    }
    AreNotEqual.prototype.render = function () {
        if (Compare.compare(this.target, this.comparison, true) === 0 /* Equal */) {
            this.isValid = false;
        }
        return new RuleResult(this, this.target);
    };
    return AreNotEqual;
}(SimpleRule));

var __extends$11 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Use this rule to validate a string target. A valid string is not null or undefined; and it
 * is within the specified minimum and maxiumum length.
 */
var StringIsNotNullEmptyRange = (function (_super) {
    __extends$11(StringIsNotNullEmptyRange, _super);
    /**
     * The constructor for the [StringIsNotNullEmptyRangeRule].
     * @param name: The name of the rule.
     * @param message: The message to display when the rule is violated.
     * @param target: The target that the rule(s) will be evaluated against.
     * @param minLength: The minimum allowed length of the target value.
     * @param maxLength: The maximum allowed length of the target value.
     */
    function StringIsNotNullEmptyRange(name, message, target, minLength, maxLength, isDisplayable) {
        if (isDisplayable === void 0) { isDisplayable = false; }
        var _this = _super.call(this, name, message, isDisplayable) || this;
        _this.target = target;
        _this.minLength = minLength;
        _this.maxLength = maxLength;
        _this.configureRules();
        return _this;
    }
    /**
     * A helper method to configure/add rules to the validation context.
     */
    /**
         * A helper method to configure/add rules to the validation context.
         */
    StringIsNotNullEmptyRange.prototype.configureRules = /**
         * A helper method to configure/add rules to the validation context.
         */
    function () {
        this.rules.push(new IsNotNullOrUndefined('StringIsNotNull', 'The string target is null or undefined.', this.target));
        if (this.target != null) {
            this.rules.push(new Range('TargetLengthIsWithinRange', 'The string value is not within the specified range.', this.target.toString().length, this.minLength, this.maxLength));
        }
    };
    return StringIsNotNullEmptyRange;
}(CompositeRule));

/**
 * Use to indicate the type for the [ServiceMessage].
 */
/**
 * Use to indicate the type for the [ServiceMessage].
 */

/**
 * Use to indicate the type for the [ServiceMessage].
 */
(function (MessageType) {
    /**
     * Use to indicate the message type is informational.
     */
    MessageType[MessageType["Information"] = 1] = "Information";
    /**
     * Use to indicate the message type is warning.
     */
    MessageType[MessageType["Warning"] = 2] = "Warning";
    /**
     * Use to indicate the message type is error.
     */
    MessageType[MessageType["Error"] = 3] = "Error";
})(exports.MessageType || (exports.MessageType = {}));

/**
 * Use this class to manage the context of a single service call. This
 * class will contain a list of any service messages added during the processing
 * of a service request.
 */
var ServiceContext = (function () {
    function ServiceContext() {
        /**
             * A list of service messages added by the application during the processing of the
             * specified service request.
             */
        this.Messages = new Array();
    }
    /**
     * Use this method to add a new message to the [ServiceContext].
     */
    /**
         * Use this method to add a new message to the [ServiceContext].
         */
    ServiceContext.prototype.addMessage = /**
         * Use this method to add a new message to the [ServiceContext].
         */
    function (message) {
        this.Messages.push(message);
    };
    /**
     * Use to determine if the current [ServiceContext] contains any messages with type of [Error].
     */
    /**
         * Use to determine if the current [ServiceContext] contains any messages with type of [Error].
         */
    ServiceContext.prototype.hasErrors = /**
         * Use to determine if the current [ServiceContext] contains any messages with type of [Error].
         */
    function () {
        if (this.Messages && this.Messages.length > 0) {
            var errorMessages = this.Messages.filter(function (f) { return f.MessageType === exports.MessageType.Error; });
            if (errorMessages.length > 0) {
                return true;
            }
        }
        return false;
    };
    /**
     * Use to determine if the current [ServiceContext] does not contain any errors.
     */
    /**
         * Use to determine if the current [ServiceContext] does not contain any errors.
         */
    ServiceContext.prototype.isGood = /**
         * Use to determine if the current [ServiceContext] does not contain any errors.
         */
    function () {
        if (this.Messages && this.Messages.length > 0) {
            var errorMessages = this.Messages.filter(function (f) { return f.MessageType === exports.MessageType.Error; });
            if (errorMessages.length > 0) {
                return false;
            }
        }
        return true;
    };
    return ServiceContext;
}());

/**
 * Use this class to create a message for the current [ServiceContext].
 */
var ServiceMessage = (function () {
    function ServiceMessage(name, message, messageType, source, displayToUser) {
        if (displayToUser === void 0) { displayToUser = false; }
        this.Name = name;
        this.Message = message;
        if (message) {
            this.MessageType = messageType;
        }
        if (source) {
            this.Source = source;
        }
    }
    /**
     * Use this extension method to add the name of the message.
     * @param name: The name of the service message.
     */
    /**
         * Use this extension method to add the name of the message.
         * @param name: The name of the service message.
         */
    ServiceMessage.prototype.WithName = /**
         * Use this extension method to add the name of the message.
         * @param name: The name of the service message.
         */
    function (name) {
        this.Name = name;
        return this;
    };
    /**
     * Use this extension method to add the message text to the ServiceMessage item.
     * @param message: The display text of the service message.
     */
    /**
         * Use this extension method to add the message text to the ServiceMessage item.
         * @param message: The display text of the service message.
         */
    ServiceMessage.prototype.WithMessage = /**
         * Use this extension method to add the message text to the ServiceMessage item.
         * @param message: The display text of the service message.
         */
    function (message) {
        this.Message = message;
        return this;
    };
    /**
     * Use this extension method to set the [MessageType] of the ServiceMessage item.
     * @param messageType: Use to indicate the message type.
     */
    /**
         * Use this extension method to set the [MessageType] of the ServiceMessage item.
         * @param messageType: Use to indicate the message type.
         */
    ServiceMessage.prototype.WithMessageType = /**
         * Use this extension method to set the [MessageType] of the ServiceMessage item.
         * @param messageType: Use to indicate the message type.
         */
    function (messageType) {
        this.MessageType = messageType;
        return this;
    };
    /**
     * Use this extension method to set the [Source] of the ServiceMessage item.
     * @param source: Use to indicate the source of the message.
     */
    /**
         * Use this extension method to set the [Source] of the ServiceMessage item.
         * @param source: Use to indicate the source of the message.
         */
    ServiceMessage.prototype.WithSource = /**
         * Use this extension method to set the [Source] of the ServiceMessage item.
         * @param source: Use to indicate the source of the message.
         */
    function (source) {
        this.Source = source;
        return this;
    };
    /**
     * Use this extension method to set the [DisplayToUser] indicator of the ServiceMessage.
     * @param displayToUser: A boolean value to indicate if the message can be displayed to the user.
     */
    /**
         * Use this extension method to set the [DisplayToUser] indicator of the ServiceMessage.
         * @param displayToUser: A boolean value to indicate if the message can be displayed to the user.
         */
    ServiceMessage.prototype.WithDisplayToUser = /**
         * Use this extension method to set the [DisplayToUser] indicator of the ServiceMessage.
         * @param displayToUser: A boolean value to indicate if the message can be displayed to the user.
         */
    function (displayToUser) {
        this.DisplayToUser = displayToUser;
        return this;
    };
    /**
     * Use this method return a string representing the ServiceMessage.
     */
    /**
         * Use this method return a string representing the ServiceMessage.
         */
    ServiceMessage.prototype.toString = /**
         * Use this method return a string representing the ServiceMessage.
         */
    function () {
        return "Name: " + this.Name + "; Message: " + this.Message + "; MessageType: " + this.MessageType.toString() + "; Source: " + this.Source + "; DisplayToUser: " + this.DisplayToUser;
    };
    return ServiceMessage;
}());

/**
 * Use this enumeration to determine the state of the Validation Context.
 */
/**
 * Use this enumeration to determine the state of the Validation Context.
 */

/**
 * Use this enumeration to determine the state of the Validation Context.
 */
(function (ValidationContextState) {
    ValidationContextState[ValidationContextState["NotEvaluated"] = 0] = "NotEvaluated";
    ValidationContextState[ValidationContextState["Success"] = 1] = "Success";
    ValidationContextState[ValidationContextState["Failure"] = 2] = "Failure";
})(exports.ValidationContextState || (exports.ValidationContextState = {}));

/**
 * Use this class to create a new Validation Context for your application. With this
 * context, you can add rules and evaluate the rules.
 *
 * After the rules are evaluated, you can use the Validation Context to determine if there are
 * any rule violations.
 */
var ValidationContext = (function () {
    /**
     * The constructor for the base validation context.
     */
    function ValidationContext() {
        this.state = exports.ValidationContextState.NotEvaluated;
        this.results = new Array();
        this.rules = new Array();
        console.log('The [ValidationContext] is ready for action(s). All things are good until broken...');
    }
    /**
     * Use this method to add a new rule to the ValidationContext.
     */
    /**
         * Use this method to add a new rule to the ValidationContext.
         */
    ValidationContext.prototype.addRule = /**
         * Use this method to add a new rule to the ValidationContext.
         */
    function (rule) {
        if (this.source) {
            rule.source = this.source;
        }
        this.rules.push(rule);
        return this;
    };
    /**
     * Use this extension method to set the [Source] for the current validation context.
     * @param source
     */
    /**
         * Use this extension method to set the [Source] for the current validation context.
         * @param source
         */
    ValidationContext.prototype.withSource = /**
         * Use this extension method to set the [Source] for the current validation context.
         * @param source
         */
    function (source) {
        this.source = source;
        return this;
    };
    /**
     * Use this method to execute the rules added to the [ValidationContext].
     */
    /**
         * Use this method to execute the rules added to the [ValidationContext].
         */
    ValidationContext.prototype.renderRules = /**
         * Use this method to execute the rules added to the [ValidationContext].
         */
    function () {
        var _this = this;
        this.results = new Array();
        if (this.rules && this.rules.length < 1) {
            return this;
        }
        this.rules.sort(function (r) { return r.priority; }).forEach(function (r) { return _this.results.push(r.execute()); });
        return this;
    };
    /**
     * Use to determine if the validation context has any rule violations.
     */
    /**
         * Use to determine if the validation context has any rule violations.
         */
    ValidationContext.prototype.hasRuleViolations = /**
         * Use to determine if the validation context has any rule violations.
         */
    function () {
        var hasViolations = false;
        if (this.rules) {
            var ruleViolationsCount = this.rules && this.rules.filter(function (r) { return r.isValid === false; }).length;
            if (ruleViolationsCount > 0) {
                hasViolations = true;
            }
        }
        return hasViolations;
    };
    Object.defineProperty(ValidationContext.prototype, "isValid", {
        /**
         * *Use to indicate if the validation context is valid - no rule violations.
         * @returns {}: returns a boolean.
         */
        get: /**
             * *Use to indicate if the validation context is valid - no rule violations.
             * @returns {}: returns a boolean.
             */
        function () {
            var isRuleValid = true;
            if (this.rules) {
                var invalidRulesCount = this.rules.filter(function (r) { return r.isValid === false; }).length;
                if (invalidRulesCount > 0) {
                    isRuleValid = false;
                }
            }
            return isRuleValid;
        },
        enumerable: true,
        configurable: true
    });
    return ValidationContext;
}());

exports.RuleResult = RuleResult;
exports.RulePolicy = RulePolicy;
exports.CompositeRule = CompositeRule;
exports.SimpleRule = SimpleRule;
exports.IsNullOrUndefined = IsNullOrUndefined;
exports.IsNotNullOrUndefined = IsNotNullOrUndefined;
exports.IsTrue = IsTrue;
exports.IsFalse = IsFalse;
exports.Min = Min;
exports.Max = Max;
exports.Range = Range;
exports.AreEqual = AreEqual;
exports.AreNotEqual = AreNotEqual;
exports.StringIsNotNullEmptyRange = StringIsNotNullEmptyRange;
exports.ServiceContext = ServiceContext;
exports.ServiceMessage = ServiceMessage;
exports.ValidationContext = ValidationContext;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-rules-engine.umd.js.map
