import { model } from "@angular/core";

class Organization {

    private _id!: number;

    private _name!: string;
    
    private _lastName!: string;

    private _dni!: string;

    private _username!: string;

    private _password!: string;

    private _address!: string;


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

    
    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }

    
    public get dni(): string {
        return this._dni;
    }
    public set dni(value: string) {
        this._dni = value;
    }

    
    public get username(): string {
        return this._username;
    }
    public set username(value: string) {
        this._username = value;
    }

    
    public get password(): string {
        return this._password;
    }
    public set password(value: string) {
        this._password = value;
    }

    
    public get address(): string {
        return this._address;
    }
    public set address(value: string) {
        this._address = value;
    }


    
}
