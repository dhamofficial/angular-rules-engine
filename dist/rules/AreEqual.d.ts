import { SimpleRule, Primitive } from './index';
/**
 * Use to determine if the target is equal to the comparison target.
 */
export declare class AreEqual extends SimpleRule {
    target: Primitive;
    comparison: Primitive;
    /**
     * The constructor for the [AreEqualRule] rule.
     * @param name: The name of the rule.
     * @param message: The message to display when the rule is violated.
     * @param target: The target that the rules are evaluated against.
     * @param comparison: The comparison target the rules are evaluated against.
     * @param isDisplayable: Indicates if the rule violation is displayble. Default value is [true].
    */
    constructor(name: string, message: string, target: Primitive, comparison: Primitive, isDisplayable?: boolean);
    render(): any;
}
