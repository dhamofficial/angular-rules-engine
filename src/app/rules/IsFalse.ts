
import {SimpleRule} from './index';
import {RuleResult} from './index';

/**
 * Use to indicate if the value is falsy.
 */
export class IsFalse extends SimpleRule {
    target: boolean;

     /**
     * The constructor for the [IsFalse] rule.
     * @param name: The name of the rule.
     * @param message: The message to display when the rule is violated.
     * @param target: The target that the rules are evaluated against.
     * @param isDisplayable: Indicates if the rule violation is displayble. Default value is [false].
     */
    constructor(name: string, message: string, target: boolean, isDisplayable: boolean = false) {
        super(name, message, isDisplayable);
        this.target = target;
    }

    render() {
        if (this.target) {//if(true)-->false;
            this.isValid = false;
        }
        return new RuleResult(this, this.target);
    }
}
