import { Crasher } from "..";

export class ReferenceProvider {
    async provideReferences(document, position) {
        try {
            return await new Crasher()
                .generateReferences(position);
        } catch (e) {
            console.error(String(e));
        }
    }
}
