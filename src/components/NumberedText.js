import React, { useCallback, useState } from 'react'
import { Text } from 'react-native';

const NumberedText = ({ numberOfLines, children, ...rest }) => {
  const [isShown, setShown] = useState(false);
  const [linesNumber, setLinesNumber] = useState(numberOfLines);
  const handlePress = useCallback(() => {
    if (isShown) {
      setLinesNumber(numberOfLines);
      setShown(false);
    } else {
      setLinesNumber(0);
      setShown(true);
    }
  }, [numberOfLines, isShown]);

  return <Text {...rest} onPress={handlePress} numberOfLines={linesNumber}>{ children }</Text>
};

export default NumberedText;
