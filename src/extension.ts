import { Crasher } from "./folder1";

import { commands, ExtensionContext } from "vscode";


export function activate(context: ExtensionContext) {
    context.subscriptions.push(
        commands.registerCommand("crash-repro.hello-crash", async () => {
            new Crasher().generateReferences(null);
        })
    );

}

export function deactivate() {
}

