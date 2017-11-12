import {RulePolicy} from './RulePolicy';
import {RuleResult} from './RuleResult';

/**
 * Use the [CompositeRule] as a base class for a complex rule - a rule that contains
 * other rules. 
 */
export class CompositeRule extends RulePolicy {
    hasErrors: boolean = false;
    results: Array<RuleResult> = new Array<RuleResult>();
    rules: Array<RulePolicy> = new Array<RulePolicy>();

    /**
     * 
     * @param name The name of the rule. 
     * @param message The message to display if the rule is violated.
     * @param isDisplayable Indicates if the rule is displayable.
     */
    constructor(name: string, message: string, isDisplayable: boolean) {
        super(name, message, isDisplayable);
    }

    render(): RuleResult {
        this.rules.sort(s => s.priority).forEach(r => this.results.push(r.execute()));
        return this.processResults();
    }

    public hasRules(): boolean {
        if (this.rules && this.rules.length > 0) {
            return true;
        }
        return false;
    }

    processResults(): RuleResult {
        if (this.results.filter(r => (r.isValid === false)).length > 0) {
            this.isValid = false;
            this.hasErrors = true;
        }
        return new RuleResult(this);
    }
}
