import { useState } from "react";

export const Count = () => {
  const [wordCount, setWordCount] = useState(0);
  return (
    <div>
      <div>
        <textarea
          rows={10}
          cols={30}
          placeholder="Type please your text here"
        ></textarea>
      </div>
      <div>Word count: 0</div>
    </div>
  );
};
