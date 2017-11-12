import {SimpleRule} from './index';
import {RuleResult} from './index';

/**
 * Use to determine if the target is NOT [null] or [undefined].
 */
export class IsNotNullOrUndefined extends SimpleRule {
    target;

     /**
     * The constructor for the [IsNotNullOrUndefined] rule.
     * @param name: The name of the rule.
     * @param message: The message to display when the rule is violated.
     * @param target: The target that the rules are evaluated against.
     * @param isDisplayable: Indicates if the rule violation is displayble. Default value is [false].
     */
    constructor(name: string, message: string, target: any, isDisplayable: boolean = false) {
        super(name, message, isDisplayable);
        this.target = target;
    }

    /**
     * If the target is null or undefined, the result will be false.
     */
    render() {
        if (this.target == null || this.target === null || typeof this.target === "undefined") {
            this.isValid = false;
        }
        return new RuleResult(this, this.target);
    }
}
