export default function updateStudentGradeByCity(students, city, newGrades) {
    if (!Array.isArray(students) || !Array.isArray(newGrades)) {
      return [];
    }
  
    const cityStudents = students
      .filter(student => student.location === city)
      .map(student => {
        const matchingGrade = newGrades.find(grade => grade.studentId === student.id);
        return { ...student, grade: matchingGrade ? matchingGrade.grade : 'N/A' };
      });
  
    return cityStudents;
  }
  