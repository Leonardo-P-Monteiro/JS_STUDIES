const class_a = ["student_1", "student_2", "student_3"];
const class_b = ["student_4", "student_5", "student_6"];

const class_c = class_a.concat(class_b, 'student_7');

console.log(`Students: ${class_c} \n`, `Lenght: ${class_c.length}`);

const class_d = [...class_b, ...class_a, ...['test1', 'test2'], ['array']];

console.log(class_d)