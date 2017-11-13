import { SimpleRule } from './SimpleRule';
import { Primitive } from './Primitive';
/**
 * Use to determine if the target is not equal to the comparison target.
 */
export declare class AreNotEqual extends SimpleRule {
    target: Primitive;
    comparison: Primitive;
    /**
    * The constructor for the [AreNotEqualRule] rule.
    * @param name: The name of the rule.
    * @param message: The message to display when the rule is violated.
    * @param target: The target that the rules are evaluated against.
    * @param comparison: The comparison target the rules are evaluated against.
    * @param isDisplayable: (Optional) Indicates if the rule violation is displayble. Default is [true].
    */
    constructor(name: string, message: string, target: Primitive, comparison: Primitive, isDisplayable?: boolean);
    render(): any;
}
