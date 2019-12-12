import * as vscode from 'vscode';
import * as fs from 'fs';
import { ModelValidator } from '@discipl/law-reg';


export interface IdentifierPaths { [s: string]: [string, number, string]; }
export interface ReferencePaths { [s: string]: [string, number, string][]; }

export class JsonInfo {
    public raw : string = "";
    public modelValidator : any = {};

    private _dataUpdated : vscode.EventEmitter<null> = new vscode.EventEmitter<null>();
    public dataUpdated : vscode.Event<null> = this._dataUpdated.event;

    constructor() {        
        this.computeData();

        vscode.workspace.onDidSaveTextDocument(() => this.computeData());
        vscode.workspace.onDidChangeTextDocument(() => this.computeData());
        vscode.window.onDidChangeActiveTextEditor(() => this.computeData());
    }

    private computeData() {
        if (vscode.window.activeTextEditor) {
            const flintModelDocument = vscode.window.activeTextEditor.document;
            if (flintModelDocument.fileName && flintModelDocument.fileName.endsWith(".flint.json")) {
                const flintJson = fs.readFileSync(flintModelDocument.fileName, 'utf-8');
                this.raw = flintJson;
                this.modelValidator = new ModelValidator(flintJson);

                this._dataUpdated.fire();
            }
            else {
                this.raw = "";
                this.modelValidator = {};
                this._dataUpdated.fire();
            }
            
        }
    }
}