import { RulePolicy } from './RulePolicy';
import { RuleResult } from './RuleResult';
/**
 * Use the [CompositeRule] as a base class for a complex rule - a rule that contains
 * other rules.
 */
export declare class CompositeRule extends RulePolicy {
    hasErrors: boolean;
    results: Array<RuleResult>;
    rules: Array<RulePolicy>;
    /**
     *
     * @param name The name of the rule.
     * @param message The message to display if the rule is violated.
     * @param isDisplayable Indicates if the rule is displayable.
     */
    constructor(name: string, message: string, isDisplayable: boolean);
    render(): RuleResult;
    hasRules(): boolean;
    processResults(): RuleResult;
}
