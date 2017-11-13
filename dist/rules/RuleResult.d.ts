import { RulePolicy } from './RulePolicy';
import { CompositeRule } from './CompositeRule';
/**
 * This class defines the result of a single rule evaluation.
 */
export declare class RuleResult {
    isValid: boolean;
    rulePolicy: RulePolicy;
    message: string;
    target: any;
    constructor(rulePolicy: RulePolicy, target: any);
    constructor(rulePolicy: CompositeRule);
}
