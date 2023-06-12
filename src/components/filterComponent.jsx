import {
  Box,
  Flex,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderMark,
  RangeSliderThumb,
  RangeSliderTrack,
  Text,
} from "@chakra-ui/react";
import { color } from "framer-motion";
import React, { useState } from "react";

const FilterComponent = () => {
  const [sliderValue, setSliderValue] = useState([1, 10000]);
  return (
    <Flex flexDirection={"column"} justifyContent={"space-between"}>
      <Box borderBottom={"2px solid lightgray"} p={"20px"}>
        FilterComponent
      </Box>
      <Box borderBottom={"2px solid lightgray"} p={"20px"}>
        FilterComponent
      </Box>
      <Box borderBottom={"2px solid lightgray"} p={"20px"}>
        <Text style={{ color: "red", fontWeight: "700" }}>Price</Text>
        <RangeSlider
          aria-label={["min", "max"]}
          defaultValue={[1, 10000]}
          onChange={(val) => setSliderValue(val)}
        >
          <RangeSliderMark
            value={sliderValue[0]}
            textAlign="center"
            color="bule.500"
            mt="-10"
            ml="-5"
            w="12"
          >
            {`INR ${sliderValue[0]}`}
          </RangeSliderMark>
          <RangeSliderMark
            value={sliderValue[1]}
            textAlign="center"
            color="bule"
            mt="-10"
            ml="-5"
            w="12"
          >
            {`INR ${sliderValue[1]}`}
          </RangeSliderMark>
          <RangeSliderTrack bg="red.100">
            <RangeSliderFilledTrack bg="tomato" />
          </RangeSliderTrack>
          <RangeSliderThumb boxSize={6} index={0} bg="red">
            <Box color="tomato" />
          </RangeSliderThumb>
          <RangeSliderThumb boxSize={6} index={1} bg="red">
            <Box color="tomato" />
          </RangeSliderThumb>
        </RangeSlider>
      </Box>
      <Box borderBottom={"2px solid lightgray"} p={"20px"}>
        FilterComponent
      </Box>
      <Box borderBottom={"2px solid lightgray"} p={"20px"}>
        FilterComponent
      </Box>
      <Box p={"20px"}>FilterComponent</Box>
    </Flex>
  );
};

export default FilterComponent;
