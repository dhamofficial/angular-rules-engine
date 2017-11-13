import { SimpleRule } from './SimpleRule';
/**
 * Use to determine if the target is [null] or [undefined].
 */
export declare class IsNullOrUndefined extends SimpleRule {
    target: any;
    /**
     * The constructor for the [IsNullOrUndefined] rule.
     * @param name: The name of the rule.
     * @param message: The message to display when the rule is violated.
     * @param target: The target that the rules are evaluated against.
     * @param isDisplayable: Indicates if the rule violation is displayble. Default value is [false].
     */
    constructor(name: string, message: string, target: any, isDisplayable?: boolean);
    render(): any;
}
