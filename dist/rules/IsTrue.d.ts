import { SimpleRule } from './SimpleRule';
/**
 * Use to determine if the target is truthy.
 */
export declare class IsTrue extends SimpleRule {
    target: boolean;
    /**
     * The constructor for the [IsTrue] rule.
     * @param name: The name of the rule.
     * @param message: The message to display when the rule is violated.
     * @param target: The target that the rules are evaluated against.
     * @param isDisplayable: Indicates if the rule violation is displayble. Default value is [true].
     */
    constructor(name: string, message: string, target: boolean, isDisplayable?: boolean);
    render(): any;
}
