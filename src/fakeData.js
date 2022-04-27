import { faker } from '@faker-js/faker';

const fakeUser = (num) =>{
    var firstName = faker.name.firstName()
    var lastName = faker.name.lastName()
    return {
        id:faker.datatype.uuid(),
        firstName : firstName,
        lastName : lastName,
        email: faker.internet.email(firstName,lastName, "webfolio.com"),
        avatar: faker.internet.avatar(),
        message:getMessage(num),
        phoneNumber:faker.phone.phoneNumber(),
        timeStamp:faker.date.recent()
    }
}

const getMessage = (num) => {
    var messages = []
    for(let i=0; i<num;i++){
        messages.push(
            {
                title:faker.lorem.text().slice(0,15),
                content:faker.lorem.words(500),
                date:faker.date.past()   
            }
        )
    }
    return messages
}

export const mainUser = fakeUser();
const otherUsers = () => {
    const fakeUsers = []
    for(let i=0; i<15; i++){
        fakeUsers.push(fakeUser(Math.floor(Math.random()*3+1)))
    }
    return fakeUsers
}

export const fakeUsers = otherUsers()