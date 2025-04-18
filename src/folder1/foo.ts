
// FIXME: rewrite to use module cache
declare const where: any;

export class Crasher {

    moduleId;

    public async generateReferences(position) {

        // TODO: support jumping from object literals
        for (const [exportedName] of [] as string[][]) {

            const left = where.sync.map((x) => [x, this.moduleId, exportedName]) ?? [];
            
        }
    }

}