import ProfileCreator from "./ProfileCreator";
import { people } from "../stories";

let profile = people.find((person) => person.id == 0)
let group = []
people.forEach((person) => {
    return person.id == 0 ? null : group.push(person.img)
})


function User() {
    return<>
        <ProfileCreator group={group} profile={profile} intro={profile.intro}/>
    </>
}

export default User;