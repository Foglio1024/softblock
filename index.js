class SoftBlock
{
    constructor(mod)
    {
        this.mod = mod;
        this.mod.hook("S_WHISPER", 3, ev =>
        {
            if(!this.mod.settings.enabled) return;

            if(this.mod.settings.blocklist.includes(ev.name.toLowerCase()))
                return false;
        });

        this.mod.command.add('sb', (arg1) =>
        {
            if (arg1 === undefined)
            {
                this.mod.settings.enabled = !this.mod.settings.enabled;
                this.mod.command.message(`<font color="#cccccc">Mod </font><font color="#${(this.mod.settings.enabled ? '42F5AD' : 'F05164')}">${(this.mod.settings.enabled ? 'en' : 'dis')}abled</font><font color="#cccccc">.</font>`);
            }
            else 
            {
                if (this.mod.settings.blocklist.includes(arg1.toString().toLowerCase()))
                {
                    this.mod.settings.blocklist.splice(this.mod.settings.blocklist.indexOf(arg1.toString().toLowerCase()), 1);
                    this.mod.command.message(`<font color="#cccccc">Unblocked </font><font>${arg1.toString()}</font><font color="#cccccc">.</font>`);
                }
                else
                {
                    this.mod.settings.blocklist.push(arg1.toString().toLowerCase());
                    this.mod.command.message(`<font color="#cccccc">Blocking </font><font>${arg1.toString()}</font><font color="#cccccc">.</font>`);
                }
            }
        });
    }
}

module.exports = SoftBlock;