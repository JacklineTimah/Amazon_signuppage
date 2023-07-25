//The use of class in Javascript

class student{
    constructor(name,age,score,courses){
        //Using the this and return methods
        this.name=name;
        this.age=age;
        this.score=score;
        this.courses=courses;
    }
    name(){
        return this.name;//name of the student

    }
    age(){
        return this.age;//age of the student

    }
    score(){
        return this.score;//score of the student

    }
    addCourse(course){
        this.courses.push(course);

    }
    increaseAge(){
        this.age++;
    }
}

const scholarStudent= new student("Timah",22,92,["Hydrology"]);
const camfedStudent= new student("Abeeku",25,98,["Civil Engineering"]);

/*specialstudent
console.log(specialStudent.name);
console.log(specialStudent.age);
console.log(specialStudent.score);
console.log(specialStudent.course);

specialStudent.increaseAge();
console.log(specialStudent.age);

specialStudent.addcourse("Science");
console.log(specialStudent.course);*/


//scholarstudent
console.log(scholarStudent.name);
console.log(scholarStudent.age);
console.log(scholarStudent.score);
console.log(scholarStudent.course);

scholarStudent.increaseAge();
console.log(scholarStudent.age);

scholarStudent.addCourse(["Hydrology"]);
console.log(scholarStudent.course);

//CamfedStudent
console.log(camfedStudent.name);
console.log(camfedStudent.age);
console.log(camfedStudent.score);
console.log(camfedStudent.course);

camfedStudent.increaseAge();
console.log(camfedStudent.age);

camfedStudent.addCourse(["Civil Engineering"]);
console.log(camfedStudent.course);



