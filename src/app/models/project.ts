import { model } from "@angular/core";

export class Project {

    private _id!: number;

    private _name!: string;

    private _description!: string;
   

    private _dateStart!: string;

    private _dateEnd!: string;

    private _imageUrl!: string;
    
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }

    
    public get dateStart(): string {
        return this._dateStart;
    }
    public set dateStart(value: string) {
        this._dateStart = value;
    }

    
    public get dateEnd(): string {
        return this._dateEnd;
    }
    public set dateEnd(value: string) {
        this._dateEnd = value;
    }

    public get imageUrl(): string { // Getter para imageUrl
        return this._imageUrl;
    }

    public set imageUrl(value: string) { // Setter para imageUrl
        this._imageUrl = value;
    }
}
