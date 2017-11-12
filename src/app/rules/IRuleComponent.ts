import {RuleResult} from './index';

/**
 * An interface that defines the required shape/structure for all rules. The rule engine
 * implements a Composite pattern for the rules. 
 */
export interface IRuleComponent {
    execute(): RuleResult;
}
