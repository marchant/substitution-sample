/**
 * @module ui/main.reel
 */
var Component = require("montage/ui/component").Component,
    AbstractButton = require("montage/ui/base/abstract-button").AbstractButton;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    constructor: {
        value: function Main() {
            this.super();
        }
    },

    selectedPanel: {
        value: "vegetables"
    },

    handleSwitchPanelAction: {
        value: function () {
            if (this.selectedPanel === "vegetables") {
                this.selectedPanel = "fruits";
            } else {
                this.selectedPanel = "vegetables";
            }
        }
    }

});


exports.button = AbstractButton.specialize( {

    hasTemplate: {
        value: false
    }

});
