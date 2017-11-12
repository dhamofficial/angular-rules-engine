import CompareResult from 'typescript-dotnet-commonjs/System/CompareResult';
import { compare } from 'typescript-dotnet-commonjs/System/Compare';

import {SimpleRule, RuleResult, Primitive} from './index';

/**
 * Use the [Max] rule to determine if the target value is equal to or less than
 * the comparison value.
 */
export class Max extends SimpleRule {
    target: Primitive;
    comparison: Primitive;

     /**
     * The constructor for the [Max] rule.
     * @param name: The name of the rule.
     * @param message: The message to display when the rule is violated.
     * @param target: The target that the rules are evaluated against.
     * @param comparison: The comparison target the rules are evaluated against.
     * @param isDisplayable: Indicates if the rule violation is displayble. Default value is [false].
    */
    constructor(name: string, message: string, target: Primitive, comparison: Primitive, isDisplayable: boolean = false) {
        super(name, message, isDisplayable);
        this.target = target;
        this.comparison = comparison;
    }

    render() {
        let compareResult = compare(this.target, this.comparison, true); 
        if (compareResult === CompareResult.Greater) {
            this.isValid = false;
        }
        return new RuleResult(this, this.target);
    }
}
