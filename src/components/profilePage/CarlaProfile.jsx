import ProfileCreator from "./ProfileCreator";
import { people } from "../stories";

let profile = people.find((person) => person.id == 4)
let group = []
people.forEach((person) => {
    return person.id == 4 ? null : group.push(person.img)
})


function Carla() {
    return(
        <>
            <ProfileCreator profile={profile} group={group} intro={profile.intro}/>
        </>
    )
}

export default Carla