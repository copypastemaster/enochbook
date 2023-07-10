import ProfileCreator from "./ProfileCreator";
import { people } from "../stories";

let profile = people.find((person) => person.id == 2)
let group = []
people.forEach((person) => {
    return person.id == 2 ? null : group.push(person.img)
})

function Rj() {
    return <>
        <ProfileCreator profile={profile} group={group} intro={profile.intro}/>
    </>
}

export default Rj