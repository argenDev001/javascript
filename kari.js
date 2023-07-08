const generate = (a) => {
    return (b) => {
        return (c) => {
            return (d) =>{
                return `${a}.//${b}.${c}.${d}`
            }
        }
    }
}
console.log(generate('https')('www')('amazon')('com'))