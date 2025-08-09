let grades=[{subject: 'Matematicas', grade:9.5},{subject: 'Fisica', grade:9.2},{subject: 'Literatura', grade:9.5}];

export const saveGrade=(grade)=>{
    grades.push(grade);
    console.log("Arreglo",grades)
}

export const getGrades=()=>{
    return grades;
}
export const updateGrade=(nota)=>{
    let gradeRetieved=find(nota.subject);
    if(gradeRetieved!=null){
        gradeRetieved.grade=nota.grade;
    }
    console.log(grades);
}
const find=(subject)=>{
    for(let i =0;i<grades.length;i++){
        if(grades[i].subject==subject){
        return grades[i];
        }
    }
    return null;
}