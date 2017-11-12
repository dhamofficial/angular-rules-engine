import { MessageType } from './index';
/**
 * Use this class to manage the context of a single service call. This
 * class will contain a list of any service messages added during the processing
 * of a service request.
 */
var /**
 * Use this class to manage the context of a single service call. This
 * class will contain a list of any service messages added during the processing
 * of a service request.
 */
ServiceContext = (function () {
    function ServiceContext() {
        /**
             * A list of service messages added by the application during the processing of the
             * specified service request.
             */
        this.Messages = new Array();
    }
    /**
     * Use this method to add a new message to the [ServiceContext].
     */
    /**
         * Use this method to add a new message to the [ServiceContext].
         */
    ServiceContext.prototype.addMessage = /**
         * Use this method to add a new message to the [ServiceContext].
         */
    function (message) {
        this.Messages.push(message);
    };
    /**
     * Use to determine if the current [ServiceContext] contains any messages with type of [Error].
     */
    /**
         * Use to determine if the current [ServiceContext] contains any messages with type of [Error].
         */
    ServiceContext.prototype.hasErrors = /**
         * Use to determine if the current [ServiceContext] contains any messages with type of [Error].
         */
    function () {
        if (this.Messages && this.Messages.length > 0) {
            var errorMessages = this.Messages.filter(function (f) { return f.MessageType === MessageType.Error; });
            if (errorMessages.length > 0) {
                return true;
            }
        }
        return false;
    };
    /**
     * Use to determine if the current [ServiceContext] does not contain any errors.
     */
    /**
         * Use to determine if the current [ServiceContext] does not contain any errors.
         */
    ServiceContext.prototype.isGood = /**
         * Use to determine if the current [ServiceContext] does not contain any errors.
         */
    function () {
        if (this.Messages && this.Messages.length > 0) {
            var errorMessages = this.Messages.filter(function (f) { return f.MessageType === MessageType.Error; });
            if (errorMessages.length > 0) {
                return false;
            }
        }
        return true;
    };
    return ServiceContext;
}());
/**
 * Use this class to manage the context of a single service call. This
 * class will contain a list of any service messages added during the processing
 * of a service request.
 */
export { ServiceContext };
//# sourceMappingURL=ServiceContext.js.map