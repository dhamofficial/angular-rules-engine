import {SimpleRule} from './Index';
import {RuleResult} from './Index';

export class IsNotNullOrUndefined extends SimpleRule {
    target;
    constructor(name: string, message: string, target: any, isDisplayable: boolean = false) {
        super(name, message, isDisplayable);
        this.target = target;
    }

    render() {
        if (this.target == null || this.target === null || typeof this.target === "undefined") {
            this.isValid = true;
        }
        else{
            this.isValid = false;
        }
        return new RuleResult(this, this.target);
    }
}
