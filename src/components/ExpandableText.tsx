/*
Notes: why we are not using useState for thisText below even though it is chaning
because it is a computed value; 

when user clicks the expand button, that action requires re-rendering this ExpandableText component
where as based on button click the length of the text is computed for display
so computed values do not use State Hook, like computing full name using first name and last name
similarly here text length is computed so no state hook

value changes over time (like clicking the button) and that requires re-rendering
then use State Hook

*/

import { useState } from "react";

interface ExpandableTextProps {
  children: string;
  maxChars?: number;
}

function ExpandableText({ children, maxChars = 100 }: ExpandableTextProps) {
  const [isExpanded, setExpanded] = useState(false);

  if (children.length <= maxChars) return <p>{children}</p>;

  const thisText = isExpanded ? children : children.substring(0, maxChars);

  return (
    <p>
      {/* state of the button is dependent on state of the text length currently displayed as variable */}
      {thisText}...
      <button onClick={() => setExpanded(!isExpanded)}>
        {isExpanded ? "Less" : "More"}
      </button>
    </p>
  );
}

export default ExpandableText;
