console.log("person1 : show tickets");
console.log("person2 : show tickets");

// const promiseWifeBringingTicks = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("tickets");
//     },3000);
// });
// promiseWifeBringingTicks.then((t)=>{
//     console.log(`person3 : show ${t}`)
// });

// const getPopcorn = promiseWifeBringingTicks.then((t)=>{
//     console.log("wife : i have a ticks")
//     console.log("husband : we should go in");
//     console.log("wife : no i am hungry");
//     return new Promise((resolve,reject)=>{
//         resolve(`${t} Popcorn`);
//     });
// });
//  const getButter = getPopcorn.then((t)=>{
//     console.log("husband : i got some PopCorn");
//     console.log("husband : we should go in");
//     console.log("wife : i need butter on my Popcorn");
//     return new Promise((resolve,reject)=>{
//         resolve(`${t} Butter PopCorn`);
//     })  ;
//  });
//  getButter.then((t)=>console.log(t));

const preMovie = async () => {
  const promiseWifeBringingTicks = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("tickets");
    }, 3000);
  });
  const getPopcorn = new Promise((resolve, reject) => resolve(`Popcorn`));
  const addButter = new Promise((resolve,reject)=>resolve(`Butter`));
  const getColdDrinks = new Promise((resolve,reject)=>resolve(`ColdDrinks`));

  let tickets = await promiseWifeBringingTicks;

  console.log(`wife : i have a ${tickets}`);
  console.log("husband : we should go in");
  console.log("wife : no i am hungry");

  let Popcorn = await getPopcorn;

  console.log(`husband : i got some ${Popcorn}`);
  console.log("husband : we should go in");
  console.log("wife : i need butter on my Popcorn");

  let Butter = await addButter;
  console.log(`husband : i got some ${Butter} on Popcorn`);
  console.log('anything else darling?');
  console.log('let go we are  getting late');
  console.log('thanks for your reminder');

  let ColdDrinks = await getColdDrinks;
  console.log(`husband : i want one ${ColdDrinks}`);
  console.log('husband : anything you want darling');
  return tickets;
};

preMovie().then((m)=>console.log(`Person : show ${m}`));
console.log("person4 : show tickets");
console.log("person5 : show tickets");