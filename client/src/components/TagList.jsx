import Tag from "./Tag";
import { useEffect, useState } from "react";
import { getAll } from "../services/TagService";

function TagList() {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    getAll().then((tags) => setTags(tags));
  }, []);
  return (
    <ul>
      {tags?.length > 0 ? (
        tags.map((tag) => (
          <li key={tag.name}>
            <Tag text={tag.name} />
          </li>
        ))
      ) : (
        <h3>Kunde inte hitta några taggar</h3>
      )}
    </ul>
  );
}

export default TagList;
