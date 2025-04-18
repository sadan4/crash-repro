import { ReferenceProvider } from "./folder1/folder2";

import { ExtensionContext, languages, Uri } from "vscode";


export function activate(context: ExtensionContext) {
    context.subscriptions.push(

        languages.registerReferenceProvider({ language: "javascript" }, new ReferenceProvider()),
    );

}

export function deactivate() {
}

