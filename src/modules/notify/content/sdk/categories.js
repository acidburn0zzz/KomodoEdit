var logging   = require("ko/logging");
var log       = logging.getLogger("notify-categories");

var categories = {

    register: function(key, opts)
    {
        this._registered[key] = opts;
    },

    unregister: function(key)
    {
        delete this._registered[key];
    },

    get: function(key)
    {
        if ( ! key) return this._registered;
        return this._registered[key] || false;
    },

    _registered: {}

};

categories.register("autoComplete",
{
    label: "Auto Completions",
    opts:
    {
        duration: 3000,
        from: "editor"
    }
});

categories.register("autoUpdate",
{
    label: "Auto Update",
    opts:
    {
        icon: "chrome://icomoon/skin/icons/notification2.png",
        duration: 10000 // 10 seconds
    }
});

categories.register("linter", { label: "Linter Messages" });

categories.register("browser", { label: "Browser" });

categories.register("bookmark", { label: "Bookmarks" });

categories.register("editor", { label: "Editor" });

categories.register("workspace", { label: "Workspace" });

categories.register("commands", { label: "Commands" });

categories.register("remote", { label: "Remote (Servers)" });

categories.register("codeintel", { label: "CodeIntel" });

categories.register("codeintel-verbose", { label: "CodeIntel (Verbose)" });

categories.register("toolbox", { label: "Toolbox" });

categories.register("tools", { label: "Tools" });

categories.register("formatting", { label: "Formatting" });

categories.register("keybindings", { label: "Keybindings" });

categories.register("viEmulation", { label: "Vi Emulation" });

categories.register("scc", { label: "Source Code Control" });

categories.register("projects", { label: "Projects" });

categories.register("history", { label: "History" });

categories.register("macros", { label: "Macro's" });

categories.register("customization", { label: "Customization" });

categories.register("mark", { label: "Transient Marks (emacs)" });

categories.register("debugger", { label: "Debugger" });

categories.register("searchReplace", { label: "Search / Replace" });

categories.register("unittest", { label: "Unit Testing" });

categories.register("lint", { label: "Linter" });

categories.register("refactoring", { label: "Refactoring" });

categories.register("publishing", { label: "Publishing" });

categories.register("places", { label: "Places" });

categories.register("fs", { label: "Filesystem" });

module.exports = categories;
