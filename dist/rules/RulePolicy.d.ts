import { IRuleComponent } from './IRuleComponent';
import { RuleResult } from './RuleResult';
import { RenderType } from './RenderType';
import { Severity } from './Severity';
/**
 * This is the base class for all rules. All rules will extend from this class. New rules
 * should extend [SimpleRule] or [CompositeRule] - these rule abstractions extend [RulePolicy].
 */
export declare class RulePolicy implements IRuleComponent {
    isValid: boolean;
    message: string;
    name: string;
    priority: number;
    result: RuleResult;
    isDisplayable: boolean;
    renderType: RenderType;
    severity: Severity;
    source: string;
    /**
     * Overloaded constructor for the [RulePolicy] class.
     * @param name: The name of the rule.
     * @param message: The message to display when the rule is violated.
     * @param isDisplayable: Indicates if the rule violation is displayble.
     */
    constructor(name: string, message: string, isDisplayable: boolean);
    execute(): RuleResult;
    /**
     * Each rule must implement this function and return a valid [RuleResult].
     */
    render(): RuleResult;
}
