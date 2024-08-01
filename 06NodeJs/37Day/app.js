const {name,course,num,show1,show2,show3}=require('./utilis')
console.log(name)//name is not defined
console.log(course)
console.log(num)
show1()
let res=show2()
console.log(res)

let res1=show3(2,5)
console.log(res1)

let res2=show3(5,6)
console.log(res2)


// Challenge
// index.js
// share.js 
    //  > decslare 2 variable 
    //  > create a function getNotes() return some cal 

// >> printing > index.js 
//  10 min 

const chalk=require('chalk')
console.log(chalk.blue("Hello World"))
console.log(chalk.red("Hello World"))
console.log(chalk.blue("Hello World"))
console.log(chalk.blue('Hello') + ' World' + chalk.red('!'));
console.log(chalk.red('Hello', chalk.underline.bgGreen('world') + '!'));
console.log(chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
));

const validator=require('validator')
console.log(validator.isEmail("poonam@gmail.com"))// true || false
console.log(validator.isURL("https://www.npmjs.com/package/validator")) //>> true