import {Friend, Colleague, EmailContact } from './myTypes'
import { friends, colleagues } from "./01-basics";

function older(f: Friend) : string {
     f.age += 1
     return `${f.name} is now ${f.age}` 
}

console.log(older(friends[0]))

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]): Colleague {
  const result = cs.sort(
    (c1, c2) => c1.contact.extension - c2.contact.extension
  );
  return result[cs.length - 1];
}
console.log(highestExtension(colleagues.current));

function addColleague(colleagues: Colleague[], name: string, dept:string, email:string) {
    const newHire: Colleague = {
        name: name,
        department: dept,
        contact: {
            email: email,
            extension: (highestExtension(colleagues).contact.extension + 1),
        },
    }
    colleagues.push(newHire);
}

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");

console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));

function sortColleagues(
    colleagues: Colleague[],
    sorter: (c1: Colleague, c2: Colleague) => number,
    max?: number
): EmailContact[] {
    const end = colleagues.length;
    if(max !== undefined){
        max < 2 ? 1 : max
    }
    const sorted = colleagues.sort(sorter);
    const fullResult =  sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
    return fullResult.slice(0,end)
}

console.log(sortColleagues(colleagues.current, (a, b) => a.contact.extension - b.contact.extension, 2));
console.log(sortColleagues(colleagues.current, (a, b) => a.name.length - b.name.length, 1));

function findFriends(
    friends: Friend[],
    criterion: (friend: Friend) => boolean
): Friend[] {
    return friends.filter(criterion);
} 

console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));
console.log(findFriends(friends, (friend) => friend.age < 35));

