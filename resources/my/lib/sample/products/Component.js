sap.ui.define(["my/lib/sample/base/Component","sap/ui/core/Component"],function(t,e){"use strict";return t.extend("my.lib.sample.products.Component",{metadata:{manifest:"json"},init:function(){t.prototype.init.apply(this,arguments);var n=e.getOwnerComponentFor(this);if(!n){this.attachEvent("toProduct",function(t){var e=t.getParameter("productID");this.getRouter().navTo("detailRoute",{id:e})},this)}}})});