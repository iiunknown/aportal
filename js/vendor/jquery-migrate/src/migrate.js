window.console&&window.console.log&&(jQuery&&!/^[12]\./.test(jQuery.fn.jquery)||window.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"),jQuery.migrateWarnings&&window.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),window.console.log("JQMIGRATE: Migrate is installed"+(jQuery.migrateMute?"":" with logging active")+", version "+jQuery.migrateVersion));var warnedAbout={};function migrateWarn(e){var r=window.console;warnedAbout[e]||(warnedAbout[e]=!0,jQuery.migrateWarnings.push(e),r&&r.warn&&!jQuery.migrateMute&&(r.warn("JQMIGRATE: "+e),jQuery.migrateTrace&&r.trace&&r.trace()))}function migrateWarnProp(e,r,n,t){Object.defineProperty(e,r,{configurable:!0,enumerable:!0,get:function(){return migrateWarn(t),n},set:function(e){migrateWarn(t),n=e}})}function migrateWarnFunc(e,r,n,t){e[r]=function(){return migrateWarn(t),n.apply(this,arguments)}}jQuery.migrateWarnings=[],void 0===jQuery.migrateTrace&&(jQuery.migrateTrace=!0),jQuery.migrateReset=function(){warnedAbout={},jQuery.migrateWarnings.length=0},"BackCompat"===window.document.compatMode&&migrateWarn("jQuery is not compatible with Quirks Mode");