const college ={
    name: 'vnc',
    class: ['11', '12'],
    events: ['science fair', 'bijoy dibos', '21feb'],
    unique: {
        color: 'blue',
        result: {
            gpa: 5,
            position: 'top'
        }
    }
}
college.unique.result.position = 'top top top most'
console.log(college.unique.result.position);