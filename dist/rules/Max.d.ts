import { SimpleRule } from './SimpleRule';
import { Primitive } from './Primitive';
/**
 * Use the [Max] rule to determine if the target value is equal to or less than
 * the comparison value.
 */
export declare class Max extends SimpleRule {
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
    constructor(name: string, message: string, target: Primitive, comparison: Primitive, isDisplayable?: boolean);
    render(): any;
}
