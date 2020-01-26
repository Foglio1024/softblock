"use strict"

const DefaultSettings = {
    "enabled": true,
    "debug" : false,
    "blocklist": []
}
/*
    "chars" : {
        "Foglio" : {
            "whitelist" : [],
            "blacklist" : []
        }
    }
*/

module.exports = function MigrateSettings(from_ver, to_ver, settings)
{
    if (from_ver === null)
    {
        // No config file exists, use default settings
        return DefaultSettings;
    } else
    {
        // Migrate from older version (using the new system) to latest one
        throw new Error('So far there is only one settings version and this should never be reached!');
    }
}