"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var index_1 = require('./index');
var index_2 = require('./index');
var index_3 = require('./index');
var index_4 = require('./index');
var Range = (function (_super) {
    __extends(Range, _super);
    function Range(name, message, target, start, end, isDisplayable) {
        if (isDisplayable === void 0) { isDisplayable = false; }
        _super.call(this, name, message);
        this.target = target;
        this.start = start;
        this.end = end;
        this.isDisplayable = isDisplayable;
        this.rules.push(new index_2.IsNotNullOrUndefined('TargetIsNotNull', 'The target is null or undefined.', this.target));
        if (this.target != null) {
            this.rules.push(new index_3.Min('MinValue', 'The value must be equal to or greater than the start range value.', this.target, this.start));
            this.rules.push(new index_4.Max('MaxValue', 'The value must be equal to or less than the end range value.', this.target, this.end));
        }
    }
    return Range;
}(index_1.CompositeRule));
exports.Range = Range;
//# sourceMappingURL=/rules/Range.js.map