import { Crasher } from "..";

export class ReferenceProvider {
    async provideReferences(document, position) {
            return await new Crasher()
                .generateReferences(position);
    }
}
