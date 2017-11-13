import { SimpleRule } from './SimpleRule';
/**
 * Use to determine if the target is NOT [null] or [undefined].
 */
export declare class IsNotNullOrUndefined extends SimpleRule {
    target: any;
    /**
    * The constructor for the [IsNotNullOrUndefined] rule.
    * @param name: The name of the rule.
    * @param message: The message to display when the rule is violated.
    * @param target: The target that the rules are evaluated against.
    * @param isDisplayable: Indicates if the rule violation is displayble. Default value is [false].
    */
    constructor(name: string, message: string, target: any, isDisplayable?: boolean);
    /**
     * If the target is null or undefined, the result will be false.
     */
    render(): any;
}
