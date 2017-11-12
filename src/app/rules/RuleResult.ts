import {RulePolicy} from './index';
import {CompositeRule} from './index';

/**
 * This class defines the result of a single rule evaluation. 
 */
export class RuleResult {
    isValid: boolean = false;
    rulePolicy: RulePolicy;
    message: string;
    target: any;

    constructor(rulePolicy: RulePolicy, target: any);
    constructor(rulePolicy: CompositeRule);
    constructor(rulePolicy: RulePolicy, target?: any) {
        if (rulePolicy != null) {
            this.rulePolicy = rulePolicy;
            this.isValid = rulePolicy.isValid;
            this.message = rulePolicy.message;
        }
        this.target = target;
    }
}
