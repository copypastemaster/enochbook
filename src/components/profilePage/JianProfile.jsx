import ProfileCreator from "./ProfileCreator"
import { people } from "../stories"

let profile = people.find((person) => person.id == 1)
let group = []
people.forEach((person) => {
    return person.id == 1 ? null : group.push(person.img)
})

function Jian () {
    return <>
        <ProfileCreator group={group} profile={profile} intro={profile.intro}/>
    </>
}

export default Jian