// Import the necessary modules
//import { Subjects } from './subjects/Subjects';
//import { Teacher } from './js/subjects/Teacher';

// Create and export constants for Cpp, Java, and React subjects
export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React();

// Create and export a Teacher object with experienceTeachingC
export const cTeacher: Teacher = { firstName: "John", lastName: "Doe", experienceTeachingC: 10 };

// Log the results of calling methods on Cpp subject
console.log("C++:");
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Log the results of calling methods on Java subject
console.log("Java:");
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// Log the results of calling methods on React subject
console.log("React:");
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
