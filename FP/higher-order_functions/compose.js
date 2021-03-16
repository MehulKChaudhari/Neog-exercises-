//Composition Example 
    const username = name => "Hello " + name ;

    const userID = id => " your userID is " + id;
    const compose = (user,id) => {
    return "welcome " + user + id;
    }

    console.log(compose(username("mehul"),userID("sdsf")))

//Homework Question write a compose function that can take any no of functions and will run the given function in order when called as an argument 

    const compose=(...func) =>{
        return (num) => func.reduce((acc, currval) => {
        return currval(acc)
        },num);
    } 

    const add = v1 => v1 + 1;
    const square = v1 => v1 * v1;
    const cube = v1 => v1*v1*v1;
    const sub = v1 => v1-1;
    const sub1 = v1 => v1-35;



    const a = compose(add,square,cube,sub,sub1);
    console.log(a(2))