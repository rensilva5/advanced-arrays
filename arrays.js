let studentNames = ['jhon', 'max', 'tommy']

let teachers = [
    {
        name: 'damiam',
        subject: 'arrays, javascript, mongodb'
    },
    {
        name: 'jonathan',
        subject: 'arrays, javascript',
    },
]
// sort
// const sortedStudentNames = studentNames.sort()
// console.log(sortedStudentNames)

// const sortedTeachers = teachers.sort()
// console.log(sortedTeachers)

// filter
//const filteredStudentNames = studentNames.filter(
    // function (student) {
    //     return student == 'max'
    // }
    // (student) => {
    //     return student === 'max'
    // }
    // (student) => student === 'max'
    //(student) => true // do not do this
//)
// console.log(filteredStudentNames)

// studentNames = studentNames.filter((student) => true)

// const max = studentNames.find((student) => student === 'max')
// console.log(max)

const someMax = studentNames.some((student) => student === 'max')
console.log("Do we hace at least a max?", someMax)

const everyMax = studentNames.every((student) => student === 'max')
console.log("Everyone's a max?", everyMax)
