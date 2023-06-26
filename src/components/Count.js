import { useState } from "react";

export const Count = () => {
  const [wordCount, setWordCount] = useState(0);

  const handleOnChange = (event) => {
    let value = event.target.value.trim();
    const words = value.split(" ");
    const wordsLength = words.length;
    setWordCount(wordsLength);
  };

  return (
    <div>
      <div>
        <textarea
          rows={10}
          cols={30}
          placeholder="Type please your text here"
          onChange={handleOnChange}
        ></textarea>
      </div>
      <div>Word count: {wordCount}</div>
    </div>
  );
};
