import { Crasher } from "..";

export class ReferenceProvider implements IReferenceProvider {
    async provideReferences(document: TextDocument, position: Position): References {
        // if (!isWebpackModule(document.getText()))
        //     return;
        // if (!await ModuleCache.hasCache()) {
        //     window.showErrorMessage("No Module Cache found, please download modules first");
        //     return;
        // }
        // if (!ModuleDepManager.hasModDeps()) {
        //     await ModuleDepManager.initModDeps({
        //         fromDisk: true,
        //     });
        // }
        try {
            return await new Crasher(document.getText())
                .generateReferences(position);
        } catch (e) {
            console.error(String(e));
        }
    }
}
