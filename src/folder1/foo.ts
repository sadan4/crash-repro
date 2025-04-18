declare const where: any;

export class Crasher {

    moduleId;

    public async generateReferences(position) {

        for (const [exportedName] of [] as any) {

            const left = where.sync.map(() => [this.moduleId, exportedName]);
            
        }
    }

}