import { SimpleRule } from './index';
/**
 * Use to indicate if the value is falsy.
 */
export declare class IsFalse extends SimpleRule {
    target: boolean;
    /**
    * The constructor for the [IsFalse] rule.
    * @param name: The name of the rule.
    * @param message: The message to display when the rule is violated.
    * @param target: The target that the rules are evaluated against.
    * @param isDisplayable: Indicates if the rule violation is displayble. Default value is [false].
    */
    constructor(name: string, message: string, target: boolean, isDisplayable?: boolean);
    render(): any;
}
