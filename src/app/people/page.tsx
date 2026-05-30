import { getContentData } from "@/lib/content";
import PeopleGrid from "@/components/people/PeopleGrid";

export default function PeoplePage() {
  const people = getContentData("people");

  return <PeopleGrid people={people} />;
}
