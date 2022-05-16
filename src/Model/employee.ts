
// this is our model class having same field as we provide in the backend 
export class Employee {

    firstName!: String;
    lastName!: String;
    gender!: String;
    department!: String;
    salary!: number;
    notes!: String
    profilePic!: String;
    date!: String;

    constructor(
        firstName: String,
        lastName:String,
        gender: String,
        department: String,
        salary: number,
        notes: String,
        profilePic:String,
        date:String
        ) 
        { }

}
