import ProfileCreator from "./ProfileCreator";
import { people } from "../stories";

let profile = people.find((person) => person.id == 3)
let group = []
people.forEach((person) => {
    return person.id == 3 ? null : group.push(person.img)
})

function Mark () {
    return <>
        <ProfileCreator profile={profile} group={group} intro={profile.intro}/>
    </>
}

export default Mark