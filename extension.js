const vscode = require("vscode");

class Crasher {
    func() {
        for (const foo of []) {
            someVar.map(() => [this.anything, foo]);
        }
    }
}

module.exports = {
    activate(context) {
        context.subscriptions.push(
            vscode.commands.registerCommand("crash-repro.hello-crash", () => {
                new Crasher().func();
            })
        );

    }
};
