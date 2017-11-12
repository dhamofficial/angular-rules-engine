import {IRuleComponent} from './IRuleComponent';
import {RuleResult} from './RuleResult';
import {RenderType} from './RenderType';
import {Severity} from './Severity';

/**
 * This is the base class for all rules. All rules will extend from this class. New rules
 * should extend [SimpleRule] or [CompositeRule] - these rule abstractions extend [RulePolicy].
 */
export class RulePolicy implements IRuleComponent {
    isValid: boolean = true;
    message: string;
    name: string;
    priority: number;
    result: RuleResult;
    isDisplayable: boolean;
    renderType: RenderType = RenderType.EvaluateAllRules;
    severity: Severity = Severity.Exception;
    source: string;

    /**
     * Overloaded constructor for the [RulePolicy] class.
     * @param name: The name of the rule.
     * @param message: The message to display when the rule is violated.
     * @param isDisplayable: Indicates if the rule violation is displayble.
     */
    constructor(name: string, message: string, isDisplayable: boolean);
    /**
     * Overloaded constructor for the [RulePolicy] class.
     * @param name: The name of the rule.
     * @param name: The name of the rule.
     * @param message: The message to display when the rule is violated.
     * @param isDisplayable: Indicates if the rule violation is displayble.
     * @param severity (Optional) Use to indicate the rule violation severity. Default is [Exception].
     * @param priority (Optional) Use to indciate the rule's evaluation priority. Higher numeric values are priority. 0 is default and lowest priority.
     */
    constructor(name: string, message: string, isDisplayable: boolean = false, severity: Severity = Severity.Exception, priority: number = 0) {
        this.name = name;
        this.message = message;
        this.isDisplayable = isDisplayable;
        this.priority = priority;
        this.severity = severity;
    }

    execute(): RuleResult {
        console.log('Begin execution of RulePolicy: ' + this.name);
        return this.render();
    }

    /**
     * Each rule must implement this function and return a valid [RuleResult].
     */
    render(): RuleResult {
        throw new Error('Each concrete rule must implement this function and return a valid Result.');
    }
}
